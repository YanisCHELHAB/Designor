import CaseSection from "@/components/CaseSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ScrollNavBar from "@/components/ScrollNavBar";
import ServicesSection from "@/components/ServicesSection";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <>
      <NavBar />
      <ScrollNavBar />
      <HeroSection/>
      <ServicesSection/>
      <CaseSection/>
      <WhoWeAre/>
    </>
  );
}
