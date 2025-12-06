
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MobileNav from "@/components/MobileNav";
import { useBookingModal } from '@/context/BookingModalContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-8 right-8 z-50 transition-all duration-300 rounded-2xl shadow-md ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-growmodo-blue to-growmodo-green rounded-full blur-sm opacity-30"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-growmodo-blue to-growmodo-green rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M6 6h7.5c2.485 0 4.5 2.015 4.5 4.5v0c0 2.485-2.015 4.5-4.5 4.5H7.5v3h4.5c2.485 0 4.5-2.015 4.5-4.5v0c0-2.485 2.015-4.5 4.5-4.5h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="6" cy="10.5" r="1.5" fill="currentColor"/>
                  <circle cx="18" cy="13.5" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-growmodo-blue to-growmodo-green bg-clip-text text-black">Startmodo</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/showcase" className="text-gray-600 hover:text-gray-900 text-lg">Showcase</Link>
            <Link to="/talents" className="text-gray-600 hover:text-gray-900 text-lg">Talents</Link>
            <Link to="/scope" className="text-gray-600 hover:text-gray-900 text-lg">Scope</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-lg">Pricing</Link>
            <Link to="/apply-talent" className="text-gray-600 hover:text-gray-900 text-lg">Apply as a Talent</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <DesktopBookCall />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

function DesktopBookCall() {
  const { open } = useBookingModal();
  return (
    <button onClick={open} className="hidden md:inline-block">
      <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-all duration-300 text-lg">
        Book a Call
      </Button>
    </button>
  );
}

export default Header;
