import { useState } from 'react';
import { Search, MapPin, Home, Bed, Bath, Square, Heart, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

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

interface PropertySearchProps {
  onNavigate: (view: string, restoreScroll?: boolean, propertyData?: PropertyData) => void;
  onPropertySelect?: (property: PropertyData) => void;
}

export default function PropertySearch({ onNavigate, onPropertySelect }: PropertySearchProps) {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const mockProperties = [
    {
      id: 1,
      address: '123 Oak Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      price: 850000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      type: 'Single Family',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      address: '456 Maple Avenue',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      price: 425000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      type: 'Condo',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      address: '789 Pine Lane',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      price: 625000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      type: 'Single Family',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      address: '321 Elm Street',
      city: 'Denver',
      state: 'CO',
      zip: '80202',
      price: 550000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2000,
      type: 'Townhouse',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      address: '654 Birch Road',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      price: 475000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1400,
      type: 'Condo',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      address: '987 Cedar Drive',
      city: 'Nashville',
      state: 'TN',
      zip: '37201',
      price: 385000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1650,
      type: 'Single Family',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const handleSaveProperty = async (property: any) => {
    if (!user) {
      onNavigate('login');
      return;
    }

    try {
      const { error } = await supabase.from('saved_properties').insert({
        user_id: user.id,
        address: property.address,
        city: property.city,
        state: property.state,
        zip: property.zip,
        estimated_value: property.price,
        property_type: property.type,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        square_feet: property.sqft,
      });

      if (error) throw error;
      alert('Property saved successfully!');
    } catch (error) {
      console.error('Error saving property:', error);
      alert('Error saving property. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Property Search</h1>
          <p className="text-xl text-gray-600">
            Find your dream home and explore financing options
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="City, State, or ZIP"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="single">Single Family</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="0-300">$0 - $300k</option>
                <option value="300-500">$300k - $500k</option>
                <option value="500-750">$500k - $750k</option>
                <option value="750+">$750k+</option>
              </select>
            </div>
          </div>

          <button className="mt-4 w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
            <Search className="w-5 h-5 text-blue-600" />
            <span>Search Properties</span>
          </button>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{mockProperties.length}</span> properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleSaveProperty(property)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-pink-600" />
                </button>
              </div>

              <div className="p-5">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${property.price.toLocaleString()}
                </div>

                <div className="flex items-start space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    {property.address}
                    <br />
                    {property.city}, {property.state} {property.zip}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4 text-purple-600" />
                    <span>{property.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4 text-teal-600" />
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4 text-orange-600" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-600">{property.type}</span>
                  <button
                    onClick={() => {
                      const propertyData: PropertyData = {
                        address: property.address,
                        city: property.city,
                        state: property.state,
                        zip: property.zip,
                        price: property.price,
                        bedrooms: property.bedrooms,
                        bathrooms: property.bathrooms,
                        sqft: property.sqft,
                        type: property.type,
                      };
                      console.log('PropertySearch button clicked, propertyData:', propertyData);
                      if (onPropertySelect) {
                        onPropertySelect(propertyData);
                      }
                      onNavigate('apply', false, propertyData);
                    }}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Apply for this Property
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding a Property?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Our team of experts can help you find the perfect home within your budget
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact a Loan Officer
          </button>
        </div>
      </div>
    </div>
  );
}
