import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuStethoscope,
  LuHeartPulse,
  LuMicroscope,
  LuBed,
  LuUserCheck,
  LuScissors,
  LuEye,
  LuActivity,
  LuThermometer,
  LuSparkles,
  LuArrowRight,
  LuSearch,
  LuUsers,
  LuAward,
  LuClock
} from "react-icons/lu";

import medicalData from "../../data/services.json";

const iconMap = {
  ActivityIcon: LuActivity,
  HeartPulseIcon: LuHeartPulse,
  RadiationIcon: LuMicroscope,
  BedIcon: LuBed,
  UserCheckIcon: LuUserCheck,
  ScissorsIcon: LuScissors,
  EyeIcon: LuEye,
  ThermometerIcon: LuThermometer,
  SparklesIcon: LuSparkles,
  StethoscopeIcon: LuStethoscope,
  EmergencyIcon: LuActivity
};

// --- STICKY CARD: Responsive for all screens ---
const StickyCard = ({ service, Icon, index }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  return (
    <div ref={container} className="relative h-[90vh] sm:h-[85vh] md:h-[90vh] w-full mb-10 sm:mb-0">      <div
      className="sticky top-[110px] sm:top-[120px] flex justify-center w-full px-4 sm:px-0"
      style={{ zIndex: 50 - index }}
    >
      <motion.div
        style={{ scale, opacity }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#003b44] to-[#007c87]"
      >
        {/* RESPONSIVE FIX: 
              - Mobile: flex-col (stacks top to bottom)
              - Large Screen: md:flex-row (side-by-side as per your previous design)
          */}
        <div className="flex flex-col md:flex-row min-h-[450px] sm:min-h-[480px]">

          {/* LEFT CONTENT AREA */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between order-2 md:order-1">
            <div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Icon className="text-white text-xl sm:text-2xl" />
              </div>

              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {service.title}
              </h3>

              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                {service.short_description}
              </p>

              {/* Stats Section */}
              <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 flex-wrap">
                <div className="bg-white/10 border border-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                  <LuUsers size={12} className="text-white/80" />
                  <span className="text-white text-[10px] sm:text-xs font-medium">50+ Patients</span>
                </div>
                <div className="bg-white/10 border border-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                  <LuAward size={12} className="text-white/80" />
                  <span className="text-white text-[10px] sm:text-xs font-medium">98% Success</span>
                </div>
                <div className="hidden sm:flex bg-white/10 border border-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full items-center gap-1 sm:gap-2 whitespace-nowrap">
                  <LuClock size={12} className="text-white/80" />
                  <span className="text-white text-[10px] sm:text-xs font-medium">24/7 Care</span>
                </div>
              </div>
            </div>

            <Link
              to={`/services/${service.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 bg-white text-[#003b44] px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-cyan-50 transition-all w-fit shadow-lg"
            >
              Explore Service
              <LuArrowRight size={14} className="sm:w-4 sm:h-4" />
            </Link>
          </div>

          {/* RIGHT IMAGE AREA: (Side-by-side restored for Desktop) */}
          <div className="h-[200px] sm:h-[250px] md:h-auto md:flex-1 relative order-1 md:order-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 via-transparent to-transparent" />
          </div>

        </div>
      </motion.div>
    </div>
    </div>
  );
};

const ServicesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [isFocused, setIsFocused] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  const allServices = medicalData.services?.filter((s) => s.status === "active") || [];
  const departments = medicalData.departments || [];

  const filteredServices = allServices.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || service.department_id === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="relative overflow-x-hidden bg-[#e0fffd]">
      <section className="relative py-12 sm:py-20 min-screen">

        {/* Background Decorations */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] pointer-events-none z-0">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#b2f1ee] to-[#7edbd6] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="text-[#009fab] font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs inline-block mb-3">
              Our Elite Services
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#003b44] leading-tight">
              Expert Care <br />
              <span className="text-[#009fab]">Compassionate Heart</span>
            </h2>
          </motion.div>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className={`flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-[24px] shadow-xl transition-all ${isFocused ? 'ring-2 ring-[#009fab]/20' : ''}`}>
              <div className="flex-1 relative">
                <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#009fab]" size={18} />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl outline-none font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
              <select
                className="px-6 py-3 sm:py-4 rounded-xl bg-slate-50 font-bold text-[#003b44] outline-none border-none"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>{d.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sticky Cards Mapping */}
          <div className="flex flex-col">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, idx) => (
                <StickyCard
                  key={service.id}
                  service={service}
                  index={idx}
                  Icon={iconMap[service.icon] || LuStethoscope}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-white/40 rounded-[40px] border-2 border-dashed border-[#009fab]/20">
                <p className="text-[#003b44] font-bold">No results found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesList;