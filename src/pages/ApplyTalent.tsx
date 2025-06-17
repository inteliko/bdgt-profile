
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ApplyTalent = () => {
  const benefits = [
    "Work remotely from anywhere",
    "Competitive compensation",
    "Flexible working hours",
    "Access to latest tools and technologies",
    "Continuous learning opportunities",
    "Supportive team environment",
    "Career growth opportunities",
    "Work on diverse projects"
  ];

  const requirements = [
    "3+ years of relevant experience",
    "Strong portfolio showcasing your work",
    "Excellent communication skills",
    "Ability to work independently",
    "Proficiency in industry-standard tools",
    "Problem-solving mindset",
    "Attention to detail",
    "Collaborative attitude"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Talent Network
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Work with amazing clients while being part of a supportive community of designers and developers.
          </p>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-growmodo-green flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">What We're Looking For</h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-growmodo-blue flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senior UI/UX Designer</h3>
                  <p className="text-gray-600">Remote • Full-time</p>
                </div>
                <Button className="bg-growmodo-blue text-white">Apply Now</Button>
              </div>
              <p className="text-gray-700">
                We're looking for a creative UI/UX designer to join our team and help create amazing digital experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-gray-600">Remote • Full-time</p>
                </div>
                <Button className="bg-growmodo-blue text-white">Apply Now</Button>
              </div>
              <p className="text-gray-700">
                Join our development team and help build cutting-edge web applications using modern technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brand Designer</h3>
                  <p className="text-gray-600">Remote • Part-time</p>
                </div>
                <Button className="bg-growmodo-blue text-white">Apply Now</Button>
              </div>
              <p className="text-gray-700">
                Help create compelling brand identities and visual designs for our diverse range of clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Apply</h4>
              <p className="text-gray-600 text-sm">Submit your application and portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Review</h4>
              <p className="text-gray-600 text-sm">We review your application and work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Interview</h4>
              <p className="text-gray-600 text-sm">Video call to get to know each other</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Welcome</h4>
              <p className="text-gray-600 text-sm">Join our team and start working!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your application today and become part of our growing community.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg">
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyTalent;
