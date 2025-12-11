import { CheckCircle, ArrowLeft } from 'lucide-react';

interface HomeEquityLoansPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function HomeEquityLoansPage({ onNavigate, previousView = 'loans' }: HomeEquityLoansPageProps) {
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
                Home Equity Loans
              </h1>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8 border-l-4 border-gray-900 pl-6">
            When You Need Certainty, Not Flexibility
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The most successful property investments aren't just about buying right—they're about leveraging right. Home Equity Loans transform your property appreciation into strategic capital with the certainty that sophisticated investors demand. While HELOCs offer flexibility, Home Equity Loans provide something more valuable: predictable financing for calculated moves. When you know exactly how much capital you need for your next investment, business expansion, or debt consolidation strategy, fixed-rate equity loans eliminate rate risk and payment surprises that can derail financial plans.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Available Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loan Terms</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">5-Year Fixed Terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">10-Year Fixed Terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">15-Year Fixed Terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">20-Year Fixed Terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">30-Year Fixed Terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rate Type Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fixed Rate Only</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Debt Consolidation Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Home Improvement Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Investment Property Equity Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cash-Out Equity Programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Home Equity Loan Refinancing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HELOC-to-Fixed Loan Conversions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Rate-and-Term Refinancing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cash-Out Refinancing</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Predictable Payments for Strategic Goals
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Smart borrowers understand that equity isn't wealth until it's working for you. Home Equity Loans convert dormant property appreciation into active capital for wealth-building opportunities, whether consolidating high-interest debt, funding rental property improvements that increase cash flow, or capturing time-sensitive investment opportunities. Fixed payments integrate seamlessly into financial planning because you know exactly what you'll owe every month for the entire term. This certainty lets you model returns, plan cash flow, and execute strategies without worrying about rising rates destroying your projections.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Basic Qualifications Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Credit Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Lender controlled score minimums, often 640+</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">700+ credit scores for optimal rates and terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Down Payment Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No down payment required (secured by existing equity)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Minimum 15-20% home equity typically required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Combined loan-to-value ratios up to 90% in some cases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income & Employment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Documented income history (typically 2 years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Debt-to-income ratios generally 45% maximum</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Documented employment history (typically 2 years)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Primary residence, second home, investment property</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">1-4 unit property</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Condo, townhome, Property appraisal required for current value determination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Properties must meet lender condition standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Insurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Not required</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Disciplined Borrowing Requires Professional Guidance
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Home Equity Loans are often used by the financially disciplined, receiving a large lump sum requires self-control to use funds exactly as planned rather than lifestyle inflation or impulsive spending. Unlike credit lines that tempt ongoing access, fixed-rate equity loans provide all capital upfront with the expectation that you'll deploy it responsibly toward your desired goals. Our specialists work to structure loan amounts that match your specific objectives while ensuring monthly payments fit comfortably within your budget, creating accountability that keeps borrowed funds focused on strategic purposes rather than consumption.
          </p>

          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to convert equity into strategic capital? Contact us today to get fixed-rate financing for maximum advantage with structured payments that strengthen your overall investment strategy.
          </p>

          <p className="text-xs text-gray-600 italic mb-8">
            **Home Equity Loans subject to fixed interest rates, closing costs, and property appraisal requirements. Monthly payments remain constant throughout loan term. Property serves as collateral and may be subject to foreclosure for non-payment.
          </p>

          <div className="flex justify-center mb-8">
            <button
              onClick={() => onNavigate('apply')}
              className="px-10 py-4 bg-gray-900 text-white rounded-lg text-xl font-semibold hover:bg-[#00D084] hover:text-black transition-all transform hover:scale-105"
            >
              Start Today
            </button>
          </div>
        </div>

        <button
          onClick={() => onNavigate(previousView, true)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 ml-auto transition-colors"
        >
          <ArrowLeft className="w-5 h-5 transform" />
          <span className="text-lg font-medium">Back</span>
        </button>
        </article>
      </div>
    </div>
  );
}
