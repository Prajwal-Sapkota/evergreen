// src/components/WhyChooseUs.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuCalendar, LuClock, LuHospital, LuMessageSquare } from 'react-icons/lu';

const features = [
  {
    icon: LuCalendar,
    title: "20+ Years of Medical Excellence",
    desc: "Two decades of trusted, high-quality healthcare delivery.",
    highlight: true
  },
  {
    icon: LuClock,
    title: "24/7 Emergency Services",
    desc: "Immediate medical assistance anytime, day or night.",
    highlight: false
  },
  {
    icon: LuHospital,
    title: "Multispecialty Care Under One Roof",
    desc: "Comprehensive services from general to specialized care.",
    highlight: false
  },
  {
    icon: LuMessageSquare,
    title: "Compassionate & Multilingual Staff",
    desc: "Friendly professionals who speak your language.",
    highlight: false
  }
];

const Choose = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#004857] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Title - Visible on mobile only (above image) */}
        <div className="block lg:hidden text-center mb-8 sm:mb-10">
          <span className="text-white font-bold uppercase tracking-[0.2em] text-2xl sm:text-3xl md:text-4xl block">
            Why Patients Trust Us?
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* THE VERTICAL SCROLL/ROLL EFFECT - Disabled on mobile */}
          <div className="relative group order-1 lg:order-none">
            {isMobile ? (
              // Mobile: Simple image without animation
              <div className="relative h-[350px] sm:h-[450px] md:h-[520px] rounded-[24px] sm:rounded-[30px] md:rounded-[35px] overflow-hidden bg-slate-200">
                <img 
                  src="/images/choose.png" 
                  alt="Evergreen Medical Team"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Medical+Team';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
              </div>
            ) : (
              // Desktop: Animated image
              <motion.div 
                initial={{ 
                  clipPath: 'inset(0% 0% 100% 0%)',
                  scaleY: 0.85,
                  filter: 'blur(8px)',
                  opacity: 0.8
                }}
                whileInView={{ 
                  clipPath: 'inset(0% 0% 0% 0%)',
                  scaleY: 1,
                  filter: 'blur(0px)',
                  opacity: 1
                }}
                transition={{ 
                  duration: 1.6,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-[350px] sm:h-[450px] md:h-[520px] lg:h-[580px] xl:h-[620px] rounded-[24px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] overflow-hidden bg-slate-100"
              >
                <img 
                  src="/images/choose.png" 
                  alt="Evergreen Medical Team"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Medical+Team';
                  }}
                />
                
                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                
                {/* Light Reflection Effect */}
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 0.3, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>
            )}
          </div>

          {/* FEATURES GRID */}
          <div className="max-w-2xl mx-auto lg:mx-0 order-2 lg:order-none">
            {/* Title - Visible on desktop only */}
            <div className="hidden lg:block text-center lg:text-left mb-6 sm:mb-8 lg:mb-12">
              <span className="text-white font-bold uppercase tracking-[0.2em] text-lg sm:text-xl md:text-2xl lg:text-[24px] block">
                Why Patients Trust Us?
              </span>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.12), duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[38px] flex flex-col gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ${
                    item.highlight 
                      ? 'bg-[#009fab] text-white shadow-2xl shadow-[#009fab]/20' 
                      : 'bg-[#F8FAFC] text-slate-900 hover:bg-white border border-slate-50 hover:shadow-xl'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-110 ${
                    item.highlight ? 'bg-white/10' : 'bg-white shadow-sm'
                  }`}>
                    <item.icon size={20} className={`sm:w-5 sm:h-5 md:w-6 md:h-6 ${item.highlight ? 'text-white' : 'text-[#059669]'}`} />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className={`font-bold leading-tight tracking-tight text-base sm:text-lg md:text-xl ${
                      item.highlight ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      item.highlight ? 'text-slate-200' : 'text-slate-500 font-medium'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;