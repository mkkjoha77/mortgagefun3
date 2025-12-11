import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleCall = () => {
    setShowPhoneModal(true);
  };
  return (
    <>
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-gray-900 mb-4">
              <img src="/MortgageFun_Logo_4.png" alt="MortgageFun" className="h-20" />

            </div>
            <p className="text-sm text-gray-600">
              Your trusted partner in ownership You find the perfect property, we help with the perfect loan.<br/><br/>Michael Johansen - NMLS 387763
            </p>

          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('buying')} className="text-gray-600 hover:text-gray-900 transition-colors">Buying</button></li>
              <li><button onClick={() => onNavigate('refinancing')} className="text-gray-600 hover:text-gray-900 transition-colors">Refinancing</button></li>
              <li><button onClick={() => onNavigate('loans')} className="text-gray-600 hover:text-gray-900 transition-colors">Loans</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('calculators')} className="text-gray-600 hover:text-gray-900 transition-colors">Calculators</button></li>
              <li><button onClick={() => onNavigate('helpful-articles')} className="text-gray-600 hover:text-gray-900 transition-colors">Helpful Articles</button></li>
              <li><button onClick={() => onNavigate('home-value-estimator')} className="text-gray-600 hover:text-gray-900 transition-colors">Home Value Estimator</button></li>
              <li><button onClick={() => onNavigate('mortgage-terminology')} className="text-gray-600 hover:text-gray-900 transition-colors">Mortgage Terminology</button></li>
              <li><button onClick={() => onNavigate('mortgage-videos')} className="text-gray-600 hover:text-gray-900 transition-colors">Mortgage Videos</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2 cursor-pointer hover:text-gray-900 transition-colors" onClick={handleCall}>
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-green-600" />
                <span>203-376-1840</span>
              </li>
              <li className="flex items-start space-x-2 cursor-pointer hover:text-gray-900 transition-colors">
                <a href="mailto:info@mortgagefun.net" className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-blue-600" />
                  <span>info@mortgagefun.net</span>
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-600" />
                <span>Harbour Mortgage Group <br/>NMLS 879493<br/>539 Boston Post Rd<br />Guilford, CT 06437</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center text-gray-600">
          <p>&copy; 2025 Mortgagefun.net | All rights reserved | Personal NMLS 387763 | Company NMLS 879493 |
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">NMLS Consumer Access</a></p>

        </div>
      </div>
    </footer>
    {showPhoneModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPhoneModal(false)}>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
          <p className="text-lg text-gray-700 mb-2">Mike Johansen</p>
          <p className="text-xl font-bold text-gray-900 mb-6">Cell: 203-376-1840</p>
          <div className="flex gap-4">
            <a href="tel:203-376-1840" className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-blue-700 transition-colors">
              Call Now
            </a>
            <button onClick={() => setShowPhoneModal(false)} className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
