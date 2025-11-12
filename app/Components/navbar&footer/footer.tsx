import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Diagonal line pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.1) 35px,
            rgba(255,255,255,0.1) 37px
          )`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Ministry Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Sri Lanka Education System</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Empowering the nation through quality education and fostering excellence in learning for every student across Sri Lanka.
              </p>
            </div>

            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="bg-white text-blue-900 rounded-full p-3 hover:bg-blue-100 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white text-blue-900 rounded-full p-3 hover:bg-blue-100 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Site Navigations */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Site Navigations</h3>
            <nav>
              <ul className="space-y-3">
                {[
                  'About Ministry',
                  'Contact Us',
                  'FAQs',
                  'Site Map'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 hover:text-blue-300 transition-colors group"
                    >
                      <span className="text-blue-400 group-hover:translate-x-1 transition-transform">›</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-2">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">Hotline</p>
                  <p className="font-semibold group-hover:text-blue-300 transition-colors">+94 11 269 5301</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="font-semibold group-hover:text-blue-300 transition-colors break-all">info@moe.gov.lk</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">Address</p>
                  <p className="font-semibold group-hover:text-blue-300 transition-colors">
                    Isurupaya, Battaramulla<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-200">
          <p>© {currentYear} Ministry of Education, Sri Lanka. All Rights Reserved.</p>
          <p className="mt-2">
            Designed and Developed by:{' '}
            <a 
              href="https://kjanuda.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors underline font-semibold"
            >
              Januda J Kodithuwakku
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}