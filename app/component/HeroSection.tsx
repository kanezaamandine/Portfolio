"use client";

import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const name = "Amandine";
  const [typedName, setTypedName] = useState("");
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let i = 0;
    const type = () => {
      const interval = setInterval(() => {
        if (i < name.length) setTypedName(name.slice(0, ++i));
        else {
          clearInterval(interval);
          setTimeout(() => {
            setTypedName("");
            i = 0;
            type();
          }, 1500);
        }
      }, 120);
    };
    type();
  }, []);

  useEffect(() => {
    const blinker = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinker);
  }, []);

  return (
    <section className="text-white bg-[#0F0F0F] relative w-full pt-0 pb-8 flex flex-col items-center justify-center px-4 md:px-6 mb-8 overflow-hidden">

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center bg-black space-x-4 md:space-x-20 border-4 border-white rounded-full py-3 px-4 md:px-8 mb-6 text-sm"
      >
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-[#EA3402] border-b-2 border-[#EA3402]"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-[#EA3402] transition"
        >
          About me
        </a>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-[#EA3402] transition"
        >
          Projects
        </a>
        <a 
          href="#skills" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-[#EA3402] transition"
        >
          Skills
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hover:text-[#EA3402] transition"
        >
          Contact
        </a>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center w-full mb-8 md:mb-12"
      >
        <motion.p 
          className="text-white/80 text-center text-sm sm:text-base border border-white/50 rounded-full bg-black backdrop-blur-sm px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Hello fam!👋
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl relative">
        <div className="flex-1 w-full order-1 md:order-1 text-center md:text-left space-y-6 relative py-10">
          <div className="mt-8">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: [0, 96, 96] }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-10 left-4 w-32 h-32 md:w-48 md:h-48 z-10 hidden sm:block md:-top-20 md:left-16"
            >
              <motion.div className="absolute origin-bottom-left h-24 w-0.5 bg-[#EA3402] rotate-50 left-20 top-12" animate={{ height: [0, 96] }} transition={{ duration: 0.6, delay: 0.7 }}>
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </motion.div>
              <motion.div className="absolute origin-bottom-left h-28 w-0.5 bg-[#EA3402] rotate-20 left-16 top-10" animate={{ height: [0, 112] }} transition={{ duration: 0.6, delay: 0.8 }}>
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </motion.div>
              <motion.div className="absolute origin-bottom-left h-20 w-0.5 bg-[#EA3402] rotate-[-5deg] left-12 top-10" animate={{ height: [0, 80] }} transition={{ duration: 0.6, delay: 0.9 }}>
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="text-4xl md:text-7xl relative z-20 pt-2" 
              style={{ fontFamily: 'var(--font-caveat)' }}
            >
              I'm{" "}
              <span className="text-[#EA3402] inline-block">
                {typedName}
                <span className="inline-block w-1 h-9 bg-[#EA3402] ml-1 align-middle" style={{ opacity: blink ? 1 : 0 }} />
              </span>
            </motion.h1>

            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1, 
                  transition: { staggerChildren: 0.08, delayChildren: 1.5 }
                }
              }}
              className="text-6xl sm:text-8xl lg:text-[12rem] font-bold leading-none relative z-0"
            >
              {"DESIGNER".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -90 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                  }}
                  className={letter === "E" ? "text-[#EA3402] inline-block" : "inline-block"}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col gap-8 md:flex-row md:justify-start mt-2 w-full"
            >
              <p className="text-[#FFFFFFCC] max-w-sm text-base mx-auto md:mx-0 md:max-w-xs">
                I craft meaningful digital experiences that connect creativity with functionality to help brands stand out through design and seamless user experience.
              </p>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.4, type: "spring", stiffness: 200 }}
                className="flex space-x-4 justify-center md:justify-start border-2 rounded-full p-1 bg-white mx-auto md:mx-0 mt-0 md:mt-8"
              >
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#EA3402] text-white px-6 md:px-10 py-2 rounded-full hover:opacity-90 cursor-pointer transition text-sm md:text-base">
                  Explore &rarr;
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-black text-black px-6 md:px-10 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition text-sm md:text-base">
                  Hire Me
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="w-full md:w-auto order-2 md:order-2 flex justify-center md:justify-start mt-16 md:mt-0 pb-20 md:pb-0"
        >
          <div className="absolute md:-top-[25px] md:left-[calc(66%+120px)] w-60 h-auto z-20">
            <Image src="/images/image.png" alt="Amandine" width={250} height={300} className="rounded-lg object-cover" />
            <motion.button
              animate={{ y: [0, -4, 0] }}
              transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              whileHover={{ x: 8 }}
              className="absolute -top-4 -right-3 z-50 border border-[#EA3402] text-white bg-black px-8 py-1 rounded-full cursor-pointer transition"
            >
              Let's talk &rarr;
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="relative w-full flex justify-center items-center mt-1"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute w-screen bg-[#D9D9D9] py-6 -rotate-1 z-0" />
          <div className="absolute w-screen bg-[#EA3402] py-4 z-10 overflow-hidden">
            <motion.div
              className="flex w-fit items-center text-white text-lg md:text-xl"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                    <FaFigma size={20} />
                    <p className="whitespace-nowrap font-bold">Logo Design</p>
                  </div>
                  <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                  <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                    <FaFigma size={20} />
                    <p className="whitespace-nowrap font-bold">Brand Design</p>
                  </div>
                  <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                  <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                    <FaFigma size={20} />
                    <p className="whitespace-nowrap font-bold">UI/UX Design</p>
                  </div>
                  <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                  <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                    <FaFigma size={20} />
                    <p className="whitespace-nowrap font-bold">Web Development</p>
                  </div>
                  <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
