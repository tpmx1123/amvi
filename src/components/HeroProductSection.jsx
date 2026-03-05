import React from 'react';
import { useParallax } from '../hooks/useParallax';

const PRODUCTS = [
  { id: 1, tag: "Best Seller", title: "Ginger Powder", origin: "Konaseema Orchards", img: "https://i.pinimg.com/1200x/75/32/5a/75325a5df8977d944f1cb9c0b22ec2a4.jpg", accent: "#7cc2c3" },
  { id: 2, tag: "New Arrival", title: "Tomato Powder", origin: "Farm Fresh", img: "https://i.pinimg.com/1200x/e8/ae/31/e8ae3148d1a6133ccc9d8b642932a78f.jpg", accent: "#d63030" },
  { id: 3, tag: "Pure", title: "chrysanthemum Tea", origin: "Superfood Line", img: "https://i.pinimg.com/736x/ec/66/cf/ec66cf8af8c0f295e8f052f452aeef47.jpg", accent: "#7cc2c3" },
  { id: 4, tag: "Export Quality", title: "ABC Powder", origin: "Nutrient Rich", img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772692997/Gemini_Generated_Image_yki08yyki08yyki0_vdkgh2.png", accent: "#d63030" },
  { id: 5, tag: "Tropical", title: "Brinjal Powder", origin: "Sun-Dried", img: "https://i.pinimg.com/736x/d3/a0/8a/d3a08a7fc9c25010e79e6e907fa1d75b.jpg", accent: "#7cc2c3" },
  { id: 6, tag: "Premium", title: "Beetroot Powder", origin: "Golden Spice", img: "https://i.pinimg.com/736x/14/c5/90/14c5900fa4cd42af863a5fadad2e22f5.jpg", accent: "#d63030" },
  { id: 7, tag: "Farm Fresh", title: "Drumstick", origin: "Dehydrated", img: "https://i.pinimg.com/1200x/34/b7/85/34b7850ab7a784e67116ec50dea4d1c9.jpg", accent: "#7cc2c3" },
  { id: 8, tag: "Natural", title: "Rose Powder", origin: "No Additives", img:"https://i.pinimg.com/736x/38/ac/97/38ac9795c151980b284a31b74c6a5136.jpg", accent: "#d63030" },
];

const HeroProductSection = () => {
  const { ref: gridRef, offset: gridOffset } = useParallax(0.12);

  return (
    <section className="py-10 px-6 md:px-10  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header – theme aligned */}
        <div 
          className="relative mb-5 min-h-[360px] md:min-h-[420px] flex items-center justify-end "
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dhzhuobu2/image/upload/v1772690181/Screenshot_2026-03-05_112531-removebg-preview_ytnjdj.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 max-w-2xl text-right px-6 md:px-12 py-12">
            <h2 className="text-[#7cc2c3] uppercase tracking-[0.4em] font-bold text-[10px] md:text-lg mb-4 text-left">
            The Collection
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mb-6 text-left">
              Purely Healthy <br />
              <span className="italic font-light text-gray-500 text-4xl md:text-6xl text-left">Fresh & Nutritious</span>
            </h3>
            <a
            href="#shop"
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b-2 border-[#7cc2c3] pb-1.5 hover:text-[#d63030] hover:border-[#d63030] transition-colors duration-300"
          >
            View All Products
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            </a>
          </div>
        </div>

        {/* Two rows × 4 products – with stagger and parallax */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          style={{ transform: `translateY(${gridOffset}px)` }}
        >
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
              style={{
                animation: 'productCardFadeIn 0.6s ease-out forwards',
                animationDelay: `${index * 60}ms`,
                opacity: 0,
              }}
            >
              {/* Image container – aspect ratio + hover zoom */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Tag pill */}
                <span
                  className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white shadow-lg"
                  style={{ backgroundColor: product.accent }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Content – theme borders and typography */}
              <div className="p-4 md:p-5 border-t-4 border-[#f0f5f5] group-hover:border-[#7cc2c3]/40 transition-colors duration-300">
                <p className="text-[10px] font-bold text-[#7cc2c3] uppercase tracking-wider mb-1">
                  {product.origin}
                </p>
                <h3 className="text-base md:text-lg font-serif font-black text-black mb-3 leading-tight">
                  {product.title}
                </h3>
                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: product.accent }}
                >
                  Explore
                </button>
              </div>

              {/* Accent corner glow */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${product.accent}, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroProductSection;
