/*
  # Remove Country Field from Real Estate Owned

  ## Overview
  This migration documents the removal of the 'country' field from the real estate owned
  properties in the application. Since real_estate_owned is stored as a JSONB field,
  no schema changes are required at the database level.

  ## Changes Made
  1. Removed 'country' field from RealEstateProperty TypeScript interface
  2. Updated UI to no longer collect country information for other real estate owned
  3. Default assumption: All properties are in the United States

  ## Important Notes
  - The real_estate_owned column stores data as JSONB, so no column alterations needed
  - Existing data with country field will remain but won't be displayed or updated
  - New property entries will not include a country field
  - This simplifies the form and aligns with the assumption that properties are US-based
*/

-- No database schema changes needed since real_estate_owned is JSONB
-- This migration serves as documentation for the application-level change
SELECT 1;
