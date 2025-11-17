
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GuideDetail = () => {
  const { slug } = useParams();

  // Sample guide data - in a real app, this would come from an API or database
  const guide = {
    title: "How to Keep Quality High When Working With External Specialists",
    description: "Learn the proven strategies to maintain exceptional quality when outsourcing design and development work to external teams.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
    category: "Quality Management",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Startmodo",
    slug: "quality-external-specialists",
    content: `
      <h2>Introduction</h2>
      <p>Working with external specialists can be a game-changer for your business, but maintaining quality standards requires careful planning and execution. In this comprehensive guide, we'll explore proven strategies to ensure exceptional results when outsourcing design and development work.</p>
      
      <h2>Setting Clear Expectations</h2>
      <p>The foundation of successful collaboration with external specialists lies in establishing clear, detailed expectations from the very beginning. This includes defining project scope, deliverables, timelines, and quality standards.</p>
      
      <h3>Key Elements of Clear Expectations:</h3>
      <ul>
        <li>Detailed project briefs with specific requirements</li>
        <li>Quality benchmarks and examples</li>
        <li>Communication protocols and frequency</li>
        <li>Revision rounds and feedback processes</li>
      </ul>
      
      <h2>Building Strong Communication Channels</h2>
      <p>Effective communication is crucial for maintaining quality when working with remote teams. Establish regular check-ins, use collaborative tools, and create feedback loops that ensure alignment throughout the project lifecycle.</p>
      
      <h2>Quality Assurance Processes</h2>
      <p>Implementing robust quality assurance processes helps catch issues early and maintains consistency across all deliverables. This includes peer reviews, testing protocols, and structured feedback mechanisms.</p>
      
      <h2>Tools and Technologies</h2>
      <p>Leverage the right tools to streamline collaboration and maintain quality standards. Project management platforms, design collaboration tools, and version control systems are essential for successful remote work.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these strategies, you can maintain high quality standards while benefiting from the expertise and cost-effectiveness of external specialists. Remember, successful outsourcing is about building partnerships, not just hiring services.</p>
    `
  };

  const relatedGuides = [
    {
      id: 2,
      title: "From Overwhelmed to Outstanding: How to Build Stronger In-House Teams",
      description: "Transform your internal team dynamics and boost productivity with these proven team-building strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80",
      category: "Team Building",
      readTime: "6 min read",
      date: "Dec 12, 2024",
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
      slug: "agency-growth-2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-32 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/guides" className="inline-flex items-center text-growmodo-blue hover:text-blue-600 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src={guide.image} 
                alt={guide.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-growmodo-blue px-3 py-1 rounded-full text-sm font-medium">
                  {guide.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{guide.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {guide.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {guide.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {guide.readTime}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-growmodo-blue prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Guides</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedGuides.map((relatedGuide) => (
              <Link key={relatedGuide.id} to={`/guides/${relatedGuide.slug}`}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={relatedGuide.image} 
                      alt={relatedGuide.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-growmodo-blue px-2 py-1 rounded-full text-xs font-medium">
                        {relatedGuide.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight group-hover:text-growmodo-blue transition-colors">
                      {relatedGuide.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                      {relatedGuide.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {relatedGuide.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedGuide.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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

export default GuideDetail;
