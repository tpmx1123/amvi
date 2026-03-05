import React from 'react';

const PROCESS_STEPS = [
  {
    id: "01",
    icon: "🌾",
    title: "Farm Sourcing",
    desc: "Direct procurement from verified Konaseema farms with seasonal quality grading.",
    accent: "#7cc2c3"
  },
  {
    id: "02",
    icon: "🚿",
    title: "Wash & Sort",
    desc: "Triple-wash protocol. Manual and optical sorting to remove defects.",
    accent: "#7cc2c3"
  },
  {
    id: "03",
    icon: "🌡️",
    title: "Precision Drying",
    desc: "Low-heat or freeze dehydration. Nutrient-lock technology applied.",
    accent: "#d63030" // Mid-point highlight
  },
  {
    id: "04",
    icon: "🔬",
    title: "Quality Testing",
    desc: "Moisture, microbiology and purity tests on every production batch.",
    accent: "#7cc2c3"
  },
  {
    id: "05",
    icon: "📦",
    title: "Pack & Dispatch",
    desc: "Vacuum/nitrogen-flush packaging. Export-compliant labelling.",
    accent: "#7cc2c3"
  }
];

const OurProcess = () => {
  return (
    <section className="py-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="relative mb-14 min-h-[300px] flex items-center">
          
          {/* Background Image Container - Only for this Header block */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/4 h-full pointer-events-none z-0">
            <img 
              src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772686310/Screenshot_2026-03-05_102036-removebg-preview_zhxenh.png" 
              alt="Nature header background" 
              className="w-full h-full object-contain object-right opacity-60 md:opacity-100"
            />
          </div>

          {/* Header Text Content */}
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#7cc2c3] uppercase tracking-[0.4em] font-bold text-[10px] md:text-lg mb-4 block">
              The Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-black leading-[1.05]">
              From Field to <br />
              <span className="italic font-light text-gray-400">Finished Product</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Five precise steps ensure every Amvi product reaches you at its nutritional and flavour peak.
          </p>
          </div>
        </div>

        {/* --- PROCESS TIMELINE --- */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="group flex flex-col items-center text-center">
                
                {/* Step Circle */}
                <div 
                  className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:-translate-y-2"
                  style={{ '--hover-color': step.accent }}
                >
                  <span className="text-3xl">{step.icon}</span>
                  
                  {/* Step Number Badge */}
                  <span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-sm font-black text-black uppercase tracking-widest mb-3 group-hover:text-[#7cc2c3] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-4">
                  {step.desc}
                </p>

                {/* Vertical Connector (Mobile Only) */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden w-px h-12 bg-gray-200 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default OurProcess;