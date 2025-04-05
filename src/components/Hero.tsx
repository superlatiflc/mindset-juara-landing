
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Star, Users } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  // Set the deadline to 3 days from now (matching the example in the content)
  const threeDay = new Date();
  threeDay.setDate(threeDay.getDate() + 3);
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-green-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-secondary/10 rounded-full"></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <Award size={16} />
            <span className="text-sm font-medium">Program Intensif Terbaik 2025</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight font-display max-w-4xl mb-6">
            Kelas Intensif Online
            <span className="text-primary"> Kedinasan 2025</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
            Kombinasi unik pengembangan <span className="font-semibold">mindset juara</span> dan persiapan intensif oleh <span className="font-semibold">Alumni Grade A+</span> 🔥
          </p>
          
          <div className="mb-10 max-w-5xl w-full">
            <img 
              src="https://superlatif.id/wp-content/uploads/2025/02/Superlatif-x-priority-kedinasan.png" 
              alt="Superlatif x Priority Kedinasan 2025" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 md:p-8 mb-10 max-w-3xl w-full">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Program Intensif Kedinasan 2025: Install Mindset Juara + Bimbingan Komprehensif
            </h2>
            
            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                ⚡ Flash Sale Paket Super Berakhir Dalam:
              </p>
              <CountdownTimer targetDate={threeDay} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full text-base" asChild>
                <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
                  <span>Daftar Sekarang</span>
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base">
                Lihat Program
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
