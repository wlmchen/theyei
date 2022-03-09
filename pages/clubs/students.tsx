import React from 'react'
import Page from '../../components/utility/Page'
import CTA from '../../components/clubs/index/CTA'
import Hero from '../../components/clubs/students/Hero'
import Portal from '../../components/clubs/Portal'
import Benefits from '../../components/clubs/students/Benefits'
import Numbers from '../../components/home/Numbers'
import Leadership from '../../components/clubs/students/Leadership'
import Competitions from '../../components/clubs/students/Competitions'
import Steps from '../../components/clubs/students/Steps'
/*
import Enrichment from '../../components/clubs/students/Enrichment'
*/

export default function students() {
  return (
    <Page
      title="Clubs"
      desc="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
    >
      <Hero />
      <div id="benefits">
        <Portal title="Learn Economics" />
        <Benefits />
        <Numbers title="Join Our Growing Community!"/>
        <Leadership />
        <Competitions />
        <Steps />
        <CTA />
      </div>
    </Page>
  )
}