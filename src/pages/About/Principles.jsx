import React from 'react';
import { motion } from 'framer-motion';
import { LuTarget, LuEye, LuGem } from 'react-icons/lu';

const Principles = () => {
  const blocks = [
    {
      title: "Our Mission",
      content: "The mission at Charak Memorial Hospital is to provide compassionate, accessible, high-quality, cost-effective healthcare to the community.",
      bg: "bg-[#defffd]",
      text: "text-slate-900",
      accent: "text-[#009fab]",
      icon: LuTarget
    },
    {
      title: "Our Vision",
      content: "To create a world-class integrated healthcare delivery system in Nepal, entailing the finest medical skills combined with compassionate patient care.",
      bg: "bg-[#009fab]",
      text: "text-white",
      accent: "text-[#defffd]",
      icon: LuEye
    },
    {
      title: "Our Values",
      content: "Unity, Passion, Integrity, Excellence, and Respect: We work together with transparency and honor to provide the highest quality clinical care.",
      bg: "bg-[#004857]",
      text: "text-white",
      accent: "text-[#14B8A6]",
      icon: LuGem
    }
  ];

  return (
    <section className="py-20 bg-">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[40px] overflow-hidden shadow-2xl">
          
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`${block.bg} ${block.text} p-10 md:p-14 lg:p-16 flex flex-col min-h-[450px] transition-transform duration-500 hover:z-10 hover:scale-[1.02]`}
            >
              <div className={`${block.accent} mb-8`}>
                <block.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                {block.title}
              </h3>
              
              <p className="text-lg leading-relaxed opacity-90 font-medium">
                {block.content}
              </p>

              {/* Decorative Subtle Numbering */}
              <span className="mt-auto pt-10 text-6xl font-black opacity-10 self-end">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Principles;