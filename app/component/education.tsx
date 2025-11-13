"use client";

import React from "react";

const educationData = [
  {
    year: "2024-2027",
    school: "Rwanda Coding Academy",
    description: "Software Development & Embedded Systems combining design with technical foundations."
  },
  {
    year: "2021-2024",
    school: "Fawe Girls School — Gisozi",
    description: "Built my foundation of my creativity and discipline."
  },
  {
    year: "2016-2021",
    school: "Saint Francois de salles",
    description: "Where my curiosity met creativity. The beginning of my journey as a problem solver and thinker."
  }
];

const workData = [
  {
    year: "2024-2025",
    role: "Co-founder, Blink-Tech",
    description: "Providing innovative tech solutions that help brands communicate visually and digitally."
  },
  {
    year: "2024-2025",
    role: "Co-founder, Blink-Tech",
    description: "Providing innovative tech solutions that help brands communicate visually and digitally."
  },
  {
    year: "2024-2025",
    role: "Co-founder, Blink-Tech",
    description: "Providing innovative tech solutions that help brands communicate visually and digitally."
  }
];

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  return (
    <div className="relative pl-8 mb-10 md:mb-12 group">
      {/* Dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-white group-hover:bg-[#FF451A] transition-colors duration-300"></div>
      
      {/* Connector line */}
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-gray-700"></div>
      
      <div className="bg-[#0F0F0F] p-4 md:p-5 rounded-lg border border-gray-800 hover:border-[#FF451A] transition-colors duration-300">
        <p className="text-[#FF451A] text-sm font-semibold mb-1">{year}</p>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section id="journey" className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            My <span className="text-[#FF451A]">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF451A] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-16">
          {/* Education Column */}
          <div className="relative">
            <div className="sticky top-6 bg-black/80 backdrop-blur-sm z-10 pb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">My Education</h3>
              <div className="w-12 h-0.5 bg-[#FF451A] mb-6"></div>
            </div>
            <div className="relative">
              {educationData.map((edu, idx) => (
                <TimelineItem
                  key={`edu-${idx}`}
                  year={edu.year}
                  title={edu.school}
                  description={edu.description}
                />
              ))}
            </div>
          </div>
          
          {/* Work Experience Column */}
          <div className="relative mt-12 md:mt-0">
            <div className="sticky top-6 bg-black/80 backdrop-blur-sm z-10 pb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Work Experience & Roles</h3>
              <div className="w-12 h-0.5 bg-[#FF451A] mb-6"></div>
            </div>
            <div className="relative">
              {workData.map((work, idx) => (
                <TimelineItem
                  key={`work-${idx}`}
                  year={work.year}
                  title={work.role}
                  description={work.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
