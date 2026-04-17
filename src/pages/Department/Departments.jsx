import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuStethoscope, LuHandshake, LuHeartPulse, LuArrowRight } from 'react-icons/lu';

import medicalData from '../../data/services.json';

const iconMap = {
  LuStethoscope: LuStethoscope,
  LuHandshake: LuHandshake,
  LuHeartPulse: LuHeartPulse
};

const Departments = () => {
  const departments = medicalData.departments.filter(d => d.status === 'active');

  return (
    <section className="bg-gradient-to-br from-[#f0fffe] to-[#e0fffd] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">



        {departments.map((dept, idx) => {
          const Icon = iconMap[dept.icon] || LuStethoscope;

          return (
            <Link to={`/departments/${dept.slug}`}
              onClick={() => window.scrollTo(0, 0)}

              key={dept.id}>
              <motion.div
                initial="initial"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-16 items-center border-b border-slate-100 last:border-none cursor-pointer"
              >
                {/* Progress Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#009fab] to-[#14B8A6] z-20"
                  variants={{
                    initial: { width: "0%" },
                    hover: { width: "100%" }
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Left Content - Order 2 on mobile, order 1 on desktop */}
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -20 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-3 sm:space-y-4 order-2 lg:order-1 text-center lg:text-left"
                >
                  <div className="inline-flex lg:inline-flex justify-center lg:justify-start pt-6 sm:pt-0">
                    <div className="bg-[#E0F7F9] p-3 rounded-xl group-hover:bg-[#009fab] transition-colors duration-300">
                      <Icon size={32} className="text-[#009fab] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#003366] group-hover:text-[#009fab] transition-colors duration-300">
                    {dept.title}
                  </h3>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    {dept.short_description}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#009fab] font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Explore Department</span>
                    <LuArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </motion.div>

                {/* Right Image - Expanding Width Effect */}
                <div className="flex justify-center lg:justify-end items-center h-[250px] sm:h-[300px] lg:h-[350px] order-1 lg:order-2">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    variants={{
                      initial: { width: "70%", opacity: 0.9 },
                      hover: { width: "100%", opacity: 1 }
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.img
                      src={dept.image}
                      alt={dept.title}
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                      style={{ minWidth: '300px', minHeight: '250px' }}
                    />
                    {/* Overlay gradient for better visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Departments;