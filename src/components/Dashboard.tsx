import { useEffect, useState } from 'react';
import { FileText, Upload, Home, TrendingUp, Clock, CheckCircle, XCircle, Heart, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, MortgageApplication, SavedProperty } from '../lib/supabase';

interface DashboardProps {
  onNavigate: (view: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const { user, profile } = useAuth();
  const [applications, setApplications] = useState<MortgageApplication[]>([]);
  const [savedProperties, setSavedProperties] = useState<SavedProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      const [appsResult, propsResult] = await Promise.all([
        supabase
          .from('mortgage_applications')
          .select('*')
          .eq('user_id', user!.id)
          .order('created_at', { ascending: false }),
        supabase
          .from('saved_properties')
          .select('*')
          .eq('user_id', user!.id)
          .order('created_at', { ascending: false }),
      ]);

      if (appsResult.data) setApplications(appsResult.data);
      if (propsResult.data) setSavedProperties(propsResult.data);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('Are you sure you want to delete this draft application?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('mortgage_applications')
        .delete()
        .eq('id', id)
        .eq('user_id', user!.id);

      if (error) throw error;

      setApplications(applications.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application. Please try again.');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'denied':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'under_review':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'denied':
        return 'bg-red-100 text-red-800';
      case 'under_review':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome back, {profile?.first_name || 'User'}!
          </h1>
          <p className="text-xl text-gray-600">Manage your mortgage applications and saved properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
                <div className="text-sm text-gray-600">Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{savedProperties.length}</div>
                <div className="text-sm text-gray-600">Saved Properties</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {applications.filter(a => a.status === 'approved').length}
                </div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Your Applications</h2>
              <button
                onClick={() => onNavigate('apply')}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                New Application
              </button>
            </div>

            <div className="space-y-4">
              {applications.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-600 mb-4">You haven't submitted any applications yet</p>
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Start Your First Application
                  </button>
                </div>
              ) : (
                applications.map((app) => (
                  <div key={app.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(app.status)}
                        <div>
                          <h3 className="font-semibold text-gray-900 capitalize">
                            {app.application_type} Loan
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date(app.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                          {app.status.replace('_', ' ').toUpperCase()}
                        </span>
                        {app.status === 'draft' && (
                          <button
                            onClick={() => deleteApplication(app.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete draft"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Loan Amount:</span>
                        <p className="font-semibold">${app.loan_amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Property:</span>
                        <p className="font-semibold">{app.property_city || 'N/A'}</p>
                      </div>
                    </div>

                    {app.status === 'draft' && (
                      <button
                        onClick={() => onNavigate('apply')}
                        className="mt-4 w-full px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                      >
                        Continue Application
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Saved Properties</h2>
              <button
                onClick={() => onNavigate('properties')}
                className="px-4 py-2 bg-white text-gray-900 border border-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse More
              </button>
            </div>

            <div className="space-y-4">
              {savedProperties.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <Home className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-600 mb-4">You haven't saved any properties yet</p>
                  <button
                    onClick={() => onNavigate('properties')}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Search Properties
                  </button>
                </div>
              ) : (
                savedProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Home className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{property.address}</h3>
                          <p className="text-sm text-gray-600">
                            {property.city}, {property.state} {property.zip}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <p className="font-semibold">${property.estimated_value.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Beds:</span>
                        <p className="font-semibold">{property.bedrooms}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Baths:</span>
                        <p className="font-semibold">{property.bathrooms}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('apply')}
                      className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Apply for This Property
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need Help with Your Application?</h2>
              <p className="text-gray-300">Our loan officers are here to assist you every step of the way</p>
            </div>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
