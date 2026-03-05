import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import FeatureCards from "./components/FeatureCards";
import WhatWeDo from "./components/WhatWeDo";
import WhyAmvi from "./components/whyamvi"; 
import OurProcess from "./components/OurProcess";
import HeroProductsSection from "./components/HeroProductSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <WhatWeDo />
      <WhyAmvi /> 
      <OurProcess />
      <HeroProductsSection/>
    </>
  );
}

export default App;
