import { CheckCircle2, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ToolsAndResources from './ToolsAndResources';
import MeetingScheduler from './MeetingScheduler';

interface BuyingPageProps {
  onNavigate: (view: string) => void;
}

export default function BuyingPage({ onNavigate }: BuyingPageProps) {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCall = () => {
    setShowPhoneModal(true);
  };

  const handleText = () => {
    window.location.href = 'sms:203-376-1840';
  };

  const handleSchedule = () => {
    setShowScheduler(true);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSteps((prev) => new Set(prev).add(index));
              }
            });
          },
          { threshold: 0.3, rootMargin: '-50px' }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const pros = [
    {
      title: 'Appreciation',
      description: 'Many home owners see the value in their home as their key asset. Typically, a property gains appreciation or increases in value as the market and inflation grow. That equity is yours.'
    },
    {
      title: 'Ownership',
      description: 'When you own a home, you own it. Any changes, improvements or re-designs you want, you don\'t need to call the landlord for permission. You can do it (but you may need a permit!).'
    },
    {
      title: 'Stability',
      description: 'No more lease non-renewals or unreasonable rent increases. You control how long you stay and your financing choices help keep the monthly payment in your comfort zone.'
    },
    {
      title: 'Equity',
      description: 'Every month you pay your mortgage, you\'re building equity in your home instead of paying a landlord. You can do with this home equity what you want: borrow it, consolidate debt, renovate, pay for tuition, or supplement your retirement income.'
    },
    {
      title: 'Tax benefits',
      description: 'Mortgage interest and property are tax typically tax deductible items, potentially lowering your federal tax liability. With investment property many other costs can be deducted. This ia a big reason why so many people invest in Real Estate.'
    }
  ];

  const cons = [
    {
      title: 'Upfront costs',
      description: 'Down payment, closing costs, moving expenses and those "personal touch" improvements can add up to significant initial cash outlay, adding strain to your finances.'
    },
    {
      title: 'Maintenance responsibility',
      description: 'When you own it. you own it! You\'re responsible for all repairs and maintenance. When something breaks, you can\'t call a landlord the cost and hassle are yours.'
    },
    {
      title: 'Less flexibility',
      description: 'Selling a home takes time and money. If you need to relocate for work or personal reasons, you can\'t just give 30 days notice.'
    },
    {
      title: 'Market risk',
      description: 'Home values can decrease, and they do. If the market drops, you could owe more than your home is worth. Worse, if you need to sell, for any reason, during a dip you could lose money.'
    },
    {
      title: 'Unpredictable expenses',
      description: 'Property taxes, property insurance, HOA fees, and utilities often increase over time. This can create swings in your monthly ownership cost, and if not accounted for, can become a hardship.'
    }
  ];

  const steps = [
    {
      title: 'Get Preapproved',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            A preapproval allows you to be confident in your ability to obtain financing for your purchase!
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Understand your payments and affordability.</li>
            <li>• Consider a loan type that best suits your needs.</li>
            <li>• Get a decision in minutes and start shopping!</li>
          </ul>
          <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg font-bold hover:bg-[#00D084] hover:text-black transition-colors">
            Get Preapproved
          </button>
        </>
      )
    },
    {
      title: 'Meet your Loan Officer',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Your dedicated loan officer will guide you through the entire mortgage process with personalized service and expert advice.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Review your objectives and financial foundation</li>
            <li>• Discuss various loan programs and identify the best fit</li>
            <li>• Get answers to any questions you may have</li>
          </ul>
          <button onClick={handleSchedule} className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg font-bold hover:bg-[#00D084] hover:text-black transition-colors">
            Schedule a Meeting
          </button>
        </>
      )
    },
    {
      title: 'Work with the Agent',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Partner with a trusted real estate agent who will help navigate the home search, the offer and negotiation process; while keeping you on track and protected.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Supplies pre-screened homes that match your needs</li>
            <li>• Schedules property tours at your request</li>
            <li>• Provides expert guidance on market conditions and contract practices</li>
          </ul>
          <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg font-bold hover:bg-[#00D084] hover:text-black transition-colors">
            Find an Agent
          </button>
        </>
      )
    },
    {
      title: 'Make an Offer',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Once you've found your prefered property, it's time to submit a competitive offer.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Determine the right offer price</li>
            <li>• Include appropriate contingencies to protect your interests</li>
            <li>• Negotiate finalized terms</li>
            <li>• Select an Attorney or Title Closer to represent you</li>
          </ul>
        </>
      )
    },
    {
      title: 'Complete your Application',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Now that your offer is accepted, it's time to finalize your full mortgage application with all required documentation or refresh it with some follow up items if you already submitted one.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Submit required income and asset documents with your new Purchase Contract</li>
            <li>• Complete any additional paperwork requested by your lender</li>
            <li>• Complete your Property Inspection and make any final considerations</li>
            <li>• Approve the Appraisal order with your loan officer</li>
          </ul>
          <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg font-bold hover:bg-[#00D084] hover:text-black transition-colors">
            Apply Today
          </button>
        </>
      )
    },
    {
      title: 'Application Decision',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Your loan moves through underwriting where we verify all information and complete an appraisal of the property to confirm its value.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Underwriter reviews and verifies all your documentation</li>
            <li>• Submit any clarifying documentation required by Underwriter</li>
            <li>• Appraisal returned and reviewed</li>
            <li>• Receive your loan decision and clear-to-close status</li>
          </ul>
        </>
      )
    },
    {
      title: 'Closing',
      content: (
        <>
          <p className="text-gray-700 mb-4">
            The final step! Sign all the paperwork, receive your keys, it's official your the owner!
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Review and sign all closing documents with the closing agent</li>
            <li>• Pay outstanding amounts as reqiured by contract and financing terms</li>
            <li>• Receive the keys — Congratulations!</li>
          </ul>
          <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded-lg font-bold hover:bg-[#00D084] hover:text-black transition-colors">
            Find an Attorney
          </button>
        </>
      )
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/house_green_yard.jpg)', }} />
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[700px] right-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/60 to-white" />
        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                To Buy or Not to Buy?
              </h1>
            </div>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            Every Purchase is a Strategic Decision
          </h2>
          <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-4xl">
            Buying property is more than just the right four walls and a roof. Whether you're securing your primary residence, starting or adding to an investment portfolio, or acquiring commercial space for your business or investment, each purchase should advance your broader financial plan. We help analyze market conditions, financing options, and consider your long-term goals to ensure every property decision strengthens your financial foundation.
          </p>

        <div className="mb-20">
          <h3 className="text-5xl font-bold text-gray-900 mb-16 text-left">Pros & Cons of Ownership</h3>
          <div className="border-2 border-gray-300 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-green-600 text-white px-4 py-3 border-r border-gray-300">
                <h4 className="text-xl font-bold">Pros</h4>
              </div>
              <div className="bg-red-600 text-white px-4 py-3">
                <h4 className="text-xl font-bold">Cons</h4>
              </div>
            </div>
            {Array.from({ length: Math.max(pros.length, cons.length) }).map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
                <div className="p-4 border-r border-gray-300">
                  {pros[index] && (
                    <>
                      <h5 className="font-bold text-gray-900 mb-1">{pros[index].title}</h5>
                      <p className="text-gray-700 text-sm">{pros[index].description}</p>
                    </>
                  )}
                </div>
                <div className="p-4">
                  {cons[index] && (
                    <>
                      <h5 className="font-bold text-gray-900 mb-1">{cons[index].title}</h5>
                      <p className="text-gray-700 text-sm">{cons[index].description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 px-4 sm:px-8 lg:px-16 mb-20 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Steps to Buying</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 hidden lg:block transform -translate-x-1/2" />

            <div className="space-y-24">
              {steps.map((step, index) => {
                const isVisible = visibleSteps.has(index);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="relative"
                  >
                    <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div
                          className={`bg-white border-2 border-gray-200 p-8 rounded-lg shadow-xl transform transition-all duration-700 will-change-transform ${
                            isVisible
                              ? 'opacity-100 translate-x-0 translate-y-0'
                              : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'} translate-y-8`
                          }`}
                          style={{ transitionDelay: '200ms' }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <span className={`text-5xl font-bold transition-all duration-500 ${
                              isVisible ? 'text-gray-900 scale-100' : 'text-gray-400 scale-75'
                            }`}
                            style={{ transitionDelay: '300ms' }}>
                              {index + 1}
                            </span>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                              <div className={`transform transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                              }`}
                              style={{ transitionDelay: '400ms' }}>
                                {step.content}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex justify-center items-center relative z-10">
                        <div
                          className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-700 bg-transparent absolute ${!isEven ? 'right-2' : 'left-2'} ${
                            isVisible
                              ? 'border-blue-600 scale-100'
                              : 'border-gray-300 scale-75'
                          }`}
                          style={{ transitionDelay: '1400ms' }}
                        >
                          <CheckCircle2
                            className={`w-10 h-10 transition-all duration-500 ${
                              isVisible ? 'text-blue-600' : 'text-gray-400'
                            }`}
                            style={{ transitionDelay: '900ms' }}
                          />
                        </div>
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`hidden lg:block absolute left-1/2 top-20 w-1 h-24 transform -translate-x-1/2 transition-all duration-1000 ${
                          isVisible ? 'bg-white' : 'bg-gray-600'
                        }`}
                        style={{ transitionDelay: '700ms' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Still have questions? Get in touch today
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            We're here to be your partner in the ownership journey. Whether you're just starting to explore your options or ready to take the next step, our experienced team is ready to help. Reach out wiht the tools below, and let's discuss how we can put your Real Estate goals into action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <a href="mailto:info@mortgagefun.net" className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group block">
              <Mail className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">Send us a message and we'll respond within 24 hours</p>
            </a>
            <div onClick={handleText} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
              <MessageSquare className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Text</h3>
              <p className="text-gray-600">Quick questions? Text us for a fast response</p>
            </div>
            <div onClick={handleCall} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
              <Phone className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call</h3>
              <p className="text-gray-600">Speak directly with a Loan Officer</p>
            </div>
            <div onClick={handleSchedule} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
              <Calendar className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Meeting</h3>
              <p className="text-gray-600">Set a time, for a deeper dive</p>
            </div>
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

      <MeetingScheduler isOpen={showScheduler} onClose={() => setShowScheduler(false)} />
    </div>
  );
}
