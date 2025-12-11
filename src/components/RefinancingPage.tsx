import ToolsAndResources from './ToolsAndResources';

interface RefinancingPageProps {
  onNavigate: (view: string) => void;
}

export default function RefinancingPage({ onNavigate }: RefinancingPageProps) {
  const benefits = [
    {
      number: 1,
      title: 'Rate & Timing Optimization',
      description: 'Lower rates can significantly reduce your monthly obligations and total interest paid over the loan term. However, refinancing costs typically range from 2-5% of your loan amount, so ensure the long-term savings justify the investment. We help analyze your break-even timeline to determine if current rates make refinancing worthwhile.'
    },
    {
      number: 2,
      title: 'Equity Access for Investment Opportunities',
      description: 'Cash-out refinancing transforms dormant home equity into active capital for investments, property improvements, or debt consolidation. While this increases your loan balance and monthly payments, strategically deployed equity can generate returns that exceed your mortgage interest rate, effectively making your home work harder for your financial future.'
    },
    {
      number: 3,
      title: 'Debt Consolidation & Cash Flow Management',
      description: 'Consolidating high-interest credit cards and personal loans into your mortgage can dramatically reduce monthly obligations and simplify your finances. Keep in mind this converts unsecured debt into secured debt against your property, and extends repayment timelines, potentially increasing total interest paid despite lower rates.'
    },
    {
      number: 4,
      title: 'Loan Term Restructuring',
      description: 'Switching from a 30-year to 15-year mortgage builds equity faster and saves substantial interest, but increases monthly payments. Conversely, extending your term reduces monthly obligations but increases total interest costs. We help you balance monthly cash flow needs with long-term wealth-building objectives.'
    },
    {
      number: 5,
      title: 'Elimination of Mortgage Insurance',
      description: 'If your property has appreciated beyond 80% loan-to-value, refinancing may eliminate PMI, reducing monthly costs without extending your loan term. This strategy works best when refinancing costs are minimal and you\'re not significantly increasing your interest rate.'
    },
    {
      number: 6,
      title: 'Rate Stability & Predictability',
      description: 'Converting from adjustable to fixed rates provides payment certainty for long-term financial planning. While you might pay slightly higher rates initially, you eliminate the risk of future rate increases that could significantly impact your financial position and plan.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/house-3150500_1920.jpg)', }} />
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[700px] right-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/60 to-white" />
        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Power of Refinancing
              </h1>
            </div>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            Turn Your Property Into Financial Power Tool
          </h2>
          <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-4xl">
            Unlock untapped financial opportunity. Smart refinancing goes beyond just accessing equity it optimizes your entire debt strategy. Whether you're pulling equity for new investments, reducing monthly payments to improve cash flow, or consolidating high-interest debt under better terms, we help you leverage your property's growth strategically. Every refinance we structure serves your broader wealth-building goals, not just today's rate environment.
          </p>

        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-14">Benefits of Refinancing a Loan</h2>

          <div className="space-y-6 ml-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-8">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-lg flex items-center justify-center font-bold text-base shadow-lg transform hover:scale-105 transition-transform">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 mb-2">{benefit.description}</p>
                    {benefit.linkText && (
                      <button className="text-blue-600 hover:underline font-semibold">
                        {benefit.linkText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <ToolsAndResources onNavigate={onNavigate} />
    </div>
  );
}
