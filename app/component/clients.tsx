"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    message:
      "Amandine is a passionate designer with a great eye for detail and user experience. Her work is truly exceptional and has significantly improved our product's usability.",
    profile: "/images/image.png",
    name: "Alliance",
    role: "Product Manager",
  },
  {
    message:
      "Her designs are thoughtful and easy to work with — she makes collaboration effortless. The attention to detail and user-centered approach is remarkable.",
    profile: "/images/image.png",
    name: "Emmanuel",
    role: "Frontend Developer",
  },
  {
    message:
      "Amandine turned my ideas into a clean, modern design that perfectly fit my brand. Creative, reliable, and always delivers on time. Highly recommended!",
    profile: "/images/image.png",
    name: "Samuel",
    role: "Startup Founder",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.2
    }
  })
} as const;

export default function Clients() {
  return (
    <section className="relative h-full py-16 mb-24 bg-[#0F0F0F] overflow-hidden">
      <div className="container mx-auto px-4 mb-16" />

      {[...Array(5)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-[2px] bg-[#6689A712]"
          style={{
            top: `${(100 / 2) * (i + 1)}%`,
            left: "0",
            right: "0",
          }}
        />
      ))}

      {[...Array(7)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-[2px] bg-[#6689A712]"
          style={{
            left: `calc(${(100 / 8) * (i + 1)}%)`,
          }}
        />
      ))}

      <motion.div 
        className="relative max-w-5xl mx-auto px-4 mt-10 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What My <span className="text-[#FF451A]">Clients Say</span>
          </h2>
          <motion.div 
            className="w-16 h-1 bg-white mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="relative group bg-linear-to-br from-[#0F0F0F] to-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-lg shadow-[#FF451A]/10 transition-all duration-300 border border-white/5"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#E8563F] fill-current" size={18} />
                ))}
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                "{client.message}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#FF451A]/30">
                  <Image
                    src={client.profile}
                    alt={`${client.name}'s profile`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{client.name}</h4>
                  <p className="text-[#6C6C6C] text-sm">{client.role}</p>
                </div>
              </div>

              <motion.div 
                className="absolute -top-4 -right-4 h-16 w-16 bg-[#FF451A] rounded-full flex items-center justify-center text-white text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.5, rotate: -10 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                "
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
