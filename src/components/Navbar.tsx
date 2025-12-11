import { User, LogOut, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const { user, profile, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    onNavigate('home');
    setMobileMenuOpen(false);
  };

  const resourcesOptions = [
    { name: 'Calculators', view: 'calculators' },
    { name: 'Helpful Articles', view: 'helpful-articles' },
    { name: 'Home Value Estimator', view: 'home-value-estimator' },
    { name: 'Mortgage Terminology', view: 'mortgage-terminology' },
    { name: 'Mortgage Videos', view: 'mortgage-videos' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center -ml-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center"
            >
              <img src="/MortgageFun_5_multi_house3.png" alt="MortgageFun" className="h-[4.5rem]" />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1 space-x-3">
            <button
              onClick={() => onNavigate('buying')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'buying'
                  ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                  : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Buying</span>
            </button>
            <button
              onClick={() => onNavigate('refinancing')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'refinancing'
                  ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                  : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Refinancing</span>
            </button>
            <button
              onClick={() => onNavigate('loans')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'loans'
                  ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                  : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Loans</span>
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'about'
                  ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                  : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>About Us</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'dashboard'
                      ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                      : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-4 h-4 text-blue-600" />
                  <span>{profile?.first_name || 'Dashboard'}</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <LogOut className="w-4 h-4 text-orange-600" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <div
                  className="relative"
                  ref={resourcesDropdownRef}
                  onMouseEnter={() => setResourcesDropdownOpen(true)}
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate('resources')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                      currentView === 'resources' || resourcesOptions.some(opt => currentView === opt.view)
                        ? isScrolled ? 'text-gray-900 bg-gray-100' : 'text-gray-900 bg-gray-100'
                        : isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {resourcesDropdownOpen && (
                    <div className="absolute top-full right-0 pt-2 w-64 z-50">
                      <div className="bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden">
                      {resourcesOptions.map((option) => (
                        <button
                          key={option.view}
                          onClick={() => {
                            onNavigate(option.view);
                            setResourcesDropdownOpen(false);
                          }}
                          className="w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors text-sm font-medium border-b border-gray-700 last:border-b-0"
                        >
                          {option.name}
                        </button>
                      ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-6 py-2 rounded-md text-sm font-medium transition-colors bg-[#00D084] text-white hover:bg-[#00B872]"
                >
                  Apply/Login
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-900 hover:text-gray-700'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                onNavigate('buying');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2 text-left rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Buying
            </button>

            <button
              onClick={() => {
                onNavigate('refinancing');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2 text-left rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Refinancing
            </button>

            <button
              onClick={() => {
                onNavigate('loans');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2 text-left rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Loans
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2 text-left rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </button>
            {user ? (
              <>
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <User className="w-5 h-5 text-blue-600" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <LogOut className="w-5 h-5 text-orange-600" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigate('resources');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </button>
                <div className="space-y-1 border-l-2 border-gray-200 ml-3">
                  {resourcesOptions.map((option) => (
                    <button
                      key={option.view}
                      onClick={() => {
                        onNavigate(option.view);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full px-6 py-2 text-left rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    onNavigate('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 bg-[#00D084] text-white rounded-md text-base font-medium hover:bg-[#00B872]"
                >
                  Apply
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
