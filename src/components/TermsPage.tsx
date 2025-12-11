import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface TermsPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function TermsPage({ onNavigate, previousView = 'home' }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="terms" onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <button
            onClick={() => onNavigate(previousView, true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: November 19, 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using MortgageFun's services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed">
                MortgageFun provides mortgage application services, loan calculators, and related financial tools
                to help users explore mortgage options. We connect borrowers with lending professionals and provide
                educational resources about the mortgage process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To access certain features of our services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your password and account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Financial Information</h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided on our platform is for informational purposes only and does not constitute
                financial advice. Mortgage rates, terms, and availability are subject to change. You should consult
                with qualified financial professionals before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide false or misleading information</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect,
                use, and protect your personal information. By using our services, you consent to our data
                practices as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on MortgageFun, including text, graphics, logos, images, and software, is the property
                of MortgageFun or its licensors and is protected by copyright and other intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                MortgageFun and its affiliates shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to your use of the service. Our
                total liability shall not exceed the amount you paid to us in the twelve months preceding the
                claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless MortgageFun, its officers, directors, employees, and
                agents from any claims, damages, losses, liabilities, and expenses arising out of your use of
                the service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material
                changes by posting the new Terms on this page and updating the "Last Updated" date. Your
                continued use of the service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior
                notice, for any reason, including if you breach these Terms. Upon termination, your right to
                use the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: support@mortgagefun.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </section>
          </div>

          <button
            onClick={() => onNavigate(previousView, true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 ml-auto mt-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back</span>
          </button>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
