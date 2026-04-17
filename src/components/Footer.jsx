// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    LuPhone, LuMail, LuMapPin, LuArrowUpRight,
    LuFacebook, LuInstagram, LuTwitter, LuYoutube
} from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#004857] pt-16 sm:pt-20 lg:pt-24 overflow-hidden">

            {/* 1. TOP CTA LAYER: The "Floating" Consultation Bar */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12">
                <div className="bg-[#009fab] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl shadow-teal-900/40">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2">
                            Get Free Medical Consultation
                        </h2>
                        <p className="text-white/80 font-medium text-sm sm:text-base">Speak with our wellness coordinators today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <Link href="tel:123-456-7890" className="text-xl sm:text-2xl lg:text-2xl font-black text-white hover:opacity-80 transition-opacity">
                            +1 800-657-876
                        </Link>
                        <button className="bg-white text-[#0f172a] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 sm:gap-3 hover:bg-[#0f172a] hover:text-white transition-all shadow-xl group text-sm sm:text-base">
                            Book An Appointment
                            <div className="bg-[#009fab] p-1 rounded-full text-white group-hover:bg-white group-hover:text-[#14B8A6] transition-colors">
                                <LuArrowUpRight size={16} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT LAYER */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 lg:pb-20">

                {/* Brand Column */}
                <div className="sm:col-span-2 lg:col-span-4 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white mb-4 sm:mb-6 tracking-tighter italic">
                        EVERGREEN
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 sm:mb-8 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base">
                        Providing world-class healthcare with a focus on innovation, compassion, and the well-being of our community since 2004.
                    </p>
                    <div className="flex gap-4 justify-center sm:justify-start">
                        {[LuFacebook, LuInstagram, LuTwitter, LuYoutube].map((Icon, idx) => (
                            <Link key={idx} href="#" className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all">
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="sm:col-span-1 lg:col-span-2 text-center sm:text-left">
                    <h4 className="text-white font-bold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-widest text-[10px] sm:text-[11px]">Department</h4>
                    <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-slate-400 text-xs sm:text-sm font-medium">
                        {['Cardiology', 'Pediatrics', 'Orthopedics', 'Neurology', 'Family Medicine'].map((link) => (
                            <li key={link}><Link href="#" className="hover:text-[#14B8A6] transition-colors">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Utility Links */}
                <div className="sm:col-span-1 lg:col-span-2 text-center sm:text-left">
                    <h4 className="text-white font-bold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-widest text-[10px] sm:text-[11px]">Navigation</h4>
                    <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-slate-400 text-xs sm:text-sm font-medium">
                        {['About Us', 'Our Doctors', 'Health Blog', 'Careers', 'Contact'].map((link) => (
                            <li key={link}><Link href="#" className="hover:text-[#14B8A6] transition-colors">{link}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Contact/Newsletter */}
                <div className="sm:col-span-2 lg:col-span-4 text-center sm:text-left">
                    <h4 className="text-white font-bold mb-4 sm:mb-6 lg:mb-8 uppercase tracking-widest text-[10px] sm:text-[11px]">Stay Healthy</h4>
                    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                        <div className="flex gap-4 justify-center sm:justify-start">
                            <div className="bg-slate-800 p-2 sm:p-3 rounded-xl flex-shrink-0">
                                <LuMapPin className="text-[#009fab]" size={18} />
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                123 Wellness Circle, <br />Kathmandu, Nepal
                            </p>
                        </div>
                        <div className="relative max-w-md mx-auto sm:mx-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-800 border border-slate-700 rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#14B8A6] transition-colors text-sm sm:text-base"
                            />
                            <button className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-[#009fab] text-white px-4 sm:px-6 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="relative z-10"> {/* Added relative z-10 here */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 border-t border-gray-300 py-6 sm:py-8 lg:py-12">
                    <p className="text-slate-400 text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-center sm:text-left">
                        © {currentYear} Evergreen General Hospital. All rights reserved.
                    </p>

                    <div className="flex gap-4 sm:gap-6 lg:gap-8 text-slate-400 text-[11px] sm:text-[12px] lg:text-[13px] font-medium ">
                        <p className="flex items-center gap-1">
                            Crafted By:{" "}
                            <Link
                                to="https://saitsolution.com.np/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-[#14B8A6] transition-colors duration-300 font-medium relative z-20"
                            >
                                S.A.I.T Solution Nepal
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* BACKGROUND DECOR - Changed -z-0 to -z-10 to ensure it's truly behind everything */}
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[400px] bg-[#14B8A6]/5 rounded-full blur-[120px] -z-10" />

        </footer>
    );
};

export default Footer;