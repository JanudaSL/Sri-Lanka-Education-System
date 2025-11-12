'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact Us', href: '/contact' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={() => handleLinkClick('home')}
            >
              <div>
                <h1 className="text-lg md:text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                  Sri Lanka Education System
                </h1>
                <p className="text-xs text-gray-600">Quality Education for All</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold transition-all duration-300 rounded-lg group ${
                    activeLink === link.id
                      ? 'text-blue-900'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-blue-900 transition-all duration-300 ${
                      activeLink === link.id
                        ? 'w-3/4'
                        : 'w-0 group-hover:w-3/4'
                    }`}
                  />
                  
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}

              {/* CTA Button */}
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-white shadow-xl z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                  activeLink === link.id
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-base font-semibold rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: '150ms',
                animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-[72px]" />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}