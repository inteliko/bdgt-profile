import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Clock, Users, Shield, TrendingUp, Heart, Target, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Talents = () => {
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const screeningProcess = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Skill Review",
      description: "Every applicant completes a comprehensive questionnaire, rates their skills in various design or coding disciplines, and provides a portfolio link to previous projects that our expert team thoroughly reviews before moving forward in the process."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Intro Call",
      description: "Our experienced recruitment manager schedules a detailed intro call to get to know the applicant personally, dive deeper into their technical knowledge, and carefully evaluates their communication skills and culture fit with our community values."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Trial Project",
      description: "We assign the applicant a carefully designed test project to evaluate how they work under real conditions, assess their attention to detail, problem-solving abilities, and capacity to follow guidelines while meeting strict deadlines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Panel",
      description: "Collaboration is a crucial part of our talent community at BD Global Technology. Therefore, we believe that other core team members should have a meaningful say in the hiring process through structured panel interviews and peer evaluations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "5-Day Bootcamp",
      description: "Before allowing a talent to work on customer projects, every new hire goes through intensive interactive onboarding training, completes specialized online courses, and receives personalized 1-to-1 coaching sessions with our quality management team."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ongoing Peer-to-Peer Training",
      description: "A crucial part of our success strategy is that we don't only seek to find the best designers & developers but also identify raw diamonds and help them shine. We believe in continuous growth and peer mentorship programs."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Long-Term Engagement",
      description: "We don't work with random freelancers who we pull in for a project and then let go. We believe that people work best when they have a stable work environment with clear career advancement opportunities and long-term project commitments that allow for deep expertise development."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fair Wages",
      description: "Most of our talents live in countries with lower living costs than the US or Europe. However, we make sure that they receive competitive compensation that reflects their skills and contributions, with regular performance-based rate increases and transparent salary progression paths."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Benefits",
      description: "Taking comprehensive care of our talents is as important as providing excellent service to our customers. We provide long-term contractors access to health benefits, wellness programs, and mental health support to ensure their overall well-being and work-life balance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Remote Social Events",
      description: "Working from home has many benefits but also apparent drawbacks, like isolation and loneliness. We make it a priority that our talents feel part of a vibrant community through regular virtual team building events, skill sharing sessions, and fun social interactions."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "8.6 eNPS Score",
      description: "A significant portion of our talent community growth has happened through referrals from our current team members. It turns out that A-players tend to attract more A-players, and our monthly team satisfaction surveys consistently reflect this positive culture and high engagement levels."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "<1% Turnover",
      description: "Our rigorous applicant screening process, comprehensive skill development programs, and strong community platform have helped us build lasting relationships with talents who previously jumped from one client to the next, creating unprecedented stability in the industry."
    }
  ];

  const faqs = [
    {
      question: "How do you vet and select your talents?",
      answer: "Our rigorous screening process includes comprehensive skill assessments, portfolio reviews, technical interviews, trial projects, expert panel evaluations, and intensive onboarding programs. Only the top 3% of applicants successfully complete our multi-stage evaluation process, ensuring we maintain the highest quality standards."
    },
    {
      question: "What types of designers and developers do you have?",
      answer: "We have specialists across the full spectrum of digital disciplines including UI/UX design, web development, mobile app development, brand design, motion graphics, product design, frontend/backend development, DevOps, data science, and emerging technologies. All our talents are carefully matched to specific project requirements and client needs."
    },
    {
      question: "How quickly can I get matched with a talent?",
      answer: "Most clients are successfully matched with suitable talents within 24-48 hours of submitting their requirements. We maintain a ready pool of pre-vetted professionals across different time zones and specializations to ensure quick turnaround times without ever compromising on quality or fit."
    },
    {
      question: "Can I work with the same talent for multiple projects?",
      answer: "Absolutely! We strongly encourage long-term relationships between clients and talents. Once you find a talent that works well with your team, understands your brand values, and delivers consistently excellent results, you can continue working with them on future projects with priority booking and preferential rates."
    },
    {
      question: "What if I'm not satisfied with the work quality?",
      answer: "We offer unlimited revisions on all deliverables and have a comprehensive satisfaction guarantee. If you're not completely happy with the initial talent match, we'll find you a different talent at no extra cost. Our dedicated project managers ensure rigorous quality control throughout every project phase."
    },
    {
      question: "Do your talents work in specific time zones?",
      answer: "Our global talent pool spans multiple time zones across North America, Europe, Asia, and other regions. We can strategically match you with talents who have overlapping working hours with your team to ensure smooth communication, real-time collaboration, and efficient project progression."
    },
    {
      question: "What's included in the talent management?",
      answer: "We handle all HR responsibilities including recruitment, onboarding, training, performance management, benefits administration, and administrative tasks. You get access to world-class talent without any of the overhead, legal complexities, or management burden of hiring full-time employees."
    },
    {
      question: "How do you ensure IP and data security?",
      answer: "All our talents sign comprehensive NDAs and strict security agreements before starting any work. We use enterprise-grade secure collaboration tools, implement robust data protection protocols, and have stringent procedures for handling sensitive information and intellectual property throughout the entire project lifecycle."
    }
  ];

  const stats = [
    { number: "1,000+", label: "Professionals in Talent Pool" },
    { number: "155+", label: "Design & Tech Skill Categories" },
    { number: "1", label: "All-In-One Subscription" },
    { number: "24-48hrs", label: "Average Matching Time" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "3%", label: "Talent Acceptance Rate" }
  ];

  const traditionalProblems = [
    {
      title: "You Want Flexibility. They Want Security",
      content: "Companies need the flexibility to scale teams up and down based on project demands, while freelancers seek stable, long-term work arrangements. This fundamental mismatch creates tension and uncertainty for both parties."
    },
    {
      title: "You Want Expertise. They Want to Learn",
      content: "Businesses require immediate expertise and proven skills to deliver quality results, but many freelancers are still developing their capabilities and see each project as a learning opportunity rather than a delivery commitment."
    },
    {
      title: "You Want Quick Dialogue. They Want to Focus",
      content: "Fast-moving projects demand rapid communication and quick responses to questions, while creative professionals need uninterrupted focus time to produce their best work. This creates a communication dilemma that frustrates both sides.",
      solution: {
        title: "Solution: Dedicated project managers and clear communication protocols",
        description: "Communication is probably the most common reason for a frustrating experience with remote freelancers. Nevertheless, responding to every client message on time while trying to maintain deep focus and deliver quality work is extremely challenging."
      }
    },
    {
      title: "You Want to Pay Less. They Want Appreciation",
      content: "Budget-conscious companies often seek the lowest possible rates, while talented professionals want fair compensation that reflects their skills, experience, and the value they bring to projects."
    },
    {
      title: "You Want Finished Projects. They Want More Hours",
      content: "Clients expect efficient project completion within agreed timelines, but some freelancers may unconsciously extend work to maximize billable hours, leading to scope creep and budget overruns."
    },
    {
      title: "You Want Consistency. They Want Variety",
      content: "Companies benefit from consistent quality, processes, and team dynamics across projects, while many freelancers prefer diverse work that keeps them engaged and helps them build varied portfolios."
    }
  ];

  // Sample talent images - using placeholder images that represent diverse professionals
  const talentImages = [
    "/lovable-uploads/68e3efce-9f90-461b-b9a4-bb323c5dc4f4.png",
    "/lovable-uploads/58083057-84a1-473f-adfe-c44f63d68016.png", 
    "/lovable-uploads/98174431-d1e5-419a-8eed-acd6cbca6716.png",
    "/lovable-uploads/566bc442-6476-465a-8511-7e28ed062cf6.png",
    "/lovable-uploads/4e1fc28b-dfb1-4db8-91a0-a2e0d51b1d2b.png",
    "/lovable-uploads/7596d42d-8ba8-4fc6-84e7-e0b36f5fd049.png",
    "/lovable-uploads/42bc35cf-64cd-49d8-a36c-b34ac31583a3.png",
    "/lovable-uploads/e3679983-32c7-4d6f-bd01-bc7873910659.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-growmodo-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Great Designers & Developers<br />
              Don't Grow on Trees.<br />
              <span className="text-growmodo-green">They Grow at BD Global Technology.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              BD Global Technology uses a community-first approach to find & manage exceptional talents 
              and continuously invests in their skill development to help them accelerate their 
              careers while working with progressive brands worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100">
                Join Talent Community
              </Button>
              <Link to="/pricing">
                <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-100">
                  See Plans & Pricing
                </Button>
              </Link>
            </div>
          </div>


          

          {/* Visual Talent Showcase Grid */}
          <div className="relative mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {Array.from({ length: 24 }).map((_, index) => (
                <div key={index} className="relative">
                  <div className="w-full aspect-square bg-gray-700 rounded-lg overflow-hidden">
                    {/* Add actual talent photos for highlighted positions */}
                    {[2, 7, 11, 18, 21].includes(index) ? (
                      <img 
                        src={talentImages[Math.floor(Math.random() * talentImages.length)]} 
                        alt={`Talent ${index}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                    )}
                  </div>
                  {/* Overlay some with data visualizations */}
                  {index === 5 && (
                    <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg p-3 flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-2">Monthly Growth Movement</div>
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-500 rounded w-3/4"></div>
                        <div className="h-1 bg-blue-500 rounded w-full"></div>
                        <div className="h-1 bg-blue-500 rounded w-1/2"></div>
                      </div>
                    </div>
                  )}
                  {index === 15 && (
                    <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg p-3 flex flex-col justify-center">
                      <div className="text-2xl font-bold text-blue-600">70%</div>
                      <div className="text-xs text-gray-600">Growth</div>
                    </div>
                  )}
                  {index === 9 && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-95 rounded-lg p-3 flex flex-col justify-center">
                      <div className="text-xs text-white mb-1">Developers Growth Map</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-6 bg-white rounded"></div>
                        <div className="w-2 h-8 bg-white rounded"></div>
                        <div className="w-2 h-4 bg-white rounded"></div>
                        <div className="w-2 h-10 bg-white rounded"></div>
                      </div>
                    </div>
                  )}
                  {/* Add coding/development related visuals */}
                  {index === 13 && (
                    <div className="absolute inset-0 bg-green-500 bg-opacity-95 rounded-lg p-3 flex flex-col justify-center">
                      <div className="text-xs text-white mb-1">Code Quality Score</div>
                      <div className="text-lg font-bold text-white">95%</div>
                    </div>
                  )}
                  {index === 19 && (
                    <div className="absolute inset-0 bg-purple-500 bg-opacity-95 rounded-lg p-3 flex flex-col justify-center">
                      <div className="text-xs text-white mb-1">Design Systems</div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-full h-2 bg-white rounded"></div>
                        <div className="w-full h-2 bg-white rounded"></div>
                        <div className="w-full h-2 bg-white rounded"></div>
                        <div className="w-full h-2 bg-white rounded"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-growmodo-green mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Comprehensive Screening &<br />
                Talent Development Process
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We've designed a thorough 6-step process to ensure only the most qualified, 
                committed, and culturally aligned professionals join our talent community.
              </p>
              <Button className="bg-growmodo-blue text-white px-8 py-3 mb-8">
                Join Talent Community
              </Button>
            </div>

            <div className="space-y-8">
              {screeningProcess.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-growmodo-blue rounded-lg flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Cherry-Pick Skills On-Demand</h2>
          <p className="text-xl text-gray-600 mb-12">
            Your dedicated Project Manager delegates work on a task-by-task basis and ensures a qualified 
            expert gets the job done efficiently, even if you need these specialized skills for just one day.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-blue-600 text-base leading-loose">
            {[
              'No-Code Apps', 'Elementor Website', 'Landing Pages', 'Custom CSS', 'Shopify Development', 'Vue.js', 'Presentation Design',
              'Logo Design', 'Google Analytics', 'Sales Funnels', 'Motion Graphics', 'UI/UX Design', 'Membership Sites', 'Tailwind CSS',
              'Email Templates', 'HTML', 'Mobile App Design', 'WordPress', 'Figma', 'Automation', 'Branding', 'Online Course Setup',
              'Sitemap Creation', 'Web App Design', 'Zapier', 'Site Speed Optimization', 'React Development', 'Python Programming',
              'Database Design', 'API Integration', 'E-commerce Solutions', 'SEO Optimization', 'Content Management', 'Digital Marketing'
            ].join(' • ')}
          </div>

        </div>
      </section>

      {/* Growth Maps Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-growmodo-green text-sm mb-4">📈 Monthly Growth Movement</div>
                <div className="space-y-3 mb-6">
                  <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-500 rounded w-full"></div>
                  <div className="h-2 bg-blue-500 rounded w-1/2"></div>
                  <div className="h-2 bg-blue-500 rounded w-5/6"></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">Advanced Skills Review</div>
                      <div className="text-xs text-gray-500">Peer Mentoring Session</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-1">86%</div>
                  <div className="text-sm opacity-90">Growth Performance</div>
                  <div className="text-xs opacity-75 mt-1">Current Position: Senior Full Stack Developer</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We Develop Comprehensive Growth Maps Instead of Believing the Talent Myth
              </h2>
              <p className="text-gray-600 mb-8">
                In a rapidly evolving industry like ours, recruiting great talent is not enough anymore. 
                We must continuously invest in the development of new skills and provide our designers & developers 
                with clear, structured career advancement paths and ongoing learning opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Monthly tracked skill assessments and work quality improvements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Weekly peer-to-peer coaching sessions and knowledge sharing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Access to premium online courses for learning cutting-edge technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-growmodo-green" />
                  <span>Personalized career development plans with clear milestones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Outsource <span className="text-growmodo-blue">Sustainably</span><br />
            Without the Bad Taste
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
            BD Global Technology aims to connect fast-growing companies with ambitious 
            remote talent while creating sustainable win-win situations and exceptional work 
            experiences for both parties through our comprehensive support system.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-left p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mb-4 flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Way Section - Now Interactive */}
      <section className="py-20 px-6 bg-growmodo-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            The Traditional Way of Hiring<br />
            Creative Freelancers is Broken
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Company needs are often fundamentally misaligned with what their 
            remote contractors want and expect. This persistent misalignment leads to frustrating 
            experiences for both parties. It's time to completely rethink outsourcing.
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {traditionalProblems.map((problem, index) => (
              <div key={index} className="border border-gray-600 rounded-lg overflow-hidden">
                <div 
                  className="p-4 text-left cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 font-mono text-sm">0{index + 1}</span>
                      <span className="text-lg">{problem.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        expandedProblem === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
                
                {expandedProblem === index && (
                  <div className="px-4 pb-4 animate-accordion-down">
                    <div className="bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {problem.content}
                      </p>
                    </div>
                    
                    {problem.solution && (
                      <div className="bg-growmodo-green text-black p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5" />
                          <span className="font-semibold">{problem.solution.title}</span>
                        </div>
                        <p className="text-sm">
                          {problem.solution.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our talent community, processes, and what makes us different.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Your New Team Member Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Finally, you can hire vetted designers & developers on a 
            budget without sacrificing quality, reliability, or long-term commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white px-8 py-3 text-lg">
              See Plans & Pricing
            </Button>
            <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
              Join Talent Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Talents;
