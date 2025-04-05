
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-40"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
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

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
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
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-1">⚡ Flash Sale Berakhir Dalam:</p>
                <CountdownTimer targetDate={threeDay} />
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <p className="line-through text-gray-500">Rp 5.350.000</p>
                  <p className="line-through text-gray-500">Rp 2.500.000</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-3xl md:text-4xl font-bold text-primary">Rp 345.000</p>
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full">
                    Hemat Rp 5.005.000
                  </span>
                </div>
              </div>
              
              <Button size="lg" className="mt-6 md:mt-0 rounded-full text-base w-full md:w-auto">
                <Zap size={18} className="mr-2" />
                DAFTAR SEKARANG
              </Button>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <p className="text-center text-sm text-gray-600 mb-4">
                Kami hanya membuka kuota terbatas untuk program ini agar kualitas tetap terjaga.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-yellow-800 flex items-center justify-center">
                  <Zap size={16} className="text-accent mr-2" />
                  PERINGATAN: Penawaran ini hanya berlaku untuk 100 pendaftar pertama
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <p className="text-sm text-gray-700 mr-2">💳 Metode Pembayaran:</p>
                {paymentMethods.map((method, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
              
              <p className="text-center text-sm text-gray-600">
                🚀 Siap Jadi Bagian dari Ribuan Alumni yang Sukses? 
                📌 Daftar Sekarang Sebelum Kuota Habis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
