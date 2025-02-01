import CaseSection from "@/components/CaseSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ScrollNavBar from "@/components/ScrollNavBar";
import ServicesSection from "@/components/ServicesSection";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Benefits from "@/components/WhoWeAre/Benefits";
import Stickers from "@/components/WhoWeAre/Stickers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <ScrollNavBar />
      <HeroSection/>
      <ServicesSection/>
      <CaseSection/>
      <WhoWeAre/>
      <Benefits/>
      <Stickers/>
      <Pricing/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </>
  );
}
