import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import FeatureCards from "./components/FeatureCards";
import WhatWeDo from "./components/WhatWeDo";
import WhyAmvi from "./components/whyamvi"; 
import OurProcess from "./components/OurProcess";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <WhatWeDo />
      <WhyAmvi /> 
      <OurProcess />
    </>
  );
}

export default App;
