import React from 'react';

const FEATURE_CARDS = [
  { id: 1, img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618378/9ab59e6a2b12536ceaf1a4b920b03ecc-removebg-preview_xc1nlp.png", title: "Natural Taste" },
  { id: 2, img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618382/4f61f7f4bb0fdd07b6b4d3c43375018d-removebg-preview_orrvow.png" },
  { id: 3, img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618383/e54bb93d8defa290a741126ae80a167b-removebg-preview_ckpcpd.png", title: "Strict Hygiene" },
  { id: 4, img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618384/d2523939df11585dd9161136286648f7-removebg-preview_c8g6e1.png", title: "Nutrient Rich" },
  { id: 5, img: "https://res.cloudinary.com/dhzhuobu2/image/upload/v1772618384/istockphoto-1005952360-612x612-removebg-preview_koxdvo.png", title: "Eco Friendly" },
];

const FeatureCards = () => {
  return (
    <section className="relative z-40 w-full max-w-6xl mx-auto px-4 sm:px-12 -mt-10 sm:-mt-20 pb-10">
      {/* grid-cols-4 for mobile (up to 768px), grid-cols-5 for large screens */}
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6">
        {FEATURE_CARDS.map((card, index) => (
          <div
            key={card.id}
            className={`
              group relative rounded-xl sm:rounded-3xl overflow-hidden transition-all duration-500 
              active:scale-95 sm:hover:-translate-y-3 sm:hover:shadow-2xl
              bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg
              ${index === 4 ? 'hidden lg:block' : ''} /* Hides the 5th card on mobile to maintain 4-cols layout */
            `}
          >
            {/* Image container */}
            <div className="aspect-square relative flex items-center justify-center p-1 sm:p-4">
              <img
                src={card.img}
                alt={card.title || 'Feature'}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* Optional: Mobile-optimized tiny title (Uncomment if needed) */}
            {/* <div className="pb-2 text-center lg:hidden">
              <span className="text-[7px] font-bold text-[#1A3C3A] uppercase tracking-tighter italic">
                {card.title}
              </span>
            </div> */}

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7cc2c3]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;