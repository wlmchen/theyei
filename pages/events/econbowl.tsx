import FAQs from '../../components/events/econbowl/FAQs'
import Hero from '../../components/events/econbowl/Hero'
import Info from '../../components/events/econbowl/Info'
import Page from '../../components/utility/Page'
import Prizes from '../../components/events/econbowl/Prizes'
import React from 'react'
import Recap from '../../components/events/econbowl/Recap'
import Resources from './../../components/events/econbowl/Resources'
import Schedule from '../../components/events/econbowl/Schedule'
import Speaker from '../../components/events/econbowl/Speaker'
import Sponsors from '../../components/events/econbowl/Sponsors'
import Structure from './../../components/events/econbowl/Structure'
import WhatsNew from './../../components/events/econbowl/WhatsNew'

export default function econbowl() {
  return (
    <Page
      title="EconBowl"
      desc="Youth Economics Initiative's (YEI) Fall Competition, students compete in teams of 3 or 4 for a $1500 Prize Pool.  Competition consists of a Written Exam and Quiz Bowl Rounds. Presented with the Wen & Yung Family Foundation."
    >
      <Hero />
      <WhatsNew />
      <Structure />
      <Info />
      <Speaker />
      <Schedule />
      <Prizes />
      <Resources />
      <Sponsors />
      <FAQs />
      <Recap />
    </Page>
  )
}
