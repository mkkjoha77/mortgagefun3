/*
  # Remove Military Income and Other Income from Employment Section

  ## Overview
  This migration removes military_income and other_income fields from the current
  employment section for both borrower and co-borrower. These income types should
  be captured in the separate "Other Income Sources" section instead.

  ## Changes Made
  1. Drop `borrower_military_income` column - Military income moved to other income section
  2. Drop `borrower_other_income` column - Other income sources handled separately
  3. Drop `co_borrower_military_income` column - Co-borrower military income moved to other income section
  4. Drop `co_borrower_other_income` column - Co-borrower other income sources handled separately

  ## Important Notes
  - These fields were previously part of the monthly income calculation in employment
  - Going forward, military income and other income should be entered in the "Other Income Sources" step
  - This change improves data organization and aligns with standard mortgage application practices
  - Base income field name remains as `base_income` (no change from base_salary)
*/

-- Drop borrower employment income fields that are moving to other income section
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'mortgage_applications' AND column_name = 'borrower_military_income'
  ) THEN
    ALTER TABLE mortgage_applications DROP COLUMN borrower_military_income;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'mortgage_applications' AND column_name = 'borrower_other_income'
  ) THEN
    ALTER TABLE mortgage_applications DROP COLUMN borrower_other_income;
  END IF;
END $$;

-- Drop co-borrower employment income fields that are moving to other income section
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'mortgage_applications' AND column_name = 'co_borrower_military_income'
  ) THEN
    ALTER TABLE mortgage_applications DROP COLUMN co_borrower_military_income;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'mortgage_applications' AND column_name = 'co_borrower_other_income'
  ) THEN
    ALTER TABLE mortgage_applications DROP COLUMN co_borrower_other_income;
  END IF;
END $$;
