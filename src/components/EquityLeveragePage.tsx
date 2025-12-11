import { ArrowLeft, ArrowRight, AlertTriangle, TrendingUp, PiggyBank, Hammer } from 'lucide-react';

interface EquityLeveragePageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function EquityLeveragePage({ onNavigate, previousView = 'home' }: EquityLeveragePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[900px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/large_beach_home.jpg)' }} />
        <div className="absolute top-0 right-0 w-full h-[900px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[650px] right-0 w-full h-[250px] bg-gradient-to-b from-transparent via-white/60 to-white" />

        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Home Equity Leverage
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Strategic Opportunities and Real Risks
              </p>
            </div>
          </div>
        </section>

        <article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <button
            onClick={() => onNavigate(previousView, true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
              When Your Property Becomes Your Capital Source
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Using home equity isn't just about covering expenses—it's about strategic capital deployment that can accelerate wealth building or destroy financial security. The difference lies in understanding leverage fundamentals: borrowing against appreciating assets to acquire more appreciating assets creates wealth, while borrowing against your shelter to fund consumption creates risk. Smart property owners evaluate equity leverage through the lens of return on investment, cash flow impact, and worst-case scenario planning before accessing their property's value.
            </p>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-16">
                Primary Residence Leverage: Your Home as Financial Engine
              </h2>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-green-600 pl-6">
                The Power of Your Largest Asset
              </h3>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Your primary residence offers the lowest-cost capital available to most Americans, with interest rates typically 2-4% below unsecured credit options and potential tax deductibility for home improvements. This creates powerful arbitrage opportunities—using cheap home equity to eliminate high-interest credit card debt, fund business expansion, or acquire cash-flowing investments. The substantial equity most homeowners possess provides significant capital access that can transform financial trajectories when deployed strategically rather than consumed frivolously.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-red-600 pl-6">
                The Shelter Risk Reality
              </h3>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 mb-4">
                      However, leveraging your primary residence means your family's housing security becomes investment collateral. Foreclosure risk affects your basic shelter, not just investment returns, creating emotional pressure that can lead to poor financial decisions under stress.
                    </p>
                    <p className="text-gray-800">
                      High loan-to-value ratios also reduce your housing flexibility—limiting your ability to relocate for opportunities, downsize for retirement, or adapt to life changes. When housing markets decline, you can find yourself underwater on combined mortgages while still owing full balances, trapped in a depreciating asset with escalating debt obligations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-16">
                Investment Property Leverage: Multiplying Real Estate Wealth
              </h2>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-blue-600 pl-6">
                Portfolio Acceleration Through Strategic Debt
              </h3>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Using equity from existing investment properties to acquire additional properties multiplies your real estate exposure and potential returns while preserving cash reserves for opportunities, maintenance, and market downturns. This approach enables geographic and property type diversification within real estate investing, with interest costs becoming business deductions while preserving depreciation benefits. Smart investors use equity leverage to build portfolios that would take decades to accumulate through cash-only purchases, accelerating wealth building through controlled leverage.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-orange-600 pl-6">
                Complex Risk Multiplication
              </h3>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 mb-4">
                      Investment property equity financing typically costs 0.5-1% more than primary residence rates, while requiring sophisticated cash flow management across multiple leveraged properties. Vacant investment properties still demand debt service on all leveraged amounts, creating cash flow pressure that can force distressed sales.
                    </p>
                    <p className="text-gray-800">
                      Real estate markets can move together during downturns, leaving entire leveraged portfolios vulnerable to simultaneous value declines and income disruption. The complexity of managing multiple debt obligations while maintaining positive cash flow requires professional-level financial planning and substantial cash reserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-16 text-center">
              Strategic Framework for Smart Leverage
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-900 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">Risk Assessment</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Stress-Test Before You Invest</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Calculate worst-case scenarios before best-case returns. Can you service all debt obligations if rental income disappears or home values decline 20%? Stress-test your leverage strategy against recession conditions, not just current market optimism. Smart borrowers model scenarios where properties sit vacant for six months, values drop significantly, and interest rates rise substantially. Only when you can survive these conditions should you proceed with equity leverage strategies.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-900 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">Investment Thesis</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Returns Must Exceed Costs</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Articulate exactly how borrowed equity will generate returns exceeding borrowing costs plus risk premiums. "Home improvements" and "debt consolidation" are expenses, not investments unless they demonstrably increase property values or reduce higher-cost debt. Focus on cash-flowing assets, appreciating properties, or business opportunities with measurable returns that justify the leverage risk. Successful equity leverage requires specific, quantifiable investment opportunities, not vague hopes for market appreciation.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-12">
              <p className="text-2xl font-bold text-center mb-2">
                Smart leverage amplifies returns. Poor leverage amplifies losses.
              </p>
              <p className="text-xl text-center text-gray-300">
                Evaluate equity leverage opportunities in greater detail below
              </p>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Explore Your Equity Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div
                onClick={() => onNavigate('heloc')}
                className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <PiggyBank className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-3">HELOC Loans</h3>
                <p className="text-gray-600 text-sm">Access your home equity when you need it, with a HELOC credit line.</p>
              </div>

              <div
                onClick={() => onNavigate('home-equity-loans')}
                className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Hammer className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-3">Home Equity Loans</h3>
                <p className="text-gray-600 text-sm">Rehab your dream fixer-upper with a loan amount that works for you.</p>
              </div>
            </div>

            <div className="flex justify-end mt-16">
              <button
                onClick={() => onNavigate(previousView, true)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg font-medium">Back</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
