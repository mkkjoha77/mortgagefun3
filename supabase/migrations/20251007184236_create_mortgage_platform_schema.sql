/*
  # Mortgage Platform Database Schema

  ## Overview
  This migration creates a complete database schema for a mortgage application platform
  similar to CrossCountry Mortgage, including user profiles, applications, documents,
  and property research tracking.

  ## New Tables

  ### 1. `profiles`
  User profile information extending Supabase auth.users
  - `id` (uuid, primary key) - Links to auth.users
  - `email` (text) - User email
  - `first_name` (text) - First name
  - `last_name` (text) - Last name
  - `phone` (text) - Phone number
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `mortgage_applications`
  Stores mortgage application data
  - `id` (uuid, primary key)
  - `user_id` (uuid) - References profiles
  - `application_type` (text) - Purchase, refinance, etc.
  - `loan_amount` (numeric) - Requested loan amount
  - `property_value` (numeric) - Property value
  - `property_address` (text) - Property address
  - `property_city` (text)
  - `property_state` (text)
  - `property_zip` (text)
  - `credit_score` (integer) - Applicant credit score
  - `annual_income` (numeric) - Annual income
  - `employment_status` (text) - Employment status
  - `down_payment` (numeric) - Down payment amount
  - `status` (text) - Application status (draft, submitted, under_review, approved, denied)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `application_documents`
  Document uploads for mortgage applications
  - `id` (uuid, primary key)
  - `application_id` (uuid) - References mortgage_applications
  - `user_id` (uuid) - References profiles
  - `document_type` (text) - Type of document (paystub, tax_return, bank_statement, etc.)
  - `file_name` (text) - Original filename
  - `file_path` (text) - Storage path in Supabase Storage
  - `file_size` (integer) - File size in bytes
  - `upload_date` (timestamptz)
  - `status` (text) - Document status (pending, verified, rejected)

  ### 4. `saved_properties`
  Properties saved by users for research
  - `id` (uuid, primary key)
  - `user_id` (uuid) - References profiles
  - `address` (text)
  - `city` (text)
  - `state` (text)
  - `zip` (text)
  - `estimated_value` (numeric)
  - `property_type` (text)
  - `bedrooms` (integer)
  - `bathrooms` (numeric)
  - `square_feet` (integer)
  - `notes` (text)
  - `created_at` (timestamptz)

  ### 5. `calculator_saves`
  Saved mortgage calculator results
  - `id` (uuid, primary key)
  - `user_id` (uuid) - References profiles
  - `calculator_type` (text) - Type of calculator used
  - `inputs` (jsonb) - Calculator input values
  - `results` (jsonb) - Calculated results
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can only view/edit their own data
  - Authenticated access required for all operations
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  first_name text DEFAULT '',
  last_name text DEFAULT '',
  phone text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create mortgage_applications table
CREATE TABLE IF NOT EXISTS mortgage_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  application_type text DEFAULT 'purchase',
  loan_amount numeric DEFAULT 0,
  property_value numeric DEFAULT 0,
  property_address text DEFAULT '',
  property_city text DEFAULT '',
  property_state text DEFAULT '',
  property_zip text DEFAULT '',
  credit_score integer DEFAULT 0,
  annual_income numeric DEFAULT 0,
  employment_status text DEFAULT '',
  down_payment numeric DEFAULT 0,
  status text DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE mortgage_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
  ON mortgage_applications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own applications"
  ON mortgage_applications FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own applications"
  ON mortgage_applications FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own applications"
  ON mortgage_applications FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create application_documents table
CREATE TABLE IF NOT EXISTS application_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid NOT NULL REFERENCES mortgage_applications(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  document_type text NOT NULL,
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_size integer DEFAULT 0,
  upload_date timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE application_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own documents"
  ON application_documents FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can upload own documents"
  ON application_documents FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own documents"
  ON application_documents FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create saved_properties table
CREATE TABLE IF NOT EXISTS saved_properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  address text NOT NULL,
  city text DEFAULT '',
  state text DEFAULT '',
  zip text DEFAULT '',
  estimated_value numeric DEFAULT 0,
  property_type text DEFAULT '',
  bedrooms integer DEFAULT 0,
  bathrooms numeric DEFAULT 0,
  square_feet integer DEFAULT 0,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE saved_properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own saved properties"
  ON saved_properties FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can save properties"
  ON saved_properties FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved properties"
  ON saved_properties FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved properties"
  ON saved_properties FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create calculator_saves table
CREATE TABLE IF NOT EXISTS calculator_saves (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  calculator_type text NOT NULL,
  inputs jsonb DEFAULT '{}',
  results jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE calculator_saves ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own calculator saves"
  ON calculator_saves FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create calculator saves"
  ON calculator_saves FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own calculator saves"
  ON calculator_saves FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_user_id ON mortgage_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_mortgage_applications_status ON mortgage_applications(status);
CREATE INDEX IF NOT EXISTS idx_application_documents_application_id ON application_documents(application_id);
CREATE INDEX IF NOT EXISTS idx_application_documents_user_id ON application_documents(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_properties_user_id ON saved_properties(user_id);
CREATE INDEX IF NOT EXISTS idx_calculator_saves_user_id ON calculator_saves(user_id);