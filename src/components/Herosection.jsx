import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#1A3C3A] flex items-center">
      
      {/* 1. Main 3D Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772606249/Gemini_Generated_Image_3nt9qk3nt9qk3nt9_dbx1ri.png')`,
          backgroundSize: 'cover',
          backgroundPosition: '65% center', 
          transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* 2. Clear Leaf Border */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772602154/Gemini_Generated_Image_5vti5b5vti5b5vti-removebg-preview_bmarw0.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      />

      {/* 3. Content Overlay */}
      <div className="relative z-30 w-full px-4 md:px-20 lg:px-24">
        <div className="max-w-xl animate-fade-in flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-[#ff4d4d] md:text-[#d63030] uppercase tracking-[0.3em] font-black text-[10px] md:text-xs mb-3 font-sans">
            Purely Healthy
          </h2>

          {/* Text Color: White on Mobile, Deep Green on Desktop */}
          <h1 
            className="text-5xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-white md:text-[#1A3C3A]"
            style={{ 
              fontFamily: "'Playfair Display', serif" 
            }}
          >
            AMVI FOODS
          </h1>

          <p className="text-white md:text-[#1A3C3A] text-sm md:text-base mb-10 font-medium leading-relaxed md:border-l-2 border-white md:border-[#1A3C3A] md:pl-5 max-w-sm md:max-w-md">
            Bringing the richness of <span className="text-[#ff4d4d] md:text-[#d63030] font-bold">Konaseema</span> to your plate with premium dehydrated 
            vegetables, fruits, and powders.
          </p>

          {/* Action Buttons - Side by Side on Mobile */}
          <div className="flex flex-row items-center md:items-start gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none group relative bg-[#d63030] text-white px-4 md:px-10 py-4 rounded-full font-bold text-[9px] md:text-[11px] tracking-widest overflow-hidden transition-all duration-300 shadow-xl">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-[#1A3C3A] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button className="flex-1 sm:flex-none bg-white/20 border border-white md:border-[#1A3C3A]/30 text-white md:text-[#1A3C3A] px-4 md:px-10 py-4 rounded-full font-bold text-[9px] md:text-[11px] tracking-widest backdrop-blur-md">
              OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* Darker Overlay for Mobile Text Visibility */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-black/40 md:bg-transparent" />
      <div className="absolute inset-0 z-[6] pointer-events-none bg-gradient-to-t from-[#1A3C3A]/80 via-transparent to-black/20 md:hidden" />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;