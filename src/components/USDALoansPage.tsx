import { CheckCircle, ArrowLeft } from 'lucide-react';

interface USDALoansPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function USDALoansPage({ onNavigate, previousView = 'loans' }: USDALoansPageProps) {
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
                USDA Loans
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            100% Financing for America's Growing Markets
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            USDA loans open doors to property ownership in some of America's most promising markets; rural and suburban communities where land is affordable, communities are growing, and investment potential is often overlooked. With zero down payment requirements and competitive rates, USDA financing allows strategic buyers to enter emerging markets without depleting cash reserves, positioning themselves in areas primed for long-term appreciation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Available Options
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loan Term Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">30-Year Term</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rate Type Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fixed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Guaranteed Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Direct Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Construction / Reno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Energy Efficient Mortgages</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Streamlined Refinance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cash-Out Refinance</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            The Advantage Most Folks Miss
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Don't let the "rural" designation fool you, approximately 97% of U.S. land area qualifies for USDA financing, including many suburban communities, small towns, and growing areas outside major metropolitan centers. While income restrictions apply (typically 115% of area median income), these limits often accommodate middle-class earners, not just low-income buyers. The result? Access to 100% financing in thousands of communities where property costs remain reasonable, infrastructure is developing, and smart buyers are positioning themselves ahead of urban expansion and population migration trends.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Basic Qualification Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Credit Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No required credit score set by USDA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Lenders may set their own requirement, often 620</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No delinquent federal debt, student loans, child support or tax liens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Non-traditional credit accepted</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Down Payment Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">100% financing, no down payment required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Seller concessions up to 6% of purchase price</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income & Employment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Income Limit of 115% of Area Median Income(AMI)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Documented income history (typically 2 years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Housing debt-to-income ration up to 29%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Total debt-to-income ratio up to 41%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Primary residence only</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Single-family home, condo, manufactured home</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Property with acreage and agricultural potential</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Meets size (generally ≤2,000 sq ft) and value guidelines (reasonable for the market)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guarantee Fee (like MI)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Guarantee Fee rather than Mortgage Insurance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Upfront Guarantee Fee 1% of loan amount can be financed into loan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Annual Guarantee Fee .35% of principal balance is the monthly portion included your monthy mortgage payment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Guarantee Fee is for the life of the loan</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Geographic Research Required
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            USDA eligibility is location-specific and constantly evolving as communities grow and demographic patterns shift. Our specialists maintain current knowledge of eligible areas, income limits, and program updates. We help identify qualifying locations that align with your lifestyle preferences and ownership objectives.
          </p>

          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to explore USDA financing opportunities? Contact our rural lending specialists who understand both program requirements and the strategic advantages of rural property investment.
          </p>

          <p className="text-xs text-gray-600 italic mb-8">
            **USDA loans subject to USDA guidelines, income limits, and property location requirements. Primary residence occupancy required. Geographic and income eligibility varies by area. Terms and conditions apply.
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
