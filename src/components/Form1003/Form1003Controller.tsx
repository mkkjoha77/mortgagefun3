import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, User, CheckCircle, Save } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import {
  Form1003Data,
  emptyBorrowerInfo,
  emptyEmploymentInfo,
  emptyPreviousEmploymentInfo,
  emptySecondJobInfo,
  emptyPropertyInfo,
  emptyLoanInfo,
  emptyRefinanceInfo,
  emptyDeclarations,
  emptyMilitaryServiceInfo,
  emptyDemographicInfo,
  emptyAgreements,
  SubmissionType,
  LoanType,
  PropertyType,
} from '../../types/form1003';
import { Step1ApplicationType } from './Step1ApplicationType';
import { Step2BorrowerInfo } from './Step2BorrowerInfo';
import { Step2_5CoBorrowerInfo } from './Step2_5CoBorrowerInfo';
import { Step3PropertyAndLoan } from './Step3PropertyAndLoan';
import { Step4EmploymentIncome } from './Step4EmploymentIncome';
import { Step4_5OtherIncome } from './Step4_5OtherIncome';
import { Step5AssetsLiabilities } from './Step5AssetsLiabilities';
import { Step6Declarations } from './Step6Declarations';
import { Step7Review } from './Step7Review';

interface PropertyData {
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
}

interface Form1003ControllerProps {
  onNavigate: (view: string) => void;
  propertyData?: PropertyData | null;
}

const getStepCount = (hasCoBorrower: boolean) => hasCoBorrower ? 9 : 8;

export function Form1003Controller({ onNavigate, propertyData }: Form1003ControllerProps) {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);

  console.log('Form1003Controller - propertyData:', propertyData);

  const getInitialFormData = (): Form1003Data => {
    const baseData: Form1003Data = {
      submissionType: 'full_submission',
      applicationType: 'purchase',
      borrower: { ...emptyBorrowerInfo },
      borrowerEmployment: { ...emptyEmploymentInfo },
      borrowerPreviousEmployment: { ...emptyPreviousEmploymentInfo },
      hasSecondJob: false,
      borrowerSecondJob: { ...emptySecondJobInfo },
      hasCoBorrower: false,
      coBorrower: { ...emptyBorrowerInfo },
      coBorrowerEmployment: { ...emptyEmploymentInfo },
      coBorrowerPreviousEmployment: { ...emptyPreviousEmploymentInfo },
      coHasSecondJob: false,
      coBorrowerSecondJob: { ...emptySecondJobInfo },
      otherIncomeSources: [],
      assets: [],
      liabilities: [],
      realEstateOwned: [],
      property: { ...emptyPropertyInfo },
      loan: { ...emptyLoanInfo },
      refinance: { ...emptyRefinanceInfo },
      declarations: { ...emptyDeclarations },
      militaryService: { ...emptyMilitaryServiceInfo },
      demographic: { ...emptyDemographicInfo },
      agreements: { ...emptyAgreements },
      status: 'draft',
      creditScore: 0,
      annualIncome: 0,
      employmentStatus: '',
    };

    if (propertyData) {
      console.log('Filling property data:', propertyData);
      const mapPropertyType = (type: string): string => {
        const typeMap: Record<string, string> = {
          'Single Family': 'single_family',
          'Condo': 'condo',
          'Townhouse': 'townhouse',
          'Multi-Unit': 'multi_unit',
          'Manufactured': 'manufactured',
          'Cooperative': 'cooperative',
        };
        return typeMap[type] || '';
      };

      baseData.property = {
        ...emptyPropertyInfo,
        propertyAddress: propertyData.address,
        propertyCity: propertyData.city,
        propertyState: propertyData.state,
        propertyZip: propertyData.zip,
        propertyValue: propertyData.price,
        propertyType: mapPropertyType(propertyData.type) as PropertyType | '',
      };
      baseData.loan = {
        ...emptyLoanInfo,
        loanAmount: Math.round(propertyData.price * 0.8),
      };
      console.log('Property filled, baseData.property:', baseData.property);
    }

    return baseData;
  };

  const [formData, setFormData] = useState<Form1003Data>(getInitialFormData());

  const autoSave = async () => {
    if (!user || saving) return;

    setSaving(true);
    try {
      await saveApplication('draft');
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(autoSave, 60000);
    return () => clearInterval(interval);
  }, [formData, user]);

  useEffect(() => {
    if (user && !propertyData) {
      loadDraftApplication();
    }
  }, [user]);

  const loadDraftApplication = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('mortgage_applications')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'draft')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setApplicationId(data.id);
        setFormData({
          submissionType: data.submission_type || 'full_submission',
          applicationType: data.application_type || 'purchase',
          borrower: {
            firstName: data.borrower_first_name || '',
            middleName: data.borrower_middle_name || '',
            lastName: data.borrower_last_name || '',
            suffix: data.borrower_suffix || '',
            ssn: data.borrower_ssn || '',
            dob: data.borrower_dob || '',
            citizenship: data.borrower_citizenship || '',
            maritalStatus: data.borrower_marital_status || '',
            dependentsCount: data.borrower_dependents_count || 0,
            dependentsAges: data.borrower_dependents_ages || '',
            email: data.borrower_email || '',
            phone: data.borrower_phone || '',
            cellPhone: data.borrower_cell_phone || '',
            currentAddress: data.borrower_current_address || '',
            currentCity: data.borrower_current_city || '',
            currentState: data.borrower_current_state || '',
            currentZip: data.borrower_current_zip || '',
            yearsAtAddress: data.borrower_years_at_address || 0,
            residenceType: data.borrower_residence_type || '',
            formerAddress: data.borrower_former_address || '',
            formerCity: data.borrower_former_city || '',
            formerState: data.borrower_former_state || '',
            formerZip: data.borrower_former_zip || '',
            yearsAtFormerAddress: data.borrower_years_at_former_address || 0,
          },
          borrowerEmployment: { ...emptyEmploymentInfo },
          borrowerPreviousEmployment: { ...emptyPreviousEmploymentInfo },
          hasSecondJob: false,
          borrowerSecondJob: { ...emptySecondJobInfo },
          hasCoBorrower: false,
          coBorrower: { ...emptyBorrowerInfo },
          coBorrowerEmployment: { ...emptyEmploymentInfo },
          coBorrowerPreviousEmployment: { ...emptyPreviousEmploymentInfo },
          coHasSecondJob: false,
          coBorrowerSecondJob: { ...emptySecondJobInfo },
          otherIncomeSources: [],
          assets: [],
          liabilities: [],
          realEstateOwned: [],
          property: {
            propertyAddress: data.property_address || '',
            propertyCity: data.property_city || '',
            propertyState: data.property_state || '',
            propertyZip: data.property_zip || '',
            propertyValue: data.property_value || 0,
            propertyType: '',
            occupancy: '',
            titleHolder: '',
            estateType: '',
            numberOfUnits: 1,
            propertyStatus: '',
            mixedUseProperty: false,
            manufacturedHome: false,
          },
          loan: {
            loanAmount: data.loan_amount || 0,
            downPayment: data.down_payment || 0,
            loanPurpose: '',
            interestRate: 0,
            loanTerm: 0,
          },
          refinance: { ...emptyRefinanceInfo },
          declarations: { ...emptyDeclarations },
          militaryService: { ...emptyMilitaryServiceInfo },
          demographic: { ...emptyDemographicInfo },
          agreements: { ...emptyAgreements },
          status: 'draft',
          creditScore: data.credit_score || 0,
          annualIncome: data.annual_income || 0,
          employmentStatus: data.employment_status || '',
        });
      }
    } catch (error) {
      console.error('Error loading draft application:', error);
    }
  };

  const saveApplication = async (status: string) => {
    if (!user) return;

    const applicationData: any = {
      user_id: user.id,
      submission_type: formData.submissionType,
      application_type: formData.applicationType,

      borrower_first_name: formData.borrower.firstName,
      borrower_middle_name: formData.borrower.middleName,
      borrower_last_name: formData.borrower.lastName,
      borrower_suffix: formData.borrower.suffix,
      borrower_ssn: formData.borrower.ssn,
      borrower_dob: formData.borrower.dob || null,
      borrower_citizenship: formData.borrower.citizenship,
      borrower_marital_status: formData.borrower.maritalStatus,
      borrower_dependents_count: formData.borrower.dependentsCount,
      borrower_dependents_ages: formData.borrower.dependentsAges,
      borrower_email: formData.borrower.email,
      borrower_phone: formData.borrower.phone,
      borrower_cell_phone: formData.borrower.cellPhone,
      borrower_current_address: formData.borrower.currentAddress,
      borrower_current_city: formData.borrower.currentCity,
      borrower_current_state: formData.borrower.currentState,
      borrower_current_zip: formData.borrower.currentZip,
      borrower_years_at_address: formData.borrower.yearsAtAddress,
      borrower_residence_type: formData.borrower.residenceType,
      borrower_former_address: formData.borrower.formerAddress,
      borrower_former_city: formData.borrower.formerCity,
      borrower_former_state: formData.borrower.formerState,
      borrower_former_zip: formData.borrower.formerZip,
      borrower_years_at_former_address: formData.borrower.yearsAtFormerAddress,

      property_address: formData.property.propertyAddress,
      property_city: formData.property.propertyCity,
      property_state: formData.property.propertyState,
      property_zip: formData.property.propertyZip,
      property_value: formData.property.propertyValue,

      loan_amount: formData.loan.loanAmount,
      down_payment: formData.loan.downPayment,

      status: status,
    };

    if (applicationId) {
      applicationData.id = applicationId;
    }

    const { data, error } = await supabase
      .from('mortgage_applications')
      .upsert(applicationData, { onConflict: 'id' })
      .select()
      .single();

    if (error) throw error;

    if (data && !applicationId) {
      setApplicationId(data.id);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      onNavigate('login');
      return;
    }

    setLoading(true);
    try {
      await saveApplication('submitted');
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in or create an account to start your mortgage application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('login')}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for submitting your mortgage application. Our team will review your information
              and contact you within 1-2 business days.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View Application Status
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStepLabel = (stepNum: number, hasCoBorrower: boolean): string => {
    if (!hasCoBorrower) {
      switch (stepNum) {
        case 1: return 'Application';
        case 2: return 'Borrower';
        case 3: return 'Property';
        case 4: return 'Employment';
        case 5: return 'Other Income';
        case 6: return 'Assets';
        case 7: return 'Declarations';
        case 8: return 'Review';
        default: return '';
      }
    } else {
      switch (stepNum) {
        case 1: return 'Application';
        case 2: return 'Borrower';
        case 3: return 'Co-Borrower';
        case 4: return 'Property';
        case 5: return 'Employment';
        case 6: return 'Other Income';
        case 7: return 'Assets';
        case 8: return 'Declarations';
        case 9: return 'Review';
        default: return '';
      }
    }
  };

  const TOTAL_STEPS = getStepCount(formData.hasCoBorrower);

  // Helper function to determine which component to render based on step and co-borrower status
  const getStepComponent = () => {
    if (!formData.hasCoBorrower) {
      // Without co-borrower: 8 steps
      // 1: Application, 2: Borrower, 3: Property, 4: Employment, 5: Other Income, 6: Assets, 7: Declarations, 8: Review
      switch (step) {
        case 1:
          return (
            <Step1ApplicationType
              submissionType={formData.submissionType}
              applicationType={formData.applicationType}
              onSubmissionTypeChange={(value) => setFormData(prev => ({ ...prev, submissionType: value }))}
              onApplicationTypeChange={(value) => setFormData(prev => ({ ...prev, applicationType: value }))}
            />
          );
        case 2:
          return (
            <Step2BorrowerInfo
              borrower={formData.borrower}
              submissionType={formData.submissionType}
              hasCoBorrower={formData.hasCoBorrower}
              onChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrower: { ...prev.borrower, [field]: value }
              }))}
              onCoBorrowerChange={(value) => setFormData(prev => ({ ...prev, hasCoBorrower: value }))}
            />
          );
        case 3:
          return (
            <Step3PropertyAndLoan
              property={formData.property}
              loan={formData.loan}
              refinance={formData.refinance}
              applicationType={formData.applicationType}
              submissionType={formData.submissionType}
              onPropertyChange={(field, value) => setFormData(prev => ({
                ...prev,
                property: { ...prev.property, [field]: value }
              }))}
              onLoanChange={(field, value) => setFormData(prev => ({
                ...prev,
                loan: { ...prev.loan, [field]: value }
              }))}
              onRefinanceChange={(field, value) => setFormData(prev => ({
                ...prev,
                refinance: { ...prev.refinance, [field]: value }
              }))}
            />
          );
        case 4:
          return (
            <Step4EmploymentIncome
              employment={formData.borrowerEmployment}
              previousEmployment={formData.borrowerPreviousEmployment}
              hasSecondJob={formData.hasSecondJob}
              secondJob={formData.borrowerSecondJob}
              hasCoBorrower={false}
              coEmployment={formData.coBorrowerEmployment}
              coPreviousEmployment={formData.coBorrowerPreviousEmployment}
              coHasSecondJob={false}
              coSecondJob={formData.coBorrowerSecondJob}
              submissionType={formData.submissionType}
              onChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerEmployment: { ...prev.borrowerEmployment, [field]: value }
              }))}
              onPreviousChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerPreviousEmployment: { ...prev.borrowerPreviousEmployment, [field]: value }
              }))}
              onSecondJobToggle={(value) => setFormData(prev => ({ ...prev, hasSecondJob: value }))}
              onSecondJobChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerSecondJob: { ...prev.borrowerSecondJob, [field]: value }
              }))}
              onCoEmploymentChange={() => {}}
              onCoPreviousChange={() => {}}
              onCoSecondJobToggle={() => {}}
              onCoSecondJobChange={() => {}}
            />
          );
        case 5:
          return (
            <Step4_5OtherIncome
              otherIncomeSources={formData.otherIncomeSources}
              submissionType={formData.submissionType}
              onChange={(sources) => setFormData(prev => ({ ...prev, otherIncomeSources: sources }))}
            />
          );
        case 6:
          return (
            <Step5AssetsLiabilities
              assets={formData.assets}
              liabilities={formData.liabilities}
              realEstateOwned={formData.realEstateOwned}
              submissionType={formData.submissionType}
              onAssetsChange={(assets) => setFormData(prev => ({ ...prev, assets }))}
              onLiabilitiesChange={(liabilities) => setFormData(prev => ({ ...prev, liabilities }))}
              onRealEstateChange={(realEstateOwned) => setFormData(prev => ({ ...prev, realEstateOwned }))}
            />
          );
        case 7:
          return (
            <Step6Declarations
              declarations={formData.declarations}
              militaryService={formData.militaryService}
              submissionType={formData.submissionType}
              hasCoBorrower={formData.hasCoBorrower}
              onDeclarationChange={(party, field, value) => setFormData(prev => ({
                ...prev,
                declarations: {
                  ...prev.declarations,
                  [party]: { ...prev.declarations[party], [field]: value }
                }
              }))}
              onMilitaryChange={(field, value) => setFormData(prev => ({
                ...prev,
                militaryService: { ...prev.militaryService, [field]: value }
              }))}
            />
          );
        case 8:
          return (
            <Step7Review
              formData={formData}
              onEdit={(stepNum) => {
                setStep(stepNum);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              agreements={{
                creditCheckAuthorized: formData.agreements.creditCheckAuthorized,
                electronicRecordsConsent: formData.agreements.electronicRecordsConsent,
                accuracyCertification: formData.agreements.accuracyCertification,
                electronicSignature: formData.agreements.electronicSignature,
              }}
              onAgreementChange={(field, value) => setFormData(prev => ({
                ...prev,
                agreements: { ...prev.agreements, [field]: value }
              }))}
            />
          );
        default:
          return null;
      }
    } else {
      // With co-borrower: 9 steps
      // 1: Application, 2: Borrower, 3: Co-Borrower, 4: Property, 5: Employment, 6: Other Income, 7: Assets, 8: Declarations, 9: Review
      switch (step) {
        case 1:
          return (
            <Step1ApplicationType
              submissionType={formData.submissionType}
              applicationType={formData.applicationType}
              onSubmissionTypeChange={(value) => setFormData(prev => ({ ...prev, submissionType: value }))}
              onApplicationTypeChange={(value) => setFormData(prev => ({ ...prev, applicationType: value }))}
            />
          );
        case 2:
          return (
            <Step2BorrowerInfo
              borrower={formData.borrower}
              submissionType={formData.submissionType}
              hasCoBorrower={formData.hasCoBorrower}
              onChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrower: { ...prev.borrower, [field]: value }
              }))}
              onCoBorrowerChange={(value) => setFormData(prev => ({ ...prev, hasCoBorrower: value }))}
            />
          );
        case 3:
          return (
            <Step2_5CoBorrowerInfo
              coBorrower={formData.coBorrower}
              submissionType={formData.submissionType}
              onChange={(field, value) => setFormData(prev => ({
                ...prev,
                coBorrower: { ...prev.coBorrower, [field]: value }
              }))}
            />
          );
        case 4:
          return (
            <Step3PropertyAndLoan
              property={formData.property}
              loan={formData.loan}
              refinance={formData.refinance}
              applicationType={formData.applicationType}
              submissionType={formData.submissionType}
              onPropertyChange={(field, value) => setFormData(prev => ({
                ...prev,
                property: { ...prev.property, [field]: value }
              }))}
              onLoanChange={(field, value) => setFormData(prev => ({
                ...prev,
                loan: { ...prev.loan, [field]: value }
              }))}
              onRefinanceChange={(field, value) => setFormData(prev => ({
                ...prev,
                refinance: { ...prev.refinance, [field]: value }
              }))}
            />
          );
        case 5:
          return (
            <Step4EmploymentIncome
              employment={formData.borrowerEmployment}
              previousEmployment={formData.borrowerPreviousEmployment}
              hasSecondJob={formData.hasSecondJob}
              secondJob={formData.borrowerSecondJob}
              hasCoBorrower={formData.hasCoBorrower}
              coEmployment={formData.coBorrowerEmployment}
              coPreviousEmployment={formData.coBorrowerPreviousEmployment}
              coHasSecondJob={formData.coHasSecondJob}
              coSecondJob={formData.coBorrowerSecondJob}
              submissionType={formData.submissionType}
              onChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerEmployment: { ...prev.borrowerEmployment, [field]: value }
              }))}
              onPreviousChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerPreviousEmployment: { ...prev.borrowerPreviousEmployment, [field]: value }
              }))}
              onSecondJobToggle={(value) => setFormData(prev => ({ ...prev, hasSecondJob: value }))}
              onSecondJobChange={(field, value) => setFormData(prev => ({
                ...prev,
                borrowerSecondJob: { ...prev.borrowerSecondJob, [field]: value }
              }))}
              onCoEmploymentChange={(field, value) => setFormData(prev => ({
                ...prev,
                coBorrowerEmployment: { ...prev.coBorrowerEmployment, [field]: value }
              }))}
              onCoPreviousChange={(field, value) => setFormData(prev => ({
                ...prev,
                coBorrowerPreviousEmployment: { ...prev.coBorrowerPreviousEmployment, [field]: value }
              }))}
              onCoSecondJobToggle={(value) => setFormData(prev => ({ ...prev, coHasSecondJob: value }))}
              onCoSecondJobChange={(field, value) => setFormData(prev => ({
                ...prev,
                coBorrowerSecondJob: { ...prev.coBorrowerSecondJob, [field]: value }
              }))}
            />
          );
        case 6:
          return (
            <Step4_5OtherIncome
              otherIncomeSources={formData.otherIncomeSources}
              submissionType={formData.submissionType}
              onChange={(sources) => setFormData(prev => ({ ...prev, otherIncomeSources: sources }))}
            />
          );
        case 7:
          return (
            <Step5AssetsLiabilities
              assets={formData.assets}
              liabilities={formData.liabilities}
              realEstateOwned={formData.realEstateOwned}
              submissionType={formData.submissionType}
              onAssetsChange={(assets) => setFormData(prev => ({ ...prev, assets }))}
              onLiabilitiesChange={(liabilities) => setFormData(prev => ({ ...prev, liabilities }))}
              onRealEstateChange={(realEstateOwned) => setFormData(prev => ({ ...prev, realEstateOwned }))}
            />
          );
        case 8:
          return (
            <Step6Declarations
              declarations={formData.declarations}
              militaryService={formData.militaryService}
              submissionType={formData.submissionType}
              hasCoBorrower={formData.hasCoBorrower}
              onDeclarationChange={(party, field, value) => setFormData(prev => ({
                ...prev,
                declarations: {
                  ...prev.declarations,
                  [party]: { ...prev.declarations[party], [field]: value }
                }
              }))}
              onMilitaryChange={(field, value) => setFormData(prev => ({
                ...prev,
                militaryService: { ...prev.militaryService, [field]: value }
              }))}
            />
          );
        case 9:
          return (
            <Step7Review
              formData={formData}
              onEdit={(stepNum) => {
                setStep(stepNum);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              agreements={{
                creditCheckAuthorized: formData.agreements.creditCheckAuthorized,
                electronicRecordsConsent: formData.agreements.electronicRecordsConsent,
                accuracyCertification: formData.agreements.accuracyCertification,
                electronicSignature: formData.agreements.electronicSignature,
              }}
              onAgreementChange={(field, value) => setFormData(prev => ({
                ...prev,
                agreements: { ...prev.agreements, [field]: value }
              }))}
            />
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="min-h-screen relative py-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/ship_london.jpg)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.7) 70%, white 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Mortgage Application
            </h1>
            {saving && (
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Save className="w-4 h-4 animate-pulse" />
                <span>Saving...</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
              <div key={s} className="flex-1">
                <div className={`h-2 rounded-full transition-all ${s <= step ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-600">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
              <span key={s} className="text-center flex-1">{getStepLabel(s, formData.hasCoBorrower)}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {getStepComponent()}

          <div className="flex justify-between mt-8 pt-8 border-t">
            {step > 1 && (
              <button
                onClick={() => {
                  setStep(step - 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 px-6 py-3 text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            )}

            {step < TOTAL_STEPS ? (
              <button
                onClick={() => {
                  setStep(step + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="ml-auto flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="ml-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
