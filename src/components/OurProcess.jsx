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
    <section className="py-24 px-6 md:px-20  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-[#7cc2c3] uppercase tracking-[0.4em] font-black text-[10px] md:text-xs mb-4 block">
            The Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-black leading-tight mb-6">
            From Field to <span className="italic font-light text-gray-400">Finished Product</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Five precise steps ensure every Amvi product reaches you at its nutritional and flavour peak.
          </p>
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

        {/* --- BOTTOM CTA --- */}
        <div className="mt-24 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#d63030] transition-all cursor-pointer group">
            Learn more about our standards
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;