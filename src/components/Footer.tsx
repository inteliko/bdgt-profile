
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useBookingModal } from '@/context/BookingModalContext';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Recruiting & Delivery Platform</h3>
          <h4 className="text-xl">for Top Remote Talent</h4>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link to="/" className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold">Startmodo</span>
          </Link>
          
          <BookingCTA />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="font-semibold mb-4 text-base">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/talents" className="hover:text-white text-sm">Talents</Link></li>
              <li><Link to="/showcase" className="hover:text-white text-sm">Showcase</Link></li>
              <li><Link to="/pricing" className="hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/apply-talent" className="hover:text-white text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-base">Resources</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/guides" className="hover:text-white text-sm">Guides</Link></li>
              <li className="text-sm">Products</li>
              <li><Link to="/scope" className="hover:text-white text-sm">Scope of work</Link></li>
              <li> <Link to="/FAQ" className="hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-base">Follow Us</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="text-sm">LinkedIn</li>
              <li className="text-sm">Facebook</li>
              <li className="text-sm">Instagram</li>
              <li className="text-sm">Twitter</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-base">Contact Info</h5>
            <div className="text-gray-400 text-sm space-y-2">
              <p className="leading-snug">10114 102nd Street Floor 3</p>
              <p className="leading-snug">Ozone Park, NY, 11416</p>
              <p className="leading-snug">+1 929 3938 698</p>
              <p className="leading-snug">sales@startmodo.com</p>
              <p className="leading-snug">Mon-Fri 10am-6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-sm">Copyright © 2025 Startmodo. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white text-sm">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white text-sm">Cookie Policy</Link>
            <Link to="/data-preferences" className="hover:text-white text-sm">Data Preferences</Link>
            <Link to="/imprint" className="hover:text-white text-sm">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function BookingCTA() {
  const { open } = useBookingModal();
  return (
    <button onClick={open}>
      <Button className="bg-white text-black px-6 py-2 rounded-lg text-base">
        Book a Discovery Call
      </Button>
    </button>
  );
}
