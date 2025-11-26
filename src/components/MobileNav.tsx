import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuContent = (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-end p-6"
      onClick={closeMenu}
    >
      {/* Close Button inside overlay */}
      <Button
        variant="ghost"
        size="icon"
        onClick={closeMenu}
        className="z-50 text-white"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Menu Links */}
      <div
        className="flex flex-col items-center justify-center h-full w-full space-y-8 px-6"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside menu
      >
        {[
          { to: "/showcase", label: "Showcase" },
          { to: "/talents", label: "Talents" },
          { to: "/scope", label: "Scope" },
          { to: "/pricing", label: "Pricing" },
          { to: "/apply-talent", label: "Apply as a Talent" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-2xl font-medium text-white hover:text-growmodo-blue transition-transform duration-300 hover:scale-105"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        {/* Book a Call intentionally omitted from mobile menu per design requirement */}
      </div>
    </div>
  );

  return (
    <div className="md:hidden relative z-50">
      {/* Open Button (☰) */}
      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative z-50 bg-black hover:bg-gray-800 transition-colors duration-200"
        >
          <Menu className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Portal for Menu */}
      {isOpen && createPortal(menuContent, document.body)}
    </div>
  );
};

export default MobileNav;
