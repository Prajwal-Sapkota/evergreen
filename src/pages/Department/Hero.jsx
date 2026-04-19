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
    <section className="relative pt-32 sm:pt-56  bg-gradient-to-b from-[#d9fffd] to-[#f0fffe] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[#14B8A6] font-bold uppercase tracking-[0.3em] text-[14px] block mb-4">
            Our Departments
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Evergreen is dedicated to provide best  <span className="text-[#14B8A6]">treatment</span> 
          </h1>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Hero;