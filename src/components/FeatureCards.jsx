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
    <section className="relative z-40 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 -mt-20 md:-mt-18 pb-16  ">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 ">
        {FEATURE_CARDS.map((card) => (
          <div
            key={card.id}
            className="group relative rounded-3xl overflow-hidden transition-all duration-500 
                       hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                       bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          >
            {/* 1. Image Container - Blend mode makes the icon background transparent */}
            <div className="aspect-square relative flex items-center justify-center ">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
              {/* Subtle inner light reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none" />
            </div>

            

            {/* 3. Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;