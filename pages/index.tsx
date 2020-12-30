import FeaturedOn from "../components/home/FeaturedOn";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Page from "../components/utility/Page";
import About from "./../components/home/About";

export default function Home() {
  return (
    <Page
      fullTitle="Youth Economics Initiative (YEI) | Launchpad for Student Economists"
      desc="Exploring economics. Empowering leaders. Official page for the Youth Economics Intitiative (YEI)."
    >
      <Hero />
      <Intro />
      <FeaturedOn />
      <About />
    </Page>
  );
}
