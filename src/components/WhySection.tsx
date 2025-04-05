
import { AlertTriangle, BrainCircuit, Target, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-accent" />,
    percentage: "78%",
    description: "mengalami anxiety saat ujian"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    percentage: "65%",
    description: "nilai stagnan meski belajar keras"
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    percentage: "82%",
    description: "tidak punya sistem belajar efektif"
  },
  {
    icon: <Target className="w-6 h-6 text-secondary" />,
    percentage: "71%",
    description: "kehilangan motivasi di tengah perjalanan"
  }
];

const WhySection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Mengapa Program Ini <span className="text-primary">Berbeda?</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Tahukah kamu mengapa 73% peserta gagal dalam seleksi kedinasan? Bukan karena 
            mereka kurang pintar atau kurang belajar. Berdasarkan riset kami terhadap 1000+ peserta:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {reason.icon}
                <span className="ml-3 text-2xl font-bold text-gray-800">{reason.percentage}</span>
              </div>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-secondary/10 rounded-lg p-6 inline-block mb-6">
            <p className="text-secondary font-semibold text-lg md:text-xl">
              85% peserta dengan mindset tepat berhasil lolos seleksi kedinasan di percobaan pertama!
            </p>
          </div>
          <p className="text-gray-700">
            Ini fakta menarik dan terbukti: mindset juara adalah kunci utama. 
            Di program ini, kami fokus tidak hanya pada materi akademik, 
            tapi juga membangun fondasi mental yang kuat untuk meraih kesuksesan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
