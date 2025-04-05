
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-primary">SUPERLATIF</span>
          <span className="text-xl">x</span>
          <span className="text-xl font-bold text-secondary">PRIORITY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Program</a>
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Manfaat</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Harga</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonial</a>
        </div>
        
        <Button size="sm" className="rounded-full">
          <span>Daftar Sekarang</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
