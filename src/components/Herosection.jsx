import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#f8fcfc] flex items-center">
      
      {/* 1. Main 3D Background - Parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772606249/Gemini_Generated_Image_3nt9qk3nt9qk3nt9_dbx1ri.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* 2. Clear Leaf Border - Optimized for Clarity */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772602154/Gemini_Generated_Image_5vti5b5vti5b5vti-removebg-preview_bmarw0.png')`,
          backgroundSize: '100% 100%', // Forced fit to avoid blurring from over-stretching
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.05))', // Adds crispness to the edges
        }}
      />

      {/* 3. Refined Content Overlay */}
      <div className="relative z-30 w-full px-8 md:px-20 lg:px-24">
        <div className="max-w-xl animate-fade-in">
          
          <h2 className="text-accent-red uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs mb-4 font-Helvetica pl-4">
            Purely Healthy
          </h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            AMVI FOODS <br />
            
          </h1>

          <p className="text-secondary text-sm md:text-base mb-10 font-medium leading-relaxed border-l-2 border-primary pl-5 max-w-md">
            Bringing the richness of <span className="text-accent-red font-bold">Konaseema</span> to your plate with premium dehydrated 
            vegetables, fruits, and powders.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="group relative bg-accent-red text-white px-10 py-3.5 rounded-full font-bold text-[11px] tracking-widest overflow-hidden transition-all duration-300 shadow-lg active:scale-95">
              <span className="relative z-10 group-hover:text-white transition-colors">SHOP NOW</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            
            <button className="bg-white/30 border border-primary/50 text-secondary px-10 py-3.5 rounded-full font-bold text-[11px] tracking-widest backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300">
              OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Side Vignette */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-r from-white/60 via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;