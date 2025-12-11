import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PrivacyPageProps {
  onNavigate: (view: string, restoreScroll?: boolean) => void;
  previousView?: string;
}

export default function PrivacyPage({ onNavigate, previousView = 'home' }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="privacy" onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <button
            onClick={() => onNavigate(previousView, true)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: November 19, 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                MortgageFun ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our mortgage
                services platform. Please read this privacy policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name, email address, and phone number</li>
                <li>Social Security Number (for credit checks and loan applications)</li>
                <li>Date of birth and citizenship status</li>
                <li>Employment and income information</li>
                <li>Property and asset information</li>
                <li>Credit history and financial information</li>
                <li>Other information relevant to your mortgage application</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you access our platform, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Processing and managing your mortgage applications</li>
                <li>Verifying your identity and creditworthiness</li>
                <li>Communicating with you about your application and our services</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Improving our platform and developing new features</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Preventing fraud and enhancing security</li>
                <li>Sending you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Lending Partners:</strong> To process your loan applications</li>
                <li><strong>Service Providers:</strong> Third parties who perform services on our behalf</li>
                <li><strong>Credit Bureaus:</strong> For credit checks and reporting</li>
                <li><strong>Government Agencies:</strong> When required by law or regulation</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Legal Compliance:</strong> To comply with legal processes or protect our rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure Socket Layer (SSL) technology</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security audits and assessments</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our platform.
                You can control cookie settings through your browser preferences. However, disabling cookies
                may limit your ability to use certain features of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform may contain links to third-party websites. We are not responsible for the privacy
                practices of these external sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect
                personal information from children. If we discover that we have collected information from a
                child, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required or permitted by law.
                When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage
                you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: privacy@mortgagefun.com</p>
                <p>Phone: (555) 123-4567</p>
                <p className="mt-2">Mail:<br />
                MortgageFun Privacy Team<br />
                123 Financial Street<br />
                Suite 456<br />
                New York, NY 10001</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Consent</h3>
              <p className="text-gray-700 leading-relaxed">
                By using our service, you consent to our Privacy Policy and agree to its terms. If you do not
                agree with this policy, please do not use our services.
              </p>
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
