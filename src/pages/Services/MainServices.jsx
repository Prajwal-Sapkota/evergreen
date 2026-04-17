import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceCards = [
    { id: 1, img: "/images/general.jpg", title: "General Checkup" },
    { id: 2, img: "/images/healthconsultation.jpg", title: "Health Consultation" },
    { id: 3, img: "/images/generalmedical.png", title: "General Medical Consultation" },
    { id: 4, img: "/images/primary.webp", title: "Primary Consultation" },
    { id: 5, img: "/images/healthcheck.jpg", title: "Health Check" },
];

const MainServices = () => {
    const [index, setIndex] = useState(0);
    const [screenSize, setScreenSize] = useState('desktop');

    // Handle screen resizing for small screen adjustments
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setScreenSize('mobile');
            else if (window.innerWidth < 1024) setScreenSize('tablet');
            else setScreenSize('desktop');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % serviceCards.length);
        }, 2000);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    // RESPONSIVE CONFIGURATION
    const config = {
        mobile:  { cardW: 110, cardH: 240, gap1: 140, gap2: 280, perspective: "800px" },
        tablet:  { cardW: 180, cardH: 320, gap1: 210, gap2: 420, perspective: "1200px" },
        desktop: { cardW: 270, cardH: 440, gap1: 320, gap2: 620, perspective: "1800px" }
    };

    const current = config[screenSize];

    const getCardStyle = (i) => {
        const total = serviceCards.length;
        let diff = i - index;
        while (diff > 2) diff -= total;
        while (diff < -2) diff += total;

        const isActive = diff === 0;
        const absDiff = Math.abs(diff);

        const getXPosition = (d) => {
            const direction = Math.sign(d);
            if (absDiff === 1) return direction * current.gap1;
            if (absDiff === 2) return direction * current.gap2;
            return 0;
        };

        const zPosition = isActive ? 0 : (absDiff === 1 ? -200 : -400);

        return {
            x: getXPosition(diff),
            z: zPosition,
            rotateY: diff * -25,
            scaleY: isActive ? 1.1 : (absDiff === 1 ? 1.05 : 0.95),
            scaleX: isActive ? 1.15 : 0.95,
            opacity: 1,
            zIndex: (10 - absDiff) * 10,
        };
    };

    return (
        <section className="bg-[#defffd] py-4 px-2 overflow-hidden w-full z-10">
            <div className="w-full flex flex-col items-center justify-center ">
                <div
                    className="relative w-full flex justify-center items-center"
                    style={{
                        height: current.cardH + 120, // Dynamic height based on card size
                        perspective: current.perspective,
                        perspectiveOrigin: "center center",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <AnimatePresence initial={false}>
                        {serviceCards.map((card, i) => {
                            const isActive = (i - index + serviceCards.length) % serviceCards.length === 0;

                            return (
                                <motion.div
                                    key={card.id}
                                    animate={getCardStyle(i)}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    className="absolute rounded-2xl overflow-hidden shadow-2xl bg-white"
                                    style={{ 
                                        width: current.cardW, 
                                        height: current.cardH,
                                        originY: 0.5 
                                    }}
                                >
                                    <img
                                        src={card.img}
                                        className="w-full h-full object-cover"
                                        alt={card.title}
                                    />

                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6 text-center"
                                        >
                                            <h4 className="text-white text-sm md:text-lg lg:text-xl font-bold leading-tight uppercase tracking-wider">
                                                {card.title}
                                            </h4>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MainServices;