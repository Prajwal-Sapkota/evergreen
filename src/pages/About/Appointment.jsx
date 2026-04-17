import React from 'react';
import { motion } from 'framer-motion';
import { LuPhone, LuMail } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Appointment = () => {
   const location = useLocation();

  useEffect(() => {
    // Check if URL has #appointment
    if (location.hash === '#appointment') {
      const element = document.getElementById('appointment');
      if (element) {
        // Wait a tiny bit for page to render, then scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section id='appointment' className="bg-[#d4fffc] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      
     {/* Perfect Circle Shape - Top Right with Gradient */}
<div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none z-0">
  <div 
    className="absolute inset-0 bg-gradient-to-b from-[#d2faf7] to-[#9de0dc] rounded-full opacity-70"
  />
</div>
      {/* MAIN CONTENT LAYER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
        
        {/* LEFT COLUMN: CONTACT INFO - Left Aligned */}
        <div className="space-y-6 sm:space-y-8 text-left">
          <header>
            <span className="text-[#14B8A6] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3 sm:mb-4 block">
              Appointment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Get in touch to book your first appointment
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-md">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
          </header>

          <div className="space-y-4 sm:space-y-5 pt-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#009fab] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#009fab]/20">
                <LuPhone size={18} />
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">(123) 456 - 7890</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#009fab] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#009fab]/20">
                <LuMail size={18} />
              </div>
              <span className="text-base sm:text-lg font-semibold text-slate-700">hello@yoursite.io</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl shadow-black/5 w-full max-w-xl mx-auto relative z-20"
        >
          <form className="space-y-4 sm:space-y-5">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-slate-200 rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-slate-800 focus:outline-none focus:border-[#009fab] transition-colors text-sm sm:text-base"
            />
            
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full border border-slate-200 rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-slate-800 focus:outline-none focus:border-[#009fab] transition-colors text-sm sm:text-base"
            />
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-slate-200 rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-slate-800 focus:outline-none focus:border-[#009fab] transition-colors text-sm sm:text-base"
            />
            
            <select className="w-full border border-slate-200 rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-slate-500 focus:outline-none focus:border-[#009fab] appearance-none bg-no-repeat bg-[right_1rem_center] text-sm sm:text-base">
              <option disabled selected>Select Appointment Type</option>
              <option>General Consultation</option>
              <option>Dental Surgery</option>
              <option>Pediatric Care</option>
            </select>
            
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full border border-slate-200 rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-slate-800 focus:outline-none focus:border-[#009fab] resize-none text-sm sm:text-base"
            ></textarea>

            <button 
              type="submit"
              className="w-full bg-[#009fab] hover:bg-[#004857] text-white font-bold py-3 sm:py-4 lg:py-5 rounded-xl transition-all duration-300 shadow-lg shadow-[#009fab]/20 active:scale-[0.98] text-sm sm:text-base"
            >
              Submit Now
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Appointment;