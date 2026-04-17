import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import './App.css';

// Layout Components
import Navbar from './components/Navbar'; // Highly recommended for sticky logic
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import Doctors from './pages/Doctors';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const location = useLocation();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,        // Increased for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,  // Reduced for less aggressive scrolling
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-white min-h-screen antialiased">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/doctors" element={<Doctors/>} />
        </Routes>
      </main>

      <Footer />
      <ScrollTopButton/>
    </div>
  );
}

export default App;