import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentCarousel from "@/components/TalentCarousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const scrollingText = [
    'UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites',
    'Graphic Designer', 'Webflow Developer', 'Shopify Developer', 'WordPress Developer', 'UI/UX Designer', 
    'Front-End Developer', 'Back-End Developer', 'No-Code Developer'
  ];

  const companies = [
    "AMAZON", "ODOO", "YAMAHA", "BLUECHEM", "AZURE", 
    "SPOTIFY", "YOUTUBE", "ORACLE"
  ];

  const features = [
    {
      title: "Scalable Workforce",
      description: "Add a new team member to your projects whenever you need more hands. We make sure the additional designer or developer will be briefed on your brand and work preferences upfront."
    },
    {
      title: "Fully-Managed Team",
      description: "With more team members, there come more responsibilities that can make your working day more complex. We take care of replacing staff dropouts, skill training, team happiness, and health benefits."
    },
    {
      title: "Dedicated Project Manager",
      description: "To move projects to completion faster, you will need a person who knows your business and project requirements. Your PM briefs the talent and delivers the work."
    },
    {
      title: "Flexible Skill-Matching",
      description: "Your projects and your needs for specific skills will change, but it takes too long to hire or train your in-house team members if you need to get things done fast."
    },
    {
      title: "No Learning Curve",
      description: "We want to make delegating work feel as natural as possible to you. That's why we manage all your tasks and projects within Asana and don't let you learn a new platform."
    },
    {
      title: "Quick Communication",
      description: "Send feedback or questions via text messages or screen-recording videos in a few minutes, so you don't get stuck writing essay-long briefings."
    },
    {
      title: "Trained for Efficiency",
      description: "We are passionate about constantly improving our processes and how our talents complete tasks. With checklists & guidelines based on best practices, we reduce errors and improve turnaround times."
    },
    {
      title: "Predictable Pricing",
      description: "Forget salary negotiations and paid vacations. We even skip the setup and recruiting fees for you. You pay a fixed monthly rate for every additional talent without any long-term commitment."
    },
    {
      title: "IP & Data Security",
      description: "Working with a global workforce requires an extra layer of protection. We use the necessary tools in the background to make sure your sites are safe against hackers and spam."
    }
  ];

  const workItems = [
    {
      id: 1,
      image: "/projects/community-app.gif",
      title: "Mobile App Design Collection",
      description: "Various mobile app interfaces showcasing modern design principles"
    },
    {
      id: 2,
      image: "/projects/crm_screenshot.gif",
      title: "Web & Dashboard Designs",
      description: "Clean and functional web interfaces and dashboard designs"
    },
    {
      id: 3,
      image: "/projects/trix-rap.gif",
      title: "Brand Identity Materials",
      description: "Complete brand identity and print design solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-growmodo-blue/10 to-growmodo-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-growmodo-green/10 to-growmodo-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-growmodo-blue/5 to-growmodo-green/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Large centered logo */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-3xl group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-growmodo-green to-growmodo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white transform transition-transform duration-300 group-hover:scale-110 relative z-10">
                <path d="M6 6h7.5c2.485 0 4.5 2.015 4.5 4.5v0c0 2.485-2.015 4.5-4.5 4.5H7.5v3h4.5c2.485 0 4.5-2.015 4.5-4.5v0c0-2.485 2.015-4.5 4.5-4.5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="6" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="13.5" r="1.5" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Hire Your Whole Product<br />
            Team With a Few Clicks
          </h1>

          {/* Product Hunt Featured Upvote Badge */}
          <div className="flex justify-center mb-8">
            <a
              href="https://www.producthunt.com/products/bd-global-technology-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-bd&#0045;global&#0045;technology&#0045;2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=980254&theme=light&t=1750233762507"
                alt="Startmodo - Design & development team | Product Hunt"
                style={{ width: '250px', height: '54px' }}
              />
            </a>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get on-demand access to your own team of designers, developers & project 
            managers without the hassle of managing full-time employees.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/book-call" className="transform transition-all duration-300 hover:scale-105">
              <Button className="bg-gradient-to-r from-growmodo-blue to-growmodo-green text-white px-8 py-4 text-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">Book a Discovery Call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-green to-growmodo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link to="/showcase" className="transform transition-all duration-300 hover:scale-105">
              <Button variant="outline" className="border-2 border-growmodo-blue text-growmodo-blue px-8 py-4 text-xl font-medium hover:bg-growmodo-blue hover:text-white transition-all duration-300 rounded-lg relative overflow-hidden group">
                <span className="relative z-10">See Previous Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          {/* Features list */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span className="font-medium">Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span className="font-medium">Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-green" />
              <span className="font-medium">No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-growmodo-dark text-white py-20 px-6 relative overflow-hidden">
        {/* Vector graphics */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 400" fill="none">
            <path d="M0,200 Q250,50 500,200 T1000,200" stroke="white" strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="2" fill="white" opacity="0.4">
              <animate attributeName="cy" values="100;300;100" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="900" cy="300" r="3" fill="white" opacity="0.3">
              <animate attributeName="cx" values="900;100;900" dur="12s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Frustrated with Unreliable<br />
            Freelancers, But Don't Have the<br />
            Budget for an In-House <span className="text-growmodo-green">All Mandatory Talents</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-300 mb-6">
              There are more than enough places to find remote or in-house staff these days. However, finding the good ones is often time-consuming, nerve-racking, and expensive, especially when you need them now!
            </p>
            <p className="text-xl text-gray-300">
              Lucky you, we can fix that.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Endless Profile Scrolling</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Draining Interviews</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full">
              <Check className="w-5 h-5 text-growmodo-green" />
              <span>No Recruiting Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Trusted by fast-moving<br />
                brands & agencies worldwide
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-growmodo-blue">10,000+</span>
                  <span className="text-gray-600">Tasks delivered</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-growmodo-blue">200+</span>
                  <span className="text-gray-600">Projects nailed</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {companies.map((company, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <span className="text-gray-400 font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Carousel Section */}
      <TalentCarousel />

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            The Quickest Way To Onboard<br />
            Talent To Your Team
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Startmodo is a design & development subscription that takes the pain out of hiring creatives for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Subscribe</h3>
              <p className="text-gray-600">
                to a plan & request your first project or task.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Get matched</h3>
              <p className="text-gray-600">
                with a vetted designer or developer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-growmodo-green rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Receive</h3>
              <p className="text-gray-600">
                a project update or finished task within 24-48 hrs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made Super Simple Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Made <span className="text-growmodo-blue">Super</span> Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work as an extension of your in-house team and assemble the right team members for every task and project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-growmodo-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Fast Hiring in<br />24-48 Hrs
              </h3>
              <p className="mb-6">
                Add an additional team member with a click of a button.
              </p>
              <div className="flex -space-x-2 mb-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div className="w-12 h-12 bg-growmodo-green rounded-full"></div>
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Rigorously Vetted Experts</h3>
              <p className="text-gray-600 mb-6">
                We find, manage & keep training the best talents we can find.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">Roel F. Developer ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">PJ A. UI/UX Designer ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Fully-Managed Teams</h3>
              <p className="text-gray-600 mb-6">
                Your dedicated PM matches you with the right team members.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full"></div>
                  <span className="text-sm">Dave | Web Design Project</span>
                </div>
                <div className="text-xs text-gray-500">📱 Apply the changes based on request</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Daily Progress Reports</h3>
              <p className="text-gray-600 mb-6">
                Stay in the loop on everything we worked on and completed for you.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-growmodo-green rounded-full"></div>
                  <span className="text-sm">Dave | Web Design Project: Finished</span>
                </div>
                <div className="text-xs text-gray-500">✅ Finished the home page</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-growmodo-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Build Whatever You Want,<br />
            With the Tools You Love
          </h2>
          
          <div className="overflow-hidden mb-8">
            <div className="flex animate-[scroll-left_30s_linear_infinite] gap-4">
              {['UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites', 'UI Designs', 'Funnels', 'Automations', 'Portal'].map((tool, index) => (
                <span key={index} className="text-gray-400 text-sm px-3 py-1 bg-gray-800 rounded-full whitespace-nowrap">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-8 gap-6 mt-12">
            <img src="/lovable-uploads/42bc35cf-64cd-49d8-a36c-b34ac31583a3.png" alt="Tool icons" className="col-span-8 w-full" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
            <div>
              <p className="text-xl mb-4">
                "We're extremely happy with Startmodo. Our project manager has been exceptional. She's always very prompt with replies and communicating how things are going."
              </p>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-growmodo-green">⭐</span>
                ))}
              </div>
              <p className="font-semibold">Lauren Gilmore</p>
              <p className="text-gray-600">VP Media, Hyperfocal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Selected Work<br />
              From Our Talents
            </h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {workItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg aspect-[4/3] hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">What You Get From Startmodo</h2>
            <p className="text-xl text-gray-600">
              Meet your new team members minus the Recruiting, HR, Operations, and Admin work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-growmodo-blue rounded-lg mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm mb-6">As seen on:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-sm text-gray-500">Product Hunt</span>
              <span className="text-sm text-gray-500">BetaList</span>
              <span className="text-sm text-gray-500">Landbook</span>
              <span className="text-sm text-gray-500">UPlabs</span>
              <span className="text-sm text-gray-500">DesignMunk</span>
            </div>
          </div>

          {/* Flowing Text Animation */}
          <div className="relative overflow-hidden h-32 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
            <div className="flex animate-[scroll-left_40s_linear_infinite] items-center h-full">
              {scrollingText.map((text, index) => (
                <span key={index} className="text-gray-400 text-lg mx-8 whitespace-nowrap">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex animate-[scroll-left_50s_linear_infinite] items-center h-full">
            {scrollingText.map((text, index) => (
              <span key={index} className="text-white text-sm mx-6 whitespace-nowrap opacity-30">
                {text}
              </span>
            ))}
          </div>
        </div>
        
        {/* Vector graphics */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 400" fill="none">
            <circle cx="200" cy="100" r="4" fill="white" opacity="0.3">
              <animate attributeName="r" values="4;12;4" dur="6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="300" r="6" fill="white" opacity="0.2">
              <animate attributeName="r" values="6;2;6" dur="4s" repeatCount="indefinite"/>
            </circle>
            <path d="M0,200 C200,100 400,300 600,150 C800,50 1000,250 1000,200" stroke="white" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center -space-x-2 mb-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-full"></div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Scale Your Design & Dev Operations<br />
            Without The Complexity
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Why would you chase random freelancers if you could have your own creative dream team today?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-900 transition-colors duration-300">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0 hover:bg-gray-200 transition-colors duration-300">
                Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
