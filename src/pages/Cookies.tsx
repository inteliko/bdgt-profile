
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation, access to secure areas, and authentication.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              We use analytics cookies to understand how visitors interact with our website. 
              This helps us improve our services and user experience.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering 
              your preferences and settings.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              These cookies track your activity across websites to provide relevant advertising 
              and measure campaign effectiveness.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">session_id</td>
                    <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">user_preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Stores user settings</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">analytics_id</td>
                    <td className="border border-gray-300 px-4 py-2">Website analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">marketing_consent</td>
                    <td className="border border-gray-300 px-4 py-2">Marketing preferences</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that set their own cookies. These include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for secure transactions</li>
              <li>Social media platforms for integration</li>
              <li>Customer support tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
              <li>Cookie preference center: Use our cookie settings to manage preferences</li>
              <li>Opt-out tools: Use third-party opt-out tools for marketing cookies</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Browser Instructions</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Chrome</h3>
            <p className="mb-4">
              Settings &gt; Privacy and security &gt; Cookies and other site data
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Firefox</h3>
            <p className="mb-4">
              Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Safari</h3>
            <p className="mb-4">
              Preferences &gt; Privacy &gt; Manage Website Data
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Impact of Disabling Cookies</h2>
            <p className="mb-4">
              Disabling certain cookies may impact your experience on our website. Essential cookies 
              are required for basic functionality, while other cookies enhance your experience.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this cookie policy to reflect changes in our practices or applicable laws. 
              We will notify users of significant changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              For questions about our use of cookies, please contact us at:
            </p>
            <p className="mb-2">Startmodo LLC</p>
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

export default Cookies;
