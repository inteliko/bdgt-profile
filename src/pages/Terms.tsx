
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Startmodo's services, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Startmodo provides design and development subscription services, connecting clients with 
              vetted remote designers and developers. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>UI/UX Design services</li>
              <li>Web and mobile development</li>
              <li>Brand design and identity</li>
              <li>Project management services</li>
              <li>Quality assurance and revisions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscription Terms</h2>
            <p className="mb-4">
              Our services are provided on a subscription basis. Subscriptions automatically renew unless cancelled 
              by the user. You may cancel your subscription at any time through your account dashboard or by 
              contacting our support team.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              Payment is required in advance for all subscription plans. All fees are non-refundable except as 
              required by law. We reserve the right to change our pricing at any time, with advance notice to 
              existing subscribers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All work created through our platform becomes the intellectual property of the client upon payment. 
              Startmodo retains the right to showcase completed work in our portfolio and marketing materials, 
              unless specifically requested otherwise by the client.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Quality Guarantee</h2>
            <p className="mb-4">
              We stand behind the quality of our work. If you're not satisfied with a deliverable, we offer 
              unlimited revisions within the scope of the original brief. If we cannot meet your requirements, 
              we will provide a full refund for that specific project.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Startmodo's liability is limited to the amount paid for services. We are not responsible 
              for any indirect, incidental, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Confidentiality</h2>
            <p className="mb-4">
              We maintain strict confidentiality regarding all client projects and information. All team members 
              and contractors sign comprehensive non-disclosure agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p className="mb-4">
              Either party may terminate the service agreement at any time. Upon termination, you will retain 
              access to your account and completed work until the end of your current billing period.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of significant 
              changes via email and through our platform.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mb-2">Startmodo LLC</p>
            <p className="mb-2">Rocky Mountain Registered Agent</p>
            <p className="mb-2">1621 CENTRAL AVE STE M</p>
            <p className="mb-2">CHEYENNE, WY 82001</p>
            <p className="mb-2">Email: legal@startmodo.com</p>
            <p className="mb-2">Phone: Tel: 307-369-0696</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
