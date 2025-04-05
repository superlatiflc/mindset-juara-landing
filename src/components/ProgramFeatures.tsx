
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const superlearnFeatures = [
  {
    title: "Ringkasan Buku Populer",
    items: [
      "100+ ringkasan buku pengembangan diri",
      "Format audio & teks yang mudah dipahami",
      "Update ringkasan berkala"
    ]
  },
  {
    title: "Konten Eksklusif Mindset Juara",
    items: [
      "Rahasia pola pikir siswa sukses PTN/Kedinasan",
      "Konten dari jurnal ilmiah dan universitas ternama",
      "Materi eksklusif yang tidak ada di tempat lain"
    ]
  },
  {
    title: "Info Update PTN & Kedinasan",
    items: [
      "Data informasi terbaru jalur masuk PTN/Kedinasan",
      "Fakta & statistik terpercaya",
      "Panduan lengkap strategi sukses seleksi"
    ]
  },
  {
    title: "Success Story Database",
    items: [
      "Pengalaman nyata alumni sukses",
      "Strategi yang sudah terbukti",
      "Journey transformasi mindset"
    ]
  },
  {
    title: "Premium E-book Collection",
    items: [
      "Ebook khusus untuk siswa superlearn",
      "Download PDF khusus yang sudah kami sediakan",
      "Ebook di sesuaikan untuk siswa superlearn"
    ]
  },
  {
    title: "Resource Center & Komunitas",
    items: [
      "Tools & template belajar efektif",
      "Forum diskusi & mentoring",
      "Progress di Grup khusus"
    ]
  }
];

const priorityFeatures = [
  {
    title: "Live Class & Tryout Lengkap",
    items: [
      "Total 50 Sesi Live Class SKD Kedinasan",
      "Total 20x Tryout SKD 2025",
      "Total 25 Sesi Live Class TPA & TBI"
    ]
  },
  {
    title: "Persiapan Dasar Komprehensif",
    items: [
      "Kelas bahasa inggris dasar",
      "Kelas Matematika dasar",
      "Kelas Bahasa Indonesia dasar"
    ]
  },
  {
    title: "Akses Material & Bimbingan",
    items: [
      "Free Akses Record & Materi Live Class",
      "Bimbingan Tes Kesehatan & Kebugaran",
      "Bimbingan Tes Psikotest"
    ]
  },
  {
    title: "Persiapan Tahap Akhir",
    items: [
      "Bimbingan Tes Wawancara",
      "E-Modul Semua Tahapan Seleksi",
      "Record Materi Rahasia Semua Tahapan"
    ]
  },
  {
    title: "Metode Belajar Efektif",
    items: [
      "Belajar Yang Penting – Penting Aja",
      "Langsung Kisi – Kisi Soalnya",
      "Pengajar 100% dari Alumni Kedinasan"
    ]
  },
  {
    title: "Dukungan Penuh",
    items: [
      "Free Konsultasi Sekolah Kedinasan",
      "Grup Sharing dan Diskusi",
      "Bimbingan Pendaftaran Kedinasan (Online)"
    ]
  }
];

const ProgramFeatures = () => {
  return (
    <section id="program" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Kenapa Anda Harus Bergabung <span className="text-primary">Superlatif x Priority Kedinasan?</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Kamu akan mendapatkan modul SUPERLEARN dan Program Intensif Kedinasan by Priority. 
            Dan ini salah satu kenapa kamu harus join program ini:
          </p>
        </div>

        <Tabs defaultValue="superlearn" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="superlearn" className="text-base py-3">
              <span className="font-semibold">SuperLearn</span>
              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Rp850.000</span>
            </TabsTrigger>
            <TabsTrigger value="priority" className="text-base py-3">
              <span className="font-semibold">Priority Kedinasan</span>
              <span className="ml-2 text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">Rp4.500.000</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="superlearn" className="rounded-lg p-6 bg-white shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-3">1. Terbukti Efektif: Strategi Lulus Kedinasan Sekali Coba!</h3>
              <p className="text-gray-700 mb-4">
                Akses ke SuperLearn (Senilai Rp850.000!) 🎧📚 — SuperLearn adalah platform
                self-development untuk meningkatkan mindset juara sebelum belajar akademik.
              </p>
              <p className="font-medium text-gray-800">
                Kami Percaya: Sukses Akademik Dimulai dari MINDSET, Bukan Sekadar Hafalan!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {superlearnFeatures.map((feature, index) => (
                <div key={index} className="bg-primary/5 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">{feature.title}</h4>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check size={16} className="text-primary mt-1 mr-2 shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="priority" className="rounded-lg p-6 bg-white shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-secondary mb-3">2. Program Paling Lengkap & Intensif Kedinasan 2025 by Priority</h3>
              <p className="text-gray-700 mb-4">
                Akses ke Program Intensif Kedinasan (Senilai Rp4.500.000!) 🎧📚
              </p>
              <p className="font-medium text-gray-800">
                Program intensif dengan bimbingan langsung dari alumni kedinasan grade A+
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {priorityFeatures.map((feature, index) => (
                <div key={index} className="bg-secondary/5 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">{feature.title}</h4>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check size={16} className="text-secondary mt-1 mr-2 shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramFeatures;
