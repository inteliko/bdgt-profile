import { useState, useEffect, useRef } from "react";
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
      description: "Collaboration is a crucial part of our talent community at Startmodo. Therefore, we believe that other core team members should have a meaningful say in the hiring process through structured panel interviews and peer evaluations."
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
      icon: <Clock className="w-5 h-5" />,
      title: "Long-Term Engagement",
      description: "We don't work with random freelancers who we pull in for a project and then let go. We believe that people work best when they have a stable work environment with clear career advancement opportunities and long-term project commitments that allow for deep expertise development."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Fair Wages",
      description: "Most of our talents live in countries with lower living costs than the US or Europe. However, we make sure that they receive competitive compensation that reflects their skills and contributions, with regular performance-based rate increases and transparent salary progression paths."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Health Benefits",
      description: "Taking comprehensive care of our talents is as important as providing excellent service to our customers. We provide long-term contractors access to health benefits, wellness programs, and mental health support to ensure their overall well-being and work-life balance."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Remote Social Events",
      description: "Working from home has many benefits but also apparent drawbacks, like isolation and loneliness. We make it a priority that our talents feel part of a vibrant community through regular virtual team building events, skill sharing sessions, and fun social interactions."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "8.6 eNPS Score",
      description: "A significant portion of our talent community growth has happened through referrals from our current team members. It turns out that A-players tend to attract more A-players, and our monthly team satisfaction surveys consistently reflect this positive culture and high engagement levels."
    },
    {
      icon: <Shield className="w-5 h-5" />,
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
    "/lovable-uploads/be5f29b5-34d7-41b8-8ff4-a7e867bf2770.png",
    "/lovable-uploads/58083057-84a1-473f-adfe-c44f63d68016.png", 
    "/lovable-uploads/talent7.jpg",
    "/lovable-uploads/7596d42d-8ba8-4fc6-84e7-e0b36f5fd049.png",
    "/lovable-uploads/0bb5d39a-0f1c-405f-8d5b-fbc8f34bc3a0.png",
    "/lovable-uploads/rahin-editor.jpg",
    "/lovable-uploads/designer.png",
    "/lovable-uploads/e3679983-32c7-4d6f-bd01-bc7873910659.png"
  ];

  // Marquee component used for skill tags auto-scrolling (full-width, 3 alternating lines)
  const Marquee = ({ text }: { text: string }) => {
    const [tick, setTick] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setTick((t) => t + 1), 6000);
      return () => clearInterval(interval);
    }, []);

    // Make the marquee much slower so it's easier to read
    const baseDuration = Math.max(40, Math.min(120, Math.floor(text.length / 3)));

    const FullWidthWrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    );

    const Track = ({ dir, duration }: { dir: 'left' | 'right'; duration: number }) => {
      const cls = dir === 'left' ? 'scrolling-content' : 'scrolling-content-right';
      return (
        <div className="scrolling-wrapper py-2">
          <div className={cls} style={{ ['--marquee-duration' as any]: `${duration}s` }}>
            <div className="inline-block font-medium mr-9 text-black" style={{ color: '#000' }}>{text}</div>
            <div className="inline-block font-medium mr-9 text-black" style={{ color: '#000' }}>{text}</div>
          </div>
        </div>
      );
    };

    return (
      <div className="mt-8 mb-8">
        <FullWidthWrapper>
          <Track dir={tick % 2 === 0 ? 'left' : 'right'} duration={baseDuration} />
        </FullWidthWrapper>

        <FullWidthWrapper>
          <Track dir={tick % 2 === 0 ? 'right' : 'left'} duration={Math.max(14, baseDuration - 6)} />
        </FullWidthWrapper>

        <FullWidthWrapper>
          <Track dir={tick % 2 === 0 ? 'left' : 'right'} duration={Math.max(20, baseDuration + 6)} />
        </FullWidthWrapper>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Great Designers & Developers<br />
              Don't Grow on Trees.<br />
              <span className="text-growmodo-green">They Grow at Startmodo.</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Startmodo uses a community-first approach to find & manage exceptional talents 
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


          

              {/* Visual Talent Showcase Cluster (positioned tiles to mimic reference) */}
              <div className="relative mb-16">
                <div className="max-w-5xl mx-auto">
                  <div className="relative h-64 md:h-80 lg:h-[360px]">
                    {/* Define positioned tiles */}
                    {(
                      [
                        { left: '8%', top: '20%', size: 72, type: 'avatar', imgIndex: 1 },
                        { left: '22%', top: '6%', size: 96, type: 'avatar', imgIndex: 2, ring: true },
                        { left: '34%', top: '14%', size: 70, type: 'card', card: 'chart' },
                        { left: '46%', top: '4%', size: 96, type: 'avatar', imgIndex: 3 },
                        { left: '60%', top: '18%', size: 100, type: 'card', card: 'stat' },
                        { left: '72%', top: '10%', size: 80, type: 'avatar', imgIndex: 4 },
                        { left: '14%', top: '36%', size: 84, type: 'avatar', imgIndex: 5 },
                        { left: '30%', top: '40%', size: 120, type: 'card', card: 'map' },
                        { left: '50%', top: '36%', size: 100, type: 'avatar', imgIndex: 6 },
                        { left: '66%', top: '36%', size: 84, type: 'avatar', imgIndex: 7 },
                        { left: '78%', top: '30%', size: 72, type: 'avatar', imgIndex: 8 },
                        { left: '40%', top: '54%', size: 110, type: 'card', card: 'panel' },
                      
                      ]
                    ).map((tile, i) => (
                      <div
                        key={i}
                        className="absolute rounded-lg shadow-2xl flex items-center justify-center overflow-hidden"
                        style={{ left: tile.left, top: tile.top, width: tile.size, height: tile.size, transform: 'translate(-50%,-50%)' }}
                      >
                        {tile.type === 'avatar' ? (
                          <div className="w-full h-full rounded-lg bg-black/60 border border-white/6 flex items-center justify-center">
                            <img
                              src={talentImages[tile.imgIndex % talentImages.length]}
                              alt={`Talent ${tile.imgIndex}`}
                              className={`object-cover ${tile.ring ? 'rounded-lg ring-4 ring-[#00f2a6]' : 'rounded-lg'}`} 
                              style={{ width: '100%', height: '100%' }}
                            />
                          </div>
                        ) : (
                          // simple card placeholders (chart / stat / panel)
                          (tile.card === 'chart') ? (
                            <div className="w-full h-full bg-white rounded-lg p-2 flex items-center justify-center">
                              <svg viewBox="0 0 100 60" className="w-full h-full">
                                <rect width="100" height="60" rx="6" fill="#ffffffff" />
                                <polyline points="6,48 24,36 42,40 60,24 78,28 94,18" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          ) : tile.card === 'stat' ? (
                            <div className="w-full h-full bg-black rounded-lg p-2 flex flex-col justify-center">
                              <div className="text-2xl font-bold text-white">70%</div>
                              <div className="text-xs text-gray-500">Monthly Growth</div>
                            </div>
                          ) : tile.card === 'map' ? (
                            <div className="w-full h-full bg-white rounded-lg p-2 flex items-center justify-center">
                              <div className="w-full h-full bg-black rounded-md flex items-center justify-center text-white font-semibold">Top Talents</div>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-white rounded-lg p-2"></div>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Process */}
      <section className="bg-black text-white py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - heading + CTA */}
            <div className="lg:pr-12">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Our Comprehensive Screening
                <br />
                &amp; Talent Development Process
              </h2>
              <p className="text-lg mb-8 max-w-xl">
                We've designed a thorough 6‑step process to ensure only the most qualified,
                committed, and culturally aligned professionals join our talent community.
              </p>
              <button className="inline-block bg-[#3b82f6] hover:bg-[#2b6be6] text-white rounded-md px-6 py-3 font-medium">
                Join Talent Community
              </button>
            </div>

            {/* Right - stacked white/vector cards (on black bg) */}
            <div className="space-y-6 relative">
              {/* Card 1 - Skill Review (slight rotation for visual) */}
              <div className="bg-white text-gray-800 rounded-xl shadow-xl p-5 max-w-md transform -rotate-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                    {/* shield svg */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2l7 3v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" fill="#fff"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Skill Review</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Every applicant completes a questionnaire, rates their skills, and provides a portfolio for our team to review.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Intro Call (center card / larger vector) */}
              <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-6 max-w-xl mx-auto transform rotate-1">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-md bg-[#06b6d4] flex items-center justify-center flex-shrink-0">
                    {/* person svg */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="8" r="3" fill="#fff"/>
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#fff"/>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Intro Call</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Our recruitment manager schedules a detailed intro call to dive deeper into technical knowledge and culture fit.
                    </p>
                  </div>

                  {/* small chart/vector preview on the right */}
                  <div className="w-28 h-18 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg width="80" height="44" viewBox="0 0 80 44" fill="none" aria-hidden>
                      <rect x="4" y="8" width="10" height="28" rx="2" fill="#e6eefc"/>
                      <rect x="20" y="2" width="10" height="34" rx="2" fill="#c3ddff"/>
                      <rect x="36" y="12" width="10" height="24" rx="2" fill="#7aa9ff"/>
                      <rect x="52" y="6" width="10" height="30" rx="2" fill="#2b6be6"/>
                      <rect x="68" y="16" width="8" height="20" rx="2" fill="#1e40af"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 3 - Trial Project */}
              <div className="bg-white text-gray-800 rounded-xl shadow-xl p-5 max-w-md transform -rotate-1 ml-auto">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-[#f59e0b] flex items-center justify-center flex-shrink-0">
                    {/* target svg */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="5" fill="#fff"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Trial Project</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      We assign a carefully designed test project to evaluate how candidates work under real conditions and meet deadlines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Expert Panel (smaller, offset) */}
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-5 max-w-sm transform rotate-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-[#10b981] flex items-center justify-center flex-shrink-0">
                    {/* group svg */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6z" fill="#fff"/>
                      <path d="M2 20a6 3 0 0114 0H2z" fill="#fff" opacity="0.9"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Panel</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Structured panel interviews and peer evaluations ensure collaborative hiring decisions and quality control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-black">Cherry-Pick Skills On-Demand</h2>
          <p className="text-2xl text-gray-600 mb-12">
            Your dedicated Project Manager delegates work on a task-by-task basis and ensures a qualified 
            expert gets the job done efficiently, even if you need these specialized skills for just one day.
          </p>

          {/* Modern Infinite Loop Skills Scroller */}
          <div className="relative w-full overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-4 px-4">
                {[
                  'No-Code Apps', 'Elementor Website', 'Landing Pages', 'Custom CSS', 'Shopify Development', 'Vue.js', 'Presentation Design',
                  'Logo Design', 'Google Analytics', 'Sales Funnels', 'Motion Graphics', 'UI/UX Design', 'Membership Sites', 'Tailwind CSS',
                  'Email Templates', 'HTML', 'Mobile App Design', 'WordPress', 'Figma', 'Automation', 'Branding', 'Online Course Setup',
                  'Sitemap Creation', 'Web App Design', 'Zapier', 'Site Speed Optimization', 'React Development', 'Python Programming',
                  'Database Design', 'API Integration', 'E-commerce Solutions', 'SEO Optimization', 'Content Management', 'Digital Marketing'
                ].map((skill, index) => (
                  <span key={index} className={`text-lg font-medium px-3 py-2 rounded-full transition-colors ${
                    ['UI/UX Design', 'React Development', 'Python Programming', 'SEO Optimization'].includes(skill) 
                      ? 'bg-growmodo-green/10 text-growmodo-green border border-growmodo-green/20' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-4 px-4">
                {[
                  'No-Code Apps', 'Elementor Website', 'Landing Pages', 'Custom CSS', 'Shopify Development', 'Vue.js', 'Presentation Design',
                  'Logo Design', 'Google Analytics', 'Sales Funnels', 'Motion Graphics', 'UI/UX Design', 'Membership Sites', 'Tailwind CSS',
                  'Email Templates', 'HTML', 'Mobile App Design', 'WordPress', 'Figma', 'Automation', 'Branding', 'Online Course Setup',
                  'Sitemap Creation', 'Web App Design', 'Zapier', 'Site Speed Optimization', 'React Development', 'Python Programming',
                  'Database Design', 'API Integration', 'E-commerce Solutions', 'SEO Optimization', 'Content Management', 'Digital Marketing'
                ].map((skill, index) => (
                  <span key={`dup-${index}`} className={`text-lg font-medium px-3 py-2 rounded-full transition-colors ${
                    ['UI/UX Design', 'React Development', 'Python Programming', 'SEO Optimization'].includes(skill) 
                      ? 'bg-growmodo-green/10 text-growmodo-green border border-growmodo-green/20' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Growth Maps Section (updated to match reference collage) */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: collage of vector/chart card, small meeting card, profile stat card */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[520px] h-[420px]">
                {/* Big chart card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[340px] h-[280px] bg-white rounded-xl shadow-2xl p-4">
                  <div className="text-sm text-gray-500 mb-2">Monthly Growth Movement</div>
                  <svg viewBox="0 0 360 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monthly Growth Movement">
                    <rect width="100%" height="100%" rx="8" fill="#ffffff" />
                    <g transform="translate(28,30)" fill="none">
                      <line x1="0" y1="15" x2="320" y2="15" stroke="#e6eefc" strokeWidth="10" strokeLinecap="round" opacity="0.45" />
                      <line x1="0" y1="45" x2="230" y2="45" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
                      <line x1="0" y1="75" x2="300" y2="75" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
                      <line x1="0" y1="105" x2="180" y2="105" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
                      <line x1="0" y1="135" x2="320" y2="135" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>

                {/* Small meeting card - top-right */}
                <div className="absolute right-6 top-6 w-40 bg-white text-gray-900 rounded-lg shadow-lg p-3 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img src={talentImages[0]} alt="a" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src={talentImages[1]} alt="b" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src={talentImages[2]} alt="c" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                  </div>
                  <div className="text-sm font-semibold">Design Review</div>
                  <button className="mt-1 bg-gray-100 text-gray-800 rounded-md px-3 py-1 text-sm">Join Meeting</button>
                </div>

                {/* Profile stat card - bottom-left */}
                <div className="absolute left-8 bottom-6 w-56 bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-blue-500 py-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white overflow-hidden flex items-center justify-center">
                      <img src={talentImages[3]} alt="profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-2xl font-bold">86%</div>
                    <div className="text-xs text-gray-500 mt-1">Growth Performance</div>
                    <div className="text-sm font-semibold mt-3">Advance UI Designer</div>
                    <div className="text-xs text-gray-500 mt-2">Courses Taken <strong className="text-black">10</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: headline, paragraph, and check list */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">We Develop Growth Maps Instead of Believing the Talent Myth</h2>
              <p className="text-lg mb-8 max-w-prose">In a fast-moving industry like ours, recruiting great talent is not enough anymore. We have to invest in the development of new skills and give our designers & developers a clear path for their careers.</p>

              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-200">
                  <span className="mt-1 text-green-400 text-xl">✓</span>
                  <span>Monthly tracked skill and work quality improvements</span>
                </li>
                <li className="flex items-start gap-4 text-gray-200">
                  <span className="mt-1 text-green-400 text-xl">✓</span>
                  <span>Weekly peer-to-peer coaching sessions</span>
                </li>
                <li className="flex items-start gap-4 text-gray-200">
                  <span className="mt-1 text-green-400 text-xl">✓</span>
                  <span>Access to the latest online courses to learn new tech and trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-black">
            <span className="text-black">Outsource</span>{' '}
            <span className="text-growmodo-blue">Sustainably</span>
            <br />
            <span className="text-black">Without the Bad Taste</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto">
            Startmodo aims to connect fast-growing companies with ambitious 
            remote talent while creating sustainable win-win situations and exceptional work 
            experiences for both parties through our comprehensive support system.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-left p-6 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 rounded-md border border-gray-100 mb-4 flex items-center justify-center text-growmodo-blue">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Way Section - Now Interactive */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            The Traditional Way of Hiring<br />
            Creative Freelancers is Broken
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
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
