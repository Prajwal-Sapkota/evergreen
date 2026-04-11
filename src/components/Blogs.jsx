// src/components/BlogSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight, LuClock, LuUser } from 'react-icons/lu';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Modern Heart Health",
    category: "Cardiology",
    date: "April 05, 2026",
    author: "Dr. Arpan Sharma",
    image: "/images/cardiology.jpg",
    excerpt: "New research shows that small lifestyle changes can significantly reduce cardiovascular risks. Learn about the latest advances in preventive cardiology and heart health monitoring.",
    slug: "understanding-modern-heart-health"
  },
  {
    id: 2,
    title: "Pediatric Nutrition: A Parent's Guide",
    category: "Pediatrics",
    date: "April 02, 2026",
    author: "Dr. Sunita Thapa",
    image: "/images/pediatrics.webp",
    excerpt: "Ensuring your child gets the right nutrients during growth spurts is essential for long-term development. Discover expert tips for balanced childhood nutrition.",
    slug: "pediatric-nutrition-parent-guide"
  },
  {
    id: 3,
    title: "The Future of Digital Diagnostics",
    category: "Technology",
    date: "March 28, 2026",
    author: "Er. Shyam Nepal",
    image: "/images/future.webp",
    excerpt: "How AI and digital imaging are transforming the way we detect illnesses in early stages. Explore the cutting-edge diagnostic tools shaping modern healthcare.",
    slug: "future-of-digital-diagnostics"
  }
];

const Blog = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#f0fffe] overflow-hidden">
      
      {/* ANIMATED BACKGROUND BLOBS - Responsive sizing */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-[#009fab]/20 to-[#14B8A6]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] sm:w-[450px] lg:w-[600px] h-[350px] sm:h-[450px] lg:h-[600px] bg-gradient-to-tr from-[#14B8A6]/20 to-[#009fab]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-r from-[#E0F7F9]/30 to-transparent rounded-full filter blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl px-4 sm:px-0">
            <span className="text-[#009fab] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] block mb-3 sm:mb-4">
              Medical Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Latest from our <span className="text-[#009fab]">health</span> journal
            </h2>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white/70 backdrop-blur-md rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden border border-white/50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#009fab]/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 sm:top-5 lg:top-6 left-4 sm:left-5 lg:left-6 z-10">
                  <span className="bg-white/95 backdrop-blur-sm text-[#009fab] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/50">
                    {post.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 right-4 sm:right-5 lg:right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/50 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1">
                    <LuClock size={8} />
                    <span className="hidden xs:inline">{post.date}</span>
                    <span className="xs:hidden">{post.date.slice(0, 6)}</span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 sm:p-6 lg:p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-slate-500 text-[10px] sm:text-[11px] lg:text-[12px] font-medium flex-wrap">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <LuClock className="text-[#009fab]" size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <LuUser className="text-[#009fab]" size={12} />
                    <span className="line-clamp-1">{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#009fab] transition-colors duration-300 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[10px] sm:text-[11px] lg:text-[12px] font-black text-slate-800 uppercase tracking-wider group/btn transition-all hover:text-[#009fab]"
                >
                  Read More 
                  <span className="w-6 sm:w-8 h-[2px] bg-[#009fab] transition-all group-hover/btn:w-8 sm:group-hover/btn:w-12"></span>
                  <LuArrowRight size={12} className="opacity-0 group-hover/btn:opacity-100 transition-all -translate-x-2 group-hover/btn:translate-x-0" />
                </motion.button>
              </div>

              {/* Decorative Corner Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009fab] to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* CENTERED VIEW ALL BUTTON AT BOTTOM */}
        <div className="flex justify-center mt-12 sm:mt-14 lg:mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#009fab] hover:bg-[#007f8a] text-white font-bold py-3 sm:py-3.5 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-xl shadow-md transition-all duration-300 active:scale-95 flex items-center gap-2 group text-sm sm:text-base"
          >
            View All Articles
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </motion.button>
        </div>
      </div>

      {/* Add custom animation delay for blobs */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @media (max-width: 640px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;