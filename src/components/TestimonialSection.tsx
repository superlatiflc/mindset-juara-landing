
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dinda",
    institution: "STIS",
    quote: "Dulu sempat gagal 2x seleksi kedinasan karena terlalu fokus hafalan doang. Di Superlatif x Priority, aku belajar kalau mindset itu kunci utama. Diajarin cara handle anxiety saat ujian, teknik fokus yang bener, plus materinya super lengkap. Alhamdulillah lolos STIS 2024 dengan nilai SKD 385! The best investment ever lah. Kalau dari awal tau program ini, mungkin gak perlu gagal dulu 2x."
  },
  {
    name: "Rizky",
    institution: "IPDN",
    quote: "Yang bikin beda dari program lain tuh bimbingan mentalnya. Sebelum masuk ke materi, kita dilatih dulu mindset juaranya. Jadi pas belajar SKD tuh udah punya fondasi mental yang kuat. Ditambah bimbingan untuk tes kesehatan dan wawancara yang super detail. Tutor-tutornya alumni semua dan sharing pengalaman nyata. Sekarang Alhamdulillah udah jadi taruna IPDN. Thank you Superlatif x Priority! 🙏"
  },
  {
    name: "Farah",
    institution: "STIN",
    quote: "Awalnya ragu karena harga bundling-nya murah banget dibanding program lain, takut materinya gak lengkap. Ternyata WAH BANGET! Dapet rangkuman buku mindset yang aplikatif, 50 sesi live class yang isinya padat berkualitas, plus bimbingan khusus buat persiapan psikotes dan wawancara. Tutor-tutornya super supportive, temen-temen di grup juga saling bantu. Worth it banget! Buktinya sekarang udah lolos STIN 2024 🚀"
  },
  {
    name: "Fauzi",
    institution: "Poltekim",
    quote: "Program yang bener-bener bantu aku dari 0 banget. Nilai TO pertama cuma 270, tapi setelah ikut program ini dan benerin mindset + cara belajar, dalam 2 bulan nilai naik jadi 350+. Materi SKD-nya lengkap tapi gak bikin overwhelmed karena dikasi tau mana yang penting-penting aja. Plus dapet guide super detail buat tes kesehatan & psikotes. Sekarang udah resmi jadi Taruna Poltekim. Makasih Superlatif x Priority!"
  },
  {
    name: "Nadira",
    institution: "PKN STAN",
    quote: "Stress banget awalnya karena gagal berkali-kali tes kedinasan. Ternyata masalahnya di mindset sama anxiety yang gak terkontrol. Di Superlatif x Priority diajarin banget cara handle anxiety, time management yang bener, plus dikasi psychological tools yang super membantu. Materinya juga gak cuma teori, tapi banyak latihan soal yang mirip sama soal asli. Akhirnya tembus PKN STAN dengan sekali coba! 💪"
  },
  {
    name: "Rendy",
    institution: "Poltekip",
    quote: "Yang bikin program ini beda itu integrasi antara pembentukan mindset dan materi teknisnya. Kita gak cuma dikasi soal-soal, tapi diajarin cara approach setiap tipe soal dengan tenang dan efektif. Live class-nya interaktif banget, bisa tanya apa aja. Grup sharing-nya super aktif, jadi berasa punya tim support 24/7. Sekarang udah jadi Taruna POLTEKIP dan masih sering sharing pengalaman di grup. Mantap pol pokoknya! 🔥"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState(3); // Default for desktop

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(testimonials.length / displayedTestimonials)
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + Math.ceil(testimonials.length / displayedTestimonials)) % 
      Math.ceil(testimonials.length / displayedTestimonials)
    );
  };

  // Update displayed testimonials based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayedTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setDisplayedTestimonials(2);
      } else {
        setDisplayedTestimonials(3);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance testimonials - subtle movement captures attention
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, displayedTestimonials]);

  // Calculate which testimonials to show
  const startIndex = activeIndex * displayedTestimonials;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + displayedTestimonials
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Social Proof - establish credibility through others' experiences */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Testimonial
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            💎 Kisah Transformasi Mereka yang Sudah Membuktikan!
            Jangan Join Superlatif x Priority Sebelum Baca Perjalanan Sukses Mereka...
          </p>
        </div>

        {/* Storytelling Effect - real stories for emotional connection */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={startIndex + index}
                className="bg-white rounded-xl p-6 shadow-md flex-1 min-w-0 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-between">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 line-clamp-5">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fitt's Law - make navigation buttons easy to use */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicators - help users understand where they are */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / displayedTestimonials) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
