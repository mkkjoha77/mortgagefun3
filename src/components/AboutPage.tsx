import { CheckCircle, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';
import ToolsAndResources from './ToolsAndResources';
import MeetingScheduler from './MeetingScheduler';

interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCall = () => {
    setShowPhoneModal(true);
  };

  const handleText = () => {
    window.location.href = 'sms:203-376-1840';
  };

  const handleSchedule = () => {
    setShowScheduler(true);
  };
  const highlights = [
    {
      title: 'Personalized Solutions',
      description: 'We understand that every client\'s goals are unique. Our approach is built on listening, analyzing, and crafting financing strategies that fit your specific needs.'
    },
    {
      title: 'Comprehensive Expertise',
      description: 'From conventional mortgages to specialized lending programs, our experience spans the full spectrum of real estate financing.'
    },
    {
      title: 'Long-Term Focus',
      description: 'We believe every financing decision should strengthen your financial future. Our advice goes beyond transactions, we help you build lasting wealth through ownership.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative -mt-24 pt-24">
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/architecture_commercial2.jpg)', }} />
        <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-tr from-white via-white/95" />
        <div className="absolute top-[700px] right-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/60 to-white" />
        <section className="relative text-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                About Us
              </h1>
            </div>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
            Empowering You, Through Real Estate Financing
          </h2>
          <p className="text-xl text-gray-700 mb-14 leading-relaxed max-w-4xl">
            For over 20 years, we've helped clients turn ownership dreams into reality. Whether you're buying your first home, expanding your investment portfolio, or navigating complex commercial acquisitions, our team delivers expert guidance and tailored financing solutions to support every step of your journey.
          </p>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
              What Sets Us Apart
            </h2>

            <div className="space-y-6 mb-16">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
              Our Commitment
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl">
              Your success is our priority. We make the financing process clear and efficient, presenting options that align with your broader financial strategy. With our results-driven partnership, you gain a trusted advisor dedicated to maximizing your opportunities and protecting your interests.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-6">
              Let's Make It Happen
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl">
              No matter your financing challenge or investment scenario, we have the expertise and resources to deliver solutions that work. From first-time purchases to complex portfolio financing, we're here to help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-20 justify-center">
              <button
                onClick={() => onNavigate('apply')}
                className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00D084] hover:text-black transition-colors"
              >
                Apply Today
              </button>
              <button
                onClick={scrollToContact}
                className="bg-gray-800 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00D084] hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>

          <div id="contact-section" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Prefer to chat? Get in touch today
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
              We're here to help you through every step of your financing journey. Whether you're just starting to explore your options or ready to take the next step, our experienced professionals are ready to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <a href="mailto:info@mortgagefun.net" className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group block">
                <Mail className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">Send us a message and we'll respond within 24 hours</p>
              </a>
              <div onClick={handleText} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
                <MessageSquare className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Text</h3>
                <p className="text-gray-600">Quick questions? Text us for a fast response</p>
              </div>
              <div onClick={handleCall} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
                <Phone className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call</h3>
                <p className="text-gray-600">Speak directly with a mortgage specialist</p>
              </div>
              <div onClick={handleSchedule} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer group">
                <Calendar className="w-12 h-12 text-gray-900 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Meeting</h3>
                <p className="text-gray-600">Book a time that works best for your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToolsAndResources onNavigate={onNavigate} />

      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowPhoneModal(false)}>
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-lg text-gray-700 mb-2">Mike Johansen</p>
            <p className="text-xl font-bold text-gray-900 mb-6">Cell: 203-376-1840</p>
            <div className="flex gap-4">
              <a href="tel:203-376-1840" className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-blue-700 transition-colors">
                Call Now
              </a>
              <button onClick={() => setShowPhoneModal(false)} className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <MeetingScheduler isOpen={showScheduler} onClose={() => setShowScheduler(false)} />
    </div>
  );
}
