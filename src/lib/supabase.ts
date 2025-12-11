import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vjongraobjnvajvvgvfa.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqb25ncmFvYmpudmFqdnZndmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NDUzMDcsImV4cCI6MjA3NTQyMTMwN30.jzQ38U_d5Zwrug7qLhGKGyInTZbvT7MQ-Q9hCZ0weM8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface MortgageApplication {
  id: string;
  user_id: string;
  application_type: string;
  loan_amount: number;
  property_value: number;
  property_address: string;
  property_city: string;
  property_state: string;
  property_zip: string;
  credit_score: number;
  annual_income: number;
  employment_status: string;
  down_payment: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface SavedProperty {
  id: string;
  user_id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  estimated_value: number;
  property_type: string;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  notes: string;
  created_at: string;
}
