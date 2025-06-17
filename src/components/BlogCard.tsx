
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, description, image, category, readTime, date, slug }: BlogCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-growmodo-blue px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl leading-tight group-hover:text-growmodo-blue transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col h-full">
        <CardDescription className="text-gray-600 mb-4 flex-grow">
          {description}
        </CardDescription>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </div>
        </div>
        
        <Button variant="ghost" className="p-0 h-auto text-growmodo-blue hover:text-blue-600 font-medium self-start">
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
