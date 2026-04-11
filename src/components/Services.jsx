// src/components/Services.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { 
  LuCircleAlert, LuHeartPulse, LuMicroscope, LuBed, 
  LuUserCheck, LuScissors, LuEye, LuActivity, 
  LuThermometer, LuSparkles, LuChevronLeft, LuChevronRight,
  LuStethoscope, LuPill, LuBone, LuBrain, LuDroplet
} from 'react-icons/lu';

import servicesData from '../data/services.json';

const iconMap = {
  EmergencyIcon: LuCircleAlert,
  HeartPulseIcon: LuHeartPulse,
  RadiationIcon: LuMicroscope,
  BedIcon: LuBed,
  UserCheckIcon: LuUserCheck,
  ScissorsIcon: LuScissors,
  EyeIcon: LuEye,
  ActivityIcon: LuActivity,
  ThermometerIcon: LuThermometer,
  SparklesIcon: LuSparkles,
  StethoscopeIcon: LuStethoscope,
  PillIcon: LuPill,
  BoneIcon: LuBone,
  BrainIcon: LuBrain,
  DropletIcon: LuDroplet
};

const Services = () => {
  const [isPaused, setIsPaused] = useState(false);
  const activeServices = servicesData.hospital_services.filter(s => s.status === 'active');
  
  // Create a triple-buffered list for seamless looping
  const displayServices = [...activeServices, ...activeServices, ...activeServices];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f0fffe] overflow-hidden relative">
      {/* Gradient Overlays for realistic fade effect */}
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 lg:w-32 bg-gradient-to-r from-[#f0fffe] via-[#f0fffe]/50 to-transparent z-20 pointer-events-none" />
      
      {/* Right Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 lg:w-32 bg-gradient-to-l from-[#f0fffe] via-[#f0fffe]/50 to-transparent z-20 pointer-events-none" />
      
      {/* Extra soft gradient for smoother fade */}
      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-[#f0fffe] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-[#f0fffe] to-transparent z-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 mb-6 sm:mb-8 lg:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-center gap-6">
          <div className="max-w-3xl text-center">
            <span className="text-[#009fab] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] pb-3 sm:pb-4 lg:pb-6 block">
              Services & Treatments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0f172a] pb-4 sm:pb-6 lg:pb-10">
              Specialized <span className="text-[#081e29]">Medical</span> Care Services
            </h2>
          </div>
        </div>
      </div>

      {/* THE INFINITE SLIDER TRACK */}
      <div className="relative">
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-3 md:px-4"
            animate={{
              x: isPaused ? undefined : ["0%", "-33.33%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              }
            }}
          >
            {displayServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`} 
                className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px] flex-shrink-0"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || LuActivity;

  return (
    <motion.div 
      className="group relative h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[540px] w-full rounded-[20px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Visual Top (Image) */}
      <div className="h-[65%] sm:h-[70%] md:h-[75%] lg:h-[78%] xl:h-[80%] w-full overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
        />
        
        {/* Inner shadow overlay on image for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Area - Moves up on hover (desktop) */}
      <div className="relative h-[35%] sm:h-[30%] md:h-[25%] lg:h-[22%] xl:h-[20%] bg-white transition-all duration-500 lg:group-hover:h-[35%] lg:group-hover:bg-[#F8FAFC] lg:group-hover:-translate-y-12">
        
        {/* Floating Icon Box - Centered */}
        <div className="absolute -top-10 sm:-top-12 md:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-[#E0F7F9] p-3 sm:p-4 md:p-5 lg:p-6 rounded-[20px] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] shadow-2xl border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] border-white transition-all duration-500 lg:group-hover:bg-[#0f172a] lg:group-hover:rotate-[10deg] lg:group-hover:-translate-y-2">
            <Icon className="text-[#009fab] text-xl sm:text-2xl md:text-2xl lg:text-3xl transition-colors duration-500 lg:group-hover:text-white" />
          </div>
        </div>

        {/* Content Wrapper with proper padding */}
        <div className="pt-8 sm:pt-10 md:pt-11 lg:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12 px-3 sm:px-5 md:px-6 lg:px-8 h-full flex flex-col justify-between transition-all duration-500 lg:group-hover:pt-8">
          {/* Title Section */}
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-extrabold text-[#0f172a] mb-1 sm:mb-2 md:mb-3 transition-colors duration-500 lg:group-hover:text-[#009fab] line-clamp-2 px-1">
              {service.title}
            </h3>
            
            {/* Content - Visible on mobile, hidden on desktop until hover */}
            <div className="block lg:hidden">
              <p className="text-slate-500 text-[10px] sm:text-xs md:text-sm leading-relaxed mt-2 sm:mt-3 line-clamp-3 text-center">
                {service.short_description}
              </p>
              <a 
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-[#009fab] text-[10px] sm:text-xs font-semibold mt-2 hover:gap-2 transition-all"
              >
                Read More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Hidden Content - Reveals on Hover (Desktop only) */}
            <div className="hidden lg:block max-h-0 opacity-0 overflow-hidden transition-all duration-500 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
              <div className="transform translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 text-center">
                  {service.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay Link - Only on desktop */}
      <a 
        href={`/services/${service.slug}`} 
        className="hidden lg:block absolute inset-0 z-20"
        aria-label={`Learn more about ${service.title}`}
      />
    </motion.div>
  );
};

export default Services;