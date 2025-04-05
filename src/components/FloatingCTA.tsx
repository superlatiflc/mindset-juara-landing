
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when user has scrolled 60% of the page
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">Flash Sale Terbatas!</p>
          <p className="text-sm text-gray-600">Hanya tersisa 53 kuota lagi</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" className="rounded-full">
            <span>Daftar</span>
            <ArrowRight size={14} className="ml-1" />
          </Button>
          
          <button
            onClick={() => setIsDismissed(true)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
