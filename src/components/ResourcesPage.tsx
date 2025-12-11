import { Calculator, BookOpen, Home, Book, Video, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ToolsAndResources from './ToolsAndResources';

interface ResourcesPageProps {
  onNavigate: (view: string) => void;
}

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const resources = [
    {
      icon: Calculator,
      title: 'Calculators',
      description: 'Access our comprehensive suite of mortgage calculators to estimate payments, compare loan scenarios, and understand your financing options. Calculate affordability, refinance savings, and investment property returns.',
      view: 'calculators',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Helpful Articles',
      description: 'Explore our library of educational articles covering everything from first-time homebuying tips to advanced investment strategies. Stay informed about market trends, loan programs, and best practices.',
      view: 'helpful-articles',
      color: 'text-green-600'
    },
    {
      icon: Home,
      title: 'Home Value Estimator',
      description: 'Get an instant estimate of your home\'s current market value. Our tool uses recent sales data and market trends to help you understand your property\'s worth and available equity.',
      view: 'home-value-estimator',
      color: 'text-orange-600'
    },
    {
      icon: Book,
      title: 'Mortgage Terminology',
      description: 'Demystify mortgage jargon with our comprehensive glossary. Learn the meaning of industry terms, understand loan features, and become confident in your mortgage conversations.',
      view: 'mortgage-terminology',
      color: 'text-purple-600'
    },
    {
      icon: Video,
      title: 'Mortgage Videos',
      description: 'Watch our video library featuring expert explanations, step-by-step guides, and real-world scenarios. Visual learning makes complex mortgage concepts easy to understand.',
      view: 'mortgage-videos',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/office_towers.jpg)', }} />
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[700px] right-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/60 to-white" />
        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Resources
              </h1>
            </div>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
           <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            Tools and Information to Guide Your Journey
          </h2>
          <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-4xl">
            Whether you're just starting to explore real estate ownership or you're a seasoned investor, our resource center provides the tools and knowledge you need to make informed decisions. From calculators to educational content, everything you need is here.
          </p>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 border-l-4 border-gray-900 pl-6">
              Explore Our Resources
            </h2>

            <div className="space-y-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div
                    key={index}
                    onClick={() => onNavigate(resource.view)}
                    className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-900 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`${resource.color} flex-shrink-0`}>
                        <Icon className="w-12 h-12" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {resource.title}
                          </h3>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-4">Need More Help?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Our team is here to answer your questions and provide personalized guidance for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('apply')}
                className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00D084] hover:text-black transition-colors"
              >
                Apply Now
              </button>
              <button
                onClick={scrollToContact}
                className="bg-gray-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00D084] hover:text-black transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToolsAndResources onNavigate={onNavigate} />

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
    </div>
  );
}
