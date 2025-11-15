"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, ArrowUp, Send, User, Mail, Briefcase, FileText } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    budget: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo)");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <motion.a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#FF451A] to-[#e03e16] text-white font-medium rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Ping Me!</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.a>
        </div>

        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-thin mb-16">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#FF6B35_0%,#FF6B35_30%,#FFFFFF_100%)]">
            Let's connect and design
          </span>
        </h1>

        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0F0F0F] rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-800 shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            CONNECT WITH <span className="text-[#FF451A]">ME</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-lg font-medium text-gray-300 mb-1">Your names</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  required
                  className="w-full px-0 py-1 bg-transparent text-[12px] border-b border-gray-500 text-white placeholder-white/40  focus:outline-none focus:border-[#FF451A] transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label className="block text-lg font-medium text-gray-300 mb-1">Your e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                  required
                  className="w-full px-0 py-1 bg-transparent text-[12px] placeholder-white/40 border-b border-gray-500 text-white focus:outline-none focus:border-[#FF451A] transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-lg font-medium text-gray-300 mb-1">Project name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  required
                  className="w-full px-0 py-1 bg-transparent text-[12px] placeholder-white/40 border-b border-gray-500 text-white focus:outline-none focus:border-[#FF451A] transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label className="block text-lg font-medium text-gray-300 mb-1">Budget proposal</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-white/40 text-sm  border-gray-600 focus:border-white/40 focus:ring-1 focus:ring-white/40 focus:outline-none transition-colors duration-200 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFFFFF66' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.75rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.2em",
                  }}
                >
                  <option value="" disabled className="bg-gray-800 text-white/40">Enter suggested budget range</option>
                  <option value="< $1,000" className="bg-gray-800 text-white/80">&lt; $1,000</option>
                  <option value="$1,000 - $5,000" className="bg-gray-800 text-white/80">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000" className="bg-gray-800 text-white/80">$5,000 - $10,000</option>
                  <option value="$10,000+" className="bg-gray-800 text-white/80">$10,000+</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block text-lg font-medium text-gray-300 mb-1">Project description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter project description"
                rows={3}
                required
                className="w-full px-0 py-1 bg-transparent text-[12px] placeholder-white/40 border-b border-gray-500 text-white focus:outline-none focus:border-[#FF451A] transition-colors duration-300 resize-none"
              />
            </div>

            <div className="flex justify-center pt-8">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 w-full bg-[#FF451A] text-white font-semibold rounded-full shadow-lg hover:bg-[#e03e16] focus:outline-none focus:ring-4 focus:ring-[#FF451A]/30 transition-all duration-300"
              >
                Send now!
              </motion.button>
            </div>
          </form>
        </motion.div>

        <footer className="mt-24 pt-16 border-t border-[#D9D9D900]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-center md:justify-between gap-4 sm:gap-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-white">Amandine</h1>
                  <div className="inline-block">
                    <h2 className="text-xl md:text-[15px] font-medium text-[#FF451A] border border-white bg-white px-2 inline-block">Portfolio</h2>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10  flex items-center justify-center hover:-translate-y-0.5 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center hover:-translate-y-0.5 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10  flex items-center justify-center hover:-translate-y-0.5 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8"></div>

              <div className="grid sm:grid-cols-3 gap-8 text-sm">
                <div>
                  <h3 className="text-[#FF451A] font-semibold mb-4">Navigations</h3>
                  <ul className="space-y-2 text-[#6C6C6C]">
                    <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Personal skills</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#FF451A] font-semibold mb-4">Deliverables</h3>
                  <ul className="space-y-2 text-[#6C6C6C]">
                    <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Software Solutions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">AI / ML Solutions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">IT Consultations</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#FF451A] font-semibold mb-4">Legals</h3>
                  <ul className="space-y-2 text-[#6C6C6C]">
                    <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                  </ul>
                </div>
              </div>

              <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-[#FFFFFFCC] hover:text-white transition-colors">
                Back to Top <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 md:p-10 border border-[#2b2727]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Reach us!</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 border-b border-gray-500">
                    <User className="w-4 h-4 text-white" />
                    <input type="text" placeholder="Firstname" required className="flex-1 bg-transparent text-white placeholder-[#FFFFFFCC] focus:outline-none py-1" />
                  </div>
                  <div className="flex items-center gap-3 border-b border-gray-500">
                    <User className="w-4 h-4 text-white" />
                    <input type="text" placeholder="Lastname" required className="flex-1 bg-transparent text-white placeholder-[#FFFFFFCC] focus:outline-none py-1" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-500">
                  <Mail className="w-4 h-4 text-white" />
                  <input type="email" placeholder="Your email" required className="flex-1 bg-transparent text-white placeholder-[#FFFFFFCC] focus:outline-none py-1" />
                </div>

                <div className="flex items-center gap-3 border-b border-gray-500">
                  <Briefcase className="w-4 h-4 text-white" />
                  <input type="text" placeholder="Project name" required className="flex-1 bg-transparent text-white placeholder-[#FFFFFFCC] focus:outline-none py-1" />
                </div>

                <div className="flex items-start gap-3 border-b border-gray-500">
                  <FileText className="w-4 h-4 text-white mt-1" />
                  <textarea placeholder="Project Description" rows={3} required className="flex-1 bg-transparent text-white placeholder-[#FFFFFFCC] focus:outline-none resize-none py-1" />
                </div>

                <div className="pt-4 cursor-pointer">
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 border border-[#6C6C6C] text-[#6C6C6C] font-medium hover:bg-white/80 transition-colors flex items-center gap-2">
                    Submit <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
