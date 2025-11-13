"use client";

import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-4 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white">
      <nav className="max-w-7xl mx-auto mb-8 md:mb-12 relative">
        <div className="md:hidden flex justify-between items-center w-full px-4 py-3">
          <div className="w-8"></div>
          <div className="text-xl font-bold">Amandine</div>
          <button 
            id="mobile-menu-button"
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              const button = document.getElementById('mobile-menu-button');
              if (menu && button) {
                menu.classList.toggle('hidden');
                button.classList.toggle('text-[#EA3402]');
              }
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-t border-white/10 rounded-b-2xl overflow-hidden">
          <div className="flex flex-col py-2">
            {['Home', 'About me', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`px-6 py-4 text-lg transition-colors duration-200 ${
                  item === 'Home' 
                    ? 'text-[#EA3402] bg-white/5' 
                    : 'text-white hover:bg-white/5 hover:text-[#EA3402]'
                }`}
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 py-3 px-4 sm:px-6 border-2 sm:border-4 border-white rounded-full">
            {['Home', 'About me', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`px-3 py-1 text-sm sm:text-base md:px-4 md:py-2 transition-colors duration-200 ${
                  item === 'Home' 
                    ? 'text-[#EA3402] border-b-2 border-[#EA3402]' 
                    : 'text-white hover:text-[#EA3402]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex justify-center w-full mb-8 md:mb-12">
        <p className="text-white/80 text-center text-sm sm:text-base border border-white/50 rounded-full bg-black/50 backdrop-blur-sm px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors">
          Hello fam! 👋
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6 relative z-10 text-center lg:text-left">
            <div className="relative">
              <div className="absolute -top-10 -left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:-top-16 lg:-left-8 z-0 opacity-70">
                {[50, 20, -5].map((rotate, i) => (
                  <div 
                    key={i}
                    className="absolute origin-bottom-left h-16 sm:h-20 md:h-24 w-0.5 bg-[#EA3402]"
                    style={{
                      rotate: `${rotate}deg`,
                      left: `${(i + 1) * 16}px`,
                      top: '40%',
                      transition: 'height 0.3s ease-in-out'
                    }}
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#EA3402] absolute -top-1 -right-0.5"></span>
                  </div>
                ))}
              </div>

              <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-caveat mb-2">
                  I'm <span className="text-[#EA3402]">Amandine</span>
                </h1>
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] font-candal font-bold leading-[0.9] tracking-tight">
                  D<span className="text-[#EA3402]">E</span>SIGNER
                </h2>
              </div>

              <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 mt-6 mb-8 lg:mb-12">
                I craft meaningful digital experiences that connect creativity with functionality to help brands stand out through design and seamless user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#EA3402] hover:bg-[#ff4d1a] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center">
                  Explore my work <span className="ml-2">→</span>
                </button>
                <button className="bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium transition-colors duration-200">
                  Hire Me
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-6 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative z-10">
                <Image
                  src="/images/image.png"
                  alt="Amandine"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
                <button className="absolute -top-4 -right-4 sm:-right-2 sm:top-auto sm:bottom-8 z-20 bg-black border border-[#EA3402] text-white px-4 sm:px-6 py-1.5 rounded-full text-sm sm:text-base font-medium hover:bg-[#1a1a1a] transition-colors flex items-center">
                  Let's talk <span className="ml-1">→</span>
                </button>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EA3402]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#EA3402]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-24 md:mt-32 lg:mt-40 overflow-hidden">
        <div className="absolute inset-0 bg-[#D9D9D9] -rotate-1 transform origin-left scale-x-110"></div>
        
        <div className="relative bg-[#EA3402] py-4 md:py-5 overflow-hidden">
          <motion.div
            className="flex w-fit items-center text-white text-base sm:text-lg md:text-xl"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { icon: <FaFigma size={18} className="flex-shrink-0" />, text: 'UI/UX Design' },
                  { icon: <FaFigma size={18} className="flex-shrink-0" />, text: 'Brand Identity' },
                  { icon: <FaFigma size={18} className="flex-shrink-0" />, text: 'Web Design' },
                  { icon: <FaFigma size={18} className="flex-shrink-0" />, text: 'Responsive Design' },
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                      {item.icon}
                      <span className="ml-2 font-medium whitespace-nowrap">{item.text}</span>
                    </div>
                    <span className="text-white/50 font-extrabold">/</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}