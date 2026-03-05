import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showComingSoon = (message = 'Coming soon') => {
    setToast({ show: true, message });
    const t = setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 2500);
    return () => clearTimeout(t);
  };

  const handleEshop = (e) => {
    e.preventDefault();
    showComingSoon('Coming soon');
    setMobileOpen(false);
  };

  const handleContact = (e) => {
    e.preventDefault();
    showComingSoon('Coming soon');
    setMobileOpen(false);
  };

  const linkClass = (scrolled) =>
    `transition-all duration-300 relative group ${scrolled ? 'text-black' : 'text-white'}`;
  const underlineClass = (scrolled) =>
    `absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-black' : 'bg-white'}`;
  const btnClass = (scrolled) =>
    `relative px-4 py-2 overflow-hidden group border rounded-sm transition-colors duration-300 ${scrolled ? 'text-black border-black hover:bg-black hover:text-white' : 'text-white border-white hover:bg-white hover:text-black'}`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 py-4 flex justify-between items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <img
            src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772605073/Screenshot_2026-03-04_114703-removebg-preview_exaaet.png"
            alt="Amvi Foods Logo"
            className={`transition-all duration-500 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`}
          />
        </a>

        {/* Desktop nav */}
        <div
          className={`hidden lg:flex gap-12 text-[10px] font-Helvetica  tracking-[0.25em] items-center ${isScrolled ? 'text-secondary' : 'text-white'}`}
        >
          <a href="#home" className={linkClass(isScrolled)}>
            HOME
            <span className={underlineClass(isScrolled)} />
          </a>
          <a href="#products" className={linkClass(isScrolled)}>
            PRODUCTS
            <span className={underlineClass(isScrolled)} />
          </a>
          <button type="button" onClick={handleEshop} className={btnClass(isScrolled)}>
            <span className="relative z-10">E-SHOP</span>
            <span
              className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm ${isScrolled ? 'bg-primary' : 'bg-white'}`}
            />
          </button>
          <button type="button" onClick={handleContact} className={linkClass(isScrolled)}>
            CONTACT
            <span className={underlineClass(isScrolled)} />
          </button>
        </div>

        {/* Right: search, cart, mobile menu button */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className={`hidden sm:block p-0 bg-transparent transition-colors ${isScrolled ? 'text-black hover:text-black/80' : 'text-white hover:text-white/80'}`}
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            className={`hidden sm:flex items-center gap-2 bg-primary border-2 px-7 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 active:scale-95 ${isScrolled ? 'border-primary  text-white hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`}
          >
            CART (0)
          </button>
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-black hover:bg-black/10' : 'text-white hover:bg-white/10'}`}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-[min(280px,85vw)] z-[101] bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-out flex flex-col pt-20 px-6 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-2 text-[10px] font-black tracking-[0.2em]">
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="py-4 border-b border-gray-100 text-secondary hover:text-primary"
          >
            HOME
          </a>
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="py-4 border-b border-gray-100 text-secondary hover:text-primary"
          >
            PRODUCTS
          </a>
          <button
            type="button"
            onClick={handleEshop}
            className="py-4 border-b border-gray-100 text-left text-secondary hover:text-primary"
          >
            E-SHOP
          </button>
          <button
            type="button"
            onClick={handleContact}
            className="py-4 border-b border-gray-100 text-left text-secondary hover:text-primary"
          >
            CONTACT
          </button>
        </nav>
      </div>

      {/* Toast – right side */}
      <div
        className={`fixed top-24 right-6 z-[110] px-5 py-3 rounded-lg shadow-lg bg-[#1a1f2e] text-white text-sm font-semibold transition-all duration-300 ${
          toast.show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
        role="status"
        aria-live="polite"
      >
        {toast.message}
      </div>
    </>
  );
};

export default Navbar;
