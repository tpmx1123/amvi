import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import FeatureCards from "./components/FeatureCards";
import WhatWeDo from "./components/WhatWeDo";
import WhyAmvi from "./components/whyamvi"; 
import OurProcess from "./components/OurProcess";
import HeroProductsSection from "./components/HeroProductSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <WhatWeDo />
      <HeroProductsSection/>
      <OurProcess />
      <WhyAmvi /> 
      <Footer />
    </>
  );
}

export default App;
