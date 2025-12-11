import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Calculators from './components/Calculators';
import ApplicationForm from './components/ApplicationForm';
import PropertySearch from './components/PropertySearch';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import BuyingPage from './components/BuyingPage';
import RefinancingPage from './components/RefinancingPage';
import LoansPage from './components/LoansPage';
import ConventionalLoansPage from './components/ConventionalLoansPage';
import FHALoansPage from './components/FHALoansPage';
import HFALoansPage from './components/HFALoansPage';
import VALoansPage from './components/VALoansPage';
import USDALoansPage from './components/USDALoansPage';
import JumboLoansPage from './components/JumboLoansPage';
import NonQMLoansPage from './components/NonQMLoansPage';
import ReverseMortgagesPage from './components/ReverseMortgagesPage';
import HELOCPage from './components/HELOCPage';
import HomeEquityLoansPage from './components/HomeEquityLoansPage';
import CommercialLoansPage from './components/CommercialLoansPage';
import DPAPage from './components/DPAPage';
import MortgageTerminology from './components/MortgageTerminology';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import ExpertSupportPage from './components/ExpertSupportPage';
import EquityLeveragePage from './components/EquityLeveragePage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';

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

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [previousView, setPreviousView] = useState('home');
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);

  const handleNavigate = (newView: string, restoreScroll = false, propertyData?: PropertyData) => {
    console.log('App.tsx handleNavigate - newView:', newView, 'propertyData:', propertyData);
    setScrollPositions(prev => ({
      ...prev,
      [currentView]: window.scrollY
    }));
    setPreviousView(currentView);
    setCurrentView(newView);

    if (propertyData) {
      console.log('Setting selectedProperty:', propertyData);
      setSelectedProperty(propertyData);
    } else if (newView !== 'apply' && newView !== 'application') {
      setSelectedProperty(null);
    }

    if (restoreScroll) {
      const savedPosition = scrollPositions[newView];
      if (savedPosition !== undefined) {
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 0);
      }
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  };

  useEffect(() => {
    // This effect is intentionally empty - scroll is now handled in handleNavigate
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'buying':
        return <BuyingPage onNavigate={handleNavigate} />;
      case 'refinancing':
        return <RefinancingPage onNavigate={handleNavigate} />;
      case 'loans':
      case 'home-purchase-loans':
      case 'refinance-mortgage-loans':
      case 'loan-programs':
      case 'down-payment-programs':
        return <LoansPage onNavigate={handleNavigate} />;
      case 'conventional-loans':
        return <ConventionalLoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'fha-loans':
        return <FHALoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'hfa-loans':
        return <HFALoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'va-loans':
        return <VALoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'usda-loans':
        return <USDALoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'jumbo-loans':
        return <JumboLoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'non-qm-loans':
        return <NonQMLoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'reverse-mortgages':
        return <ReverseMortgagesPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'heloc':
        return <HELOCPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'home-equity-loans':
        return <HomeEquityLoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'commercial-loans':
        return <CommercialLoansPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'dpa':
      case 'down-payment-assistance':
        return <DPAPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'mortgage-terminology':
        return <MortgageTerminology onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'calculators':
        return <Calculators onNavigate={handleNavigate} />;
      case 'apply':
      case 'application':
        console.log('App.tsx rendering ApplicationForm with selectedProperty:', selectedProperty);
        return <ApplicationForm onNavigate={handleNavigate} propertyData={selectedProperty} />;
      case 'approval':
        return (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Fast Approval</h1>
              <p className="text-lg text-gray-600">Get pre-qualified in minutes and close on your home faster. Our streamlined approval process is coming soon.</p>
            </div>
          </div>
        );
      case 'support':
        return <ExpertSupportPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'equity':
        return <EquityLeveragePage onNavigate={handleNavigate} previousView={previousView} />;
      case 'properties':
        return <PropertySearch onNavigate={handleNavigate} onPropertySelect={setSelectedProperty} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'login':
        return <Auth mode="login" onNavigate={handleNavigate} />;
      case 'signup':
        return <Auth mode="signup" onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} previousView={previousView} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} previousView={previousView} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {currentView !== 'login' && currentView !== 'signup' && currentView !== 'terms' && currentView !== 'privacy' && (
          <Navbar currentView={currentView} onNavigate={handleNavigate} />
        )}
        <main className="flex-1">
          {renderView()}
        </main>
        {currentView !== 'login' && currentView !== 'signup' && currentView !== 'terms' && currentView !== 'privacy' && <Footer onNavigate={handleNavigate} />}
      </div>
    </AuthProvider>
  );
}

export default App;
