import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback: If image hasn't loaded in 3 seconds, force show the skeleton or placeholder
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!imageLoaded) setImageLoaded(true); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <section className="relative pt-32 sm:pt-56 pb-16 bg-gradient-to-b from-[#d9fffd] to-[#f0fffe] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[#14B8A6] font-bold uppercase tracking-[0.3em] text-[11px] block mb-4">
            About Page
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            The hospital that cares for <span className="text-[#14B8A6]">life</span> and humanity
          </h1>
        </motion.div>

        {/* IMAGE CONTAINER - Smooth Stretching Effect */}
        <motion.div 
          initial={{ 
            clipPath: 'inset(0% 0% 100% 0%)',
            scaleY: 0.9,
            filter: 'blur(8px)'
          }}
          animate={{ 
            clipPath: 'inset(0% 0% 0% 0%)',
            scaleY: 1,
            filter: 'blur(0px)'
          }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
          className="relative w-full max-w-7xl mx-auto h-[320px] md:h-[560px] rounded-[32px] overflow-hidden bg-slate-300 "
        >
          {/* Main Image */}
          <img 
            src="/images/abouthero.webp" 
            alt="Medical Team"
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              console.error("Image failed to load at path: /images/abouthero.webp");
              e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80";
            }}
          />

          {/* Fallback Overlay while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
          )}

          {/* Simple Reflection Effect */}
          <motion.div 
            initial={{ x: '-150%' }}
            animate={{ x: '150%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;