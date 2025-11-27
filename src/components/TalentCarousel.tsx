
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TalentCarousel = () => {
  // removed pagination state — using continuous marquee

  const talents = [


    {
      name: "Fahima Islam Moon",
      role: "Project Manager",
      rating: 5,
      image: "/lovable-uploads/0bb5d39a-0f1c-405f-8d5b-fbc8f34bc3a0.png",
      skills: ["Agile", "Team Leadership", "Client Relations"],
      experience: "8+ years"
    },




    {
      name: "Maksus Bin Islam Riad",
      role: "Software Engineer",
      rating: 5,
      image: "/lovable-uploads/co-founder-photo.png",
      skills: ["", "", ""],
      experience: ""
    },
   
    {
      name: "Lamia Islam",
      role: "Graphic Designer",
      rating: 5,
      image: "/lovable-uploads/7596d42d-8ba8-4fc6-84e7-e0b36f5fd049.png",
      skills: ["Brand Identity", "Print Design", "Illustration"],
      
    },
    {
      name: "Ratan Das",
      role: "Full Stack Developer",
      rating: 5,
      image: "/lovable-uploads/58083057-84a1-473f-adfe-c44f63d68016.png",
      skills: ["Node.js", "React", "Database Design"],
      experience: "7+ years"
    },
    {
      name: "Akib Xaved",
      role: "Creative Head",
      rating: 5,
      image: "/lovable-uploads/be5f29b5-34d7-41b8-8ff4-a7e867bf2770.png",
      skills: ["Agile", "Team Leadership", "Client Relations"],
      experience: "8+ years"
    }, 

       {
      name: "Rahin Hossain",
      role: "Video Edtior",
      rating: 5,
      image: "/lovable-uploads/af5c552b-0743-40a7-8e07-9df37d3a60d9.png",
      skills: ["Adobe", "Adobe Premier Pro", "Final Cut Pro", "Shots/Reels"],
      experience: "3+ years"
    },

    
  ];

  // continuous marquee, no index state required
  return (
    <section className="py-20 px-6 bg-gray-50">
      

      {/* full-bleed marquee: placed outside the centered container so it spans full width */}
      <div className="w-full relative">
        <div className="mb-8">
          {/* Continuous right-to-left marquee */}
          <div className="scrolling-wrapper w-full overflow-x-hidden">
            <div className="scrolling-content inline-flex items-center gap-8 whitespace-nowrap" style={{ ['--marquee-duration' as any]: '30s' }}>
              {[...talents, ...talents].map((talent, idx) => {
                const colors = ["bg-white", "bg-blue-500 text-white", "bg-green-400 text-black", "bg-yellow-300 text-black", "bg-white", "bg-slate-50"];
                const colorClass = colors[idx % colors.length];
                return (
                  <div key={`${talent.name}-${idx}`} className="inline-flex flex-shrink-0 w-56 md:w-64 lg:w-72">
                    <div className="talent-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-100 bg-white m-2">
                      <div className="relative aspect-[4/5] bg-gray-100">
                        {talent.image ? (
                          <img src={talent.image} alt={talent.name} className="w-full h-full object-cover transition-filter duration-300" />
                        ) : (
                          <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400">{talent.name}</div>
                        )}

                        {/* label overlay */}
                        <div className={`absolute left-4 bottom-4 px-4 py-2 rounded-md ${colorClass} inline-block shadow-lg`}>
                          <div className="text-sm font-semibold">
                            {talent.name.split(' ')[0]}
                            {talent.name.split(' ').length > 1 ? ' ' + talent.name.split(' ')[1].charAt(0) + '.' : ''}
                          </div>
                          <div className="text-xs opacity-90">{talent.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentCarousel;
