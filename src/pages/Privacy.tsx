
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our services, or contact us for support. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Billing and payment information</li>
              <li>Project briefs and requirements</li>
              <li>Communication history</li>
              <li>Usage data and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Match you with appropriate talent</li>
              <li>Communicate about your projects</li>
              <li>Send important updates and notifications</li>
              <li>Analyze usage to improve our platform</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without 
              your consent, except as described in this policy. We may share information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Vetted talent assigned to your projects</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits</li>
              <li>Limited access controls</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide 
              personalized content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our services and comply 
              with legal obligations. You may request deletion of your account and associated data at any time.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for children under 16. We do not knowingly collect personal 
              information from children under 16.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <p className="mb-2">Startmodo LLC</p>
            <p className="mb-2">Data Protection Officer</p>
            <p className="mb-2">Rocky Mountain Registered Agent</p>
            <p className="mb-2">1621 CENTRAL AVE STE M</p>
            <p className="mb-2">CHEYENNE, WY 82001</p>
            <p className="mb-2">Email: privacy@startmodo.com</p>
            <p className="mb-2">Phone: Tel: 307-369-0696</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
