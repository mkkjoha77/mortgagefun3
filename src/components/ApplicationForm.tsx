import { Form1003Controller } from './Form1003/Form1003Controller';

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

interface ApplicationFormProps {
  onNavigate: (view: string) => void;
  propertyData?: PropertyData | null;
}

export default function ApplicationForm({ onNavigate, propertyData }: ApplicationFormProps) {
  return <Form1003Controller onNavigate={onNavigate} propertyData={propertyData} />;
}
