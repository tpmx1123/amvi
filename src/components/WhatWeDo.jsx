import React from 'react';

const VERTICALS = [
  {
    id: "01",
    icon: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618378/9ab59e6a2b12536ceaf1a4b920b03ecc-removebg-preview_xc1nlp.png",
    category: "Tropical Harvest",
    title: "Fresh Fruit Export",
    desc: "Direct farm-to-port sourcing of premium fruits like bananas and papaya, shipped with full cold-chain compliance.",
    accent: "var(--primary)"
  },
  {
    id: "02",
    icon: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618383/e54bb93d8defa290a741126ae80a167b-removebg-preview_ckpcpd.png",
    category: "Precision Drying",
    title: "Dehydrated Vegetables",
    desc: "Ready-to-cook okra, brinjal, and bitter gourd—retaining color and nutrients through low-heat drying.",
    accent: "var(--accent-red)"
  },
  {
    id: "03",
    icon: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618384/d2523939df11585dd9161136286648f7-removebg-preview_c8g6e1.png",
    category: "Micro-Ground",
    title: "Dehydrated Powders",
    desc: "Micro-ground powders like turmeric and moringa for food manufacturers and health-focused brands.",
    accent: "var(--primary)"
  }
];

const WhatWeDo = () => {
  return (
    <section className=" py-5 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION WITH BACKGROUND --- */}
        <div className="relative mb-14 min-h-[300px] flex items-center">
          
          {/* Background Image Container - Only for this Header block */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/4 h-full pointer-events-none z-0">
            <img 
              src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772620811/Screenshot_2026-03-04_160804-removebg-preview_yz2ovj.png" 
              alt="Nature header background" 
              className="w-full h-full object-contain object-right opacity-60 md:opacity-100"
            />
          </div>

          {/* Header Text Content – match reference: WHAT WE DO + Playfair title, Nature in gold */}
          <div className="relative z-10 max-w-3xl px-6 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span 
                className="uppercase tracking-[0.25em] text-Helvetica font-bold text-[10px] md:text-sm text-accent-yellow"
              >
                What We Do
              </span>
              <span 
                className="flex-1 h-px max-w-[60px] bg-accent-yellow"
              />
            </div>
            <h2 
              className="text-primary"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Three Ways We <br />
              Bring <span className="text-accent-yellow">Nature</span> to You
            </h2>
          </div>
        </div>

        {/* --- VERTICALS INTERACTIVE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {VERTICALS.map((item) => (
            <div 
              key={item.id}
              className="group relative flex flex-col h-full bg-[#fcfdfd] p-10 rounded-[3rem] transition-all duration-700 hover:bg-primary/10 hover:shadow-2xl overflow-hidden"
            >
              {/* Number Background Decoration */}
              <span className="absolute -top-2 -right-1 text-[80px]  font-bold text-gray-300 group-hover:text-black/20 transition-colors duration-500 pointer-events-none font-semibold">
                {item.id}
              </span>

              {/* Icon / Image Header */}
              <div className="relative z-10 w-20 h-20 mb-12 bg-white rounded-2xl flex items-center justify-center  shadow-sm group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-full h-full object-cover " 
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <span className="text-[10px]  tracking-[0.1em] text-accent-yellow uppercase mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-xl  font-bold text-secondary  mb-6 transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* CTA Footer */}
              <div className="relative z-10 pt-6 border-t border-gray-100 group-hover:border-white/10 flex justify-between items-center">
                <span className="text-[10px]  tracking-widest text-secondary  uppercase">
                  Explore Vertical
                </span>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{ backgroundColor: item.accent }}
                >
                  <svg className="w-5 h-5 text-white transform  transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Hover Decorative Line */}
              <div 
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: item.accent }}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;