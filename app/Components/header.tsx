'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

import Header2 from '../../public/header2.jpg';
import Header3 from '../../public/header3.webp';
import Header4 from '../../public/header4.jpg';

// Define slides as a constant
export const SLIDES = [
  {
    image: Header2,
    title: "EXCELLENCE IN",
    subtitle: "EDUCATION",
    description: "Empowering the youth through free and quality education in Sri Lanka.",
  },
  {
    image: Header4,
    title: "UNITY THROUGH",
    subtitle: "LEARNING",
    description: "Bringing together cultures and languages to build a stronger nation.",
  },
  {
    image: Header3,
    title: "KNOWLEDGE FOR",
    subtitle: "THE FUTURE",
    description: "Guiding every generation toward innovation and national development.",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying || SLIDES.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Changed to 6 seconds for smoother experience

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Handle manual slide navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length);
      } else if (e.key === 'ArrowRight') {
        goToSlide((currentSlide + 1) % SLIDES.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, goToSlide]);

  // Memoized content sections
  

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <div 
        className="relative h-[calc(100vh-80px)] min-h-[500px] max-h-[800px] overflow-hidden"
        role="region"
        aria-label="Hero slider"
      >
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={currentSlide !== index}
          >
            {/* Image with ken burns effect */}
            <div
              className={`absolute inset-0 ${
                currentSlide === index ? 'animate-kenBurns' : ''
              }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.subtitle}`}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
                placeholder="blur"
              />
              {/* Enhanced gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            </div>
            
            {/* Text content with staggered animation */}
            <div 
              className={`relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 transition-all duration-1000 ${
                currentSlide === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 sm:mb-3 tracking-wider text-shadow transition-all duration-700 delay-200 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.title}
              </h2>
              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 tracking-wide text-shadow-lg transition-all duration-700 delay-400 text-center ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.subtitle}
              </h1>
              <p 
                className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-widest text-shadow transition-all duration-700 delay-600 text-center ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        {SLIDES.length > 1 && (
          <>
            <button
              onClick={() => goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide((currentSlide + 1) % SLIDES.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Slide Indicators */}
        {SLIDES.length > 1 && (
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  currentSlide === index 
                    ? 'bg-white w-6 sm:w-8' 
                    : 'bg-white/50 hover:bg-white/70 w-2 sm:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index}
              />
            ))}
          </div>
        )}
      </div>


      {/* Custom styles for animations and text shadows */}
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-lg {
          text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 0, 0, 0.6);
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-kenBurns {
          animation: kenBurns 8000ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}