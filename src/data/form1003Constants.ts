export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export const CITIZENSHIP_OPTIONS = [
  { value: 'us_citizen', label: 'U.S. Citizen' },
  { value: 'permanent_resident', label: 'Permanent Resident Alien' },
  { value: 'non_permanent_resident', label: 'Non-Permanent Resident Alien' },
  { value: 'foreign_national_itin', label: 'Foreign National / ITIN' },
];

export const MARITAL_STATUS_OPTIONS = [
  { value: 'married', label: 'Married' },
  { value: 'separated', label: 'Separated' },
  { value: 'unmarried', label: 'Unmarried (Single, Divorced, Widowed)' },
];

export const RESIDENCE_TYPE_OPTIONS = [
  { value: 'own', label: 'Own' },
  { value: 'rent', label: 'Rent' },
  { value: 'living_rent_free', label: 'Living Rent Free' },
];

export const EMPLOYMENT_TYPE_OPTIONS = [
  { value: 'employed', label: 'Employed' },
  { value: 'self_employed', label: 'Self-Employed' },
  { value: 'retired', label: 'Retired' },
  { value: 'unemployed', label: 'Unemployed' },
];

export const PROPERTY_TYPE_OPTIONS = [
  { value: 'single_family', label: 'Single Family Residence' },
  { value: 'condo', label: 'Condominium' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'multi_unit', label: 'Multi-Unit (2-4 units)' },
  { value: 'manufactured', label: 'Manufactured/Mobile Home' },
  { value: 'cooperative', label: 'Cooperative' },
];

export const PROPERTY_OCCUPANCY_OPTIONS = [
  { value: 'primary', label: 'Primary Residence' },
  { value: 'second_home', label: 'Second Home' },
  { value: 'investment', label: 'Investment Property' },
];

export const LOAN_PURPOSE_OPTIONS = [
  { value: 'purchase', label: 'Purchase' },
  { value: 'refinance', label: 'Refinance' },
  { value: 'construction', label: 'Construction' },
  { value: 'construction_to_permanent', label: 'Construction-Permanent' },
  { value: 'other', label: 'Other' },
];

export const REFINANCE_PURPOSE_OPTIONS = [
  { value: 'cash_out', label: 'Cash-Out Refinance' },
  { value: 'rate_term', label: 'Rate and Term Refinance' },
  { value: 'limited_cash_out', label: 'Limited Cash-Out Refinance' },
];

export const TITLE_HOLDER_OPTIONS = [
  { value: 'solely', label: 'By Yourself' },
  { value: 'jointly_spouse', label: 'Jointly with Spouse' },
  { value: 'jointly_other', label: 'Jointly with Another Person' },
];

export const ESTATE_TYPE_OPTIONS = [
  { value: 'fee_simple', label: 'Fee Simple' },
  { value: 'leasehold', label: 'Leasehold' },
];

export const MILITARY_STATUS_OPTIONS = [
  { value: 'active', label: 'Currently Serving on Active Duty' },
  { value: 'retired', label: 'Retired' },
  { value: 'reserves', label: 'Currently Serving in Reserves/National Guard' },
  { value: 'separated', label: 'Separated (Discharged)' },
  { value: 'surviving_spouse', label: 'Surviving Spouse' },
];

export const MILITARY_BRANCH_OPTIONS = [
  { value: 'army', label: 'U.S. Army' },
  { value: 'navy', label: 'U.S. Navy' },
  { value: 'air_force', label: 'U.S. Air Force' },
  { value: 'marines', label: 'U.S. Marine Corps' },
  { value: 'coast_guard', label: 'U.S. Coast Guard' },
  { value: 'national_guard', label: 'National Guard' },
];

export const INCOME_TYPE_OPTIONS = [
  { value: 'alimony', label: 'Alimony (Received)' },
  { value: 'auto_allowance', label: 'Auto Allowance' },
  { value: 'capital_gains', label: 'Capital Gains' },
  { value: 'child_support', label: 'Child Support (Received)' },
  { value: 'disability', label: 'Disability Income' },
  { value: 'dividends', label: 'Dividends and Interest' },
  { value: 'foster_care', label: 'Foster Care Income' },
  { value: 'housing_allowance', label: 'Housing Allowance' },
  { value: 'investment', label: 'Investment Income' },
  { value: 'military_allowance', label: 'Military Allowance' },
  { value: 'pension', label: 'Pension/Retirement Income' },
  { value: 'rental', label: 'Rental Income' },
  { value: 'royalties', label: 'Royalties' },
  { value: 'social_security', label: 'Social Security (SSI)' },
  { value: 'ssdi', label: 'Social Security Disability (SSDI)' },
  { value: 'tips', label: 'Tips' },
  { value: 'trust', label: 'Trust Income' },
  { value: 'va_compensation', label: 'VA Compensation' },
  { value: 'other', label: 'Other Income' },
];

export const ASSET_TYPE_OPTIONS = [
  { value: 'checking', label: 'Checking Account' },
  { value: 'savings', label: 'Savings Account' },
  { value: 'money_market', label: 'Money Market Account' },
  { value: 'cd', label: 'Certificate of Deposit' },
  { value: 'stocks', label: 'Stocks/Bonds/Mutual Funds' },
  { value: 'retirement_401k', label: '401(k)/403(b)' },
  { value: 'retirement_ira', label: 'IRA/SEP' },
  { value: 'retirement_pension', label: 'Pension/Retirement Account' },
  { value: 'life_insurance', label: 'Life Insurance Cash Value' },
  { value: 'trust', label: 'Trust Account' },
  { value: 'bridge_loan', label: 'Bridge Loan Proceeds' },
  { value: 'other', label: 'Other Assets' },
];

export const LIABILITY_TYPE_OPTIONS = [
  { value: 'revolving', label: 'Credit Card/Revolving' },
  { value: 'installment', label: 'Installment Loan' },
  { value: 'auto', label: 'Automobile Loan' },
  { value: 'student', label: 'Student Loan' },
  { value: 'mortgage', label: 'Mortgage Loan' },
  { value: 'heloc', label: 'Home Equity Line of Credit' },
  { value: 'taxes', label: 'Taxes Owed' },
  { value: 'alimony', label: 'Alimony' },
  { value: 'child_support', label: 'Child Support' },
  { value: 'other', label: 'Other Liability' },
];

export const REAL_ESTATE_PROPERTY_TYPE_OPTIONS = [
  { value: 'single_family', label: 'Single Family' },
  { value: 'condo', label: 'Condominium' },
  { value: 'multi_unit', label: 'Multi-Unit (2-4)' },
  { value: 'land', label: 'Land' },
  { value: 'commercial', label: 'Commercial' },
];

export const REAL_ESTATE_STATUS_OPTIONS = [
  { value: 'retained', label: 'Retained' },
  { value: 'pending_sale', label: 'Pending Sale' },
  { value: 'sold', label: 'Sold' },
];

export const ETHNICITY_OPTIONS = [
  { value: 'hispanic_latino', label: 'Hispanic or Latino' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'puerto_rican', label: 'Puerto Rican' },
  { value: 'cuban', label: 'Cuban' },
  { value: 'other_hispanic', label: 'Other Hispanic or Latino' },
  { value: 'not_hispanic_latino', label: 'Not Hispanic or Latino' },
];

export const RACE_OPTIONS = [
  { value: 'american_indian', label: 'American Indian or Alaska Native' },
  { value: 'asian', label: 'Asian' },
  { value: 'asian_indian', label: 'Asian Indian' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'filipino', label: 'Filipino' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'other_asian', label: 'Other Asian' },
  { value: 'black', label: 'Black or African American' },
  { value: 'native_hawaiian', label: 'Native Hawaiian or Other Pacific Islander' },
  { value: 'native_hawaiian_detail', label: 'Native Hawaiian' },
  { value: 'guamanian', label: 'Guamanian or Chamorro' },
  { value: 'samoan', label: 'Samoan' },
  { value: 'other_pacific', label: 'Other Pacific Islander' },
  { value: 'white', label: 'White' },
];

export const SEX_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

export const UNIT_DESIGNATOR_OPTIONS = [
  { value: '', label: 'None' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Unit', label: 'Unit' },
  { value: 'Suite', label: 'Suite' },
  { value: 'Building', label: 'Building' },
  { value: 'Floor', label: 'Floor' },
];

export const PROPERTY_STATUS_OPTIONS = [
  { value: 'Retained', label: 'Retained' },
  { value: 'Pending Sale', label: 'Pending Sale' },
  { value: 'Sold', label: 'Sold' },
];

export const OCCUPANCY_OPTIONS = [
  { value: 'Primary', label: 'Primary' },
  { value: 'Secondary', label: 'Secondary' },
  { value: 'Investment', label: 'Investment' },
];
