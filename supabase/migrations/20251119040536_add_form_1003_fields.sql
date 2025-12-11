/*
  # Add Fannie Mae Form 1003 (URLA) Comprehensive Fields

  ## Overview
  This migration expands the mortgage_applications table to capture all information
  required by the Fannie Mae Form 1003 (Uniform Residential Loan Application).
  
  ## New Fields Added

  ### Application Type
  - `submission_type` - Distinguishes between 'preapproval' and 'full_submission'

  ### Section I: Borrower Information (Primary)
  - `borrower_first_name`, `borrower_middle_name`, `borrower_last_name`, `borrower_suffix`
  - `borrower_ssn` (encrypted) - Social Security Number
  - `borrower_dob` - Date of birth
  - `borrower_citizenship` - Citizenship status
  - `borrower_marital_status` - Marital status
  - `borrower_dependents_count`, `borrower_dependents_ages`
  - `borrower_email`, `borrower_phone`, `borrower_cell_phone`
  - `borrower_current_address`, `borrower_current_city`, `borrower_current_state`, `borrower_current_zip`
  - `borrower_years_at_address`, `borrower_residence_type`
  - `borrower_former_address`, `borrower_former_city`, `borrower_former_state`, `borrower_former_zip`
  - `borrower_years_at_former_address`

  ### Section II: Co-Borrower Information
  - `has_co_borrower` - Boolean flag
  - All co-borrower fields mirroring borrower fields with `co_borrower_` prefix

  ### Section III: Employment and Income (Current)
  - `borrower_employer_name`, `borrower_employer_phone`, `borrower_employer_address`
  - `borrower_position`, `borrower_employment_start_date`, `borrower_employment_type`
  - `borrower_years_employed`, `borrower_months_employed`
  - `borrower_base_income`, `borrower_overtime`, `borrower_bonus`, `borrower_commission`
  - `borrower_military_income`, `borrower_other_income`
  - Co-borrower employment fields mirroring borrower with `co_borrower_` prefix

  ### Section IV: Employment History (Previous - if less than 2 years at current)
  - `borrower_prev_employer_name`, `borrower_prev_position`, `borrower_prev_employment_dates`
  - `borrower_prev_monthly_income`
  - Co-borrower previous employment fields

  ### Section V: Other Income Sources
  - `other_income_sources` (jsonb) - Array of additional income sources with type, amount, and description

  ### Section VI: Assets
  - `assets` (jsonb) - Array of assets (checking, savings, retirement, stocks, etc.) with:
    - account_type, institution_name, account_number, balance

  ### Section VII: Liabilities
  - `liabilities` (jsonb) - Array of debts (credit cards, auto loans, student loans, etc.) with:
    - liability_type, creditor_name, account_number, monthly_payment, unpaid_balance

  ### Section VIII: Real Estate Owned
  - `real_estate_owned` (jsonb) - Array of properties with:
    - address, property_type, property_value, mortgage_balance, rental_income, expenses

  ### Section IX: Loan and Property Information
  - `loan_purpose` - Purchase, refinance, construction, etc.
  - `property_type` - Single family, condo, multi-unit, etc.
  - `property_occupancy` - Primary residence, second home, investment
  - `property_units` - Number of units
  - `property_year_built`
  - `property_lot_size`
  - `title_holder` - Who will hold title
  - `estate_type` - Fee simple, leasehold, etc.
  - `refinance_purpose` (if applicable) - Cash out, rate/term, etc.
  - `refinance_original_cost`, `refinance_existing_liens`, `refinance_improvements`

  ### Section X: Declarations
  - `declaration_outstanding_judgments` (boolean)
  - `declaration_bankruptcy` (boolean)
  - `declaration_foreclosure` (boolean)
  - `declaration_lawsuit` (boolean)
  - `declaration_loan_foreclosure` (boolean)
  - `declaration_alimony_child_support` (boolean)
  - `declaration_down_payment_borrowed` (boolean)
  - `declaration_endorser_on_note` (boolean)
  - `declaration_us_citizen` (boolean)
  - `declaration_permanent_resident` (boolean)
  - `declaration_primary_residence` (boolean)
  - `declaration_ownership_interest` (boolean)
  - `declaration_property_type_explanation` (text)
  - `declaration_explanations` (jsonb) - Detailed explanations for yes answers

  ### Section XI: Military Service
  - `military_service` (boolean)
  - `military_status` - Active, retired, reserves, etc.
  - `military_branch`

  ### Section XII: Demographic Information (Optional)
  - `demographic_ethnicity` (jsonb)
  - `demographic_race` (jsonb)
  - `demographic_sex`
  - `demographic_collection_method` - Face-to-face, telephone, fax/mail
  - `demographic_declined` (boolean)

  ### Section XIII: Acknowledgments and Agreements
  - `agreement_credit_check_authorized` (boolean)
  - `agreement_electronic_records_consent` (boolean)
  - `agreement_accuracy_certification` (boolean)
  - `agreement_timestamp` (timestamptz)
  - `electronic_signature` (text)

  ## Security
  - All existing RLS policies continue to apply
  - Sensitive fields like SSN should be handled with encryption at application level
  - Added indexes for performance optimization

  ## Important Notes
  1. Many fields are optional and only required for full submission vs preapproval
  2. JSONB fields allow flexible storage of arrays (income sources, assets, liabilities, properties)
  3. All fields have appropriate defaults to allow incremental form completion
  4. The schema supports both primary borrower and co-borrower information
*/

-- Add submission type field
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'mortgage_applications' AND column_name = 'submission_type'
  ) THEN
    ALTER TABLE mortgage_applications ADD COLUMN submission_type text DEFAULT 'full_submission';
  END IF;
END $$;

-- Section I: Primary Borrower Information
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'borrower_first_name') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN borrower_first_name text DEFAULT '',
    ADD COLUMN borrower_middle_name text DEFAULT '',
    ADD COLUMN borrower_last_name text DEFAULT '',
    ADD COLUMN borrower_suffix text DEFAULT '',
    ADD COLUMN borrower_ssn text DEFAULT '',
    ADD COLUMN borrower_dob date,
    ADD COLUMN borrower_citizenship text DEFAULT '',
    ADD COLUMN borrower_marital_status text DEFAULT '',
    ADD COLUMN borrower_dependents_count integer DEFAULT 0,
    ADD COLUMN borrower_dependents_ages text DEFAULT '',
    ADD COLUMN borrower_email text DEFAULT '',
    ADD COLUMN borrower_phone text DEFAULT '',
    ADD COLUMN borrower_cell_phone text DEFAULT '',
    ADD COLUMN borrower_current_address text DEFAULT '',
    ADD COLUMN borrower_current_city text DEFAULT '',
    ADD COLUMN borrower_current_state text DEFAULT '',
    ADD COLUMN borrower_current_zip text DEFAULT '',
    ADD COLUMN borrower_years_at_address numeric DEFAULT 0,
    ADD COLUMN borrower_residence_type text DEFAULT '',
    ADD COLUMN borrower_former_address text DEFAULT '',
    ADD COLUMN borrower_former_city text DEFAULT '',
    ADD COLUMN borrower_former_state text DEFAULT '',
    ADD COLUMN borrower_former_zip text DEFAULT '',
    ADD COLUMN borrower_years_at_former_address numeric DEFAULT 0;
  END IF;
END $$;

-- Section II: Co-Borrower Information
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'has_co_borrower') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN has_co_borrower boolean DEFAULT false,
    ADD COLUMN co_borrower_first_name text DEFAULT '',
    ADD COLUMN co_borrower_middle_name text DEFAULT '',
    ADD COLUMN co_borrower_last_name text DEFAULT '',
    ADD COLUMN co_borrower_suffix text DEFAULT '',
    ADD COLUMN co_borrower_ssn text DEFAULT '',
    ADD COLUMN co_borrower_dob date,
    ADD COLUMN co_borrower_citizenship text DEFAULT '',
    ADD COLUMN co_borrower_marital_status text DEFAULT '',
    ADD COLUMN co_borrower_dependents_count integer DEFAULT 0,
    ADD COLUMN co_borrower_dependents_ages text DEFAULT '',
    ADD COLUMN co_borrower_email text DEFAULT '',
    ADD COLUMN co_borrower_phone text DEFAULT '',
    ADD COLUMN co_borrower_cell_phone text DEFAULT '',
    ADD COLUMN co_borrower_current_address text DEFAULT '',
    ADD COLUMN co_borrower_current_city text DEFAULT '',
    ADD COLUMN co_borrower_current_state text DEFAULT '',
    ADD COLUMN co_borrower_current_zip text DEFAULT '',
    ADD COLUMN co_borrower_years_at_address numeric DEFAULT 0,
    ADD COLUMN co_borrower_residence_type text DEFAULT '',
    ADD COLUMN co_borrower_former_address text DEFAULT '',
    ADD COLUMN co_borrower_former_city text DEFAULT '',
    ADD COLUMN co_borrower_former_state text DEFAULT '',
    ADD COLUMN co_borrower_former_zip text DEFAULT '',
    ADD COLUMN co_borrower_years_at_former_address numeric DEFAULT 0;
  END IF;
END $$;

-- Section III: Current Employment and Income (Borrower)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'borrower_employer_name') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN borrower_employer_name text DEFAULT '',
    ADD COLUMN borrower_employer_phone text DEFAULT '',
    ADD COLUMN borrower_employer_address text DEFAULT '',
    ADD COLUMN borrower_employer_city text DEFAULT '',
    ADD COLUMN borrower_employer_state text DEFAULT '',
    ADD COLUMN borrower_employer_zip text DEFAULT '',
    ADD COLUMN borrower_position text DEFAULT '',
    ADD COLUMN borrower_employment_start_date date,
    ADD COLUMN borrower_employment_type text DEFAULT '',
    ADD COLUMN borrower_years_employed numeric DEFAULT 0,
    ADD COLUMN borrower_months_employed integer DEFAULT 0,
    ADD COLUMN borrower_base_income numeric DEFAULT 0,
    ADD COLUMN borrower_overtime numeric DEFAULT 0,
    ADD COLUMN borrower_bonus numeric DEFAULT 0,
    ADD COLUMN borrower_commission numeric DEFAULT 0,
    ADD COLUMN borrower_military_income numeric DEFAULT 0,
    ADD COLUMN borrower_other_income numeric DEFAULT 0;
  END IF;
END $$;

-- Section III: Current Employment and Income (Co-Borrower)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'co_borrower_employer_name') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN co_borrower_employer_name text DEFAULT '',
    ADD COLUMN co_borrower_employer_phone text DEFAULT '',
    ADD COLUMN co_borrower_employer_address text DEFAULT '',
    ADD COLUMN co_borrower_employer_city text DEFAULT '',
    ADD COLUMN co_borrower_employer_state text DEFAULT '',
    ADD COLUMN co_borrower_employer_zip text DEFAULT '',
    ADD COLUMN co_borrower_position text DEFAULT '',
    ADD COLUMN co_borrower_employment_start_date date,
    ADD COLUMN co_borrower_employment_type text DEFAULT '',
    ADD COLUMN co_borrower_years_employed numeric DEFAULT 0,
    ADD COLUMN co_borrower_months_employed integer DEFAULT 0,
    ADD COLUMN co_borrower_base_income numeric DEFAULT 0,
    ADD COLUMN co_borrower_overtime numeric DEFAULT 0,
    ADD COLUMN co_borrower_bonus numeric DEFAULT 0,
    ADD COLUMN co_borrower_commission numeric DEFAULT 0,
    ADD COLUMN co_borrower_military_income numeric DEFAULT 0,
    ADD COLUMN co_borrower_other_income numeric DEFAULT 0;
  END IF;
END $$;

-- Section IV: Previous Employment (if less than 2 years at current)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'borrower_prev_employer_name') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN borrower_prev_employer_name text DEFAULT '',
    ADD COLUMN borrower_prev_employer_address text DEFAULT '',
    ADD COLUMN borrower_prev_position text DEFAULT '',
    ADD COLUMN borrower_prev_employment_start_date date,
    ADD COLUMN borrower_prev_employment_end_date date,
    ADD COLUMN borrower_prev_monthly_income numeric DEFAULT 0,
    ADD COLUMN co_borrower_prev_employer_name text DEFAULT '',
    ADD COLUMN co_borrower_prev_employer_address text DEFAULT '',
    ADD COLUMN co_borrower_prev_position text DEFAULT '',
    ADD COLUMN co_borrower_prev_employment_start_date date,
    ADD COLUMN co_borrower_prev_employment_end_date date,
    ADD COLUMN co_borrower_prev_monthly_income numeric DEFAULT 0;
  END IF;
END $$;

-- Section V: Other Income Sources (JSONB for flexibility)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'other_income_sources') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN other_income_sources jsonb DEFAULT '[]';
  END IF;
END $$;

-- Section VI: Assets (JSONB array)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'assets') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN assets jsonb DEFAULT '[]';
  END IF;
END $$;

-- Section VII: Liabilities (JSONB array)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'liabilities') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN liabilities jsonb DEFAULT '[]';
  END IF;
END $$;

-- Section VIII: Real Estate Owned (JSONB array)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'real_estate_owned') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN real_estate_owned jsonb DEFAULT '[]';
  END IF;
END $$;

-- Section IX: Loan and Property Information Details
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'loan_purpose') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN loan_purpose text DEFAULT '',
    ADD COLUMN property_type text DEFAULT '',
    ADD COLUMN property_occupancy text DEFAULT '',
    ADD COLUMN property_units integer DEFAULT 1,
    ADD COLUMN property_year_built integer,
    ADD COLUMN property_lot_size text DEFAULT '',
    ADD COLUMN title_holder text DEFAULT '',
    ADD COLUMN estate_type text DEFAULT '',
    ADD COLUMN refinance_purpose text DEFAULT '',
    ADD COLUMN refinance_original_cost numeric DEFAULT 0,
    ADD COLUMN refinance_existing_liens numeric DEFAULT 0,
    ADD COLUMN refinance_improvements numeric DEFAULT 0,
    ADD COLUMN refinance_year_acquired integer;
  END IF;
END $$;

-- Section X: Declarations
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'declaration_outstanding_judgments') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN declaration_outstanding_judgments boolean DEFAULT false,
    ADD COLUMN declaration_bankruptcy boolean DEFAULT false,
    ADD COLUMN declaration_foreclosure boolean DEFAULT false,
    ADD COLUMN declaration_lawsuit boolean DEFAULT false,
    ADD COLUMN declaration_loan_foreclosure boolean DEFAULT false,
    ADD COLUMN declaration_alimony_child_support boolean DEFAULT false,
    ADD COLUMN declaration_down_payment_borrowed boolean DEFAULT false,
    ADD COLUMN declaration_endorser_on_note boolean DEFAULT false,
    ADD COLUMN declaration_us_citizen boolean DEFAULT false,
    ADD COLUMN declaration_permanent_resident boolean DEFAULT false,
    ADD COLUMN declaration_primary_residence boolean DEFAULT false,
    ADD COLUMN declaration_ownership_interest boolean DEFAULT false,
    ADD COLUMN declaration_property_type_explanation text DEFAULT '',
    ADD COLUMN declaration_explanations jsonb DEFAULT '{}';
  END IF;
END $$;

-- Section XI: Military Service
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'military_service') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN military_service boolean DEFAULT false,
    ADD COLUMN military_status text DEFAULT '',
    ADD COLUMN military_branch text DEFAULT '';
  END IF;
END $$;

-- Section XII: Demographic Information (Optional)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'demographic_ethnicity') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN demographic_ethnicity jsonb DEFAULT '[]',
    ADD COLUMN demographic_race jsonb DEFAULT '[]',
    ADD COLUMN demographic_sex text DEFAULT '',
    ADD COLUMN demographic_collection_method text DEFAULT '',
    ADD COLUMN demographic_declined boolean DEFAULT false;
  END IF;
END $$;

-- Section XIII: Acknowledgments and Agreements
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'agreement_credit_check_authorized') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN agreement_credit_check_authorized boolean DEFAULT false,
    ADD COLUMN agreement_electronic_records_consent boolean DEFAULT false,
    ADD COLUMN agreement_accuracy_certification boolean DEFAULT false,
    ADD COLUMN agreement_timestamp timestamptz,
    ADD COLUMN electronic_signature text DEFAULT '';
  END IF;
END $$;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_submission_type ON mortgage_applications(submission_type);
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_borrower_email ON mortgage_applications(borrower_email);
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_property_address ON mortgage_applications(property_address);
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_loan_purpose ON mortgage_applications(loan_purpose);
