'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Sapient',
    logo: '/images/project.png',
    image: '/images/project.png',
  },
  {
    id: 2,
    title: 'InziraLink',
    logo: '/images/project.png',
    image: '/images/project.png',
  },
  {
    id: 3,
    title: 'Portfolio',
    logo: '/images/project.png',
    image: '/images/project.png',
  }
];

interface LaptopMockupProps {
  image: string;
  alt: string;
  className?: string;
}

const LaptopMockup = ({ image, alt, className = '' }: LaptopMockupProps) => (
  <div className={`relative w-full h-full overflow-hidden ${className}`}>
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover"
    />
  </div>
);

export default function ProjectList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate projects every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[currentIndex];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section id="project-list" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F] relative overflow-hidden">
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ff4500, 0 0 10px #ff4500, 0 0 15px #ff4500;
          }
          50% {
            box-shadow: 0 0 10px #ff4500, 0 0 20px #ff8c00, 0 0 30px #ff4500;
          }
          100% {
            box-shadow: 0 0 5px #ff4500, 0 0 10px #ff4500, 0 0 15px #ff4500;
          }
        }
        
        .glow-border {
          position: relative;
          z-index: 1;
          transition: box-shadow 0.3s ease;
        }
        
        .glow-border:hover {
          animation: glow 2s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
      <div className="max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center h-[450px] md:h-[500px]">
          <div className="hidden md:block absolute left-0 w-[25%] max-w-sm h-[35%]" style={{
            transform: 'perspective(1000px) rotateY(30deg) skewY(-5deg) translateX(0)',
            transformOrigin: 'right center',
            left: 'calc(50% - 395px)',
            border: '1px solid #333',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#1A1A1A',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div className="absolute inset-0 p-1">
              <LaptopMockup 
                image={prevProject.image} 
                alt={prevProject.title}
                className="rounded"
              />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[280px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1A1A] p-8 rounded-lg border border-gray-700 shadow-2xl glow-border relative overflow-visible"
              >
                <div className="text-6xl font-bold text-[#FF451A] opacity-20">
                  {String(project.id).padStart(2, '0')}
                </div>
                <div className="relative h-12 mt 2">
                  <div className="text-2xl font-bold text-white">
                    {project.title}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:block absolute right-0 w-[25%] max-w-sm h-[35%]" style={{
            transform: 'perspective(1000px) rotateY(-30deg) skewY(5deg) translateX(0)',
            transformOrigin: 'left center',
            right: 'calc(50% - 395px)',
            border: '1px solid #333',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#1A1A1A',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div className="absolute inset-0 p-1">
              <LaptopMockup 
                image={nextProject.image} 
                alt={nextProject.title}
                className="rounded"
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#FF451A] w-8' : 'bg-white/30 w-3'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
