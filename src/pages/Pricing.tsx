import { useState } from "react";
import { Check, Infinity, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Pricing = () => {
  const [selectedTalents, setSelectedTalents] = useState<number | "more">(2);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPricing = () => {
    switch (selectedTalents) {
      case 1: return "$1995";
      case 2: return "$3990";
      case 4: return "$9975";
      case 5: return "$9975";
      default: return "Custom";
    }
  };

  const getButtonText = () => {
    return selectedTalents === "more" ? "Contact Us →" : "Subscribe Now →";
  };

  const faqData = [
    {
      question: "What is Startmodo?",
      answer: "Startmodo is a comprehensive recruiting and delivery platform that connects businesses with top remote design and development talent. We provide unlimited design requests, development projects, and dedicated project management to help fast-moving agencies, marketing teams, and scale-ups accelerate their growth without the overhead of hiring in-house teams."
    },
    {
      question: "How do I request a new task or project?",
      answer: "Requesting new tasks is simple and streamlined. You can submit unlimited requests through our dedicated project management platform. Each request is reviewed by your assigned project manager who ensures proper scope definition, timeline estimation, and resource allocation. Projects are queued and worked on by our top-tier talents based on priority and complexity."
    },
    {
      question: "Do I communicate directly with the designer and developer?",
      answer: "While you have a dedicated project manager as your primary point of contact, we facilitate direct communication with our designers and developers when needed. This hybrid approach ensures clear communication while maintaining project efficiency and accountability. Your project manager coordinates all interactions to prevent miscommunication and ensure deliverables meet your expectations."
    },
    {
      question: "Can we communicate via Slack or MS Teams?",
      answer: "Absolutely! We integrate seamlessly with your existing communication tools including Slack, Microsoft Teams, Discord, and other popular platforms. Our project managers and talent can join your workspace channels to provide real-time updates, share progress, and collaborate directly with your internal team members."
    },
    {
      question: "How does your pricing work?",
      answer: "Our transparent pricing is based on the number of active talents working on your projects simultaneously. You can scale up or down anytime without contracts. Pricing includes unlimited design requests, unlimited development requests, unlimited revisions, dedicated project management, daily progress reports, and 100% ownership of all deliverables. No hidden fees or surprise charges."
    },
    {
      question: "What types of design and development services do you offer?",
      answer: "We provide comprehensive design and development services including web design, mobile app design, UI/UX design, branding, graphic design, front-end development, back-end development, full-stack development, e-commerce solutions, WordPress development, React/Vue/Angular applications, and custom software development."
    },
    {
      question: "How quickly can you start working on my projects?",
      answer: "We can typically start working on your projects within 24-48 hours of subscription. Our talent pool is pre-vetted and ready to be assigned based on your specific requirements. Your dedicated project manager will conduct an onboarding call to understand your needs, brand guidelines, and project priorities before work begins."
    },
    {
      question: "What is your revision policy?",
      answer: "We offer unlimited revisions on all projects. We believe in getting it right, and our goal is your complete satisfaction. Revisions are handled through the same streamlined process as initial requests, with clear feedback loops and progress tracking."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally across all time zones. Our distributed team and project management processes are designed to accommodate international collaboration, with flexible communication schedules and multilingual support when needed."
    },
    {
      question: "What happens if I'm not satisfied with the work?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with any deliverable, we'll work with you through unlimited revisions until it meets your expectations. In the rare case we cannot meet your requirements, we provide full refund protection for unsatisfactory work."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Predictable Pricing.<br />
            No Surprises.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the number of active talents working<br />
            on your requests at the same time:
          </p>
          
          {/* Talent Scale Selector */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-blue-500 mr-4 text-lg">Scale up<br />and down</span>
            <div className="flex items-center space-x-8">
              {[1, 2, 4, 5, "more"].map((num, index) => (
                <div key={num} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedTalents(num as number | "more")}>
                  <div className={`w-4 h-4 rounded-full mb-2 ${selectedTalents === num ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <span className={`text-base ${selectedTalents === num ? 'text-black' : 'text-gray-400'}`}>
                    {num === "more" ? "More" : num}
                  </span>
                  {index < 4 && (
                    <div 
                      className={`w-16 h-0.5 absolute mt-2 ${
                        typeof selectedTalents === 'number' && typeof num === 'number' && selectedTalents >= num 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300'
                      }`} 
                      style={{marginLeft: '2rem'}}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-3xl p-12 relative">
            <div className="absolute top-8 right-8 text-green-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-8 right-12 text-gray-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-6">All Inclusive</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  For fast-moving agencies, marketing teams & scale-ups who need 
                  access to reliable on-demand design & dev talents to move even faster.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Design Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Development Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Revisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Brands</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                      <span className="text-base">Dedicated Project Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </div>
                      <span className="text-base">Daily Updates & Progress Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⏸️</span>
                      </div>
                      <span className="text-base">Pause or Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔄</span>
                      </div>
                      <span className="text-base">Upgrade or Downgrade Anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-6xl font-bold mb-4">
                  {getPricing()}{selectedTalents !== "more" && <span className="text-2xl">/m</span>}
                </div>
                <Button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 mb-4">
                  {getButtonText()}
                </Button>
                <p className="text-sm text-gray-500">100% Satisfaction Guarantee</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚙️</span>
              </div>
              <span className="text-base text-gray-600">Need a Maintenance Plan?</span>
              <button className="text-blue-500 ml-2">↓</button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plan Section */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-3xl p-12 relative">
            <div className="absolute top-8 right-8 text-green-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-8 right-12 text-gray-400">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-6">Maintenance</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  For businesses of all sizes that need a hands-on team to keep their 
                  websites secure and up-to-date without headaches.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Maintenance Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Security Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Infinity className="w-5 h-5 text-blue-500" />
                      <span className="text-base">Unlimited Content Update Requests</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📋</span>
                      </div>
                      <span className="text-base">One Active Request at a Time</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                      <span className="text-base">Dedicated Project Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </div>
                      <span className="text-base">Weekly Updates & Progress Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⏸️</span>
                      </div>
                      <span className="text-base">Pause or Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔄</span>
                      </div>
                      <span className="text-base">Upgrade or Downgrade Anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-6xl font-bold mb-4">$395<span className="text-2xl">/m</span></div>
                <Button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 mb-4">
                  Subscribe Now →
                </Button>
                <p className="text-sm text-gray-500">100% Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold mb-2">7x</div>
              <p className="text-lg text-gray-600">Faster Than Hiring<br />In-House</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">66%</div>
              <p className="text-lg text-gray-600">Less Employment<br />Cost per Month</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">9.4</div>
              <p className="text-lg text-gray-600">Average<br />Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            We Help You Grow Your Business<br />
            Without Growing Your Team
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Startmodo makes outsourcing design and development tasks a no-brainer by 
            eliminating the most common pain points of the industry.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Scalable Remote Workforce</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Top 3% Designers & Developers</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">You Own 100% of Everything We Do</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Dedicated Project Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">Daily Updates (Monday to Friday)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-500" />
                <span className="text-lg">No Contract. Cancel Anytime.</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Long Hiring Process</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Disappearing Remote Workers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Dependency on Your Agency for Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Big Lump-sum Payment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Long-Term Commitment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-red-500">✕</div>
                <span className="text-lg">No Endless Waiting for a Response by Your Web Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h4 className="text-lg font-semibold">{faq.question}</h4>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 text-lg">
              See All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a call with our experts and find out if we<br />
            are a great match for each other.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
