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
    <section className="py-10 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MOBILE HEADER: text only, left-aligned; no image --- */}
        <div className="flex flex-col md:hidden mb-8">
          <div className="text-left mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="uppercase tracking-[0.25em] font-bold text-[10px] text-accent-yellow font-Helvetica">
                Why Amvi
              </span>
              <span className="h-px w-10 bg-accent-yellow shrink-0" />
            </div>
            <h3
              className="text-primary mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Where Tradition <br />
              Meets <span className="text-accent-yellow">Precision</span>
            </h3>
          </div>
        </div>

        {/* --- DESKTOP HEADER: unchanged (background image, text on right) --- */}
        <div 
          className="relative mb-5 min-h-[360px] md:min-h-[420px] hidden md:flex items-center justify-end"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772627810/Gemini_Generated_Image_kfsx7rkfsx7rkfsx-removebg-preview_ydba0m.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 max-w-2xl text-right px-6 md:px-16 py-12">
          <div className="flex items-center gap-3 mb-5">
              <span 
                className="uppercase tracking-[0.25em] font-bold text-[10px] md:text-sm text-accent-yellow text-Helvetica"
              >
                Why Amvi
              </span>
              <span 
                className="flex-1 h-px max-w-[60px] bg-accent-yellow"
              />
            </div>
            <h3 
              className="text-left text-primary"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Where Tradition <br />
              Meets <span className="text-accent-yellow">Precision</span>
            </h3>
            
          </div>
        </div>

        {/* --- SECTION 2: CORE VALUES GRID – mobile 2 cols, desktop unchanged --- */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-32">
          {CORE_VALUES.map((val, i) => (
            <div key={i} className="group p-5 md:p-8 bg-[#f8fcfc] rounded-2xl md:rounded-[2.5rem] hover:bg-primary transition-all duration-500">
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-500">
                {val.icon}
              </div>
              <h4 className="text-xs md:text-sm text-secondary uppercase tracking-widest mb-2 md:mb-4 group-hover:text-white transition-colors font-Helvetica font-bold">
                {val.title}
              </h4>
              <p className="text-secondary text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors font-montserrat">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: KONASEEMA ORIGIN (THE BENTO BOX) – enhanced mobile --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch">
          
          {/* Main Info Box with Background Image and Glass Effect */}
          <div className="lg:col-span-7 relative rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-16 overflow-hidden shadow-xl min-h-[320px] md:min-h-[400px] flex items-center">
  {/* 1. Background Image Layer */}
  <div className="absolute inset-0 z-10 hover:z-9">
    <img 
      src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1772628338/7a761d0c69df3858fceff11ef8708f48_ssjfk9.jpg" 
      alt="Konaseema Landscape" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* 2. Glassmorphism Overlay (Blur + Tint) */}
  <div className="absolute inset-0 z-10 hover:z-9 backdrop-blur-md border border-white/30"></div>

  {/* 3. Content Layer */}
  <div className="relative z-20">
    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-accent-red mb-3 md:mb-4 block drop-shadow-sm font-Helvetica">
      Sourced From
    </span>
    <h4 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 text-white leading-tight font-playfair display-serif uppercase ">
      Konaseema
    </h4>
    <div className="max-w-md border-l-4 border-white pl-4 md:pl-6">
      <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-bold mb-3 md:mb-4 font-Helvetica">
        The "God's Own Land" of Andhra Pradesh.
      </p>
      <p className="text-white text-sm md:text-base leading-relaxed font-montserrat">
        Blessed with fertile alluvial soil and abundant rainfall that produces India's finest tropical produce.
      </p>
    </div>
  </div>
</div>

          {/* Compliance & Quality Bento Grid – mobile 2 cols, tighter padding */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
            {[
              { label: "FSSAI", sub: "Compliant" },
              { label: "Export", sub: "Quality" },
              { label: "Natural", sub: "Process" },
              { label: "No", sub: "Additives" }
            ].map((item, i) => (
              <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl md:rounded-[2rem] p-4 md:p-6 flex flex-col justify-center items-center text-center hover:bg-primary transition-colors group min-h-[88px] md:min-h-0">
                <span className="text-lg md:text-2xl font-black text-secondary group-hover:text-white transition-colors font-Helvetica">{item.label}</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white/80 transition-colors font-montserrat">{item.sub}</span>
              </div>
            ))}
           
              
          </div>

        </div>
       

      </div>
    </section>
  );
};

export default WhyAmvi;