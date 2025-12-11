import { Home, FileText, Building, PiggyBank, Crown, ChessBishop, ChessKing, ChessKnight, ChessPawn, ChessQueen, ChessRook, ShieldBan, Tractor, Castle, Landmark, Hotel, HandCoins, Hammer, DoorOpen } from 'lucide-react';

interface LoansPageProps {
  onNavigate: (view: string) => void;
}

export default function LoansPage({ onNavigate }: LoansPageProps) {
  const loanProducts = [
    {
      icon: Crown,
      title: 'Conventional loans',
      description: 'Traditional loans that most people think of when they think "mortgage".',
    },
    {
      icon: ChessQueen,
      title: 'FHA Loans',
      description: 'Flexible financing for first-time purchases, refinances, and more.',
    },
    {
      icon: ChessRook,
      title: 'Housing Finance Authority Loans',
      description: 'Typically a below market interest rate, combined with DPA and flexible underwriting.',
    },
    {
      icon: ShieldBan,
      title: 'VA loans',
      description: 'Specialized financing for Veterans and Active-Duty military members.',
    },
    {
      icon: Tractor,
      title: 'USDA Loans',
      description: 'No upfront or annual and low-income limits can help you qualify.',
    },
    {
      icon: Landmark,
      title: 'Jumbo Loans',
      description: 'Financing for homes exceeding local loan limits in high-cost areas.',
    },
    {
      icon: DoorOpen,
      title: 'Non-QM',
      description: 'Expanded alternative income documentation, LLC ownership and Foreign national options,',
    },
    {
      icon: HandCoins,
      title: 'Reverse Mortgages',
      description: 'Turn a portion of the equity you have built up in your home into cash.',
    },
    {
      icon: PiggyBank,
      title: 'HELOC Loans',
      description: 'Access your home equity when you need it, with a HELOC credit line.',
    },
    {
      icon: Hammer,
      title: 'Home Equity Loans',
      description: 'Rehab your dream fixer-upper with a loan amount that works for you.',
    },
    {
      icon: Hotel,
      title: 'Commercial Loans',
      description: 'Build your dream home from the ground up with construction financing.',
    },
  ];

  const loanPrograms = [
    {
      icon: PiggyBank,
      title: 'Down payment assistance',
      description: 'Get the down payment help you need to reach your goal.',
    },
    {
      icon: FileText,
      title: 'Temporary buydown',
      description: 'Temporary reduced initial rate for a period of time.',
    },
    {
      icon: Building,
      title: 'Bridge loans',
      description: 'Get short-term financing to close on a new home before selling your current one.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/large_beach_home.jpg)', }} />
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[700px] right-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/60 to-white" />
        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mortgage Products & Programs
              </h1>
            </div>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            An Engineered Plan, Maximum Impact
          </h2>
          <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-4xl">
            The difference between good and great property investments often comes down to loan structure. Interest-only payments preserve cash flow for additional acquisitions. Portfolio loans enable rapid scaling without income limitations. Commercial products unlock mixed-use opportunities that traditional residential loans can't touch. We don't just offer loan products—we engineer financing solutions that amplify your property investment strategy and accelerate wealth building.
          </p>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Home loan products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => {
              const Icon = product.icon;
              const isConventional = product.title === 'Conventional loans';
              const isFHA = product.title === 'FHA Loans';
              const isHFA = product.title === 'Housing Finance Authority Loans';
              const isVA = product.title === 'VA loans';
              const isUSDA = product.title === 'USDA Loans';
              const isJumbo = product.title === 'Jumbo Loans';
              const isNonQM = product.title === 'Non-QM';
              const isReverse = product.title === 'Reverse Mortgages';
              const isHELOC = product.title === 'HELOC Loans';
              const isHomeEquity = product.title === 'Home Equity Loans';
              const isCommercial = product.title === 'Commercial Loans';
              const isClickable = isConventional || isFHA || isHFA || isVA || isUSDA || isJumbo || isNonQM || isReverse || isHELOC || isHomeEquity || isCommercial;
              return (
                <div
                  key={index}
                  className={`bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${isClickable ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (isConventional) onNavigate('conventional-loans');
                    if (isFHA) onNavigate('fha-loans');
                    if (isHFA) onNavigate('hfa-loans');
                    if (isVA) onNavigate('va-loans');
                    if (isUSDA) onNavigate('usda-loans');
                    if (isJumbo) onNavigate('jumbo-loans');
                    if (isNonQM) onNavigate('non-qm-loans');
                    if (isReverse) onNavigate('reverse-mortgages');
                    if (isHELOC) onNavigate('heloc');
                    if (isHomeEquity) onNavigate('home-equity-loans');
                    if (isCommercial) onNavigate('commercial-loans');
                  }}
                >
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Home loan programs</h2>
          <p className="text-gray-600 mb-8">
            Let us help home buying feel less stressful with our innovative programs designed to help you grow closer to your goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {loanPrograms.map((program, index) => {
              const Icon = program.icon;
              const isDPA = program.title === 'Down payment assistance';
              const isClickable = isDPA;
              return (
                <div
                  key={index}
                  className={`bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors ${isClickable ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (isDPA) onNavigate('dpa');
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-gray-700" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-800 text-white py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the home loan process started today and let us help you find the perfect financing solution for your needs.
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="bg-[#00D084] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#00B872] transition-colors"
          >
            Get pre-qualified
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
