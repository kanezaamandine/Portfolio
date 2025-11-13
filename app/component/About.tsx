"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";

const cardData = [
  { id: 1, title: "Product Designer", quote: "Jenny's exceptional product design ensured our website's success. Highly recommended!", client: "Client A", imagePath: "/images/image2.png" },
  { id: 2, title: "UI/UX Expert", quote: "Working with Jenny was a smooth experience. She delivered top-notch user experience flows.", client: "Client B", imagePath: "/images/image2.png" },
  { id: 3, title: "Brand Strategist", quote: "Transformed our brand identity! The results exceeded expectations.", client: "Client C", imagePath: "/images/image2.png" },
  { id: 4, title: "Creative Lead", quote: "Innovative solutions and great attention to detail. A pleasure to collaborate with.", client: "Client D", imagePath: "/images/image2.png" },
];

interface CardData {
  id: number;
  title: string;
  quote: string;
  client: string;
  imagePath: string;
}

interface CardProps {
  data: CardData;
  style: React.CSSProperties;
}

const Card = ({ data, style }: CardProps) => (
    <div 
        className="absolute w-full h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out will-change-transform"
        style={style}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{data.title}</h3>
            <p className="text-white/90 text-sm md:text-base mb-3">{data.quote}</p>
            <p className="text-[#EA3402] text-sm font-medium">— {data.client}</p>
        </div>
        <Image
            src={data.imagePath}
            alt={`Project image for ${data.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 ease-in-out hover:scale-105"
            priority
        />
    </div>
);


export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const totalCards = cardData.length;
  const maxVisibleDepth = 3; 
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); 
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const offsets = isMobile 
    ? [
        { x: 0, y: 0, z: 0, scale: 1, rotate: 0, brightness: 1 },
        { x: 0, y: 60, z: 10, scale: 0.9, rotate: 0, brightness: 0.95 },
        { x: 0, y: 120, z: 20, scale: 0.8, rotate: 0, brightness: 0.9 },
        { x: 0, y: 200, z: 30, scale: 0.7, rotate: 0, brightness: 0.85 },
      ]
    : [
        { x: 225, y: 0, z: 0, scale: 1, rotate: 0, brightness: 1 },
        { x: 75, y: 60, z: 10, scale: 0.95, rotate: -3, brightness: 0.95 },
        { x: -75, y: 120, z: 20, scale: 0.9, rotate: 5, brightness: 0.9 },
        { x: -225, y: 200, z: 30, scale: 0.85, rotate: -7, brightness: 0.85 },
      ];

  const nextCard = useCallback(() => {
    setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalCards;
        setActiveLinkIndex(newIndex);
        return newIndex;
    });
  }, [totalCards]);

  const prevCard = useCallback(() => {
    setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + totalCards) % totalCards;
        setActiveLinkIndex(newIndex);
        return newIndex;
    });
  }, [totalCards]);

  const handleScroll = useCallback((event: React.WheelEvent) => {
    if (!canScroll) return;

    const direction = event.deltaY > 0 ? 'down' : 'up';
    
    if (direction === 'down') {
      nextCard();
    } else if (direction === 'up') {
      prevCard();
    }

    setCanScroll(false);
    setTimeout(() => setCanScroll(true), 600); 
  }, [canScroll, nextCard, prevCard]);

  // Wheel event handling is now done through the onWheel prop in the JSX

  const getCardStyle = (index: number): React.CSSProperties => {
    let visualOrder = (index - currentIndex + totalCards) % totalCards;
    
    if (visualOrder > totalCards / 2) {
        visualOrder = visualOrder - totalCards;
    }
    
    const distance = Math.abs(visualOrder);
    
    if (distance >= maxVisibleDepth) {
        return {
          zIndex: 0,
          transform: `translate3d(0, 300px, -100px) scale(0.7)`, 
          opacity: 0,
          pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
          boxShadow: undefined,
          filter: undefined
        };
    }
    
    const { x, y, z, scale, rotate, brightness } = offsets[distance];
    const zIndex = maxVisibleDepth - distance;

    return {
        zIndex: zIndex,
        transform: `translate3d(${x}px, ${y}px, -${z}px) scale(${scale}) rotate(${rotate}deg)`,
        opacity: 1, 
        pointerEvents: (index === currentIndex ? 'auto' : 'none') as React.CSSProperties['pointerEvents'], 
        boxShadow: `0 10px 30px rgba(0, 0, 0, ${distance === 0 ? 0.2 : 0.4})`,
        filter: `brightness(${brightness})`
    };
  };

  const skillLabels = ["UI/UX Design", "Graphic Design", "Brands Design", "Creative Strategy"];

  return (
    <div 
      className="bg-black py-10 md:py-16 font-inter min-h-[80vh]"
      id="about"
    >
      
      <div className="flex justify-center flex-col items-center mb-14"> 
        <p className="text-white text-center text-3xl md:text-4xl font-bold relative">
          About <span className="text-[#EA3402]">Me</span>
        </p>
        <div className="w-16 h-0.5 bg-white mt-1"></div> 
      </div>
      
      <p className="text-[#FFFFFF99] max-w-3xl mx-auto text-center px-6 text-sm sm:text-base md:text-lg leading-relaxed">
        I am a product and brand designer dedicated to creating beautiful,
        user-centered solutions. With strong foundation in UI/UX and a deep love
        for minimal yet impactful visuals, I help business start-ups transform
        ideas into interactive experience that truly connect with users.
      </p>
      
      <hr className="w-11/12 bg-[#4e4d4d] h-0.5 mt-10 mx-auto" />
      
      <div className="flex flex-wrap justify-center items-center mt-8 mb-10 md:mb-16 gap-3 md:gap-8 lg:gap-16 px-4">
        {skillLabels.map((label, index) => {
            const isActive = index === activeLinkIndex;
            return (
                <button 
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setActiveLinkIndex(index);
                    }}
                    className={`
                        font-medium text-sm sm:text-base md:text-lg lg:text-xl px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 flex items-center
                        ${isActive 
                          ? 'text-white bg-[#EA3402] shadow-lg' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'}
                    `}
                >
                    {isActive && (
                        <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                    )}
                    {label}
                </button>
            );
        })}
      </div>

      <div className="relative flex justify-center items-center w-full min-h-[500px] md:min-h-[600px] py-6 md:py-10 px-4">
        <button 
          onClick={prevCard}
          className="absolute left-2 md:left-4 lg:left-8 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-[#EA3402] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#EA3402] focus:ring-opacity-50"
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div 
          id="card-stack-container" 
          className="relative w-full max-w-md md:max-w-2xl h-[300px] sm:h-[350px] md:h-[400px] mx-auto touch-pan-y"
          style={{ perspective: '1000px' }}
          onWheel={handleScroll}
          onTouchStart={(e) => {
            const touchStartX = e.touches[0].clientX;
            const touchEnd = (e: TouchEvent) => {
              const touchEndX = e.changedTouches[0].clientX;
              if (touchEndX < touchStartX - 50) nextCard();
              if (touchEndX > touchStartX + 50) prevCard();
              document.removeEventListener('touchend', touchEnd as any);
            };
            document.addEventListener('touchend', touchEnd as any);
          }}
        >
          {cardData.map((data, index) => (
            <div 
              key={data.id}
              onClick={() => {
                if (index !== currentIndex) {
                  setCurrentIndex(index);
                  setActiveLinkIndex(index);
                }
              }}
              className="cursor-pointer"
            >
              <Card 
                data={data} 
                style={getCardStyle(index)} 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={nextCard}
          className="absolute right-2 md:right-4 lg:right-8 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-[#EA3402] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#EA3402] focus:ring-opacity-50"
          aria-label="Next card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}