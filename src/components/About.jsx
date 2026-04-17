// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BiRightArrowAlt } from 'react-icons/bi';
import { HiOutlineShieldCheck, HiOutlineChip, HiOutlineUsers, HiOutlineChartBar } from 'react-icons/hi';

const About = () => {
  const detailedList = [
    { number: '01', text: 'Reliable Medical Care', icon: HiOutlineShieldCheck },
    { number: '02', text: 'Patient-focused Treatment', icon: HiOutlineUsers },
    { number: '03', text: 'Expert Medical Guidance', icon: HiOutlineChip },
    { number: '04', text: 'Long-term Health Outcomes', icon: HiOutlineChartBar },
  ];

  return (
    <section className="relative w-full bg-[#009fab] py-16 sm:py-20 lg:py-24 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND DETAILING (WATERMARK) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none flex items-center justify-center opacity-[0.03]">
        <h1 className="text-[18vw] sm:text-[20vw] lg:text-[22vw] font-black text-[#059669] leading-none tracking-tighter">
          EVERGREEN
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
        
        {/* LEFT COLUMN: MAIN IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-none"
        >
          <div className="relative z-10 overflow-hidden rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[80px] rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[80px] shadow-[0_30px_60px_rgba(5,150,105,0.12)] border-[8px] sm:border-[10px] lg:border-[12px] border-white">
            <img 
              src="/images/about1.png" 
              alt="Elderly Care" 
              className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative Dot Matrix */}
          <div className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 -left-4 sm:-left-5 lg:-left-6 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-[radial-gradient(#14B8A6_2px,transparent_2px)] [background-size:16px_16px] opacity-20"></div>
        </motion.div>

        {/* RIGHT COLUMN: CONTENT */}
        <div className="flex flex-col justify-center order-2 lg:order-none">
          <span className="text-[11px] sm:text-[12px] lg:text-[13px] uppercase font-bold text-white tracking-[0.2em] mb-3 sm:mb-4 block text-center lg:text-left">
            About Us
          </span>
          
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] text-white leading-[1.2] sm:leading-[1.15] mb-8 sm:mb-12 lg:mb-18 text-center lg:text-left px-2 sm:px-0">
            Reliable medical services focused on patient safety, comfort, and better outcomes.
          </h2>
          
          {/* THE DETAILED LIST & INSET IMAGE GRID */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* List Items */}
            <div className="space-y-2 sm:space-y-3">
              {detailedList.map((item) => (
                <div 
                  key={item.number} 
                  className="group cursor-pointer py-3 sm:py-4 px-3 sm:px-5 rounded-xl bg-white/80 hover:bg-white/65 transition-all duration-300 relative"
                >
                  <div className="flex items-center gap-3 sm:gap-5">
                    <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-[#059669]/60 group-hover:text-[#059669] transition-colors">
                      {item.number}
                    </span>
                    <item.icon className="text-base sm:text-lg lg:text-xl text-slate-500 group-hover:text-[#14B8A6] transition-colors" />
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-slate-700 group-hover:text-[#0f172a] transition-colors">
                      {item.text}
                    </span>
                    <BiRightArrowAlt className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#14B8A6] flex-shrink-0" size={18} />
                  </div>
                  {/* Sliding Underline Detail */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Inset Small Image */}
            <div className="relative group mt-6 md:mt-0">
              <div className="rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/about2.png" 
                  alt="Doctor Consultation" 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-slate-200 font-medium mt-4 sm:mt-5 lg:mt-6 leading-relaxed border-l-2 border-[#14B8A6] pl-3 sm:pl-4 italic text-center lg:text-left">
                "Expert medical care combining innovation, compassion, and clinical excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;