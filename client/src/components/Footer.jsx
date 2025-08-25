import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-28">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white">UIStock</h1>
          <p className="mt-3 text-sm text-gray-400">
            Discover, share, and download premium UI designs, components, and website templates.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/category/ui-ux" className="hover:text-white">UI / UX</a></li>
            <li><a href="/category/web-templates" className="hover:text-white">Web Templates</a></li>
            <li><a href="/category/graphic-designs" className="hover:text-white">Graphic Design</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UIStock. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
