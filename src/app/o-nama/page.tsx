import AboutHeader from "@/components/about/AboutHeader";
import AboutOffer from "@/components/about/AboutOffer";
import AboutJourney from "@/components/about/AboutJourney";
import AboutCountUp from "@/components/about/AboutCountUp";
import AboutLocation from "@/components/about/AboutLocation";
import AboutCTA from "@/components/about/AboutCTA";
import AboutSponsors from "@/components/about/AboutSponsors";
import AboutTeam from "@/components/about/AboutTeam";
import AboutGallery from "@/components/about/AboutGallery";
import AboutTestimony from "@/components/about/AboutTestimony";

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutOffer />
      <AboutCountUp />
      <AboutJourney />
      <div className=" bg-light-gradient">
        <AboutSponsors />
        <AboutTestimony />
      </div>
      <AboutTeam />
      <AboutLocation />
      <AboutGallery />
      <AboutCTA />
    </>
  );
}
