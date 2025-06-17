
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 bg-black hover:bg-gray-800 transition-colors duration-200"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="flex flex-col items-center justify-center h-full w-full space-y-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Link 
              to="/showcase" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-growmodo-blue transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Showcase
            </Link>
            <Link 
              to="/talents" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-growmodo-blue transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Talents
            </Link>
            <Link 
              to="/scope" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-growmodo-blue transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Scope
            </Link>
            <Link 
              to="/pricing" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-growmodo-blue transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/apply-talent" 
              className="text-2xl md:text-3xl font-medium text-white hover:text-growmodo-blue transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Apply as a Talent
            </Link>
            <Link 
              to="/book-call"
              onClick={() => setIsOpen(false)}
            >
              <Button className="bg-growmodo-blue text-white px-8 py-4 text-lg font-medium hover:bg-growmodo-green transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
