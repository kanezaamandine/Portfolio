"use client";

import { Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#0F0F0F]">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Featured <span className="text-[#FF451A]">Projects</span>
                </h2>
                <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97] }}
                    className="w-full lg:w-1/2 space-y-4 lg:space-y-6 order-2 lg:order-1"
                >
                    <div className="bg-[#EA3402] rounded-md py-2 px-3 w-fit">
                        <p className="flex items-center gap-2">
                            <Zap size={14} color='black' fill='black' className="shrink-0" />
                            <span className='text-sm sm:text-base text-black font-bold'>Smart journeys</span>
                        </p>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-white'>InziraLink</h1>
                    <p className='text-white/90 text-sm md:text-base leading-relaxed'>
                        Redefining movement with smarter, faster, and greener transport solutions.
                    </p>
                    <button className="mt-4 bg-[#EA3402] hover:bg-[#ff4d1a] text-white px-6 py-3 rounded-full cursor-pointer font-medium transition-colors duration-200">
                        View Project
                    </button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97], delay: 0.2 }}
                    className='w-full lg:w-1/2 relative order-1 lg:order-2'
                >
                    <div className='aspect-video rounded-xl bg-linear-to-br from-[#FF5A2D]/50 to-[#475F74]/50 p-1 overflow-hidden'>
                        <div className='relative w-full h-full rounded-lg overflow-hidden'>
                            <Image
                                src="/images/project.png"
                                alt="InziraLink Project"
                                fill
                                className='object-cover transition-transform duration-500 hover:scale-105'
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}