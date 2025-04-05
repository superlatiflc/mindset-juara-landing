
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past 60% of the viewport height
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium">
              Flash Sale Berakhir Segera! 🔥
            </p>
            <p className="text-xs text-gray-600">
              Dapatkan harga spesial Rp 345.000
            </p>
          </div>
          <Button size="sm" className="rounded-full w-full sm:w-auto" asChild>
            <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
              <span>Daftar Sekarang</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
