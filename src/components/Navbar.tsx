
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Progressive Disclosure - change nav appearance based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo (Visual Anchor) */}
        <a href="/" className="flex items-center">
          <img 
            src="https://superlatif.id/wp-content/uploads/2025/02/LOGO-PRIORITY-X-SUPERLATIF.png" 
            alt="SUPERLATIF x PRIORITY" 
            className="h-10 md:h-12"
          />
        </a>
        
        {/* Navigation - Hidden on mobile, shown with progressive disclosure */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Program</a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Manfaat</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Harga</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Testimonial</a>
        </div>
        
        {/* CTA Button - Fitt's Law: Make important actions easy to tap */}
        <div className="flex items-center gap-4">
          <Button size="sm" className="rounded-full hidden md:flex" asChild>
            <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
              <span>Daftar Sekarang</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
          
          {/* Mobile menu toggle - Fitt's law for mobile */}
          <button 
            className="p-2 text-gray-700 md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - Progressive disclosure for small screens */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen 
          ? "max-h-[300px] opacity-100" 
          : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#program" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Program</a>
            <a href="#benefits" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Manfaat</a>
            <a href="#pricing" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Harga</a>
            <a href="#testimonials" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Testimonial</a>
            <Button size="sm" className="rounded-full w-full mt-2" asChild>
              <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
                <span>Daftar Sekarang</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
