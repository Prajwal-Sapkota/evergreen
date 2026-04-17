import React, { useState, useEffect } from 'react';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useLocation, Link } from 'react-router-dom';
import logoImg from '../../public/images/logo.png';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', active: false },
    { name: 'About', href: '/about', active: false },
    { name: 'Services', href: '/services', active: false },
    { name: 'Doctors', href: '/doctors', active: false },
    { name: 'Departments', href: '/departments', active: false },
  ];

  // Update active state based on current path
  const getActiveLinks = () => {
    return navLinks.map(link => ({
      ...link,
      active: location.pathname === link.href
    }));
  };

  const [activeNavLinks, setActiveNavLinks] = useState(getActiveLinks());

  useEffect(() => {
    setActiveNavLinks(getActiveLinks());
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`w-full font-sans fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-x-hidden ${!isTop ? 'bg-white shadow-lg' : 'bg-[#e0fffd]'
      }`}>

      {/* TOP INFO BAR - Only visible at top */}
      <div className={`transition-all duration-500 overflow-hidden ${isTop ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 border-b border-[#059669]/10">

          {/* Left: Contact Info - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex items-center justify-center sm:justify-start gap-3 md:gap-4 lg:gap-8 text-[11px] md:text-[12px] lg:text-[13px] font-medium text-slate-600 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <HiOutlineLocationMarker className="text-[#009fab] text-sm md:text-base lg:text-lg transition-transform group-hover:-translate-y-0.5" />
              <span className="text-[10px] sm:text-[11px] md:text-[12px] whitespace-nowrap">Kathmandu, Nepal</span>
            </div>

            <div className="flex items-center gap-1.5 group cursor-pointer">
              <HiOutlineMail className="text-[#009fab] text-sm md:text-base lg:text-lg transition-transform group-hover:scale-110" />
              <Link to="mailto:evergreen@gmail.com" className="hover:text-[#059669] transition-colors text-[10px] sm:text-[11px] md:text-[12px]">
                evergreen@gmail.com
              </Link>
            </div>
          </div>

          {/* Replace with your actual WhatsApp number */}
          <Link
            to="https://wa.me/1800657876"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-1.5 bg-white rounded-full shadow-sm group-hover:bg-[#25D366] transition-colors duration-300">
              <FaWhatsapp className="text-[#009fab] text-sm md:text-base lg:text-lg group-hover:text-white" />
            </div>
            <span className="text-[11px] md:text-[12px] lg:text-[14px] font-semibold text-slate-700 group-hover:text-[#059669] transition-colors whitespace-nowrap">
              Connect on Whatsapp
            </span>
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR - Always visible */}
      <div className={`transition-all duration-500 ${!isTop ? 'py-1 sm:py-2' : 'py-2 sm:py-4'
        }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <nav className={`rounded-[20px] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between transition-all duration-500 ${!isTop
            ? 'bg-white'
            : 'bg-white/95 backdrop-blur-md shadow-[0_5px_5px_rgba(5,150,105,0.08)]'
            }`}>

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logoImg}
                alt="Evergreen Logo"
                className={`object-contain hover:opacity-90 transition-opacity cursor-pointer transition-all duration-500 ${!isTop ? 'h-8 sm:h-10 lg:h-12' : 'h-8 sm:h-10 lg:h-12'
                  }`}
              />
            </Link>

            {/* Nav Links - Desktop (visible only on large screens) */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
              {activeNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`relative text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-300 group ${link.active ? 'text-[#009fab]' : 'text-slate-800 hover:text-[#14B8A6]'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#14B8A6] rounded-full transition-all duration-300 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA & Contact */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
              {/* Phone Group - Hidden on mobile, visible on tablet+ */}
              <Link
                to="tel:+977-9800000000"
                className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-3 group"
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-11 lg:h-11 rounded-full flex items-center justify-center border shadow-inner transition-all duration-500 ${!isTop
                  ? 'bg-[#E0F7F9] border-[#14B8A6]/20'
                  : 'bg-[#E0F7F9] border-[#14B8A6]/20'
                  }`}>
                  <BiPhoneCall className="text-[#009fab] text-xs sm:text-sm lg:text-xl group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="hidden lg:block text-[9px] lg:text-[11px] uppercase font-bold text-[#059669] tracking-tighter">Emergency 24/7</span>
                  <span className={`font-extrabold text-slate-900 leading-tight tracking-tight transition-all duration-500 whitespace-nowrap ${!isTop ? 'text-[10px] sm:text-[11px] lg:text-[14px]' : 'text-[11px] sm:text-[12px] lg:text-[17px]'
                    }`}>
                    +977- 9800000000
                  </span>
                </div>
              </Link>

              {/* Appointment Button */}
              <Link to="/about#appointment">
                <button className={`rounded-[12px] font-bold shadow-[0_10px_20px_rgba(20,184,166,0.2)] hover:bg-[#0f172a] hover:shadow-none hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap ${!isTop
                  ? 'bg-[#009fab] text-white px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-[11px] md:px-4 md:py-2 md:text-[12px] lg:px-6 lg:py-2.5 lg:text-[13px]'
                  : 'bg-[#009fab] text-white px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-[11px] md:px-5 md:py-2.5 md:text-[13px] lg:px-8 lg:py-3.5 lg:text-[15px]'
                  }`}>
                  Appointment
                </button>
              </Link>

              {/* Mobile Menu Button - Visible only on tablet and mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="menu-button lg:hidden p-1 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
                ) : (
                  <IoMenu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6 pt-20">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <IoClose className="w-6 h-6 text-slate-800" />
          </button>

          {/* Mobile Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex justify-center mb-8">
              <img
                src={logoImg}
                alt="Evergreen Logo"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Mobile Nav Links */}
          <ul className="space-y-4">
            {activeNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`block text-center py-3 text-[16px] font-semibold transition-colors rounded-lg hover:bg-slate-50 ${link.active ? 'text-[#009fab] bg-slate-50' : 'text-slate-700 hover:text-[#14B8A6]'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <BiPhoneCall className="text-[#009fab]" />
                <span>1 800-657-876</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <HiOutlineMail className="text-[#009fab]" />
                <Link to="mailto:evergreen@gmail.com">evergreen@gmail.com</Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <HiOutlineLocationMarker className="text-[#009fab]" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <Link
                  to="https://wa.me/1800657876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#059669] transition-colors"
                >
                  <FaWhatsapp className="text-[#009fab]" />
                  <span>Connect on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;