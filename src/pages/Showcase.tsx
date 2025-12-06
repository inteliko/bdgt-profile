import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", "UI/UX Design", "Mobile", "Ad Creative", "Social Media Graphics", 
    "Presentation", "Packaging", "Illustrations", "eBook & Digital Guides", 
    "Branding", "Merch", "Print Design & Stationary", "Poster"
  ];

  const portfolioItems = [
    // UI/UX Design
    {
      id: 1,
      category: "UI/UX Design",
      title: "Mail UI & UX Design",
      image: "/projects/mail-ui&ux.gif",
      description: "Professional email interface design"
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "Mobile UI & UX Design",
      image: "/projects/mobile-ui&ux.png",
      description: "Mobile application interface design"
    },
    {
      id: 3,
      category: "UI/UX Design",
      title: "Website UI & UX Design",
      image: "/projects/website-ui&ux.gif",
      description: "Website interface and user experience design"
    },

    // Mobile
    {
      id: 4,
      category: "Mobile",
      title: "Mobile App 1",
      image: "/projects/mobile1.gif",
      description: "Mobile application design"
    },
    {
      id: 5,
      category: "Mobile",
      title: "Mobile App 2",
      image: "/projects/mobile2.png",
      description: "Mobile application design"
    },
    {
      id: 6,
      category: "Mobile",
      title: "Mobile App 3",
      image: "/projects/mobile3.png",
      description: "Mobile application design"
    },
    {
      id: 7,
      category: "Mobile",
      title: "Mobile App 4",
      image: "/projects/mobile4.png",
      description: "Mobile application design"
    },
    {
      id: 8,
      category: "Mobile",
      title: "Mobile App 5",
      image: "/projects/mobile5.png",
      description: "Mobile application design"
    },
    {
      id: 9,
      category: "Mobile",
      title: "Mobile App 6",
      image: "/projects/mobile6.png",
      description: "Mobile application design"
    },
    {
      id: 10,
      category: "Mobile",
      title: "Mobile App 7",
      image: "/projects/mobile7.png",
      description: "Mobile application design"
    },

    // Illustrations
    {
      id: 11,
      category: "Illustrations",
      title: "Illustration 1",
      image: "/projects/illustrate-1.png",
      description: "Custom illustration"
    },
    {
      id: 12,
      category: "Illustrations",
      title: "Illustration 2",
      image: "/projects/illustrate-2.png",
      description: "Custom illustration"
    },
    {
      id: 13,
      category: "Illustrations",
      title: "Illustration 3",
      image: "/projects/illustrate-3.png",
      description: "Custom illustration"
    },
    {
      id: 14,
      category: "Illustrations",
      title: "Illustration 4",
      image: "/projects/illustrate-4.png",
      description: "Custom illustration"
    },

    // Branding
    {
      id: 15,
      category: "Branding",
      title: "Brand Identity 1",
      image: "/projects/branding1.png",
      description: "Brand identity and guidelines"
    },
    {
      id: 16,
      category: "Branding",
      title: "Brand Identity 2",
      image: "/projects/branding2.png",
      description: "Brand identity and guidelines"
    },
    {
      id: 17,
      category: "Branding",
      title: "Brand Identity 3",
      image: "/projects/branding3.png",
      description: "Brand identity and guidelines"
    },
    {
      id: 18,
      category: "Branding",
      title: "Brand Identity 4",
      image: "/projects/branding4.png",
      description: "Brand identity and guidelines"
    },
    {
      id: 19,
      category: "Branding",
      title: "Brand Identity 5",
      image: "/projects/branding5.png",
      description: "Brand identity and guidelines"
    },

    // eBook & Digital Guides
    {
      id: 20,
      category: "eBook & Digital Guides",
      title: "eBook 1",
      image: "/projects/ebook1.png",
      description: "Digital guide and eBook design"
    },
    {
      id: 21,
      category: "eBook & Digital Guides",
      title: "eBook 2",
      image: "/projects/ebook2.png",
      description: "Digital guide and eBook design"
    },
    {
      id: 22,
      category: "eBook & Digital Guides",
      title: "eBook 3",
      image: "/projects/ebook3.png",
      description: "Digital guide and eBook design"
    },
    {
      id: 23,
      category: "eBook & Digital Guides",
      title: "eBook 4",
      image: "/projects/ebook4.png",
      description: "Digital guide and eBook design"
    },
    {
      id: 24,
      category: "eBook & Digital Guides",
      title: "eBook 5",
      image: "/projects/ebook5.png",
      description: "Digital guide and eBook design"
    },
    {
      id: 25,
      category: "eBook & Digital Guides",
      title: "eBook 6",
      image: "/projects/ebook6.png",
      description: "Digital guide and eBook design"
    },

    // Presentation
    {
      id: 26,
      category: "Presentation",
      title: "Presentation 1",
      image: "/projects/presentation1.gif",
      description: "Professional presentation design"
    },
    {
      id: 27,
      category: "Presentation",
      title: "Presentation 2",
      image: "/projects/presentation2.gif",
      description: "Professional presentation design"
    },
    {
      id: 28,
      category: "Presentation",
      title: "Presentation 3",
      image: "/projects/presentation3.gif",
      description: "Professional presentation design"
    },
    {
      id: 29,
      category: "Presentation",
      title: "Presentation 4",
      image: "/projects/presentation4.gif",
      description: "Professional presentation design"
    },

    // Packaging
    {
      id: 30,
      category: "Packaging",
      title: "Packaging 1",
      image: "/projects/packaging1.png",
      description: "Product packaging design"
    },
    {
      id: 31,
      category: "Packaging",
      title: "Packaging 2",
      image: "/projects/packaging2.png",
      description: "Product packaging design"
    },
    {
      id: 32,
      category: "Packaging",
      title: "Packaging 3",
      image: "/projects/packaging3.png",
      description: "Product packaging design"
    },
    {
      id: 33,
      category: "Packaging",
      title: "Packaging 4",
      image: "/projects/packaging4.png",
      description: "Product packaging design"
    },
    {
      id: 34,
      category: "Packaging",
      title: "Packaging 5",
      image: "/projects/packaging5.png",
      description: "Product packaging design"
    },
    {
      id: 35,
      category: "Packaging",
      title: "Packaging 6",
      image: "/projects/packaging6.png",
      description: "Product packaging design"
    },
    {
      id: 36,
      category: "Packaging",
      title: "Packaging 7",
      image: "/projects/packaging7.png",
      description: "Product packaging design"
    },
    {
      id: 37,
      category: "Packaging",
      title: "Packaging 8",
      image: "/projects/packaging8.png",
      description: "Product packaging design"
    },
    {
      id: 38,
      category: "Packaging",
      title: "Packaging 9",
      image: "/projects/packaging9.png",
      description: "Product packaging design"
    },
    {
      id: 39,
      category: "Packaging",
      title: "Packaging 10",
      image: "/projects/packaging10.png",
      description: "Product packaging design"
    },
    {
      id: 40,
      category: "Packaging",
      title: "Packaging 11",
      image: "/projects/packaging11.png",
      description: "Product packaging design"
    },

    // Ad Creative
    {
      id: 41,
      category: "Ad Creative",
      title: "Ad Creative 1",
      image: "/projects/graphic-1.png",
      description: "Advertising creative design"
    },
    {
      id: 42,
      category: "Ad Creative",
      title: "Ad Creative 2",
      image: "/projects/graphic-2.png",
      description: "Advertising creative design"
    },
    {
      id: 43,
      category: "Ad Creative",
      title: "Ad Creative 3",
      image: "/projects/graphic-3.png",
      description: "Advertising creative design"
    },
    {
      id: 44,
      category: "Ad Creative",
      title: "Ad Creative 4",
      image: "/projects/graphic-4.png",
      description: "Advertising creative design"
    },

    // Social Media Graphics
    {
      id: 45,
      category: "Social Media Graphics",
      title: "Social Media 1",
      image: "/projects/graphic-5.png",
      description: "Social media graphic design"
    },
    {
      id: 46,
      category: "Social Media Graphics",
      title: "Social Media 2",
      image: "/projects/graphic-6.png",
      description: "Social media graphic design"
    },
    {
      id: 47,
      category: "Social Media Graphics",
      title: "Social Media 3",
      image: "/projects/graphic-7.gif",
      description: "Social media graphic design"
    },
    {
      id: 48,
      category: "Social Media Graphics",
      title: "Social Media 4",
      image: "/projects/graphic-8.png",
      description: "Social media graphic design"
    },
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design & Code That Helps<br />
            Your Business Grow
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a look at some of our recent projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-growmodo-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 h-96 md:h-[520px] lg:h-[520px] shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-growmodo-blue py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white px-8 py-3 text-lg">
              Book a Discovery Call
            </Button>
            <Button variant="outline" className="bg-white text-black px-8 py-3 text-lg border-0">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
