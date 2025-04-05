
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Kelas Intensif Online Kedinasan 2025. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
