
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Imprint</h1>
          <p className="text-gray-600 mb-8">Legal information about Startmodo LLC</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Company Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-2"><strong>Company Name:</strong> Startmodo LLC</p>
              
              <p className="mb-2"><strong>Address (cont.):</strong> 1914 Thomes Ave Ste 2</p>
              <p className="mb-2"><strong>City / ZIP:</strong> Cheyenne, WY 82001 </p>
              <p className="mb-2"><strong>Country:</strong> United States</p>
              <p className="mb-2"><strong>Phone:</strong> Tel: +12163078940</p>
              <p className="mb-2"><strong>Email:</strong> sales@startmodo.com</p>
              <p className="mb-2"><strong>Business Hours:</strong> Monday - Friday, 10am - 6pm EST</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Representatives</h2>
            <p className="mb-4">
              Startmodo LLC is legally represented by its managing directors, 
              who are authorized to act on behalf of the company in all business matters.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Business Registration</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-2"><strong>Business Type:</strong> Limited Liability Company (LLC)</p>
              <p className="mb-2"><strong>State of Incorporation:</strong> WY</p>
              <p className="mb-2"><strong>Industry:</strong> Technology Services / Design & Development</p>
              <p className="mb-2"><strong>NAICS Code:</strong> 541511 (Custom Computer Programming Services)</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tax Information</h2>
            <p className="mb-4">
              Startmodo LLC is registered for tax purposes in the United States. 
              All applicable federal, state, and local taxes are paid in accordance with US tax law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Liability</h2>
            <p className="mb-4">
              Startmodo maintains professional liability insurance to protect both 
              our clients and our business in the provision of design and development services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All trademarks, service marks, and logos used on this website are the property of 
              Startmodo LLC or their respective owners. Unauthorized use is prohibited.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Dispute Resolution</h2>
            <p className="mb-4">
              Any disputes arising from business relationships with Startmodo LLC 
              will be subject to the jurisdiction of the courts in New York, United States.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Website Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-2"><strong>Website:</strong> www.startmodo.com</p>
              <p className="mb-2"><strong>Technical Contact:</strong> tech@startmodo.com</p>
              <p className="mb-2"><strong>Content Responsibility:</strong> Startmodo LLC</p>
              <p className="mb-2"><strong>Data Protection Officer:</strong> privacy@startmodo.com</p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Compliance</h2>
            <p className="mb-4">
              Startmodo LLC complies with all applicable US federal and state regulations 
              regarding business operations, data protection, and consumer rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
            <p className="mb-4">
              Our website may contain links to external websites. We are not responsible for the 
              content, privacy practices, or availability of external sites.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Imprint</h2>
            <p className="mb-4">
              This imprint may be updated from time to time to reflect changes in our business 
              or legal requirements. The current version is always available on our website.
            </p>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-growmodo-blue">Questions or Concerns?</h3>
              <p className="text-sm text-gray-700 mb-4">
                If you have any questions about this imprint or need additional legal information, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <span className="text-sm"><strong>Email:</strong> legal@startmodo.com</span>
                <span className="text-sm"><strong>Phone:</strong> Tel: +12163078940</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Imprint;
