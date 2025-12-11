import { CheckCircle, ArrowLeft } from 'lucide-react';

interface HFALoansPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function HFALoansPage({ onNavigate, previousView = 'loans' }: HFALoansPageProps) {
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
                HFA Loans
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            Every State Offers Opportunities Most Buyers Never Discover
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Housing Finance Agency (HFA) loans represent one of the best kept secrets in property financing, state-sponsored programs that combine great rates, flexible underwriting, and substantial assistance benefits. While designed to promote homeownership, smart buyers understand these programs as gateways to property acquisition with advantages that traditional lending simply can't match. Combining below market rates and forgivable down payment assistance, HFA loans turn state resources into personal strong financial foundation building opportunities.
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
                  <span className="text-gray-700">15-Year</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">30-Year</span>
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
                  <span className="text-gray-700">Military Homeownership Program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Police & Teacher Homeownership Program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Disabled Homeownership Program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">203(k) Renovation Loan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mobile/Manufactured Loan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Emergency Mortgage Assistance Program (EMAP)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Foreclosure Prevention Program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reverse Annuity Program (RAM)</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Why HFA Loans Unlock the Local Advantage
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Unlike federal programs with rigid nationwide standards, each state customizes its HFA offerings based on local housing markets, economic conditions, and development priorities. This creates unique opportunities. California might offer shared appreciation loans, Pennsylvania provides employer-assisted housing benefits, and Connecticut features targeted area incentives. Smart buyers research their state's specific advantages rather than settling for generic lending options, often discovering programs that provide thousands in assistance while supporting local economic development goals.
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
                  <span className="text-gray-700">Credit scores as low as 580</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Non-traditional credit accepted</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Generous underwriting standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Down Payment Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">3.5% for an FHA HFA loan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">3% for a Conventional HFA loan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Down payment assistance up to $15,000-$30,000</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Repayable and forgivable DPA options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income & Employment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Income limits restriction based on location</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Documented income history (typically 2 years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Accommodating to recent job changes or gaps</span>
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
                  <span className="text-gray-700">1-4 unit property</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Condo, townhome, manufactured, mobile home</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Insurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Required in most cases</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Costs based on loan product chosen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Government backed HFA loans use FHA mortgage insurance pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Conventional backed HFA loans use private mortgage insurance (PMI) pricing</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            State-by-State Expertise Required
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Every state's HFA program operates differently, with unique benefits, eligibility requirements, and funding availability. Programs require approved lenders and often mandate homebuyer education. Our specialists maintain relationships with state agencies nationwide and understand how to maximize benefits across multiple programs simultaneously.
          </p>

          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to access your state's HFA advantages? Contact our HFA lending specialists who understand how to navigate HFA programs for maximum financial benefit and strategic property acquisition success.
          </p>

          <p className="text-xs text-gray-600 italic mb-8">
            **HFA loans subject to state-specific guidelines, income limits, and funding availability. Property occupancy requirements apply. Terms and conditions vary by state program.
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
