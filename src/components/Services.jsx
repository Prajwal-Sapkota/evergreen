import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LuCircleAlert, LuHeartPulse, LuMicroscope, LuBed,
  LuUserCheck, LuScissors, LuEye, LuActivity,
  LuThermometer, LuSparkles, LuStethoscope, LuPill, 
  LuBone, LuBrain, LuDroplet, LuArrowUpRight, LuArrowRight
} from 'react-icons/lu';

import medicalData from '../data/services.json';

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
  const activeServices = medicalData.services.filter(s => s.status === 'active');
  // Show only first 8 services
  const displayServices = activeServices.slice(0, 8);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f0fffe] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-84 bg-[#009fab] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14B8A6] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <span className="text-[#009fab] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[11px] mb-3 sm:mb-4 block">
            Services & Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0f172a]">
            Specialized <span className="text-[#081e29]">Medical</span> Care Services
          </h2>
        </div>

        {/* Services Grid - Shows first 8 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || LuActivity;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <div className="relative perspective-1000">
                  <motion.div
                    animate={{ rotateY: isHovered ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side - Image and Title */}
                    <div
                      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                    >
                      {/* Image Section */}
                      <div className="relative h-84 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Icon on image - Top Left */}
                        <div className="absolute top-3 left-3 z-10">
                          <div className="bg-white rounded-xl p-2 shadow-lg">
                            <Icon className="text-[#009fab] text-xl" />
                          </div>
                        </div>

                        {/* Number Badge - Top Right */}
                        <div className="absolute top-3 right-3 z-10">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-[#009fab] font-bold text-sm shadow-sm">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Title inside image - Bottom Left */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <h3 className="text-white font-bold text-lg sm:text-xl line-clamp-2 drop-shadow-lg">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Back Side - Details */}
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#009fab] to-[#14B8A6] rounded-2xl p-5 flex flex-col justify-between shadow-xl"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div>
                        <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <Icon className="text-white text-2xl" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{service.title}</h3>
                        <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-3">
                          {service.short_description}
                        </p>

                        {/* Key Features */}
                        {service.features && service.features.length > 0 && (
                          <div className="space-y-1.5">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-white/60" />
                                <span className="text-white/70 text-[10px] line-clamp-1">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-4 bg-white text-[#009fab] text-center py-2.5 rounded-xl font-semibold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
                      >
                        Learn More
                        <LuArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden bg-transparent border-2 border-[#009fab] text-[#009fab] px-8 py-3 rounded-full font-semibold hover:text-white transition-all duration-300"
            >
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 bg-[#009fab] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Services;