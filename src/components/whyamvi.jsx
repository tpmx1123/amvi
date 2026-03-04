import React from 'react';

const CORE_VALUES = [
  {
    icon: "🔬",
    title: "Rigorous Quality",
    desc: "Every batch lab-tested for purity, moisture content, and microbiological safety."
  },
  {
    icon: "🌱",
    title: "Farm Traceability",
    desc: "Direct sourcing from trusted Konaseema farmers. Full field-to-final traceability."
  },
  {
    icon: "🔒",
    title: "Safety & Hygiene",
    desc: "Strict GMP protocols and FSSAI-aligned standards applied throughout our facility."
  },
  {
    icon: "⚡",
    title: "Innovation First",
    desc: "Proprietary drying techniques retaining up to 90% of original nutrient profiles."
  }
];

const WhyAmvi = () => {
  return (
    <section className=" py-2 px-6 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        
        {/* --- WHY AMVI: background image, text on the right --- */}
        <div 
          className="relative mb-5 min-h-[360px] md:min-h-[420px] flex items-center justify-end "
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772627810/Gemini_Generated_Image_kfsx7rkfsx7rkfsx-removebg-preview_ydba0m.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 max-w-2xl text-right px-6 md:px-12 py-12">
            <h2 className="text-[#7cc2c3] uppercase tracking-[0.4em] font-bold text-[10px] md:text-lg mb-4 text-left">
              Why Amvi
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mb-6 text-left">
              Where Tradition <br />
              <span className="italic font-light text-gray-500 text-4xl md:text-6xl text-left">Meets Precision</span>
            </h3>
          </div>
        </div>

        {/* --- SECTION 2: CORE VALUES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {CORE_VALUES.map((val, i) => (
            <div key={i} className="group p-10 bg-[#f8fcfc] rounded-[2.5rem] hover:bg-[#7cc2c3] transition-all duration-500">
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {val.icon}
              </div>
              <h4 className="text-sm font-black text-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                {val.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white transition-colors">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: KONASEEMA ORIGIN (THE BENTO BOX) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Info Box with Background Image and Glass Effect */}
          <div className="lg:col-span-7 relative rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-xl min-h-[400px] flex items-center">
  {/* 1. Background Image Layer */}
  <div className="absolute inset-0 z-10">
    <img 
      src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772628338/7a761d0c69df3858fceff11ef8708f48_ssjfk9.jpg" 
      alt="Konaseema Landscape" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* 2. Glassmorphism Overlay (Blur + Tint) */}
  <div className="absolute inset-0 z-10 backdrop-blur-md border border-white/30"></div>

  {/* 3. Content Layer */}
  <div className="relative z-20">
    <span className="text-[10px] font-black tracking-[0.1em] uppercase text-[#d63030] mb-4 block drop-shadow-sm">
      Sourced From
    </span>
    <h4 className="text-5xl md:text-7xl font-serif font-black mb-8 text-white leading-tight">
      Konaseema
    </h4>
    <div className="max-w-md border-l-4 border-[#7cc2c3] pl-6">
      <p className="text-white   text-lg md:text-xl leading-relaxed font-bold mb-4">
        The "God's Own Land" of Andhra Pradesh.
      </p>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        Blessed with fertile alluvial soil and abundant rainfall that produces India's finest tropical produce.
      </p>
    </div>
  </div>
</div>

          {/* Compliance & Quality Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { label: "FSSAI", sub: "Compliant" },
              { label: "Export", sub: "Quality" },
              { label: "Natural", sub: "Process" },
              { label: "No", sub: "Additives" }
            ].map((item, i) => (
              <div key={i} className="bg-[#7cc2c3]/10 border border-[#7cc2c3]/20 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center hover:bg-[#7cc2c3] transition-colors group">
                <span className="text-2xl font-black text-black group-hover:text-white transition-colors">{item.label}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7cc2c3] group-hover:text-white/80 transition-colors">{item.sub}</span>
              </div>
            ))}
           
              
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyAmvi;