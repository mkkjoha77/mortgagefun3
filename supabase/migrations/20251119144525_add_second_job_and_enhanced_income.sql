/*
  # Add Second Job and Enhanced Income Fields

  ## Overview
  This migration adds support for:
  1. Second job information for both borrower and co-borrower
  2. Enhanced income tracking capabilities
  3. Flags to indicate presence of second employment

  ## New Fields Added

  ### Borrower Second Job
  - `has_second_job` (boolean) - Indicates if borrower has a second job
  - `borrower_second_employer_name` - Second employer name
  - `borrower_second_employer_phone` - Second employer phone
  - `borrower_second_employer_address` - Second employer address
  - `borrower_second_employer_city` - Second employer city
  - `borrower_second_employer_state` - Second employer state
  - `borrower_second_employer_zip` - Second employer ZIP
  - `borrower_second_position` - Position at second job
  - `borrower_second_employment_start_date` - Start date at second job
  - `borrower_second_hours_per_week` - Hours per week at second job
  - `borrower_second_monthly_income` - Monthly income from second job

  ### Co-Borrower Second Job
  - `co_has_second_job` (boolean) - Indicates if co-borrower has a second job
  - All co-borrower second job fields mirroring borrower with `co_borrower_second_*` prefix

  ## Important Notes
  1. Second job fields are optional and only collected when applicable
  2. Monthly income from second job is added to total qualifying income
  3. Other income sources continue to be stored in the existing JSONB `other_income_sources` field
*/

-- Add borrower second job fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'has_second_job') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN has_second_job boolean DEFAULT false,
    ADD COLUMN borrower_second_employer_name text DEFAULT '',
    ADD COLUMN borrower_second_employer_phone text DEFAULT '',
    ADD COLUMN borrower_second_employer_address text DEFAULT '',
    ADD COLUMN borrower_second_employer_city text DEFAULT '',
    ADD COLUMN borrower_second_employer_state text DEFAULT '',
    ADD COLUMN borrower_second_employer_zip text DEFAULT '',
    ADD COLUMN borrower_second_position text DEFAULT '',
    ADD COLUMN borrower_second_employment_start_date date,
    ADD COLUMN borrower_second_hours_per_week numeric DEFAULT 0,
    ADD COLUMN borrower_second_monthly_income numeric DEFAULT 0;
  END IF;
END $$;

-- Add co-borrower second job fields
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'mortgage_applications' AND column_name = 'co_has_second_job') THEN
    ALTER TABLE mortgage_applications
    ADD COLUMN co_has_second_job boolean DEFAULT false,
    ADD COLUMN co_borrower_second_employer_name text DEFAULT '',
    ADD COLUMN co_borrower_second_employer_phone text DEFAULT '',
    ADD COLUMN co_borrower_second_employer_address text DEFAULT '',
    ADD COLUMN co_borrower_second_employer_city text DEFAULT '',
    ADD COLUMN co_borrower_second_employer_state text DEFAULT '',
    ADD COLUMN co_borrower_second_employer_zip text DEFAULT '',
    ADD COLUMN co_borrower_second_position text DEFAULT '',
    ADD COLUMN co_borrower_second_employment_start_date date,
    ADD COLUMN co_borrower_second_hours_per_week numeric DEFAULT 0,
    ADD COLUMN co_borrower_second_monthly_income numeric DEFAULT 0;
  END IF;
END $$;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_has_second_job ON mortgage_applications(has_second_job);
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_co_has_second_job ON mortgage_applications(co_has_second_job);
