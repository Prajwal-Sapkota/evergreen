// src/components/TestimonialsCascade.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuQuote } from 'react-icons/lu';

// Import your data
import testimonialsData from '../data/testimonial.json';

// --- STAR RATING COMPONENT ---
const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-[#009fab]' : 'text-slate-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ review, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth scroll-up animation
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1] // Smooth cubic bezier
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
      className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#E0F7F9]"
    >
      {/* OVERLAY QUOTE DETAIL */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-0 opacity-10">
        <LuQuote className="text-[#009fab]" size={28} />
      </div>

      <div className="relative z-10">
        <StarRating rating={review.rating} />
        
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-medium line-clamp-4">
          “{review.text}”
        </p>
        
        {/* Avatar Section */}
        <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-100 pt-6 sm:pt-8">
          <img 
            src={review.image} 
            alt={review.name} 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 sm:border-4 border-[#E0F7F9] shadow-inner"
          />
          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#0f172a] tracking-tight">
              {review.name}
            </h4>
            <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
              {review.specialty}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Section header animation
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#004857] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Header Section with smooth animation */}
        <motion.div 
          ref={sectionRef}
          variants={headerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto"
        >
          <span className="text-[#14B8A6] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] block mb-3">
            Patient Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Patient experiences with our specialized <span className="text-[#14B8A6]">medical</span> services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Real stories from patients who trust us with their health and wellness
          </p>
        </motion.div>

        {/* CASCADING GRID LAYOUT - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
          {testimonialsData.reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              className={`
                ${!isMobile && !isTablet && idx % 3 === 0 ? 'xl:mt-12' : ''}
                ${!isMobile && !isTablet && idx % 3 === 2 ? 'xl:mt-24' : ''}
                ${isTablet && idx % 2 === 1 ? 'md:mt-8' : ''}
              `}
            >
              <TestimonialCard review={review} index={idx} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;