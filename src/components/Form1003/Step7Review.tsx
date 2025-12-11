import { CheckCircle, Edit2 } from 'lucide-react';
import { Form1003Data } from '../../types/form1003';
import { FormCheckbox } from './FormCheckbox';
import { FormInput } from './FormInput';

interface Step7Props {
  formData: Form1003Data;
  onEdit: (step: number) => void;
  agreements: {
    creditCheckAuthorized: boolean;
    electronicRecordsConsent: boolean;
    accuracyCertification: boolean;
    electronicSignature: string;
    coBorrowerElectronicSignature: string;
  };
  onAgreementChange: (field: string, value: boolean | string) => void;
}

export function Step7Review({ formData, onEdit, agreements, onAgreementChange }: Step7Props) {
  const totalIncome =
    (Number(formData.borrowerEmployment.baseIncome) || 0) +
    (Number(formData.borrowerEmployment.overtime) || 0) +
    (Number(formData.borrowerEmployment.bonus) || 0) +
    (Number(formData.borrowerEmployment.commission) || 0);

  const totalAssets = formData.assets.reduce((sum, a) => sum + (Number(a.balance) || 0), 0);
  const totalLiabilities = formData.liabilities.reduce((sum, l) => sum + (Number(l.unpaidBalance) || 0), 0);

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
          <p className="text-gray-600">Please review your information before submitting</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Application Type</h3>
            <button
              type="button"
              onClick={() => onEdit(1)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Submission Type:</span>
              <span className="font-medium capitalize">{formData.submissionType.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Type:</span>
              <span className="font-medium capitalize">{formData.applicationType}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Borrower Information</h3>
            <button
              type="button"
              onClick={() => onEdit(2)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">
                {formData.borrower.firstName} {formData.borrower.middleName} {formData.borrower.lastName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{formData.borrower.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="font-medium">{formData.borrower.cellPhone || formData.borrower.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Address:</span>
              <span className="font-medium text-right">
                {formData.borrower.currentAddress}, {formData.borrower.currentCity}, {formData.borrower.currentState} {formData.borrower.currentZip}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Property & Loan</h3>
            <button
              type="button"
              onClick={() => onEdit(3)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Property Address:</span>
              <span className="font-medium text-right">
                {formData.property.propertyAddress}, {formData.property.propertyCity}, {formData.property.propertyState}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Property Value:</span>
              <span className="font-medium">${Number(formData.property.propertyValue).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Amount:</span>
              <span className="font-medium">${Number(formData.loan.loanAmount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Down Payment:</span>
              <span className="font-medium">${Number(formData.loan.downPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Employment & Income</h3>
            <button
              type="button"
              onClick={() => onEdit(4)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Employer:</span>
              <span className="font-medium">{formData.borrowerEmployment.employerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Position:</span>
              <span className="font-medium">{formData.borrowerEmployment.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Monthly Income:</span>
              <span className="font-medium">${totalIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Assets & Liabilities</h3>
            <button
              type="button"
              onClick={() => onEdit(5)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Assets:</span>
              <span className="font-medium text-green-600">${totalAssets.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Liabilities:</span>
              <span className="font-medium text-red-600">${totalLiabilities.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-gray-900 font-semibold">Net Worth:</span>
              <span className="font-bold">${(totalAssets - totalLiabilities).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Declarations</h3>
            <button
              type="button"
              onClick={() => onEdit(6)}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Military Service:</span>
              <span className="font-medium">{formData.militaryService.hasServed ? 'Yes' : 'No'}</span>
            </div>
            {formData.militaryService.hasServed && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600">Branch:</span>
                  <span className="font-medium capitalize">{formData.militaryService.branch.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium capitalize">{formData.militaryService.status.replace('_', ' ')}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Acknowledgments & Agreements</h3>

          <div className="space-y-4">
            <FormCheckbox
              label="I authorize the lender to obtain my credit report and verify my financial information"
              name="credit_check_authorized"
              checked={agreements.creditCheckAuthorized}
              onChange={(value) => onAgreementChange('creditCheckAuthorized', value)}
              required
            />

            <FormCheckbox
              label="I consent to receive electronic records and disclosures"
              name="electronic_records_consent"
              checked={agreements.electronicRecordsConsent}
              onChange={(value) => onAgreementChange('electronicRecordsConsent', value)}
              required
            />

            <FormCheckbox
              label="I certify that all information provided in this application is true and complete to the best of my knowledge"
              name="accuracy_certification"
              checked={agreements.accuracyCertification}
              onChange={(value) => onAgreementChange('accuracyCertification', value)}
              required
            />

            <div className="space-y-4">
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">Borrower Signature</h4>
                <FormInput
                  label="Electronic Signature"
                  name="electronic_signature"
                  value={agreements.electronicSignature}
                  onChange={(value) => onAgreementChange('electronicSignature', value)}
                  required
                  placeholder="Type your full legal name"
                  helpText="By typing your name, you are electronically signing this application"
                />
              </div>

              {formData.hasCoBorrower && (
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Co-Borrower Signature</h4>
                  <FormInput
                    label="Co-Borrower Electronic Signature"
                    name="co_borrower_electronic_signature"
                    value={agreements.coBorrowerElectronicSignature}
                    onChange={(value) => onAgreementChange('coBorrowerElectronicSignature', value)}
                    required
                    placeholder="Type co-borrower's full legal name"
                    helpText="By typing your name, you are electronically signing this application"
                  />
                </div>
              )}
            </div>

            <div className="text-s text-gray-600 bg-white p-4 rounded border border-gray-200">
              <p className="mb-2">
                <strong>Important Notice:</strong> This application is subject to verification. By submitting this application, you acknowledge that:
              </p>
              <p>
              You are requesting to be preapproved, or approved, for a loan secured by real estate. If eligible, more information will be collected to complete your application. I/We authorize Harbour Mortgage Group, and its Affiliates, to share the financial information submitted above for the sole purpose of determining my eligibility for a mortgage. I/We understand that by entering my name immediately before this notice, I am providing written authorization to Harbour Mortgage Group under the Fair Credit Reporting Act authorizing Harbour Mortgage Group to obtain information from my personal credit profile. I authorize Harbour Mortgage Group to obtain such information solely to qualify me for a mortgage. Credit information accessed for my qualification request may be different than the credit information accessed by a credit grantor on a date after the date of my original qualification request to make the credit decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
