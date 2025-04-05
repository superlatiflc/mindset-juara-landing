
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Shield, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const paymentMethods = [
  "Transfer Bank", 
  "Virtual account", 
  "QRIS", 
  "E-Wallet", 
  "Indomaret", 
  "Alfamart"
];

const PricingSection = () => {
  // Set the deadline to 3 days from now (matching the example in the content)
  const threeDay = new Date();
  threeDay.setDate(threeDay.getDate() + 3);
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Visual anchors - background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-40"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Priming - create anticipation of great value */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            <span className="text-primary">Special Bundling</span> Price!
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Dengan Superlatif x Priority, Anda tidak hanya belajar soal, tetapi juga 
            membangun mental juara. Gabung bersama ribuan calon peserta yang telah 
            merasakan manfaatnya, dan siapkan diri Anda untuk masa depan yang sukses.
          </p>
        </div>

        {/* Von Restorff Effect - make pricing card stand out */}
        <div className="max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/20">
            {/* Framing - present the offer in the most appealing way */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Value Program!</h3>
                  <p className="text-white/80 mb-4">Jika di Gabung Seluruh Value Total: <span className="font-bold">Rp 5.350.000</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check size={18} className="mr-2" />
                      <span>SuperLearn Premium (Rp 850.000)</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="mr-2" />
                      <span>Priority Intensif Kedinasan (Rp 4.500.000)</span>
                    </li>
                  </ul>
                </div>
                
                {/* Scarcity & Urgency principles - limited time offer */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center animate-pulse">
                  <p className="text-sm font-medium mb-1">⚡ Flash Sale Berakhir Dalam:</p>
                  <CountdownTimer targetDate={threeDay} />
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              {/* Anchoring & Framing - show original price first then the discount */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="line-through text-gray-500 text-lg">Rp 5.350.000</p>
                    <p className="line-through text-gray-500">Rp 2.500.000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl md:text-4xl font-bold text-primary">Rp 345.000</p>
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
                      Hemat Rp 5.005.000
                    </span>
                  </div>
                </div>
                
                {/* Spark Effect - make it easy to take action */}
                <Button 
                  size="lg" 
                  className="mt-6 md:mt-0 rounded-full text-base w-full md:w-auto group relative overflow-hidden" 
                  asChild
                >
                  <a href="https://superlatif.id/product/kedinasan-intensif-2025/">
                    <span className="relative z-10 group-hover:translate-x-1 transition-all">
                      <Zap size={18} className="mr-2 inline-block group-hover:scale-110 transition-transform" />
                      DAFTAR SEKARANG
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </Button>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                {/* Social Proof - show that others are taking action */}
                <p className="text-center text-sm text-gray-600 mb-4">
                  Kami hanya membuka kuota terbatas untuk program ini agar kualitas tetap terjaga.
                </p>
                
                {/* Scarcity - create FOMO with limited availability */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 animate-pulse">
                  <p className="text-sm font-medium text-yellow-800 flex items-center justify-center">
                    <AlertCircle size={16} className="text-accent mr-2" />
                    PERINGATAN: Penawaran ini hanya berlaku untuk 100 pendaftar pertama
                  </p>
                </div>
                
                {/* Trust signals - reduce uncertainty with payment options */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <p className="text-sm text-gray-700 mr-2 flex items-center">
                    <Shield size={14} className="mr-1" /> Metode Pembayaran:
                  </p>
                  {paymentMethods.map((method, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                
                {/* Nudge - final push to action */}
                <p className="text-center text-sm text-gray-600">
                  🚀 Siap Jadi Bagian dari Ribuan Alumni yang Sukses? 
                  📌 Daftar Sekarang Sebelum Kuota Habis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
