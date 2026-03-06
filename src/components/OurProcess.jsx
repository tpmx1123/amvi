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
    <section className="py-10 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER: same style as WhatWeDo; mobile = stacked (text then image), desktop = text left, image right --- */}
        <div className="relative flex flex-col md:min-h-[300px] md:flex-row md:items-center mb-10 md:mb-24">
          
          {/* Desktop: background image (right side) – hidden on mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/4 h-full pointer-events-none z-0 hidden md:block">
            <img 
              src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772686310/Screenshot_2026-03-05_102036-removebg-preview_zhxenh.png" 
              alt="Nature header background" 
              className="w-full h-full object-contain object-right opacity-60 md:opacity-100"
            />
          </div>

          {/* Header text – left on mobile, same styling as WhatWeDo on desktop */}
          <div className="relative z-10 w-full md:max-w-3xl px-0 md:px-16 order-1 text-left">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span 
                className="uppercase tracking-[0.25em] font-bold text-[10px] md:text-sm text-accent-yellow"
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
                fontSize: 'clamp(1.75rem, 4vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              From Field to <br />
              <span className="text-accent-yellow">Finished</span> Product
            </h2>
            <p className="text-secondary max-w-lg text-sm md:text-base leading-relaxed">
              Five precise steps ensure every Amvi product reaches you at its nutritional and flavour peak.
            </p>
          </div>

          {/* Mobile: no image. Desktop: image remains in absolute block above. */}
        </div>

        {/* --- DYNAMIC TIMELINE --- */}
        <div className="relative px-4">
          
          {/* Desktop: horizontal dotted lines – hidden on mobile */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(#000_2px,transparent_2px)] bg-[length:20px_20px]"></div>
          </div>
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] z-0">
            <div 
              className="w-full h-full bg-[radial-gradient(var(--primary)_3px,transparent_2px)] bg-size-[20px_20px] animate-draw-line"
              style={{ 
                backgroundPosition: 'left center',
                animation: 'draw-line 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards, flow-dots 2s linear infinite' 
              }}
            ></div>
          </div>

          {/* Mobile: vertical dotted line on left, icons left, text right */}
          <div className="lg:hidden relative pl-1">
            {/* Vertical dotted line – animated dots, ends at step 5 (no line below) */}
            <div 
              className="absolute left-8 top-6 w-[2px] opacity-60 bg-[radial-gradient(circle,var(--primary)_2px,transparent_2px)] bg-size-[2px_20px] bg-position-[center_top] animate-flow-dots-vertical"
              style={{ height: 'calc(100% - 7rem)' }}
            />
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-4 items-start relative pb-8 last:pb-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon on left (sits on the dotted line) */}
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl shadow-sm">
                  {step.icon}
                  <span 
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white bg-primary"
                  >
                    {step.id}
                  </span>
                </div>
                {/* Text on right */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h4 className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">
                    Step {step.id}
                  </h4>
                  <h3 className="text-base font-black text-secondary mb-2 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 5-column grid – hidden on mobile */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
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
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow border-accent-red"
                    ></div>
                  </div>
                  <span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg z-20 transition-transform duration-700 bg-primary"
                  >
                    {step.id}
                  </span>
                </div>
                <div className="px-2">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 font-montserrat">
                    Step {step.id}
                  </h4>
                  <h3 className="text-xl font-montserrat font-black text-secondary mb-4 group-hover:text-accent-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-xs md:text-sm leading-relaxed max-w-[180px] mx-auto text-montserrat">
                    {step.desc}
                  </p>
                </div>
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
        @keyframes flow-dots-vertical {
          from { background-position: center 0; }
          to { background-position: center 20px; }
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
        .animate-flow-dots-vertical {
          animation: flow-dots-vertical 2s linear infinite;
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