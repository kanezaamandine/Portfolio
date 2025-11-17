'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const skills = [
  { name: 'UI/UX Design', percentage: 90 },
  { name: 'Logo Design', percentage: 75 },
  { name: 'Brand Design', percentage: 85 },
  { name: '3D Design', percentage: 80 },
];

const otherSkills = [
  'HTML', 'CSS', 'UI/UX DESIGNING', 'C++', 'VIDEO EDITING','NEXT', 'REACT',
  'MACHINE LEARNING', 'AI'
];

const progressSkills = [
  { name: 'Figma', value: 90 },
  { name: 'Blender', value: 85 },
  { name: 'Soundmachines', value: 75 },
  { name: 'Photoshop', value: 65 },
];

const CircularProgress = ({ percentage, label }: { percentage: number; label: string }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-25 h-25">
        <svg className="w-full h-full" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#1E1E1E" strokeWidth="12" />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#FF451A"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            transform="rotate(-90 80 80)"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className="text-lg font-bold"
            fill="white"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <span className="text-white text-sm mt-2 font-medium">{label}</span>
    </div>
  );
};

const ProgressBar = ({ name, value }: { name: string; value: number }) => {
  const progress = useMotionValue(0);
  const springProgress = useSpring(progress, { stiffness: 100, damping: 20 });
  const x = useTransform(springProgress, (v) => `${v}%`);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
      </div>

      <div className="w-full bg-[#1E1E1E] rounded-full h-2 relative overflow-visible">
        <motion.div
          className="absolute -top-6 flex items-center justify-center text-[10px] font-semibold text-white bg-[#FF451A] px-1.5 py-[2px] rounded-md shadow-md"
          style={{ left: x }}
        >
          {value}%
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF451A] rotate-45"></div>
        </motion.div>

        <motion.div
          className="bg-[#FF451A] h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          onUpdate={(latest) => {
            const widthValue =
              typeof latest.width === 'number' ? latest.width : parseFloat(latest.width);
            progress.set(widthValue);
          }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const,
        delay: i * 0.1
      }
    })
  } as const;

  return (
    <motion.div 
      id="skills" 
      className="relative p-6 py-16 bg-[#0F0F0F] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants}
    >
      
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

      <div className="relative container max-w-5xl mx-auto z-10">

        <motion.div 
          className="flex flex-col justify-center items-center gap-2 mb-16"
          variants={itemVariants}
        >
          <motion.h3 
            className="font-bold text-white text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8 }}
          >
            My Personal <span className="text-[#FF451A]">Skills</span>
          </motion.h3>
          <motion.div 
            className="w-16 h-1 rounded-full bg-white my-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-sm text-[#6C6C6C] my-2 max-w-2xl text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Design is my language ---- impact is my goal. I am turning ideas into intuitive experiences by crafting pixels that tell a story
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              <CircularProgress percentage={skill.percentage} label={skill.name} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3 
            className="font-bold text-white text-2xl mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Other <span className="text-[#FF451A]">Skill Areas</span>
          </motion.h3>

          <motion.div 
            className="grid md:grid-cols-2 gap-20 mt-8"
            variants={containerVariants}
          >
            <motion.div 
              className="flex flex-wrap gap-x-1 justify-center md:justify-end"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {otherSkills.map((tag, index) => (
                <motion.span
                  key={index}
                  className="bg-[#FF451A] text-white font-semibold px-8 py-2 mr-4 mt-2 md:mr-0 md:mt-0 rounded-md text-xs h-8 shadow-sm hover:scale-105 transition"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {progressSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <ProgressBar name={skill.name} value={skill.value} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
   </motion.div>
  );
}
