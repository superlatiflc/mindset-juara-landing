
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Using Nudge principle - subtly guide users when they're ready to convert
const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // External Trigger - only show when user has shown intent (scrolled)
  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past 60% of the viewport height
      const scrollThreshold = window.innerHeight * 0.6;
      if (window.scrollY > scrollThreshold) {
        if (!isVisible && !hasInteracted) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
    };

    // Progressive Disclosure - only show after the user has had time to explore
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, hasInteracted]);

  // User can dismiss - respects autonomy
  const handleDismiss = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary/20">
          {/* Spark Effect - show small effort for big reward */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium flex items-center justify-center sm:justify-start">
              <Zap size={16} className="text-accent mr-2 animate-pulse" />
              Flash Sale Berakhir Segera!
            </p>
            <p className="text-xs text-gray-600">
              Dapatkan harga spesial Rp 345.000
            </p>
          </div>
          
          {/* Visual anchors - create focal point with button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button size="sm" className="rounded-full w-full sm:w-auto bg-primary hover:bg-primary/90" asChild>
              <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
                <span>Daftar Sekarang</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
            
            <button 
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Dismiss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
