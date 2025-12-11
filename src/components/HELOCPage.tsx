import { CheckCircle, ArrowLeft } from 'lucide-react';

interface HELOCPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function HELOCPage({ onNavigate, previousView = 'loans' }: HELOCPageProps) {
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
                HELOCs
              </h1>
              <p className="text-2xl text-gray-800 font-medium">
                Your Equity Should Work as Hard as You Do
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
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            A HELOC (Home Equity Line of Credit) provides a flexible immediate access to property equity, allowing you to draw funds as needed for long-term projects, strategic investments or even fun. Unlike fixed loans that give you everything upfront, HELOCs function like sophisticated credit cards secured by your home's equity, you access what you need, when you need it, and only pay interest on what you've borrowed. As true lines of credit, HELOCs offer unmatched flexibility borrow, repay, and re-borrow as often as needed up to your credit limit. Smart owners utilize this as the most cost-efficient way to maintain financial flexibility while leveraging their largest asset.
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
                  <span className="text-gray-700">Draw Period (typically 10 years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Repayment Period (typically 15-20 years)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rate Type Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Variable Rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fixed-Rate Lock Options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Hybrid Programs with Rate Conversion Features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Interest-Only Payment Options During Draw Period</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Introductory Rate Programs (promotional periods)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Professional/High-Net-Worth HELOCs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Investment Property HELOCs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HELOC-to-HELOC Refinancing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HELOC-to-Fixed Loan Conversions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Rate Lock Refinancing Options</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Revolving Credit Meets Financial Health
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            HELOCs work like sophisticated credit cards secured by your home equity, allowing you to choose how much to access and when. Interest charges apply only to borrowed amounts, with payments typically interest-only during the draw period. This creates unmatched financial flexibility—fund renovations as they progress, cover investment opportunities as they arise, or maintain a safety net for unexpected expenses, all while preserving your other investment capital and maintaining control over your borrowing costs.
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
                  <span className="text-gray-700">Minimum credit score of 620-680, varies by lender</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">720+ credit scores for optimal terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Higher scores unlock better rates and more favorable conditions</span>
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
                  <span className="text-gray-700">Minimum 20% home equity typically required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HELOC loans available up to 90% of appraised value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Most lenders require 15-20% equity cushion remaining</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income & Employment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Debt-to-income ratios typically 36-43% maximum</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Some lenders accept DTI up to 50% with strong credit profiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Employment verification and income documentation required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Primary residences preferred</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Secondary and investment properties accepted with stricter requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">1-4 unit property, condo, townhome accepted</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Strategy and Structure for Maximum Flexibility
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Unlike standardized mortgage programs, HELOCs are not centrally regulated, meaning each lender sets unique qualification guidelines. Variable interest rates create payment fluctuations that require strategic planning for rate changes and draw period management. Our specialists will review your full financial plan when considering a HELOC, for optimal flexibility and stability.
          </p>

          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to unlock your home's equity potential? Contact our specialists to structure a flexible credit line that will provide maximum financial freedom while optimizing costs.
          </p>

          <p className="text-xs text-gray-600 italic mb-8">
            **HELOCs subject to variable interest rates, draw period limitations, and property appraisal requirements. Monthly payments will fluctuate with rate changes and principal balance. Property serves as collateral and may be subject to foreclosure for non-payment.
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
