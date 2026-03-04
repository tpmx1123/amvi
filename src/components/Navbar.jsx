import React, { useState, useEffect } from 'react';

/**
 * AMVI FOODS - PREMIUM NAVBAR
 * Logo Integration & Scroll-aware Glassmorphism
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 py-4 flex justify-between items-center ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
        : "bg-transparent py-6"
    }`}>
      
      {/* 1. Official Logo Branding */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772605073/Screenshot_2026-03-04_114703-removebg-preview_exaaet.png" 
            alt="Amvi Foods Logo" 
            className={`transition-all duration-500 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"}`}
          />
        </div>
       
      </div>
      
      {/* 2. Minimalist Navigation Links - white over hero, black when scrolled */}
      <div className={`hidden lg:flex gap-12 text-[10px] font-black tracking-[0.25em] items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
        <a href="#about" className={`transition-all duration-300 relative group ${isScrolled ? 'text-black' : 'text-white'}`}>
          ABOUT US
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </a>
        
        <a href="#products" className={`transition-all duration-300 relative group ${isScrolled ? 'text-black' : 'text-white'}`}>
          PRODUCTS
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </a>

        {/* Highlighted E-Shop Link */}
        <a href="#shop" className={`relative px-4 py-2 overflow-hidden group border rounded-sm transition-colors duration-300 ${isScrolled ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'}`}>
            <span className="relative z-10">E-SHOP</span>
            <span className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </a>

        <a href="#contact" className={`transition-all duration-300 relative group ${isScrolled ? 'text-black' : 'text-white'}`}>
          CONTACT
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </a>
      </div>

      {/* 3. Utility Actions */}
      <div className="flex items-center gap-6">
        <button className={`hidden sm:block p-0 bg-transparent transition-colors ${isScrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'}`} aria-label="Search">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
        </button>
        
        <button className={`flex items-center gap-2 bg-transparent border-2 px-7 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 active:scale-95 ${isScrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`}>
          CART (0)
        </button>
      </div>
    </nav>
  );
};

export default Navbar;