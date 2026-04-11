import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiPhoneCall, BiRightArrowAlt } from 'react-icons/bi';
import { FiHeart, FiActivity, FiShield, FiUsers } from 'react-icons/fi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "The hospital that cares for <span class='text-[#009fab]'>life</span> and <span class='text-[#009fab]'>humanity.</span>",
      description: "Experience world-class medical treatment with advanced technology and a compassionate touch. Your wellness is our primary mission.",
      image: "/images/doctorhero.png",
      icon: FiHeart,
      stat: "20K+",
      statLabel: "Patients treated!"
    },
    {
      title: "Advanced <span class='text-[#009fab]'>technology</span> meets <span class='text-[#009fab]'>compassionate</span> care",
      description: "State-of-the-art diagnostic equipment and treatment facilities combined with our caring medical professionals.",
      image: "/images/hero2.png",
      icon: FiActivity,
      stat: "50+",
      statLabel: "Specialists"
    },
    {
      title: "Where <span class='text-[#009fab]'>patient</span> satisfaction is our <span class='text-[#009fab]'>priority</span>",
      description: "Personalized treatment plans and holistic care approach ensuring the best outcomes for every patient.",
      image: "/images/hero3.png",
      icon: FiUsers,
      stat: "98%",
      statLabel: "Satisfaction rate"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 9000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full bg-[#e0fffd] min-h-screen lg:min-h-[100vh] flex items-center overflow-hidden font-sans">
      
      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 pt-36 sm:pt-36 md:pt-40 lg:pt-44 pb-18 sm:pb-16 lg:pb-24">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSlide}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-[#009fab] font-bold text-xs sm:text-sm uppercase tracking-widest">Healthcare Excellence</span>
              </div>
            </div>

            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.2] sm:leading-[1.1] text-[#081e29] tracking-tight mb-6 sm:mb-8 lg:mb-10 text-center lg:text-left px-2 sm:px-0"
              dangerouslySetInnerHTML={{ __html: slides[activeSlide].title }}
            />

            <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-8 sm:mb-10 leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-4 sm:px-0">
              {slides[activeSlide].description}
            </p>

            
          </motion.div>
        </AnimatePresence>

        {/* RIGHT SIDE: IMAGE */}
        <div className="relative flex justify-center lg:justify-end  mt-0">
          
          {/* Secondary glow shape - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center hidden lg:flex "
          >
            <div className="w-[380px] h-[380px] lg:w-[560px] lg:h-[560px] rounded-full bg-gradient-to-br from-[#E0F7F9] via-[#14B8A6]/10 to-transparent blur-2xl"></div>
          </motion.div>

          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-[420px] sm:max-w-[440px] md:max-w-[450px] lg:max-w-[560px] h-[300px] sm:h-[380px] md:h-[440px] lg:h-[500px] flex items-center justify-center mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                  src={slides[activeSlide].image} 
                  alt="Doctor" 
                  className="w-full h-full object-contain rounded-[100px] sm:rounded-[120px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FLOATING CARD 1: PATIENTS/STATS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stat-${activeSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-5 sm:top-8 lg:top-10 -left-4 sm:-left-5 lg:-left-8 z-20 bg-white p-3 sm:p-4 lg:p-5 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center gap-2 sm:gap-3 lg:gap-4 border border-slate-50"
            >
              <div className="bg-[#E0F7F9] p-2 sm:p-3 rounded-xl sm:rounded-2xl">
                {React.createElement(slides[activeSlide].icon, { size: 18, className: "sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#059669]" })}
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 leading-none">{slides[activeSlide].stat}</p>
                <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-500">{slides[activeSlide].statLabel}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* VERTICAL NAVIGATION DOTS - Positioned at center right of Hero section */}
      <div className="absolute right-4 sm:right-6 lg:right-32 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 sm:gap-4 lg:gap-6">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveSlide(index)}
            className="group relative"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Outer ring */}
            <div className={`
              w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 flex items-center justify-center
              ${activeSlide === index 
                ? 'border-2 border-[#14B8A6] shadow-[0_0_10px_rgba(20,184,166,0.5)]' 
                : 'border border-[#14B8A6]/50 group-hover:border-[#14B8A6]'
              }
            `}>
              {/* Inner dot */}
              <div className={`
                w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                ${activeSlide === index 
                  ? 'bg-[#14B8A6] scale-100' 
                  : 'bg-[#14B8A6]/40 scale-75 group-hover:bg-[#14B8A6] group-hover:scale-100'
                }
              `} />
            </div>
            
            {/* Animated pulse ring for active slide */}
            {activeSlide === index && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full border-2 border-[#14B8A6]"
              />
            )}

            {/* Connecting line between dots */}
            {index < slides.length - 1 && (
              <div className="absolute left-1/2 -translate-x-1/2 top-3 sm:top-4 lg:top-5 w-[1px] h-3 sm:h-4 lg:h-6 bg-gradient-to-b from-[#14B8A6]/30 to-[#14B8A6]/30" />
            )}

            {/* Tooltip on hover */}
            <span className="hidden md:block absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-[#081e29]/90 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full pointer-events-none shadow-lg">
              {slides[index].statLabel}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Navigation Arrows - Bottom right of Hero section */}
      <div className="absolute bottom-6 sm:bottom-8 right-1/2 sm:right-6 lg:right-32 z-30 flex gap-2 sm:gap-3">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <IoChevronBack className="w-4 h-4 sm:w-5 sm:h-5 text-[#081e29]" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 text-[#081e29]" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;