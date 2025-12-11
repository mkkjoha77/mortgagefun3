import { Calculator, FileText, TrendingUp, Shield, Clock, Award, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const features = [
    {
      icon: Calculator,
      title: 'Mortgage Calculators',
      description: 'Estimate your monthly payments and find the right loan amount for your budget.',
      page: 'calculators',
    },
    {
      icon: FileText,
      title: 'Easy Application',
      description: 'Complete your mortgage application online in minutes with our streamlined process.',
      page: 'application',
    },

    {
      icon: Clock,
      title: 'Make Offers',
      description: 'Get preapproved in minutes, helping you get to closing faster.',
      page: 'approval',
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Our experienced team provides answers and guidence through every step.',
      page: 'support',
    },
  ];

  const loanTypes = [
    {
      name: 'Buying',
      description: <p>Your mortgage is more than just rates and payments. It's the key to your future, your family's stability, and your financial growth. Our personalized approach means understanding your goals, timeline, and budget to deliver financing solutions that work for your life. We don't just find you a loan, we find the right loan.</p>,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      link: 'Explore Buying',
    },
    {
      name: 'Refinance',
      description: <p>Great refinancing is about timing, terms, and total savings. Don't just chase the lowest rate, optimize your entire loan structure. From eliminating mortgage insurance to consolidating high-interest debt, shortening loan terms or accessing equity, we help ensure your refinance delivers maximum long-term value.</p>,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      link: 'Explore Refinancing',
    },
    {
      name: 'Home Equity',
      description: <p>Put the money in your walls to work. Home equity isn't just a number on paper; it's liquid potential waiting to transform your finances. Evaluate options like debt consolidation, home improvements and investment opportunities to maximize what your home can do for your financial future. Smart equity decisions today create lasting financial freedom tomorrow.</p>,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      link: 'Learn About Equity',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-black overflow-hidden -mt-24 pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/landing_hero_BG.jpg)',
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
              Financing Built for Your Vision
            </h1>
            <p className="text-2xl md:text-3xl mb-16 text-gray-800">
              From residential purchases to multi-million dollar commercial developments, we turn property dreams into keys in hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('apply')}
                className="px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold hover:bg-[#00D084] hover:text-black transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Preapproved</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>
              <button
                onClick={() => onNavigate('calculators')}
                className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg text-lg font-semibold hover:bg-[#00D084] hover:scale-105 hover:border-none transition-all"
              >
                Use Calculator
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-10 h-10 text-gray-900" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MortgageFUN Tools!
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 pl-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  onClick={() => onNavigate(feature.page)}
                  className="flex items-start space-x-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                 </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pick Your Path
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <div
                key={loan.name}
                className={`bg-white overflow-hidden transition-all cursor-pointer group ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                  marginTop: index === 0 ? '0' : index === 1 ? '3rem' : '6rem'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={loan.image}
                    alt={loan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="border-t-4 border-gray-900 pt-6 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {loan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{loan.description}</p>
                  <button
                    onClick={() => {
                      if (loan.name === 'Buy a home') {
                        onNavigate('buying');
                      } else if (loan.name === 'Refinance') {
                        onNavigate('refinancing');
                      } else if (loan.name === 'Home Equity') {
                        onNavigate('equity');
                      } else {
                        onNavigate('apply');
                      }
                    }}
                    className="text-gray-900 font-bold flex items-center space-x-2 group-hover:space-x-3 transition-all border-l-4 border-gray-900 pl-3"
                  >
                    <span>{loan.link}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Join hundreds of happy owners who've trusted us with their mortgage needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-900">Preapproved in minutes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-900">Personalized loan options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-900">Expert guidance throughout the process</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('apply')}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-[#00D084] hover:text-black transition-all transform hover:scale-105"
              >
                Start Today!
              </button>
            </div>
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">Mortgage"Fun" Facts</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a
                  href="https://www.mortgagenewsdaily.com/data/existing-home-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">4.29M</div>
                  <div className="text-gray-600">Existing Homes Sold in 2024</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: Mortgage News Daily</div>
                </a>
                <a
                  href="https://www.afire.org/summit/sfr2024p2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">800K</div>
                  <div className="text-gray-600">Single Family Homes Owned by Institutions (100+units)</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: AFIRE</div>
                </a>
                <a
                  href="https://www.mortgagenewsdaily.com/data/home-ownership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">65%</div>
                  <div className="text-gray-600">of US Households Own a Home (2024)</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: Mortgage News Daily</div>
                </a>
                <a
                  href="https://www.afire.org/summit/sfr2024p2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600">of Investment Properties are "mom & pop" Landlords</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: AFIRE</div>
                </a>
                 <a
                  href="https://www.mortgagenewsdaily.com/data/existing-home-sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">734K</div>
                  <div className="text-gray-600">New Construction Homes Sold in 2024</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: Mortgage News Daily</div>
                </a>
                
                <a
                  href="https://www.consumeraffairs.com/finance/what-is-the-average-length-of-home-ownership.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <div className="text-3xl font-bold text-gray-900">11.9 years</div>
                  <div className="text-gray-600">the Average Time a Family Stays in a Home</div>
                  <div className="text-[0.6rem] text-blue-600 mt-1">Source: ConsumerAffairs</div>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
