// src/components/HealthPlans.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuClock, LuHeartPulse, LuActivity, LuSparkles, LuPhone, LuCalendar, LuArrowRight, LuArrowLeft } from 'react-icons/lu';

// Import your data
import plansData from '../data/healthPlan.json'; 

const iconMap = {
  LuHeartPulse: LuHeartPulse,
  LuActivity: LuActivity,
  LuSparkles: LuSparkles,
};

const Plans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const plans = plansData.checkup_plans;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % plans.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <section 
      className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 xl:h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/images/plan.avif')" }} 
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#009fab]/10 z-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
        
        {/* LEFT COLUMN: Header at top, Boxes at bottom left */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-none">
          
          {/* HEADER SECTION */}
          

          {/* INFO BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 overflow-hidden rounded-[24px] shadow-2xl">
            {/* Opening Hours Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#009fab] p-5 sm:p-6 rounded-t-[24px] sm:rounded-l-[24px] sm:rounded-r-none"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <LuClock className="text-white" size={18} />
                <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">Opening Hours</span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-[11px] sm:text-[13px] border-b border-white/10 pb-2">
                  <span className="text-white/70">Monday - Friday</span>
                  <span className="text-white font-bold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between text-[11px] sm:text-[13px]">
                  <span className="text-white/70">Saturday</span>
                  <span className="text-white font-bold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-[11px] sm:text-[13px] pt-2 border-t border-white/10">
                  <span className="text-white/80 font-semibold">Emergency</span>
                  <span className="text-white font-bold">24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Appointment Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-5 sm:p-6 rounded-b-[24px] sm:rounded-r-[24px] sm:rounded-l-none flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <LuCalendar className="text-[#14B8A6]" size={18} />
                  <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">Book Appointment</span>
                </div>
                <p className="text-[11px] sm:text-[12px] text-white/50 mb-4 sm:mb-6 font-medium">
                  Schedule your health checkup with our specialists
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-white font-black text-sm sm:text-base lg:text-lg tracking-tighter transition-colors group-hover:text-[#14B8A6]">
                    +1 800-657-876
                  </span>
                  <div className="p-1.5 sm:p-2 bg-[#14B8A6] rounded-full text-white transition-transform group-hover:scale-110">
                    <LuArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE STACK */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-none">
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[550px] perspective-1000">
            <AnimatePresence mode="wait">
              {plans.map((plan, idx) => {
                if (idx !== currentIndex) return null;
                const Icon = iconMap[plan.icon] || LuHeartPulse;

                return (
                  <motion.div
                    key={plan.id}
                    initial={isMobile ? { opacity: 0, x: 100, scale: 0.95 } : { opacity: 0, rotateY: 45, x: 100, scale: 0.9 }}
                    animate={isMobile ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, rotateY: 0, x: 0, scale: 1 }}
                    exit={isMobile ? { opacity: 0, x: -100, scale: 0.95 } : { opacity: 0, rotateY: -45, x: -100, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0 bg-white rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col"
                  >
                    <div className="bg-[#E0F7F9] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                      <Icon className="text-[#009fab]" size={24} />
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-3 sm:mb-4 line-clamp-2">
                      {plan.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-2">
                      {plan.short_description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 lg:mb-10 flex-grow">
                      {plan.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] flex-shrink-0" />
                          <span className="text-slate-700 text-[11px] sm:text-xs lg:text-sm font-medium line-clamp-1">
                            {f}
                          </span>
                        </div>
                      ))}
                      {plan.features.length > 4 && (
                        <div className="text-[#009fab] text-[10px] sm:text-xs font-semibold mt-1">
                          +{plan.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    <button className="w-full py-3 sm:py-4 bg-[#009fab] text-white rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-xs lg:text-sm tracking-widest uppercase hover:bg-[#0f172a] transition-all">
                      Package Details
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* STACK CONTROLS */}
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button 
              onClick={prevSlide} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#009fab] border border-white/20 text-white flex items-center justify-center hover:bg-[#14B8A6] transition-all"
            >
              <LuArrowLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {plans.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === currentIndex ? 'w-6 sm:w-8 bg-[#14B8A6]' : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#009fab] border border-white/20 text-white flex items-center justify-center hover:bg-[#14B8A6] transition-all"
            >
              <LuArrowRight size={16} />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-black/40 text-[10px] sm:text-xs">
              {currentIndex + 1} of {plans.length} Health Plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;