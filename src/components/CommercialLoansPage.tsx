import { CheckCircle, ArrowLeft } from 'lucide-react';

interface CommercialLoansPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function CommercialLoansPage({ onNavigate, previousView = 'loans' }: CommercialLoansPageProps) {
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
                Commercial Loans
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
            Business Base or Investment Gold
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Commercial property serves multiple wealth-building purposes—housing your business operations while building equity, or generating passive income through strategic investment acquisitions. Whether you're establishing your first location, expanding operations, transitioning from renting to owning, or building a commercial real estate portfolio, commercial loans transform business cash flow into property equity while providing operational control or investment returns that residential properties can't match. Smart business owners and investors understand that commercial real estate financing creates appreciating assets that strengthen portfolios while generating predictable income streams.
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
                  <span className="text-gray-700">25-Year Amortization Schedules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rate Type Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fixed Rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Adjustable Rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Hybrid ARM Products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">SBA 504 Loans (Owner-Occupied)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Investment Property Commercial Financing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multi-Tenant Investment Properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mixed-Use Development Loans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Net-Lease Investment Properties</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Rate-and-Term Commercial Refinancing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cash-Out Refinancing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Portfolio Consolidation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Investment Property Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Business Operations and Investment Income Converge
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Commercial loans enable business owners to stop paying rent and start building equity while gaining operational control, or allow investors to acquire income-producing properties with superior returns to residential rentals. Owner-occupied properties provide stability against rent increases and operational freedom, while investment commercial properties offer higher cap rates, longer-term leases, and professional tenant relationships that reduce management headaches. Unlike residential investments dependent on individual renters, commercial properties often feature established businesses with multi-year lease commitments, creating more predictable cash flow for both debt service and investor returns.
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
                  <span className="text-gray-700">Minimum credit score of 680 for most programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">720+ scores for optimal rates and terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Business and personal credit evaluation required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Down Payment Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">15-25% for owner-occupied properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">25-35% for investment commercial properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">SBA programs allow 10-15% down payment options (owner-occupied only)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Higher down payments often improve pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income & Employment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Business financial statements for owner-occupied properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Personal income verification and investment experience for certain loan types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Debt service coverage ratios 1.15-1.25x minimum</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Property cash flow analysis for investment properties</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Office buildings, retail spaces, warehouses, manufacturing facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multi-tenant investment properties and shopping centers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mixed-use properties with commercial/residential components</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Net-lease properties with established tenants</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Insurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Not available for commercial properties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Personal guarantees typically required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Business or investment asset collateralization common</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 border-l-4 border-gray-900 pl-6">
            Commercial Property Success Demands Professional Partnership
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Commercial real estate financing involves complexities that residential loans never encounter, from tenant lease analysis and property income verification to environmental assessments and zoning compliance. Investment properties require evaluation of market rents, tenant creditworthiness, and local economic factors that impact occupancy rates and property values. Owner-occupied properties need business financial analysis to ensure operations can support debt service while maintaining growth capital. Our commercial lending specialists bring years of market experience to guide both business owners and investors through documentation requirements, property due diligence, and loan structuring that maximizes approvals while optimizing long-term financial outcomes.
          </p>

          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to own commercial real estate? Contact our commercial lending specialists who understand how to structure both business property financing and investment property acquisitions that build long-term wealth through strategic commercial real estate ownership.
          </p>

          <p className="text-xs text-gray-600 italic mb-8">
            **Commercial loans may be subject to business/investment income verification, property appraisals, and personal guarantees. Interest rates typically higher than residential loans. Property and business assets serve as collateral.
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
