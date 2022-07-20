import CTA from '../components/home/CTA'
import Featured from '../components/home/Featured'
import FeaturedOn from '../components/home/FeaturedOn'
import Hero from '../components/home/Hero'
import Hiring from '../components/home/Hiring'
import Intro from '../components/home/Intro'
import Numbers from '../components/home/Numbers'
import Sponsors from '../components/home/Sponsors'
import Page from '../components/utility/Page'
import About from './../components/home/About'

export default function Home() {
  return (
    <Page
      fullTitle="Youth Economics Initiative (YEI) | Launchpad for Student Economists"
      desc="Exploring economics. Empowering leaders. Official page for the Youth Economics Intitiative (YEI)."
    >
      {/* <Hiring /> */}
      <Hero />
      <Intro />
      <FeaturedOn />
      <About />
      <Numbers title="Our Organization in Numbers"/>
      <Featured />
      <Sponsors />
      <CTA />
    </Page>
  )
}
