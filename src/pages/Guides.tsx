
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "How to Keep Quality High When Working With External Specialists",
      description: "Learn the proven strategies to maintain exceptional quality when outsourcing design and development work to external teams.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
      category: "Quality Management",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "BD Global Technology",
      slug: "quality-external-specialists"
    },
    {
      id: 2,
      title: "From Overwhelmed to Outstanding: How to Build Stronger In-House Teams",
      description: "Transform your internal team dynamics and boost productivity with these proven team-building strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80",
      category: "Team Building",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      author: "BD Global Technology",
      slug: "build-stronger-teams"
    },
    {
      id: 3,
      title: "Stop Bleeding Money on Design & Development Costs",
      description: "Discover cost-effective strategies to reduce your design and development expenses without compromising quality.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4846&q=80",
      category: "Cost Optimization",
      readTime: "7 min read",
      date: "Dec 10, 2024",
      author: "BD Global Technology",
      slug: "reduce-design-costs"
    },
    {
      id: 4,
      title: "Navigating Agency Growth in 2025: In-House, Freelance, or Hybrid",
      description: "Make informed decisions about your agency's growth strategy with this comprehensive guide to different team structures.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80",
      category: "Business Strategy",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      author: "BD Global Technology",
      slug: "agency-growth-2025"
    },
    {
      id: 5,
      title: "Subscription-Based Website Development: How it's Done [2025]",
      description: "Explore the future of web development with subscription-based models and how they can benefit your business.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80",
      category: "Web Development",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      author: "BD Global Technology",
      slug: "subscription-web-development"
    },
    {
      id: 6,
      title: "Penji vs. Design Pickle vs. Growmodo: Which is Best in 2025?",
      description: "Compare the top design service platforms to find the perfect fit for your business needs and budget.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80",
      category: "Tool Comparison",
      readTime: "12 min read",
      date: "Dec 3, 2024",
      author: "BD Global Technology",
      slug: "design-platforms-comparison"
    },
    {
      id: 7,
      title: "Best Website Design Agencies in 2025",
      description: "Discover the top website design agencies that are leading the industry with innovative solutions and exceptional results.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=8256&q=80",
      category: "Industry Insights",
      readTime: "8 min read",
      date: "Dec 1, 2024",
      author: "BD Global Technology",
      slug: "best-design-agencies-2025"
    },
    {
      id: 8,
      title: "Best Graphic Design Companies in 2025",
      description: "Find the most talented graphic design companies that can elevate your brand with stunning visual content.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80",
      category: "Industry Insights",
      readTime: "7 min read",
      date: "Nov 28, 2024",
      author: "BD Global Technology",
      slug: "best-graphic-design-companies"
    },
    {
      id: 9,
      title: "10 Best Graphic Design Recruitment Agencies in 2025",
      description: "Connect with top talent through these specialized recruitment agencies that focus on creative professionals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      category: "Recruitment",
      readTime: "9 min read",
      date: "Nov 25, 2024",
      author: "BD Global Technology",
      slug: "graphic-design-recruitment-agencies"
    },
    {
      id: 10,
      title: "Outsourcing Website Management: Why & How it's Done [2025]",
      description: "Learn when and how to outsource your website management for better performance, security, and cost-effectiveness.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7360&q=80",
      category: "Outsourcing",
      readTime: "11 min read",
      date: "Nov 22, 2024",
      author: "BD Global Technology",
      slug: "outsourcing-website-management"
    },
    {
      id: 11,
      title: "7 Best Truelancer Alternatives in 2025 [Compared]",
      description: "Explore the top alternatives to Truelancer for finding skilled freelancers and managing your projects effectively.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      category: "Tool Comparison",
      readTime: "8 min read",
      date: "Nov 20, 2024",
      author: "BD Global Technology",
      slug: "truelancer-alternatives"
    },
    {
      id: 12,
      title: "How to Hire a Creative Director in 2025 [Best & Easy Way]",
      description: "Master the art of hiring creative directors with our step-by-step guide to finding and securing top creative talent.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80",
      category: "Hiring",
      readTime: "10 min read",
      date: "Nov 18, 2024",
      author: "BD Global Technology",
      slug: "hire-creative-director"
    }
  ];

  const categories = ["All", "Quality Management", "Team Building", "Cost Optimization", "Business Strategy", "Web Development", "Tool Comparison", "Industry Insights", "Recruitment", "Outsourcing", "Hiring"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-growmodo-blue to-growmodo-green bg-clip-text text-transparent">
            Expert Guides & Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover actionable insights, proven strategies, and expert tips to scale your business with remote talent and optimize your design & development workflows.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search guides..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-growmodo-blue focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={guides[0].image} 
                  alt={guides[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-growmodo-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-sm text-growmodo-blue font-medium mb-2">{guides[0].category}</div>
                <h2 className="text-3xl font-bold mb-4">{guides[0].title}</h2>
                <p className="text-gray-600 mb-6">{guides[0].description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {guides[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {guides[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {guides[0].readTime}
                  </div>
                </div>
                <Link to={`/guides/${guides[0].slug}`}>
                  <Button className="self-start bg-growmodo-blue hover:bg-blue-600">
                    Read Full Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Guides Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">All Guides & Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.slice(1).map((guide) => (
              <Link key={guide.id} to={`/guides/${guide.slug}`}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={guide.image} 
                      alt={guide.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-growmodo-blue px-2 py-1 rounded-full text-xs font-medium">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl leading-tight group-hover:text-growmodo-blue transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col h-full">
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {guide.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {guide.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="p-0 h-auto text-growmodo-blue hover:text-blue-600 font-medium self-start">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-r from-growmodo-blue to-growmodo-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly tips on remote talent management, design trends, and business growth strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-growmodo-blue hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let our expert team help you implement these strategies and grow your business with top remote talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button className="bg-growmodo-blue hover:bg-blue-600 px-8 py-3 text-lg">
                Book a Discovery Call
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
