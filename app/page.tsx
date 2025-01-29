import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ScrollNavBar from "@/components/ScrollNavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <ScrollNavBar />
      <HeroSection/>
      <ServicesSection/>
    </>
  );
}
