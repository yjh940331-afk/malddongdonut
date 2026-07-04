import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import QuickInfoBar from "./components/QuickInfoBar.jsx";
import BrandConcept from "./components/BrandConcept.jsx";
import SignatureDessert from "./components/SignatureDessert.jsx";
import SpaceGallery from "./components/SpaceGallery.jsx";
import StoreHighlight from "./components/StoreHighlight.jsx";
import StoreList from "./components/StoreList.jsx";
import SocialSection from "./components/SocialSection.jsx";
import Footer from "./components/Footer.jsx";
import MobileStickyCTA from "./components/MobileStickyCTA.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <QuickInfoBar />
        <BrandConcept />
        <SignatureDessert />
        <SpaceGallery />
        <StoreHighlight />
        <StoreList />
        <SocialSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
