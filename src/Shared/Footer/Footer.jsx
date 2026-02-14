import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fec5bb] to-[#ece4db] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          {/* Company Info - Takes more space on mobile, equal on desktop */}
          <div className="flex-1 min-w-0">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5a189a]">
                Shoma's fashion house
              </h3>
              <p className="text-gray-700 text-sm md:text-base max-w-2xl">
                Providing premium fashion collections with the perfect blend of
                style and comfort. Elevating everyday wear with elegance.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/share/17spR46JF7/"
                  className="text-[#5a189a] hover:text-[#7b2cbf] transition-colors transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook size={22} />
                </a>

                <a
                  href="https://wa.me/88001687762824"
                  className="transition-transform hover:scale-110 text-green-500"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info - Stacks on mobile, aligns right on desktop */}
          <div className="flex-1 lg:text-right min-w-0">
            <div className="space-y-4 lg:inline-block">
              <h3 className="text-xl md:text-2xl font-bold text-[#5a189a] lg:text-left">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex lg:justify-end items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#7b2cbf]/10 mr-3 flex-shrink-0">
                    <FaPhone className="text-[#7b2cbf]" size={16} />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">
                    +8801687762824
                  </span>
                </div>
                <div className="flex lg:justify-end items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e63946]/10 mr-3 flex-shrink-0">
                    <FaEnvelope className="text-[#e63946]" size={16} />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base break-all">
                    Sofiashoma8080@gmail
                  </span>
                </div>
                <div className="flex lg:justify-end items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff9e00]/10 mr-3 mt-1 flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#ff9e00]" size={16} />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">
                    Mohammadpur, Dhaka Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#7b2cbf]/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="text-center">
            <p className="text-gray-700 text-sm md:text-base">
              © 2024{' '}
              <span className="font-bold text-[#5a189a]">
                Shoma's fashion house
              </span>
              <span className="hidden sm:inline"> — All rights reserved.</span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mt-1">
              Elevating fashion experiences since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
