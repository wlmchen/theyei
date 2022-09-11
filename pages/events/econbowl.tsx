import React from 'react'
import Hero from '../../components/events/econbowl/Hero'
import Prizes from '../../components/events/econbowl/Prizes'
import Recap from '../../components/events/econbowl/Recap'
import Speaker from '../../components/events/econbowl/Speaker'
import FAQs from '../../components/events/econbowl/FAQs'
import Page from '../../components/utility/Page'
import Resources from './../../components/events/econbowl/Resources'
import WhatsNew from './../../components/events/econbowl/WhatsNew'
import Structure from './../../components/events/econbowl/Structure'
import Info from '../../components/events/econbowl/Info'
import Schedule from '../../components/events/econbowl/Schedule'
import Sponsors from '../../components/events/econbowl/Sponsors'

export default function econbowl() {
  return (
    <Page
      title="EconBowl"
      desc="Youth Economics Initiative's (YEI) Fall Competition, students compete in teams of 3 or 4 for a $1600 Prize Pool.  Competition consists of a Written Exam and Quiz Bowl Rounds. Presented with the Wen & Yung Family Foundation."
    >
      <Hero />
      <Structure />
      <Info />
      <Speaker />
      <Schedule />
      <Prizes />
      <Resources />
      <Sponsors />
      <FAQs />
    </Page>
  )
}
