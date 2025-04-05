import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-white">SUPERLATIF</span>
              <span className="text-xl text-gray-400">x</span>
              <span className="text-xl font-bold text-blue-400">PRIORITY</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Kombinasi unik pengembangan mindset juara dan persiapan intensif oleh Alumni Grade A+
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Program</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">SuperLearn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Priority Kedinasan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundling Package</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Class Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Tentang Kami</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Superlatif</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tentang Priority</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutor & Mentor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Success</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@superlatifpriority.id</li>
              <li>WA: +62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Superlatif x Priority. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
