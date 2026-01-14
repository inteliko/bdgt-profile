import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TalentCarousel from "@/components/TalentCarousel";
import ToolsGrid from "@/components/ToolsGrid";
import ReferenceOrTools from "@/components/ReferenceOrTools";
import TrustedByBrands from "@/components/TrustedByBrands";
import { useBookingModal } from '@/context/BookingModalContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  const roles = ['Designers', 'Developers', 'Marketers'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColorAttr = entry.target.getAttribute('data-color');
            const textColorAttr = entry.target.getAttribute('data-text-color');
            if (bgColorAttr) {
              setBgColor(bgColorAttr);
            }
            if (textColorAttr) {
              setTextColor(textColorAttr);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[data-color]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Local Avatar component: tries to load an external AI avatar image and falls
  // back to a lightweight inline SVG if the image fails to load.
  function Avatar({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const [failed, setFailed] = useState(false);
    const fallbackSvg = (
      <svg width="100%" height="100%" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="block">
        <circle cx="40" cy="28" r="16" fill="#E5E7EB" />
        <path d="M8 68c0-18 13-32 32-32s32 14 32 32" fill="#F3F4F6" />
      </svg>
    );

    if (failed) {
      return (
        <div className={className} aria-hidden>
          {fallbackSvg}
        </div>
      );
    }

    return (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={(e) => {
          setFailed(true);
        }}
      />
    );
  }

  const scrollingText = [
    'UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores', 'Websites',
    'Graphic Designer', 'Webflow Developer', 'Shopify Developer', 'WordPress Developer', 'UI/UX Designer', 
    'Front-End Developer', 'Back-End Developer', 'No-Code Developer'
  ];

  const iconColors = ['#34D399', '#06B6D4', '#60A5FA', '#F97316', '#F472B6', '#A78BFA', '#10B981', '#F59E0B'];

  const companies = [
    { name: 'Slack', logo: '/tools/slack.svg' },
    { name: 'Notion', logo: '/tools/notion.svg' },
    { name: 'Zoho', logo: '/tools/zoho.svg' },
    { name: 'Trello', logo: '/tools/trello.svg' },
    { name: 'Dropbox', logo: '/tools/dropbox.svg' },
    { name: 'Asana', logo: '/tools/asana.svg' },
    { name: 'GitHub', logo: '/tools/github.svg' },
    { name: 'Zoom', logo: '/tools/zoom.svg' }
  ];

  // Talent images (place your files in `public/talents/` as talent1.jpg..talent4.jpg)
  const talentPics = [
    "/talents/talent1.jpeg",
    "/talents/talent2.jpeg",
    "/talents/talent3.jpg",
    "/talents/talent4.jpeg",
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

  const featureIcons: JSX.Element[] = [
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 3c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" />
        <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" />
        <path d="M8 10h8" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2l2 6h6l-4.8 3.6L19 20l-7-4-7 4 1.8-8.4L2 8h6z" stroke="currentColor" strokeWidth="0.9" fill="currentColor" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14l4-6H8l5 6z" fill="currentColor" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" stroke="currentColor" strokeWidth="1.4" fill="currentColor" />
      </svg>
    )
  ];

  const workItems = [
    {
      id: 1,
      image: "/projects/website-ui&ux.gif",
      title: "Mobile App Design Collection",
      description: "Various mobile app interfaces showcasing modern design principles"
    },
    {
      id: 2,
      image: "/projects/presentation1.gif",
      title: "Web & Dashboard Designs",
      description: "Clean and functional web interfaces and dashboard designs"
    },
    {
      id: 3,
      image: "/projects/mobile1.gif",
      title: "Brand Identity Materials",
      description: "Complete brand identity and print design solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-growmodo-blue/10 to-growmodo-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-growmodo-green/10 to-growmodo-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-growmodo-blue/5 to-growmodo-green/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight mt-6 md:mt-8 hero-title">
            Hire Your Whole Product<br />
            Team on a <span className="text-blue-500 font-medium">Subscription</span>
          </h1>

          {/* Product Hunt Featured Upvote Badge */}
          <div className="flex justify-center mb-8">
            <a
              href="https://www.producthunt.com/products/bd-global-technology-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-bd&#0045;global&#0045;technology&#0045;2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
             
            </a>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Scale your marketing team with vetted designers & developers who work as an extension of your in-house team.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <IndexBookCall />
            <Link to="/showcase" className="transform transition-all duration-300 hover:scale-105">
              <Button variant="outline" className="border-2 border-growmodo-blue text-growmodo-blue px-8 py-4 text-xl font-medium transition-all duration-300 rounded-lg relative overflow-hidden group btn-hero-outline">
                <span className="relative z-10">See Previous Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          {/* Features list */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-blue" />
              <span className="font-medium">Unlimited design & dev requests</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-blue" />
              <span className="font-medium">Monthly flat-rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-6 h-6 text-growmodo-blue" />
              <span className="font-medium">No Contract. Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>


        {/* Talent Carousel Section */}
      <TalentCarousel />

      

      {/* Trusted Section */}
      <TrustedByBrands />

            {/* Solution Section - redesigned to match reference with left-aligned cards and vector icons */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black display-title">
            The Quickest Way To Onboard<br />
            Talent To Your Team
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Join other ambitious marketing leaders who've built their secret weapon for scaling without the hiring headaches.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative bg-gray-50 rounded-2xl p-10 min-h-[220px]">
              <h3 className="text-2xl font-bold mb-4 text-black">Kick-off</h3>
              <p className="text-gray-600 mb-6">our partnership today and delegate your first projects.</p>
              <div className="absolute right-6 bottom-6 w-20 h-12 opacity-90">
                {/* Vector: three diamonds (one filled) */}
                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="8" y="18" width="22" height="22" rx="3" transform="rotate(-45 8 18)" stroke="#111827" fill="#ffffff" strokeWidth="2" />
                  <rect x="40" y="18" width="22" height="22" rx="3" transform="rotate(-45 40 18)" stroke="#111827" fill="#2563EB" strokeWidth="2" />
                  <rect x="72" y="18" width="22" height="22" rx="3" transform="rotate(-45 72 18)" stroke="#111827" fill="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gray-50 rounded-2xl p-10 min-h-[220px]">
              <h3 className="text-2xl font-bold mb-4 text-black">Get matched</h3>
              <p className="text-gray-600 mb-6">with your creative dream team who 'get' your business.</p>
              <div className="absolute right-6 bottom-6 w-20 h-12 opacity-90">
                {/* Vector: overlapping circles */}
                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="36" cy="30" r="18" stroke="#111827" strokeWidth="2" fill="#ffffff" />
                  <circle cx="60" cy="30" r="18" stroke="#111827" strokeWidth="2" fill="#BBF7D0" />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-gray-50 rounded-2xl p-10 min-h-[220px]">
              <h3 className="text-2xl font-bold mb-4 text-black">Move faster</h3>
              <p className="text-gray-600 mb-6">while scaling up and down based on your project needs.</p>
              <div className="absolute right-6 bottom-6 w-20 h-12 opacity-90">
                {/* Vector: forward arrows */}
                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 10 L36 30 L12 50" stroke="#111827" strokeWidth="3" fill="none"/>
                  <path d="M36 10 L60 30 L36 50" stroke="#06B6D4" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


           {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-44 h-44 md:w-56 md:h-56 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <Avatar src="https://thispersondoesnotexist.com/image" alt="Testimonial avatar" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="md:pl-6">
              <blockquote className="text-2xl md:text-4xl font-semibold text-black leading-tight mb-6">
                “I have been working with Startmodo for nearly two years now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them.”
              </blockquote>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-growmodo-green" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.785.57-1.84-.196-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-lg mb-0">Gaute Remen</p>
                  <p className="text-sm text-gray-500">Tech Lead, Synlight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Collaborate / Partners Marquee Section (matches provided design) */}
      <section className="py-16 px-6 bg-white w-full overflow-hidden">
        <div className="w-full text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8 display-title">
            You can collaborate
            <br />
            anywhere with your team.
          </h2>

          <div className="mt-6 overflow-hidden w-full">
            <div className="scrolling-wrapper w-full">
              <div className="scrolling-content no-pause inline-flex items-center gap-12 py-6 flex-nowrap whitespace-nowrap" style={{['--marquee-duration' as any]: '18s'}}>
                {Array.from({ length: 2 }).flatMap(() => companies).map((company, idx) => (
                  <div key={`collab-${idx}`} className="inline-flex flex-col items-center justify-center w-36 flex-shrink-0">
                    <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain mb-2" />
                    <span className="text-base md:text-lg font-medium text-black">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Made Super Simple Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black display-title">
              Made <span className="text-growmodo-blue">Super</span> Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work as an extension of your in-house team and assemble the right team members for every task and project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group glass rounded-2xl p-8 transition-colors duration-300 hover:bg-growmodo-blue hover:text-white">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 group-hover:bg-white/20">
                  {/* SVG: lightning / fast */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-growmodo-green">
                    <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-0 group-hover:text-white">
                  Fast Hiring in<br />24-48 Hrs
                </h3>
              </div>
              <p className="mb-6 group-hover:text-white/90">
                Add an additional team member with a click of a button.
              </p>
              <div className="flex -space-x-2 mb-4">
                {/* Talent avatars from your team */}
                <Avatar src={talentPics[0]} alt="Talent 1" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                <Avatar src={talentPics[1]} alt="Talent 2 active" className="w-12 h-12 rounded-full object-cover ring-2 ring-growmodo-green" />
                <Avatar src={talentPics[2]} alt="Talent 3" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
              </div>
            </div>

            <div className="group glass rounded-2xl p-8 transition-colors duration-300 hover:bg-growmodo-blue hover:text-white">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 group-hover:bg-white/20">
                  {/* SVG: shield / vetted */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-growmodo-blue">
                    <path d="M12 2l7 3v5c0 5-3 9-7 12-4-3-7-7-7-12V5l7-3z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-0 group-hover:text-white">Rigorously Vetted Experts</h3>
              </div>
              <p className="text-gray-600 mb-6 group-hover:text-white/90">
                We find, manage & keep training the best talents we can find.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar src="/talents/talent6.jpg" alt="Maksus B. Developer avatar" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm text-gray-600 group-hover:text-white">Maksus B. Developer
                    <span className="inline-flex ml-2">{Array.from({length:5}).map((_,i)=>(
                      <svg key={i} className="w-3 h-3 ml-0.5" viewBox="0 0 20 20" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l-5.878 3.09L5.64 11.545 1 7.545l6.06-.545L10 1l2.94 6 6.06.545-4.64 4-1.262 6.545z"/></svg>
                    ))}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar src="/talents/talent7.jpg" alt="Rupa A. UI/UX Designer avatar" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm text-gray-600 group-hover:text-white">Rupa A. UI/UX Designer
                    <span className="inline-flex ml-2">{Array.from({length:5}).map((_,i)=>(
                      <svg key={i} className="w-3 h-3 ml-0.5" viewBox="0 0 20 20" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l-5.878 3.09L5.64 11.545 1 7.545l6.06-.545L10 1l2.94 6 6.06.545-4.64 4-1.262 6.545z"/></svg>
                    ))}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="group glass rounded-2xl p-8 transition-colors duration-300 hover:bg-growmodo-blue hover:text-white">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 group-hover:bg-white/20">
                  {/* SVG: team */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-growmodo-blue">
                    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zM8 13c-2.67 0-8 1.34-8 4v3h14v-3c0-2.66-5.33-4-6-4zM16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3c0-2.66-5.33-4-6-4z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-0 group-hover:text-white">Fully-Managed Teams</h3>
              </div>
              <p className="text-gray-600 mb-6 group-hover:text-white/90">
                Your dedicated PM matches you with the right team members.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" fill="#86EFAC" />
                    <circle cx="12" cy="12" r="5.2" stroke="#16A34A" strokeWidth="0.6" fill="none" />
                  </svg>
                  <span className="text-sm">Dave | Web Design Project</span>
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.48.58 3.66a1 1 0 01-.24 1.01l-2.22 2.12z" fill="#9CA3AF"/>
                  </svg>
                  <span>Apply the changes based on request</span>
                </div>
              </div>
            </div>

            <div className="group glass rounded-2xl p-8 transition-colors duration-300 hover:bg-growmodo-blue hover:text-white">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 group-hover:bg-white/20">
                  {/* SVG: report / checklist */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-growmodo-green">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-2 4 2 4-2 4 2V5c0-1.1-.9-2-2-2z" fill="currentColor"/>
                    <path d="M7 8h10v2H7zM7 12h7v2H7z" fill="#fff" opacity="0.85"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-0 group-hover:text-white">Daily Progress Reports</h3>
              </div>
              <p className="text-gray-600 mb-6 group-hover:text-white/90">
                Stay in the loop on everything we worked on and completed for you.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-white/10 group-hover:text-white transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" fill="#86EFAC" />
                    <circle cx="12" cy="12" r="5.2" stroke="#16A34A" strokeWidth="0.6" fill="none" />
                  </svg>
                  <span className="text-sm">Dave | Web Design Project: Finished</span>
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Finished the home page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-8 leading-tight">
            Build Whatever You Want,<br />
            With the Tools You Love
          </h2>
          
          {/* Scrolling pills marquee */}
          <div className="mt-8 overflow-hidden w-full">
            <div className="scrolling-wrapper w-full">
              <div className="scrolling-content no-pause inline-flex items-center gap-3 py-4 flex-nowrap whitespace-nowrap" style={{['--marquee-duration' as any]: '20s'}}>
                {Array.from({ length: 2 }).flatMap(() => [
                  'Websites', 'UI Designs', 'Funnels', 'Automations', 'Portal', 'Graphics', 'Ecommerce Stores'
                ]).map((item, idx) => (
                  <span key={`pill-${idx}`} className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium flex-shrink-0">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </section>      

 

      {/* Selected Work Section - full width carousel with left heading */}
      <section className="py-20 bg-white w-full overflow-hidden">
        <div className="flex items-start">
          {/* Left heading column (desktop) */}
          <div className="hidden md:block w-[360px] px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black leading-tight">
              Selected Work
              <br />
              From Our Talents
            </h2>
          </div>

          {/* Carousel column (fills remaining width) */}
          <div className="flex-1">
            {/* Mobile heading above carousel */}
            <div className="md:hidden px-6 mb-6">
              <h2 className="text-3xl font-bold text-black">Selected Work From Our Talents</h2>
            </div>

            <div className="w-full px-6">
              <Carousel
                opts={{
                  align: "center",
                  loop: false,
                }}
                className="w-full max-w-none"
              >
                <CarouselContent className="!ml-0">
                  {workItems.map((item) => (
                    <CarouselItem key={item.id} className="px-4 w-full flex-shrink-0 md:basis-[52%] lg:basis-[40%]">
                      <div className="group cursor-pointer">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl aspect-[3/2] hover:shadow-2xl transition-all duration-300">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}

                  <CarouselItem key="see-more" className="px-4 w-full flex-shrink-0 md:basis-[52%] lg:basis-[40%]">
                    <Link to="/showcase" className="group block">
                      <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/2] flex items-center justify-center">
                        <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-2xl text-2xl font-semibold">
                          See More →
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md" />
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md" />
              </Carousel>
            </div>
          </div>
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
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-growmodo-blue">
                  <div className="w-6 h-6 text-white">
                    {featureIcons[index] ?? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen On Section (full width) */}
      <section className="py-12 bg-white w-full overflow-x-hidden">
        <div className="w-full">

          {/* Flowing Text Animation */}
          <div className="relative overflow-hidden h-32 bg-white w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>

            {/* (removed base left-scrolling row to keep only the crossing X) */}

            {/* Diagonal right-scrolling band (crossing carousel) */}
            <div className="diagonal-marquee">
              <div className="band">
                <div className="inner scrolling-wrapper">
                  <div className="scrolling-content-right">
                    {Array.from({ length: 2 }).flatMap(() => scrollingText).map((text, index) => (
                      <span key={`diag-${index}`} className="flex items-center gap-3 text-gray-900 text-xl font-medium mx-6 whitespace-nowrap">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{display: 'block'}}>
                          <circle cx="8" cy="8" r="6" fill={iconColors[index % iconColors.length]} />
                        </svg>
                        <span>{text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>



            {/* Reverse diagonal left-scrolling band to form an X */}
                  <div className="diagonal-marquee reverse">
              <div className="band">
                  <div className="inner scrolling-wrapper">
                  <div className="scrolling-content" style={{['--marquee-duration' as any]: '32s'}}>
                    {Array.from({ length: 2 }).flatMap(() => scrollingText).map((text, index) => (
                      <span key={`diag-rev-${index}`} className="flex items-center gap-3 text-gray-900 text-xl font-medium mx-6 whitespace-nowrap">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{display: 'block'}}>
                          <circle cx="8" cy="8" r="6" fill={iconColors[index % iconColors.length]} />
                        </svg>
                        <span>{text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="flex animate-[scroll-left_32s_linear_infinite] items-center h-full">
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
          <div className="flex justify-center -space-x-3 mb-6">
            {talentPics.map((src, i) => (
              <div key={i} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Avatar src={src} alt={`Talent ${i + 1}`} className="w-full h-full object-cover" />
              </div>
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
            <IndexBookCallSmall />
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

function IndexBookCall() {
  const { open } = useBookingModal();
  return (
    <button onClick={open} className="transform transition-all duration-300 hover:scale-105">
      <Button className="bg-black text-white px-8 py-4 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-lg relative overflow-hidden group border-b-4 border-transparent group-hover:border-growmodo-blue">
        <span className="relative z-10">Book a Discovery Call</span>
      </Button>
    </button>
  );
}

function IndexBookCallSmall() {
  const { open } = useBookingModal();
  return (
    <button onClick={open} className="">
      <Button className="bg-black text-white px-8 py-3 text-lg hover:bg-gray-900 transition-colors duration-300">
        Book a Discovery Call
      </Button>
    </button>
  );
}
