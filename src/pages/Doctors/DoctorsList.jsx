import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LuSearch, LuCalendar, LuUser, LuArrowUpRight, LuX, LuPhone, 
  LuMail, LuMapPin, LuClock, LuAward, LuUsers, LuStar, 
  LuMessageCircle,  LuSparkles
} from "react-icons/lu";
import { FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import data from "../../data/doctors.json";

const DoctorCard = ({ doc, index, onBookAppointment }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-5 shadow-xl shadow-cyan-900/5 border border-cyan-100/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#009fab]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] aspect-[4/5] bg-gradient-to-br from-[#003b44] to-[#007c87]">
        <img
          src={doc.img}
          alt={doc.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003b44]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black text-[#007c87] border border-cyan-100 shadow-lg">
          {doc.exp}
        </div>
        
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-400 text-[8px] sm:text-[10px]" />
          <span className="text-white text-[8px] sm:text-[10px] font-bold">4.9</span>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 px-1 sm:px-2 pb-1 sm:pb-2">
        <div className="flex justify-between items-start mb-1 sm:mb-2">
          <div>
            <p className="text-[#009fab] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">{doc.dept}</p>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#003b44] group-hover:text-[#009fab] transition-colors line-clamp-1">
              {doc.name}
            </h3>
          </div>
          <motion.div 
            whileHover={{ rotate: 45, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#009fab] to-[#00b8c8] flex items-center justify-center text-white cursor-pointer shadow-lg flex-shrink-0"
          >
            <LuArrowUpRight size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4 font-medium">
          {doc.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5">
          {doc.specialties?.slice(0, 2).map((spec, i) => (
            <span key={i} className="text-[8px] sm:text-[10px] bg-cyan-50 text-[#007c87] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
              {spec}
            </span>
          ))}
          {doc.specialties?.length > 2 && (
            <span className="text-[8px] sm:text-[10px] bg-gray-100 text-gray-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
              +{doc.specialties.length - 2}
            </span>
          )}
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onBookAppointment(doc)}
          className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-[#003b44] to-[#005f6b] text-white py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[11px] sm:text-sm transition-all duration-300 shadow-lg shadow-[#003b44]/20"
        >
          <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
            <LuCalendar size={12} className="sm:w-4 sm:h-4" />
            BOOK APPOINTMENT
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#009fab] to-[#00b8c8] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ================== APPOINTMENT MODAL - Fixed for mobile ==================
// ================== APPOINTMENT MODAL - Fixed with doctor info on mobile ==================
const AppointmentModal = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-2 sm:mx-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-600 hover:bg-[#009fab] hover:text-white transition-all duration-300 shadow-lg"
        >
          <LuX size={16} className="sm:w-5 sm:h-5" />
        </button>

        <div className="flex flex-col md:flex-row max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Left Side - Doctor Info - Full on desktop, compact on mobile */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-[#003b44] to-[#007c87] text-white">
            {/* Mobile: Compact horizontal layout */}
            <div className="flex md:flex-col items-center gap-4 p-4 sm:p-6 md:p-8">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl">
                  <img 
                    src={doctor.img} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-3 md:-right-3 bg-[#009fab] rounded-full p-1 md:p-2">
                  <LuSparkles className="text-white" size={10} />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-0.5 md:mb-1">{doctor.name}</h3>
                <p className="text-cyan-200 text-xs sm:text-sm mb-1 md:mb-3">{doctor.dept}</p>
                <p className="hidden md:block text-cyan-100 text-xs sm:text-sm leading-relaxed line-clamp-3">{doctor.bio}</p>
                
                {/* Quick stats - compact on mobile */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-2 md:mt-4">
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                    <LuAward className="text-[#009fab] w-3 h-3" />
                    <span>{doctor.exp}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                    <LuUsers className="text-[#009fab] w-3 h-3" />
                    <span>5000+</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs">
                    <LuStar className="text-[#009fab] w-3 h-3" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Slots - Only on desktop */}
            <div className="hidden md:block mt-2 pt-3 border-t border-white/20 mx-8 pb-6">
              <p className="text-xs text-cyan-200 mb-2">Next Available Slots</p>
              <div className="flex gap-2">
                {['Today', 'Tomorrow', 'Wed'].map((day, i) => (
                  <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-3/5 p-5 sm:p-8 bg-white">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-[#003b44]">Book Appointment</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Fill in your details to schedule a consultation with Dr. {doctor.name.split(' ')[1]}</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-8 sm:py-12"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <FaCheckCircle className="text-green-500 text-3xl sm:text-4xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#003b44] mb-2">Appointment Request Sent!</h4>
                <p className="text-gray-500 text-center text-xs sm:text-sm">We'll contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all text-sm"
                  />
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all text-sm"
                  >
                    <option value="">Select Time</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Additional Notes (Symptoms, Concerns, etc.)"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#009fab] focus:ring-2 focus:ring-[#009fab]/20 transition-all resize-none text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#009fab] to-[#00b8c8] text-white py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ================== MAIN DOCTORS LIST ==================
const DoctorsList = () => {
  const [filter, setFilter] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctors = data.doctors;

  const filtered = doctors.filter(d => 
    d.name.toLowerCase().includes(filter.toLowerCase()) || 
    d.dept.toLowerCase().includes(filter.toLowerCase()) ||
    d.specialties?.some(s => s.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8ffff] to-[#e6fdfa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADER - Simplified */}
        <div className="relative mb-12 sm:mb-16 text-center">
          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 max-w-lg mx-auto relative group px-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#009fab]/20 to-[#00b8c8]/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl border border-cyan-100 p-1.5">
              <div className="pl-4 sm:pl-5 pr-2 text-cyan-500">
                <LuSearch size={18} className="sm:w-5 sm:h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search by name, specialty, or department..."
                className="w-full py-2.5 sm:py-3.5 bg-transparent outline-none font-medium text-[#003b44] placeholder:text-cyan-900/30 text-sm sm:text-base"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              />
            </div>
          </motion.div>
        </div>

        {/* GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((doc, idx) => (
              <DoctorCard 
                key={doc.id} 
                doc={doc} 
                index={idx} 
                onBookAppointment={setSelectedDoctor}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-20 sm:py-32 text-center bg-white/50 rounded-2xl sm:rounded-3xl mx-4"
          >
            <LuUser className="mx-auto text-cyan-200 mb-4" size={60} />
            <h3 className="text-xl sm:text-2xl font-bold text-[#003b44]">No specialists found</h3>
            <p className="text-cyan-600 mt-2 text-sm sm:text-base">Try searching for a different specialty or name.</p>
          </motion.div>
        )}
      </div>

      {/* Appointment Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <AppointmentModal 
            doctor={selectedDoctor} 
            onClose={() => setSelectedDoctor(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorsList;