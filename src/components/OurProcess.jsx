import React from 'react';

const PROCESS_STEPS = [
  { id: "01", icon: "🌾", title: "Farm Sourcing", desc: "Direct procurement from verified Konaseema farms with seasonal quality grading.", accent: "var(--primary)" },
  { id: "02", icon: "🚿", title: "Wash & Sort", desc: "Triple-wash protocol. Manual and optical sorting to remove defects.", accent: "var(--primary)" },
  { id: "03", icon: "🌡️", title: "Precision Drying", desc: "Low-heat or freeze dehydration. Nutrient-lock technology applied.", accent: "var(--accent-red)" },
  { id: "04", icon: "🔬", title: "Quality Testing", desc: "Moisture, microbiology and purity tests on every production batch.", accent: "var(--primary)" },
  { id: "05", icon: "📦", title: "Pack & Dispatch", desc: "Vacuum/nitrogen-flush packaging. Export-compliant labelling.", accent: "var(--primary)" }
];

const OurProcess = () => {
  return (
    <section className="py-10 px-6 md:px-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="relative mb-24 min-h-[300px] flex items-center">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/4 h-full pointer-events-none z-0">
            <img 
              src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772686310/Screenshot_2026-03-05_102036-removebg-preview_zhxenh.png" 
              alt="Nature header background" 
              className="w-full h-full object-contain object-right "
            />
          </div>

          <div className="relative z-10 max-w-3xl px-6 md:px-16">
            <div className="flex items-center gap-3 mb-5">
              <span 
                className="uppercase tracking-[0.25em] text-Helvetica font-bold text-[10px] md:text-sm text-accent-yellow"
              >
                The Journey
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
              From Field to <br />
              <span className="text-accent-yellow">Finished</span> Product
            </h2>
            <p className="text-secondary max-w-lg text-sm md:text-base leading-relaxed font-montserrat">
              Five precise steps ensure every Amvi product reaches you at its nutritional and flavour peak.
            </p>
          </div>
        </div>

        {/* --- DYNAMIC TIMELINE --- */}
        <div className="relative px-4">
          
          {/* 1. Static Base Line (Gray Dots) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(#000_2px,transparent_2px)] bg-[length:20px_20px]"></div>
          </div>

          {/* 2. Animated Progress Line (Reveals on Load/Scroll) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0">
            <div 
              className="w-full h-full bg-[radial-gradient(var(--primary)_3px,transparent_2px)] bg-size-[20px_20px] animate-draw-line"
              style={{ 
                backgroundPosition: 'left center',
                animation: 'draw-line 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards, flow-dots 2s linear infinite' 
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 400 + 500}ms`, animationFillMode: 'forwards' }}
              >
                
                {/* Step Circle */}
                <div className="relative mb-10">
                  <div 
                    className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-transparent"
                  >
                    <span className="text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                      {step.icon}
                    </span>
                    
                    {/* Ring Pulse on Active/Hover – red dotted circle */}
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow border-accent-red"
                    ></div>
                  </div>

                  {/* Step Number Badge – same color for all */}
                  <span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg z-20 transition-transform duration-700 bg-primary"
                  >
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-Helvetica">
                    Step {step.id}
                  </h4>
                  <h3 className="text-xl font-playfair display-serif font-black text-secondary mb-4 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs md:text-sm leading-relaxed max-w-[180px] mx-auto text-montserrat">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Line for Mobile */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden w-[2px] h-16 bg-gradient-to-b from-gray-200 to-transparent mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- INLINE CSS ANIMATIONS --- */}
      <style jsx>{`
        @keyframes draw-line {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes flow-dots {
          from { background-position: 0 center; }
          to { background-position: 40px center; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-draw-line {
          clip-path: inset(0 100% 0 0);
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurProcess;