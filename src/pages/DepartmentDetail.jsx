import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuArrowLeft, LuStethoscope, LuHandshake, LuHeartPulse,
  LuClock, LuPhone, LuMapPin, LuUsers, LuCalendar,
  LuAward, LuShield, LuTarget, LuTrendingUp,
  LuActivity, LuBed, LuUserCheck, LuScissors, LuEye, LuThermometer,
  LuSparkles, LuMail, LuStar, LuQuote, LuChevronRight,
  LuBuilding, LuSyringe, LuMicroscope, LuPill, LuAmbulance
} from 'react-icons/lu';
import { FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

import medicalData from '../data//services.json';
import usePageTitle from '../hooks/usePageTitle';

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
  HandshakeIcon: LuHandshake,
  EmergencyIcon: LuAmbulance
};

const DepartmentDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find department
  const department = medicalData.departments?.find(d => d.slug === slug);

  usePageTitle(department?.meta_title || department?.title);

  // Get services for this department
  const departmentServices = medicalData.services?.filter(s =>
    department?.service_ids?.includes(s.id) && s.status === 'active'
  ) || [];

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0fffe]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Department Not Found</h2>
          <Link to="/departments" className="text-[#009fab] hover:underline">Back to Departments</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[department.icon] || LuStethoscope;

  // Calculate department stats
  const totalDoctors = departmentServices.reduce((total, service) =>
    total + (service.doctors?.length || 0), 0);

  const totalServices = departmentServices.length;

  const stats = [
    { icon: LuUsers, value: totalDoctors || "20+", label: "Expert Doctors", color: "bg-blue-50" },
    { icon: LuCalendar, value: "20+", label: "Years Experience", color: "bg-green-50" },
    { icon: LuAward, value: totalServices, label: "Specialized Services", color: "bg-purple-50" },
    { icon: LuTrendingUp, value: "98%", label: "Patient Satisfaction", color: "bg-orange-50" }
  ];

  // Get all unique doctors from all services
  const allDoctors = departmentServices.flatMap(service => service.doctors || []);

  // Get all unique features from all services
  const allFeatures = [...new Set(departmentServices.flatMap(service => service.features || []))];

  // Get all unique technology used
  const allTechnology = [...new Set(departmentServices.flatMap(service => service.technology_used || []))];

  return (
    <section className="py-12 sm:py-16 md:pt-44 bg-gradient-to-b from-[#d9fffd] to-[#f0fffe] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">



        {/* ========== HERO SECTION - Like About Page ========== */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-[#E0F7F9] p-3 rounded-xl">
                <Icon className="text-[#009fab] text-3xl" />
              </div>
              <span className="text-[#009fab] font-bold uppercase tracking-[0.3em] text-[11px]">Department</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
              {department.title}
            </h1>
          </motion.div>
        </div>

        {/* IMAGE CONTAINER - Smooth Stretching Effect like About Page */}
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
          className="relative w-full max-w-7xl mx-auto h-[280px] sm:h-[400px] md:h-[500px] lg:h-[560px] rounded-[32px] overflow-hidden bg-slate-300  mb-12"
        >
          <img
            src={department.cover_image || department.image}
            alt={department.title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80";
              setImageLoaded(true);
            }}
          />

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

        {/* Description Section - Below Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            {department.long_description || department.short_description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} rounded-xl p-4 text-center hover:shadow-md transition-all`}>
              <stat.icon className="text-[#009fab] text-2xl mx-auto mb-2" />
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button className="bg-[#009fab] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f172a] transition-all flex items-center gap-2">
            <LuCalendar size={18} />
            Book Appointment
          </button>
          <button className="border-2 border-[#009fab] text-[#009fab] px-6 py-3 rounded-full font-semibold hover:bg-[#009fab] hover:text-white transition-all flex items-center gap-2">
            <LuPhone size={18} />
            Emergency: 24/7
          </button>
        </motion.div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 mb-10 overflow-x-auto">
          <div className="flex gap-6 md:gap-8 min-w-max justify-center">
            {['overview', 'services', 'doctors', 'technology', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-2 text-sm font-semibold uppercase tracking-wider transition-all relative capitalize ${activeTab === tab
                    ? 'text-[#009fab]'
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009fab]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Overview */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Department Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About {department.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {department.long_description}
              </p>
              {department.why_choose_us && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Why Choose Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {department.why_choose_us.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#009fab] text-sm" />
                        <span className="text-slate-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Features */}
            {allFeatures.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allFeatures.slice(0, 8).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-[#009fab]" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center shadow-lg border border-blue-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuShield className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Assurance</h3>
                <p className="text-slate-500 text-sm">Accredited with international standards for patient safety and care quality.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center shadow-lg border border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuTarget className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Patient-Centered Care</h3>
                <p className="text-slate-500 text-sm">Personalized treatment plans tailored to each patient's unique needs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 text-center shadow-lg border border-purple-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuTrendingUp className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Advanced Technology</h3>
                <p className="text-slate-500 text-sm">State-of-the-art equipment and modern treatment techniques.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content - Services */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {departmentServices.map((service, idx) => {
              const ServiceIcon = iconMap[service.icon] || LuStethoscope;

              return (
                <Link to={`/services/${service.slug}`} key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group border border-slate-100 hover:border-[#009fab]/20"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-32 rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-[#E0F7F9] p-2 rounded-lg">
                            <ServiceIcon className="text-[#009fab] text-xl" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">{service.short_description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.features?.slice(0, 3).map((feature, fIdx) => (
                            <span key={fIdx} className="text-xs bg-[#E0F7F9] text-[#009fab] px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#009fab] font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <LuChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}

        {/* Tab Content - Doctors */}
        {activeTab === 'doctors' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allDoctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image || '/images/doctor-placeholder.jpg'}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold text-[#009fab]">
                      {doctor.experience || 'Experienced'}
                    </div>
                  </div>
                  {doctor.available && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 rounded-full px-2 py-1 text-[10px] font-semibold text-white">
                        Available
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                  <p className="text-[#009fab] text-sm font-semibold mb-2">{doctor.designation}</p>
                  <p className="text-slate-500 text-xs mb-3">{doctor.education}</p>
                  <p className="text-slate-400 text-xs mb-4">{doctor.experience} of experience</p>
                  <button className="w-full border border-[#009fab] text-[#009fab] py-2 rounded-lg font-semibold text-sm hover:bg-[#009fab] hover:text-white transition-all">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab Content - Technology */}
        {activeTab === 'technology' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Advanced Technology & Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allTechnology.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl hover:bg-[#E0F7F9] transition-all">
                    <LuMicroscope className="text-[#009fab] text-lg" />
                    <span className="text-slate-700 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#009fab]/5 to-[#14B8A6]/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Department Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <LuBuilding className="text-[#009fab] text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Modern Infrastructure</h3>
                    <p className="text-sm text-slate-500">State-of-the-art facilities designed for patient comfort and safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LuAmbulance className="text-[#009fab] text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">24/7 Emergency Care</h3>
                    <p className="text-sm text-slate-500">Round-the-clock emergency services with rapid response team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LuMicroscope className="text-[#009fab] text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Advanced Diagnostic Lab</h3>
                    <p className="text-sm text-slate-500">In-house laboratory with latest diagnostic equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LuPill className="text-[#009fab] text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Pharmacy Services</h3>
                    <p className="text-sm text-slate-500">24/7 pharmacy with authentic medicines</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content - Contact */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#E0F7F9] p-3 rounded-xl">
                    <LuPhone className="text-[#009fab] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone Number</p>
                    <p className="text-lg font-semibold text-slate-800">+1 800-657-876</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#E0F7F9] p-3 rounded-xl">
                    <LuMail className="text-[#009fab] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Address</p>
                    <p className="text-lg font-semibold text-slate-800">info@evergreenhospital.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#E0F7F9] p-3 rounded-xl">
                    <LuMapPin className="text-[#009fab] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-lg font-semibold text-slate-800">123 Wellness Circle, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#E0F7F9] p-3 rounded-xl">
                    <LuClock className="text-[#009fab] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Opening Hours</p>
                    <p className="text-lg font-semibold text-slate-800">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-sm text-slate-500">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] transition-all"
                />
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] transition-all text-slate-600">
                  <option>Select Service</option>
                  {departmentServices.map(service => (
                    <option key={service.id}>{service.title}</option>
                  ))}
                </select>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] resize-none transition-all"
                />
                <button className="w-full bg-[#009fab] text-white py-3 rounded-xl font-semibold hover:bg-[#0f172a] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-[#009fab] to-[#14B8A6] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <FaQuoteLeft className="text-4xl mb-4 opacity-50" />
              <p className="text-xl md:text-2xl leading-relaxed mb-4">
                "The care and attention I received at the {department.title} department was exceptional.
                The doctors and staff were professional, compassionate, and made me feel at ease throughout my treatment."
              </p>
              <div>
                <p className="font-bold text-lg">- John Anderson</p>
                <p className="text-sm opacity-80">Patient, {department.title} Department</p>
                <div className="flex gap-1 mt-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <LuQuote className="text-[#009fab] text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetail;