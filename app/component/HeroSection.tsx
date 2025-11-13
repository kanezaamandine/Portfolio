"use client";

import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="text-white relative w-full pt-1 pb-8 flex flex-col items-center justify-center px-4 md:px-6 mb-8 overflow-hidden">
      
      <nav className="flex justify-center items-center space-x-4 md:space-x-20 border-4 border-white rounded-full py-3 px-4 md:px-8 mb-6 text-sm">
        <a href="#" className="text-[#EA3402] border-b-2 border-[#EA3402]">
          Home
        </a>
        <a href="#" className="hover:text-[#EA3402] transition">
          About me
        </a>
        <a href="#" className="hover:text-[#EA3402] transition">
          Projects
        </a>
        <a href="#" className="hover:text-[#EA3402] transition">
          Skills
        </a>
        <a href="#" className="hover:text-[#EA3402] transition">
          Contact
        </a>
      </nav>

      <div className="flex justify-center w-full mb-12">
        <p className="text-white/80 text-center text-sm border border-white rounded-full bg-black w-fit p-3 cursor-pointer">
          Hello fam!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl relative">
        
        <div className="flex-1 w-full order-1 md:order-1 text-center md:text-left space-y-6 relative py-10">
          <div className="mt-8">
            
            <div className="absolute -top-10 left-4 w-32 h-32 md:w-48 md:h-48 z-10 hidden sm:block md:-top-20 md:left-16">
              <div className="absolute origin-bottom-left h-24 w-0.5 bg-[#EA3402] rotate-50 left-20 top-12 transition duration-500 ease-in-out hover:h-28">
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </div>
              <div className="absolute origin-bottom-left h-28 w-0.5 bg-[#EA3402] rotate-20 left-16 top-10 transition duration-500 ease-in-out hover:h-32">
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </div>
              <div className="absolute origin-bottom-left h-20 w-0.5 bg-[#EA3402] rotate-[-5deg] left-12 top-10 transition duration-500 ease-in-out hover:h-24">
                <span className="block w-2 h-2 rounded-full bg-[#EA3402] absolute -top-1 -right-1"></span>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-caveat relative z-20 pt-16">
              I'm <span className="text-[#EA3402]">Amandine</span>
            </h1>

            <h2 className="text-6xl sm:text-8xl lg:text-[12rem] font-candal font-bold leading-none relative z-0">
              D<span className="text-[#EA3402]">E</span>SIGNER
            </h2>

            <div className="flex flex-col gap-8 md:flex-row md:justify-start mt-8 w-full">
              <p className="text-[#FFFFFFCC] max-w-sm font-candal text-base mx-auto md:mx-0 md:max-w-xs">
                I craft meaningful digital experiences that connect creativity
                with functionality to help brands stand out through design and
                seamless user experience.
              </p>
              
              <div className="flex space-x-4 justify-center md:ml-auto border-2 rounded-full p-1 bg-white mx-auto mt-0 md:mt-8">
                <button className="bg-[#EA3402] text-white px-6 md:px-10 py-2 rounded-full hover:opacity-90 cursor-pointer transition text-sm md:text-base">
                  Explore &rarr;
                </button>
                <button className="border border-black text-black px-6 md:px-10 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition text-sm md:text-base">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto order-2 md:order-2 flex justify-center md:justify-start mt-16 md:mt-0 pb-20 md:pb-0">
          <div className="absolute md:top-[40px] md:left-[calc(60%+120px)] w-60 h-auto z-20">
            <Image
              src="/images/image.png"
              alt="Amandine"
              width={250}
              height={300}
              className="rounded-lg object-cover"
            />
            <button className="absolute -top-4 -right-3 z-50 border border-[#EA3402] text-white bg-black px-8 py-1 rounded-full cursor-pointer hover:translate-x-1 hover:text-white transition">
              Let's talk &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center mt-14">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
          <div className="absolute w-screen bg-[#D9D9D9] py-6 -rotate-1 z-0" />
          
          <div className="absolute w-screen bg-[#EA3402] py-4 z-10 overflow-hidden">
            <motion.div
                className="flex w-fit items-center text-white text-lg md:text-xl"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40, 
                        ease: "linear",
                    },
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                            <FaFigma size={20}/>
                            <p className="whitespace-nowrap font-bold">Logo Design</p>
                        </div>
                        <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                        <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                            <FaFigma size={20}/>
                            <p className="whitespace-nowrap font-bold">Brand Design</p>
                        </div>
                        <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                        <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                            <FaFigma size={20}/>
                            <p className="whitespace-nowrap font-bold">UI/UX Design</p>
                        </div>
                        <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                        <div className="flex flex-row gap-2 min-w-max items-center mx-8 md:mx-16">
                            <FaFigma size={20}/>
                            <p className="whitespace-nowrap font-bold">Web Development</p>
                        </div>
                        <span className="text-white/50 font-extrabold min-w-max text-lg md:text-xl">/</span>
                    </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
      
    </section>
  );
}