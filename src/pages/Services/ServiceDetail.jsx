import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LuArrowLeft, LuClock, LuPhone, LuMapPin, LuUsers, 
  LuCalendar, LuStar, LuQuote, LuMail,
  LuStethoscope, LuHeartPulse, LuMicroscope, LuActivity,
  LuThermometer, LuSparkles, LuScissors, LuEye, LuBed,
  LuUserCheck, LuAward, LuTarget, LuShield, LuTrendingUp,
  LuChevronRight, LuFileText, LuVideo, LuMessageCircle
} from 'react-icons/lu';
import { FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

import medicalData from '../../data/services.json';
import usePageTitle from '../../hooks/usePageTitle';

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

const ServiceDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Find service
  const service = medicalData.services?.find(s => s.slug === slug && s.status === 'active');
  
   const getPageTitle = () => {
    if (service?.meta_title) return service.meta_title;
    if (service?.title) return `${service.title} | Medical Services`;
    return 'Medical Services';
  };
  
  usePageTitle(getPageTitle());
  // Find parent department
  const parentDepartment = medicalData.departments?.find(d => d.id === service?.department_id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0fffe]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
          <Link to="/services" className="text-[#009fab] hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || LuStethoscope;

  // Stats
  const stats = [
    { icon: LuUsers, value: service.doctors?.length || "5+", label: "Expert Doctors" },
    { icon: LuAward, value: service.features?.length || "8+", label: "Key Features" },
    { icon: LuClock, value: "24/7", label: "Emergency Support" },
    { icon: LuTrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-12 sm:py-16 md:pt-44 bg-gradient-to-b from-[#d9fffd] to-[#f0fffe] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        
        

        {/* Hero Section - Centered Layout like Department Detail */}
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
              <span className="text-[#009fab] font-bold uppercase tracking-[0.3em] text-[11px]">
                {parentDepartment?.title || 'Medical Service'}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
              {service.title}
            </h1>
          </motion.div>
        </div>

        {/* Image Container - Smooth Stretching Effect */}
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
            src={service.image} 
            alt={service.title}
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
            {service.long_description}
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
            <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100 hover:shadow-md transition-all">
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
            Call for Inquiry
          </button>
        </motion.div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 mb-10 overflow-x-auto">
          <div className="flex gap-6 md:gap-8 min-w-max justify-center">
            {['overview', 'features', 'doctors', 'faqs', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-2 text-sm font-semibold uppercase tracking-wider transition-all relative capitalize ${
                  activeTab === tab 
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
            {/* Service Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Service</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.long_description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Service Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#009fab] text-sm" />
                    <span className="text-slate-600 text-sm">24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#009fab] text-sm" />
                    <span className="text-slate-600 text-sm">Expert Medical Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#009fab] text-sm" />
                    <span className="text-slate-600 text-sm">Advanced Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#009fab] text-sm" />
                    <span className="text-slate-600 text-sm">Personalized Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-gradient-to-r from-[#009fab]/5 to-[#14B8A6]/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Benefits of This Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <FaCheckCircle className="text-[#009fab] text-lg" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Used */}
            {service.technology_used && service.technology_used.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Technology & Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.technology_used.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                      <LuMicroscope className="text-[#009fab] text-lg" />
                      <span className="text-slate-700 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Tab Content - Features */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[#009fab]" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose This Service */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuShield className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Quality Assurance</h3>
                <p className="text-slate-500 text-sm">Maintaining highest standards of medical care and patient safety</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuTarget className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Precision Treatment</h3>
                <p className="text-slate-500 text-sm">Accurate diagnosis and targeted treatment plans</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuTrendingUp className="text-[#009fab] text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Quick Recovery</h3>
                <p className="text-slate-500 text-sm">Minimally invasive techniques for faster healing</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content - Doctors */}
        {activeTab === 'doctors' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.doctors?.map((doctor, idx) => (
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
                      {doctor.experience}
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
                  <p className="text-slate-400 text-xs mb-4">{doctor.specialization}</p>
                  <button className="w-full border border-[#009fab] text-[#009fab] py-2 rounded-lg font-semibold text-sm hover:bg-[#009fab] hover:text-white transition-all">
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab Content - FAQs */}
        {activeTab === 'faqs' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs?.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4 last:border-0">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
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
                    <p className="text-lg font-semibold text-slate-800">{service.contact_number || '+1 800-657-876'}</p>
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
                    <p className="text-sm text-slate-500">Service Hours</p>
                    <p className="text-lg font-semibold text-slate-800">{service.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Book an Appointment</h2>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name"
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
                <input 
                  type="date" 
                  placeholder="Preferred Date"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] transition-all"
                />
                <textarea 
                  rows="3"
                  placeholder="Additional Notes"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#009fab] resize-none transition-all"
                />
                <button className="w-full bg-[#009fab] text-white py-3 rounded-xl font-semibold hover:bg-[#0f172a] transition-all">
                  Submit Request
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
                "The {service.title} service at Evergreen Hospital exceeded my expectations. 
                The doctors were knowledgeable, caring, and the facilities were top-notch."
              </p>
              <div>
                <p className="font-bold text-lg">- Michael Thompson</p>
                <p className="text-sm opacity-80">Patient</p>
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

export default ServiceDetail;