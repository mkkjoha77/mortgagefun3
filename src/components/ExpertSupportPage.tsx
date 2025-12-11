import { ArrowLeft, Mail, Phone, MessageSquare, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import MeetingScheduler from './MeetingScheduler';

interface ExpertSupportPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

interface FAQ {
  question: string;
  answer: JSX.Element;
}

export default function ExpertSupportPage({ onNavigate, previousView = 'home' }: ExpertSupportPageProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);

  const handleCall = () => {
    setShowPhoneModal(true);
  };

  const handleText = () => {
    window.location.href = 'sms:203-376-1840';
  };

  const handleSchedule = () => {
    setShowScheduler(true);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: 'How do I know how much house I can afford?',
      answer: (
        <div className="space-y-4">
          <p>
            Your borrowing capacity is determined primarily by your debt-to-income (DTI) ratio. While conventional wisdom typically wants this at 36% (if you make $5,000 a month spend $1,800 on your house and debts), numerous loan programs accommodate higher ratios by evaluating employment history, credit profile, reserves, and down payment strength allowing you to go as high as 50%. Rather than relying on generic calculations, a brief consultation allows us to determine your precise purchasing power—and identify opportunities to maximize your investment capacity.
          </p>
          <p className="text-sm italic text-gray-600">
            Note: Standard expenses like car insurance, cell phones, and utilities aren't factored into DTI calculations.
          </p>
        </div>
      )
    },
    {
      question: 'How do I know which type of mortgage is best for me?',
      answer: (
        <p>
          Your optimal financing structure depends on your complete financial picture and investment objectives. Through the information gathering process, AKA the application, we analyze your circumstances to present multiple mortgage solutions tailored to your goals. There's no universal "Plain Vanilla" approach—you deserve informed guidance that aligns with where you are in your ownership journey.
        </p>
      )
    },
    {
      question: 'How much cash will I need to purchase a home?',
      answer: (
        <div className="space-y-4">
          <p>Cash requirements vary based on loan type, credit profile, and contract structure. You'll need funds for:</p>
          <ul className="space-y-3">
            <li>
              <strong>Earnest Money:</strong> Cash deposit securing your offer, typically held in escrow and credited toward your down payment at closing. ($500-$5,000)
            </li>
            <li>
              <strong>Home Inspection:</strong> A licensed Home Inspector will help ensure "the home of your dreams" isn't actually the "nightmare of a lifetime". You are not required to perform an inspection but it is the best way to protect yourself. ($350-$1,500)
            </li>
            <li>
              <strong>Appraisal:</strong> Independent valuation of the property based on market comparables and required when obtaining a mortgage. ($450-$800)
            </li>
            <li>
              <strong>Down Payment:</strong> Percentage of purchase price due at settlement / closing (0%-5% for many programs, though larger down payments often unlock better terms)
            </li>
            <li>
              <strong>Closing Costs:</strong> Lender charges, attorney fees, title costs, recording and conveyance fees and Prepaid Items - upfront taxes, insurance, and interest due at settlement / closing
            </li>
          </ul>
          <p>
            Generally, expect a minimum of approximately $2,000 in available cash for a Primary Residence and up from there for any other type of property. The exact amount of cash needed varies widely based on property type, occupancy type and elected down payment. As mortgage professionals it is our job to listen to you and work to accomplish a financing structure that meets your capabilities.
          </p>
        </div>
      )
    },
    {
      question: 'What does my mortgage payment include?',
      answer: (
        <div className="space-y-3">
          <p>Monthly payments typically consist of:</p>
          <ul className="space-y-3">
            <li>
              <strong>Principal:</strong> Direct repayment of borrowed amount, building equity with each payment
            </li>
            <li>
              <strong>Interest:</strong> The cost for borrowing the money.
            </li>
            <li>
              <strong>Taxes & Insurance:</strong> Property taxes and homeowners insurance and Private Mortgage Insurance (if applicable) amounts are collected in each monthly payment and held in an escrow account. This will accumulate funds until a bill for these items is due until bills are due, then the mortgage servicer will make the payment with the money. Basically, it's like having a personal assistant (YAY!). For some loans an Escrow Account is optional…but really who doesn't want their own personal assistant (even if they only pay two bills a year for you!)
            </li>
          </ul>
        </div>
      )
    },
    {
      question: 'What is the lowest credit score I can have and still get a mortgage?',
      answer: (
        <div className="space-y-4">
          <p>
            This may sound crazy but it's actually ZERO (0). Mortgage qualifications are a lot like navigating a maze with more than one winning path but each path has gates that lock or unlock based on your personal details. While most associate homeownership with FHA or Fannie Mae, numerous loan types exist, each offering unique solutions to common challenges.
          </p>
          <p className="font-semibold">The Five key qualification components:</p>
          <ul className="space-y-2 pl-6">
            <li>• <strong>Credit</strong> — not just your score, but the content as well</li>
            <li>• <strong>Collateral</strong> — property type, value, location, title vesting, occupancy</li>
            <li>• <strong>Income</strong> — DTI, source, and stability</li>
            <li>• <strong>Assets</strong> — down payment and reserves</li>
          </ul>
          <p>
            If one element isn't perfect, that's manageable. If two or more need work, approval becomes more challenging. Let's discuss your specific situation to identify the optimal path forward—and if needed, explore alternative approaches.
          </p>
        </div>
      )
    },
    {
      question: 'Why do I get different answers from different lenders?',
      answer: (
        <p>
          There are several reasons but no they are not lying to you (for the most part!) Each lender applies what are called overlays to standard loan products these are additional or adjusted guidelines specific to their risk tolerance and loan portfolio preferences. This can cause the variation in answers you are noticing or maybe that lender simply doesn't offer the loan product you discussed with another. This is why second opinions are valuable investments of your time. Different lenders may offer significantly different solutions based on their particular criteria and specializations.
        </p>
      )
    },
    {
      question: 'Can I use rental income to qualify for a mortgage?',
      answer: (
        <div className="space-y-4">
          <p>
            <strong>Primary Residence:</strong> If your primary residence includes rental potential—such as a multi-family property (duplex, triplex, fourplex) where you'll occupy one unit—lenders can often use 75% of the projected rental income from the other units to offset the mortgage payment in your DTI calculation. This strategy allows you to live affordably while tenants contribute to your housing costs and equity growth.
          </p>
          <p>
            <strong>Investment Property:</strong> Rental income is a critical component of investment property qualification. Lenders typically apply 75% of market rent (to account for vacancy and maintenance) toward your qualifying income. If the property has an existing lease, that documentation strengthens your case. For experienced investors with multiple properties, lenders may use a rental income schedule from your tax returns, though this can be more complex as it factors in your reported expenses and depreciation.
          </p>
          <p className="italic text-gray-700">
            Strategic insight: Even properties that show tax losses due to depreciation can often still qualify based on cash flow analysis rather than tax return figures alone.
          </p>
        </div>
      )
    },
    {
      question: "What's the difference between getting pre-qualified and pre-approved?",
      answer: (
        <div className="space-y-3">
          <p>
            <strong>Pre-qualification</strong> provides a rough estimate based on information you verbally share—income, debts, down payment. It requires no documentation verification and carries limited weight in competitive markets.
          </p>
          <p>
            <strong>Pre-approval</strong> involves a comprehensive analysis where we verify your income, assets, employment, and credit through documentation review. You receive a commitment letter demonstrating to sellers that you're a serious, qualified buyer.
          </p>
        </div>
      )
    },
    {
      question: 'Should I pay points to lower my interest rate?',
      answer: (
        <div className="space-y-4">
          <p>This decision depends on your financial strategy and timeline.</p>
          <p>
            <strong>Primary Residence:</strong> If you plan to stay in the home long-term (7+ years), paying points to reduce your rate can yield substantial savings over the life of the loan. The break-even period—when your accumulated savings exceed the upfront point cost—typically occurs within 3-5 years. For a forever home, this strategy builds equity faster and reduces total interest paid.
          </p>
          <p>
            <strong>Investment Property:</strong> The calculation shifts when rental income and tax implications factor in. Lower rates improve cash flow and property returns, making points potentially attractive. However, if your strategy involves cash-out refinancing within a few years to access equity for additional acquisitions, paying points may not provide sufficient return. Many investors prefer preserving capital for down payments on additional properties rather than buying down rates.
          </p>
          <p className="italic text-gray-700">
            We can model both scenarios with specific numbers to determine which approach optimizes your particular investment timeline and portfolio goals.
          </p>
        </div>
      )
    },
    {
      question: 'How many investment properties can I finance?',
      answer: (
        <div className="space-y-4">
          <p>
            Conventional financing through Fannie Mae/Freddie Mac typically allows up to 10 financed properties total (including your primary residence). However, each additional property increases scrutiny on your financial profile, reserve requirements, and overall portfolio performance.
          </p>
          <p>
            After reaching conventional limits, portfolio lenders and commercial financing options become your primary vehicles for continued expansion. These programs evaluate your entire real estate portfolio's performance, your liquidity, and your track record as an investor rather than applying standard consumer lending guidelines.
          </p>
          <p className="italic text-gray-700">
            <strong>Portfolio Growth Strategy:</strong> Experienced investors often transition from conventional financing to commercial loans, lines of credit, and creative financing structures as their portfolios expand. Each phase of growth requires different financial instruments—we can help you plan the optimal financing strategy for your current stage and future acquisition goals.
          </p>
        </div>
      )
    },
    {
      question: "What happens if I want to move but can't sell my current home?",
      answer: (
        <div className="space-y-4">
          <p>
            <strong>Converting to Investment Property:</strong> Your primary residence can become a rental property, allowing you to purchase a new home using owner-occupied financing for that new property. Lenders will evaluate whether the rental income from your current home covers its mortgage payment, and you'll need to demonstrate sufficient income and reserves to qualify for both mortgages simultaneously.
          </p>
          <p>
            This scenario often creates accidental real estate investors—and many discover that retaining their previous residence as a rental builds long-term wealth more effectively than selling. You benefit from potential appreciation, rental income, tax advantages, and equity growth on both properties.
          </p>
          <p className="font-semibold">
            Qualification Considerations: You'll need 6+ months reserves for both properties, strong credit, and adequate income to support both mortgages (though rental income from the first property helps offset its payment). We can analyze whether this transition makes financial sense and structure the financing to support your expanded real estate portfolio.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="relative -mt-24 pt-24">
          <div className="absolute top-0 right-0 w-full h-[800px] bg-cover bg-center"
            style={{ backgroundImage: 'url(/house_green_yard.jpg)' }} />
          <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-tr from-white via-white/95" />
          <div className="absolute top-[550px] right-0 w-full h-[250px] bg-gradient-to-b from-transparent via-white/60 to-white" />

          <section className="relative text-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Expert Support
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
              <div className="p-8 mb-12">
                <h2 className="text-4xl font-bold text-gray-900 border-l-4 border-gray-900 mb-6 pl-6">
                Professional mortgage guidance built on 20+ years of experience
                </h2>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Real estate financing shouldn't require a decoder ring, yet most borrowers encounter contradictory information, opaque guidelines, and generic advice that ignores their specific circumstances. Not all mortgage professionals approach this work the same way, there's a stark difference between loan officers who understand real estate finance as a wealth-building tool and those who simply process applications. After 20+ years structuring mortgages for everyone from first-time buyers to portfolio investors, we've seen how the right guidance helps clients make better decisions, achieve superior financing terms, and build wealth more effectively than generic, transactional lending approaches.
                </p>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <h3 className="mb-8"><b>**Important Note:</b> The informaion below contains general rules that apply most often, not absolutes carved in stone. The world of finance is ever changing and evolving and there is often a lender who makes it their business to solve a particular shortfall in the market.</h3>

              <div className="space-y-4 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6 bg-white border-t border-gray-200">
                        <div className="text-gray-700 leading-relaxed pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Still have questions? Get in touch today
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                  We're here to be your partner in the ownership journey. Whether you're just starting to explore your options or ready to take the next step, our experienced team is ready to help. Reach out with the tools below, and let's discuss how we can put your Real Estate goals into action.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <a href="mailto:info@mortgagefun.net" className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer group block">
                    <Mail className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-[#00D084] transition-colors" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">Send us a message and we'll respond within 24 hours</p>
                  </a>
                  <div onClick={handleCall} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer group">
                    <Phone className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-[#00D084] transition-colors" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call</h3>
                    <p className="text-gray-600">Speak with a loan officer directly</p>
                  </div>
                  <div onClick={handleText} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer group">
                    <MessageSquare className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-[#00D084] transition-colors" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Text</h3>
                    <p className="text-gray-600">Quick questions? Send us a text message</p>
                  </div>
                  <div onClick={handleSchedule} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer group">
                    <Calendar className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-[#00D084] transition-colors" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule</h3>
                    <p className="text-gray-600">Book a consultation at your convenience</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
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

      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-700 mb-6">Ready to speak with a loan officer?</p>
            <a
              href="tel:203-376-1840"
              className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
            >
              203-376-1840
            </a>
            <button
              onClick={() => setShowPhoneModal(false)}
              className="w-full text-gray-600 hover:text-gray-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showScheduler && (
        <MeetingScheduler onClose={() => setShowScheduler(false)} />
      )}
    </>
  );
}
