import HeroSection from "@/components/hero-section/HeroSection";
import Cards from "@/components/cards/Cards";
import Biography from "@/components/biography/Biography";
import BlogSection from "@/components/blog/Blog";
import AboutCTA from "@/components/about/AboutCTA";

import AboutSponsors from "@/components/about/AboutSponsors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Biography />
      <BlogSection />
      <div className="bg-lightBlue">
        <AboutSponsors />
        <AboutCTA />
      </div>
    </>
  );
}
