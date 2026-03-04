import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import FeatureCards from "./components/FeatureCards";
import WhatWeDo from "./components/WhatWeDo";
import WhyAmvi from "./components/whyamvi"; 

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <WhatWeDo />
      <WhyAmvi /> 
    </>
  );
}

export default App;
