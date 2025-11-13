"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";

const cardData = [
  { id: 1, title: "Product Designer", quote: "Jenny's exceptional product design ensured our website's success. Highly recommended!", client: "Client A", imagePath: "/images/image2.png" },
  { id: 2, title: "UI/UX Expert", quote: "Working with Jenny was a smooth experience. She delivered top-notch user experience flows.", client: "Client B", imagePath: "/images/image2.png" },
  { id: 3, title: "Brand Strategist", quote: "Transformed our brand identity! The results exceeded expectations.", client: "Client C", imagePath: "/images/image2.png" },
  { id: 4, title: "Creative Lead", quote: "Innovative solutions and great attention to detail. A pleasure to collaborate with.", client: "Client D", imagePath: "/images/image2.png" },
];

const Card = ({ data, style }) => (
    <div 
        className="absolute w-full h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out"
        style={style}
    >
        <Image
            src={data.imagePath}
            alt={`Project image for ${data.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 ease-in-out hover:scale-105"
        />
    </div>
);


export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const totalCards = cardData.length;
  const maxVisibleDepth = 3; 
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); 
  
  const offsets = [
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

  const handleScroll = useCallback((event) => {
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

  useEffect(() => {
    const cardContainer = document.getElementById('card-stack-container');
    if (cardContainer) {
      cardContainer.addEventListener('wheel', handleScroll, { passive: false });
    }
    
    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  const getCardStyle = (index) => {
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
          pointerEvents: 'none',
        };
    }
    
    const { x, y, z, scale, rotate, brightness } = offsets[distance];
    const zIndex = maxVisibleDepth - distance;

    return {
        zIndex: zIndex,
        transform: `translate3d(${x}px, ${y}px, -${z}px) scale(${scale}) rotate(${rotate}deg)`,
        opacity: 1, 
        pointerEvents: index === currentIndex ? 'auto' : 'none', 
        boxShadow: `0 10px 30px rgba(0, 0, 0, ${distance === 0 ? 0.2 : 0.4})`,
        filter: `brightness(${brightness})`, 
    };
  };

  const skillLabels = ["UI/UX Design", "Graphic Design", "Brands Design", "Creative Strategy"];

  return (
    <div 
      className="bg-black py-16 font-inter min-h-[80vh]"
    >
      
      <div className="flex justify-center flex-col items-center mb-14"> 
        <p className="text-white text-center text-3xl md:text-4xl font-bold relative">
          About <span className="text-[#EA3402]">Me</span>
        </p>
        <div className="w-16 h-0.5 bg-white mt-1"></div> 
      </div>
      
      <p className="text-[#FFFFFF99] max-w-3xl mx-auto text-center px-6 text-base md:text-lg leading-relaxed">
        I am a product and brand designer dedicated to creating beautiful,
        user-centered solutions. With strong foundation in UI/UX and a deep love
        for minimal yet impactful visuals, I help business start-ups transform
        ideas into interactive experience that truly connect with users.
      </p>
      
      <hr className="w-11/12 bg-[#4e4d4d] h-0.5 mt-10 mx-auto" />
      
      <div className="flex flex-wrap justify-center items-center mt-8 mb-16 gap-4 md:gap-16 px-4">
        {skillLabels.map((label, index) => {
            const isActive = index === activeLinkIndex;
            return (
                <p 
                    key={index}
                    className={`
                        font-bold text-lg md:text-2xl whitespace-nowrap relative transition-colors duration-300 flex items-center
                        ${isActive ? 'text-[#EA3402] underline' : 'text-white'}
                    `}
                >
                    {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#EA3402] mr-1"></span>
                    )}
                    {label}
                </p>
            );
        })}
      </div>

      <div className="relative flex justify-center items-center w-full min-h-[600px] py-10 px-4">
        
        <div 
            id="card-stack-container" 
            className="relative w-full max-w-2xl h-[400px] mx-auto cursor-grab" 
            style={{ perspective: '1000px' }}
        >
            {cardData.map((data, index) => (
                <Card 
                    key={data.id} 
                    data={data} 
                    style={getCardStyle(index)} 
                />
            ))}
        </div>

      </div>
    </div>
  );
}