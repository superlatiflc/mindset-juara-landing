
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Check, Star, Users } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  // Set the deadline to 3 days from now (matching the example in the content)
  const threeDay = new Date();
  threeDay.setDate(threeDay.getDate() + 3);
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-green-50">
      {/* Visual anchors - subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-secondary/10 rounded-full"></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Priming - create initial positive impression */}
          <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 animate-pulse">
            <Award size={16} />
            <span className="text-sm font-medium">Program Intensif Terbaik 2025</span>
          </div>
          
          {/* Anchoring bias - set the first important information */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight font-display max-w-4xl mb-6">
            Kelas Intensif Online
            <span className="text-primary"> Kedinasan 2025</span>
          </h1>
          
          {/* Confirmation bias - validate what users already believe */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
            Kombinasi unik pengembangan <span className="font-semibold">mindset juara</span> dan persiapan intensif oleh <span className="font-semibold">Alumni Grade A+</span> 🔥
          </p>
          
          {/* Picture Superiority Effect - visual content is more memorable */}
          <div className="mb-10 max-w-5xl w-full">
            <img 
              src="https://superlatif.id/wp-content/uploads/2025/02/Superlatif-x-priority-kedinasan.png" 
              alt="Superlatif x Priority Kedinasan 2025" 
              className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            />
          </div>
          
          {/* Von Restorff Effect - make the CTA stand out with visual distinction */}
          <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 md:p-8 mb-10 max-w-3xl w-full border-2 border-primary/20 transform transition-transform hover:scale-[1.01]">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Program Intensif Kedinasan 2025: Install Mindset Juara + Bimbingan Komprehensif
            </h2>
            
            {/* Scarcity & Urgency - create FOMO with countdown */}
            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3 flex items-center justify-center">
                <span className="inline-block animate-pulse mr-2 text-accent">⚡</span> 
                Flash Sale Paket Super Berakhir Dalam:
              </p>
              <CountdownTimer targetDate={threeDay} />
            </div>
            
            {/* Fitts's Law - big, easily clickable buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-full text-base group relative overflow-hidden" 
                asChild
              >
                <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
                  <span className="relative z-10">Daftar Sekarang</span>
                  <ArrowRight size={18} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </Button>
              
              {/* Decoy Effect - create an option that makes primary option look better */}
              <Button size="lg" variant="outline" className="rounded-full text-base opacity-80">
                Lihat Program
              </Button>
            </div>
          </div>
          
          {/* Social Proof - show popularity to validate decision */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-primary" />
              <span>1000+ Peserta Sukses</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-accent" />
              <span>5/5 Rating (200+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-primary" />
              <span>85% Tingkat Kelulusan</span>
            </div>
          </div>
          
          {/* Center-Stage Effect - place key benefits in the middle */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {['Dijamin Tuntas', 'Akses Selamanya', 'Support 24/7'].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center bg-gray-50 rounded-lg py-2 px-4">
                <Check size={14} className="text-primary mr-2" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
