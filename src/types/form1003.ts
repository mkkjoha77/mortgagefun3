export type SubmissionType = 'preapproval' | 'full_submission';
export type LoanType = 'purchase' | 'refinance' | 'cashout' | 'heloc';
export type CitizenshipStatus = 'us_citizen' | 'permanent_resident' | 'non_permanent_resident';
export type MaritalStatus = 'married' | 'separated' | 'unmarried';
export type ResidenceType = 'own' | 'rent' | 'living_rent_free';
export type EmploymentType = 'employed' | 'self_employed' | 'retired' | 'unemployed';
export type PropertyType = 'single_family' | 'condo' | 'townhouse' | 'multi_unit' | 'manufactured' | 'cooperative';
export type PropertyOccupancy = 'primary' | 'second_home' | 'investment';
export type LoanPurpose = 'purchase' | 'refinance' | 'construction' | 'construction_to_permanent' | 'other';
export type RefinancePurpose = 'cash_out' | 'rate_term' | 'limited_cash_out';
export type TitleHolder = 'solely' | 'jointly_spouse' | 'jointly_other';
export type EstateType = 'fee_simple' | 'leasehold';
export type MilitaryStatus = 'active' | 'retired' | 'reserves' | 'separated' | 'surviving_spouse';
export type MilitaryBranch = 'army' | 'navy' | 'air_force' | 'marines' | 'coast_guard' | 'national_guard';

export interface OtherIncomeSource {
  id: string;
  type: string;
  monthlyAmount: number;
  description: string;
}

export interface Asset {
  id: string;
  accountType: string;
  institutionName: string;
  accountNumber: string;
  balance: number;
}

export interface Liability {
  id: string;
  liabilityType: string;
  creditorName: string;
  accountNumber: string;
  monthlyPayment: number;
  unpaidBalance: number;
  toBePaidOff: boolean;
}

export interface RealEstateProperty {
  id: string;
  address: string;
  unitDesignator: string;
  unitNumber: string;
  city: string;
  state: string;
  zip: string;
  numberOfUnits: number;
  propertyValue: number;
  status: 'Sold' | 'Pending Sale' | 'Retained' | '';
  intendedOccupancy: 'Primary' | 'Secondary' | 'Investment' | '';
  currentOccupancy: 'Primary' | 'Secondary' | 'Investment' | '';
  grossMonthlyRent: number;
}

export interface DeclarationExplanation {
  question: string;
  explanation: string;
}

export interface BorrowerInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  ssn: string;
  dob: string;
  citizenship: CitizenshipStatus | '';
  maritalStatus: MaritalStatus | '';
  dependentsCount: number;
  dependentsAges: string;
  email: string;
  phone: string;
  cellPhone: string;
  currentAddress: string;
  currentCity: string;
  currentState: string;
  currentZip: string;
  yearsAtAddress: number;
  residenceType: ResidenceType | '';
  formerAddress: string;
  formerCity: string;
  formerState: string;
  formerZip: string;
  yearsAtFormerAddress: number;
}

export interface EmploymentInfo {
  employerName: string;
  employerPhone: string;
  employerAddress: string;
  employerCity: string;
  employerState: string;
  employerZip: string;
  position: string;
  employmentStartDate: string;
  employmentType: EmploymentType | '';
  yearsEmployed: number;
  monthsEmployed: number;
  baseIncome: number;
  overtime: number;
  bonus: number;
  commission: number;
}

export interface PreviousEmploymentInfo {
  employerName: string;
  employerAddress: string;
  position: string;
  employmentStartDate: string;
  employmentEndDate: string;
  monthlyIncome: number;
}

export interface SecondJobInfo {
  employerName: string;
  employerPhone: string;
  employerAddress: string;
  employerCity: string;
  employerState: string;
  employerZip: string;
  position: string;
  employmentStartDate: string;
  hoursPerWeek: number;
  monthlyIncome: number;
}

export interface PropertyInfo {
  propertyAddress: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  propertyValue: number;
  propertyType: PropertyType | '';
  propertyOccupancy: PropertyOccupancy | '';
  propertyUnits: number;
  propertyYearBuilt: string;
  propertyLotSize: string;
}

export interface LoanInfo {
  loanPurpose: LoanPurpose | '';
  loanAmount: number;
  downPayment: number;
  titleHolder: TitleHolder | '';
  estateType: EstateType | '';
}

export interface RefinanceInfo {
  refinancePurpose: RefinancePurpose | '';
  originalCost: number;
  existingLiens: number;
  improvements: number;
  yearAcquired: string;
}

export interface Declarations {
  borrower: {
    outstandingJudgments: boolean | null;
    bankruptcy: boolean | null;
    foreclosure: boolean | null;
    lawsuit: boolean | null;
    loanForeclosure: boolean | null;
    alimonyChildSupport: boolean | null;
    downPaymentBorrowed: boolean | null;
    endorserOnNote: boolean | null;
    primaryResidence: boolean | null;
    ownershipInterest: boolean | null;
  };
  coBorrower: {
    outstandingJudgments: boolean | null;
    bankruptcy: boolean | null;
    foreclosure: boolean | null;
    lawsuit: boolean | null;
    loanForeclosure: boolean | null;
    alimonyChildSupport: boolean | null;
    downPaymentBorrowed: boolean | null;
    endorserOnNote: boolean | null;
    primaryResidence: boolean | null;
    ownershipInterest: boolean | null;
  };
  propertyTypeExplanation: string;
  explanations: DeclarationExplanation[];
}

export interface MilitaryServiceInfo {
  hasServed: boolean;
  status: MilitaryStatus | '';
  branch: MilitaryBranch | '';
}

export interface DemographicInfo {
  ethnicity: string[];
  race: string[];
  sex: string;
  collectionMethod: string;
  declined: boolean;
}

export interface Agreements {
  creditCheckAuthorized: boolean;
  electronicRecordsConsent: boolean;
  accuracyCertification: boolean;
  timestamp: string;
  electronicSignature: string;
  coBorrowerElectronicSignature: string;
}

export interface Form1003Data {
  submissionType: SubmissionType;
  applicationType: LoanType;

  borrower: BorrowerInfo;
  borrowerEmployment: EmploymentInfo;
  borrowerPreviousEmployment: PreviousEmploymentInfo;
  hasSecondJob: boolean;
  borrowerSecondJob: SecondJobInfo;

  hasCoBorrower: boolean;
  coBorrower: BorrowerInfo;
  coBorrowerEmployment: EmploymentInfo;
  coBorrowerPreviousEmployment: PreviousEmploymentInfo;
  coHasSecondJob: boolean;
  coBorrowerSecondJob: SecondJobInfo;

  otherIncomeSources: OtherIncomeSource[];
  assets: Asset[];
  liabilities: Liability[];
  realEstateOwned: RealEstateProperty[];

  property: PropertyInfo;
  loan: LoanInfo;
  refinance: RefinanceInfo;

  declarations: Declarations;
  militaryService: MilitaryServiceInfo;
  demographic: DemographicInfo;
  agreements: Agreements;

  status: string;
  creditScore: number;
  annualIncome: number;
  employmentStatus: string;
}

export const emptyBorrowerInfo: BorrowerInfo = {
  firstName: '',
  middleName: '',
  lastName: '',
  suffix: '',
  ssn: '',
  dob: '',
  citizenship: '',
  maritalStatus: '',
  dependentsCount: 0,
  dependentsAges: '',
  email: '',
  phone: '',
  cellPhone: '',
  currentAddress: '',
  currentCity: '',
  currentState: '',
  currentZip: '',
  yearsAtAddress: 0,
  residenceType: '',
  formerAddress: '',
  formerCity: '',
  formerState: '',
  formerZip: '',
  yearsAtFormerAddress: 0,
};

export const emptyEmploymentInfo: EmploymentInfo = {
  employerName: '',
  employerPhone: '',
  employerAddress: '',
  employerCity: '',
  employerState: '',
  employerZip: '',
  position: '',
  employmentStartDate: '',
  employmentType: '',
  yearsEmployed: 0,
  monthsEmployed: 0,
  baseIncome: 0,
  overtime: 0,
  bonus: 0,
  commission: 0,
};

export const emptyPreviousEmploymentInfo: PreviousEmploymentInfo = {
  employerName: '',
  employerAddress: '',
  position: '',
  employmentStartDate: '',
  employmentEndDate: '',
  monthlyIncome: 0,
};

export const emptySecondJobInfo: SecondJobInfo = {
  employerName: '',
  employerPhone: '',
  employerAddress: '',
  employerCity: '',
  employerState: '',
  employerZip: '',
  position: '',
  employmentStartDate: '',
  hoursPerWeek: 0,
  monthlyIncome: 0,
};

export const emptyPropertyInfo: PropertyInfo = {
  propertyAddress: '',
  propertyCity: '',
  propertyState: '',
  propertyZip: '',
  propertyValue: 0,
  propertyType: '',
  propertyOccupancy: '',
  propertyUnits: 1,
  propertyYearBuilt: '',
  propertyLotSize: '',
};

export const emptyLoanInfo: LoanInfo = {
  loanPurpose: '',
  loanAmount: 0,
  downPayment: 0,
  titleHolder: '',
  estateType: '',
};

export const emptyRefinanceInfo: RefinanceInfo = {
  refinancePurpose: '',
  originalCost: 0,
  existingLiens: 0,
  improvements: 0,
  yearAcquired: '',
};

export const emptyDeclarations: Declarations = {
  borrower: {
    outstandingJudgments: null,
    bankruptcy: null,
    foreclosure: null,
    lawsuit: null,
    loanForeclosure: null,
    alimonyChildSupport: null,
    downPaymentBorrowed: null,
    endorserOnNote: null,
    primaryResidence: null,
    ownershipInterest: null,
  },
  coBorrower: {
    outstandingJudgments: null,
    bankruptcy: null,
    foreclosure: null,
    lawsuit: null,
    loanForeclosure: null,
    alimonyChildSupport: null,
    downPaymentBorrowed: null,
    endorserOnNote: null,
    primaryResidence: null,
    ownershipInterest: null,
  },
  propertyTypeExplanation: '',
  explanations: [],
};

export const emptyMilitaryServiceInfo: MilitaryServiceInfo = {
  hasServed: false,
  status: '',
  branch: '',
};

export const emptyDemographicInfo: DemographicInfo = {
  ethnicity: [],
  race: [],
  sex: '',
  collectionMethod: '',
  declined: false,
};

export const emptyAgreements: Agreements = {
  creditCheckAuthorized: false,
  electronicRecordsConsent: false,
  accuracyCertification: false,
  timestamp: '',
  electronicSignature: '',
  coBorrowerElectronicSignature: '',
};
