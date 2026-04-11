import React from 'react';
import { LuHeart, LuStethoscope, LuShieldPlus, LuPlus } from 'react-icons/lu';

const Story = () => {
 

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT PART - IMAGE COLLAGE */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          
          {/* Left Column - Full height image */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img 
              src="/images/doctor1.avif" 
              className="w-full h-[320px] sm:h-[360px] lg:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105" 
              alt="Doctor" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Right Column - Stacked layout */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* "Our Story" Title - Above the second image */}
            <div>
              <span className="text-[#14B8A6] text-2xl sm:text-3xl lg:text-4xl italic uppercase tracking-wider inline-block">
                Our Story
              </span>
            </div>
            
            {/* Second Image */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/images/clinic.jpg" 
                className="w-full h-[280px] sm:h-[300px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Clinic" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Third Image - Spanning both columns (col-span-2) */}
          <div className="col-span-2 relative overflow-hidden rounded-2xl group">
            <img 
              src="/images/child.avif" 
              className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105" 
              alt="Child" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* RIGHT PART - CONTENT (Centered vertically) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-4 sm:mb-6">
            Micro Healthcare is dedicated to provide best treatment.
          </h2>
          <p className="text-slate-500 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics.
          </p>
          <p className="text-slate-500 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            A small river named Duden flows by their place and supplies it with the necessary 
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default Story;