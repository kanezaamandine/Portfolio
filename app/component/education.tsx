"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const educationData = [
  { year: "2024-2027", school: "Rwanda Coding Academy", description: "Software Development & Embedded Systems combining design with technical foundations." },
  { year: "2021-2024", school: "Fawe Girls School — Gisozi", description: "Built my foundation of my creativity and discipline." },
  { year: "2016-2021", school: "Saint Francois de salles", description: "Where my curiosity met creativity. The beginning of my journey as a problem solver and thinker." },
];

const workData = [
  { year: "2024-2025", role: "Co-founder, Blink-Tech", description: "Providing innovative tech solutions that help brands communicate visually and digitally." },
  { year: "2024-2025", role: "Co-founder, Blink-Tech", description: "Providing innovative tech solutions that help brands communicate visually and digitally." },
  { year: "2024-2025", role: "Co-founder, Blink-Tech", description: "Providing innovative tech solutions that help brands communicate visually and digitally." },
];

const tags = [
  "Landing pages","Video editing and animations","UI/UX Design","Motion Graphics","Brand Identity",
  "Web Development","Mobile Apps","3D Animation","Figma Expert","Prototyping",
  "Design Systems","User Research","Framer Motion","Tailwind CSS","Next.js",
];

const faqs = [
  { question: "Why should you choose me instead of a freelancer?", answer: "I bring a blend of design excellence, technical precision, and startup hustle. Unlike typical freelancers, I co-founded Blink-Tech and built Sapient from scratch — meaning I deliver end-to-end solutions with ownership, speed, and scalability." },
  { question: "How do we price your project the expected budget.", answer: "I offer transparent, value-based pricing. We start with your goals and budget, then craft a custom package — no hidden fees, no bloated scopes. You get premium quality at fair rates." },
  { question: "Why should you choose me as your very first choice?", answer: "Because I don’t just design — I solve problems. From Rwanda Coding Academy to leading UI/UX at Blink-Tech, I’ve trained to think in systems, not just screens. Your project gets strategy, not just aesthetics." },
  { question: "Why should you choose me as your very first choice?", answer: "Repeat clients choose me because I overdeliver. Every project includes free revisions, performance insights, and post-launch support. I’m not done when the design is — I’m done when you succeed." },
];

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative flex items-center gap-6 mb-12 group">
    <div className="relative flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-white group-hover:bg-[#FF451A] transition-colors duration-300 z-10" />
    </div>
    <div className="flex-1 bg-[#0F0F0F] p-4 md:p-5 rounded-lg border border-gray-800 hover:border-[#FF451A] transition-colors duration-300">
      <p className="text-[#FF451A] text-sm font-semibold mb-1">{year}</p>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const FAQCard = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="relative bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-[#FF451A]/50 transition-all duration-300 overflow-visible">
    <button
      onClick={onToggle}
      className="w-full text-left flex items-center justify-between gap-4 group relative z-10"
    >
      <p className="text-gray-200 text-sm md:text-base font-medium pr-2 group-hover:text-white transition-colors">
        {question}
      </p>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0 w-8 h-8 rounded-full bg-[#FF451A] flex items-center justify-center"
      >
        <span className="text-white text-lg font-bold">{isOpen ? "-" : "+"}</span>
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute left-0 right-0 top-full mt-2 bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 shadow-lg z-20 overflow-hidden"
    >
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </motion.div>
  </div>
);

export default function Education() {
  const half = Math.ceil(tags.length / 2);
  const row1 = tags.slice(0, half);
  const row2 = tags.slice(half);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="journey" className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-[#0F0F0F] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            My <span className="text-[#FF451A]">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF451A] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12">
          <div className="relative">
            <h3 className="text-xl md:text-2xl font-bold mb-2">My Education</h3>
            <div className="w-12 h-0.5 bg-[#FF451A] mb-6" />
            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700" />
              {educationData.map((edu, i) => (
                <TimelineItem key={`edu-${i}`} year={edu.year} title={edu.school} description={edu.description} />
              ))}
            </div>
          </div>

          <div className="relative mt-12 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Work Experience & Roles</h3>
            <div className="w-12 h-0.5 bg-[#FF451A] mb-6" />
            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700" />
              {workData.map((work, i) => (
                <TimelineItem key={`work-${i}`} year={work.year} title={work.role} description={work.description} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute inset-0 z-0">
            {[...Array(3)].map((_, i) => (
              <div key={`h-${i}`} className="absolute h-[2px] bg-[#6689A712]" style={{ top: `${(100 / 4) * (i + 1)}%`, left: 0, right: 0 }} />
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`v-${i}`} className="absolute top-0 bottom-0 w-[2px] bg-[#6689A712]" style={{ left: `calc(${(100 / 7) * (i + 1)}%)` }} />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Best of the best</h2>
            <div className="bg-linear-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl border border-gray-800">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative">
                  <div className="relative z-10">
                    <Image src="/images/mockup.png" alt="Sapient App Mockup" width={600} height={400} className="rounded-lg shadow-xl w-full" />
                  </div>
                  <div className="absolute inset-0 -z-10 blur-3xl">
                    <div className="w-full h-full bg-[#FF451A]/10 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6 relative z-10">
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                      <Image src="/images/pc.png" alt="Sapient Logo" width={64} height={64} className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">SAPIENT</h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      A smart assistant app that simplifies the student learning experience. From concept to interface, I designed Sapient to be accessible, intuitive and elegant.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-[#FF451A] text-white font-medium rounded-full hover:bg-[#e03e16] transition-colors duration-200">
                      Hire Me
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200">
                      View Design
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[row1, row2].map((row, rowIndex) => (
                <div key={rowIndex} className="overflow-hidden">
                  <motion.div
                    className="flex gap-4 py-2"
                    animate={{ x: rowIndex === 0 ? [0, -1200] : [0, 1200] }}
                    transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
                  >
                    {[...row, ...row].map((tag, i) => (
                      <span key={`${rowIndex}-${i}`} className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-base md:text-lg font-medium text-gray-200 whitespace-nowrap shrink-0">
                        <svg className="w-5 h-5 text-[#FF451A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Why-s & <span className="text-[#FF451A]">How-s</span> !
              </h2>
              <div className="w-24 h-px bg-[#FF451A] mx-auto" />
              <p className="text-gray-400 mt-3 text-sm md:text-base">
                Helping you understand our process and why choose me from others
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
              {faqs.map((faq, i) => (
                <FAQCard key={i} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => handleToggle(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
