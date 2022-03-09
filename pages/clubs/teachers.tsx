import React from 'react'
import Page from '../../components/utility/Page'
import CTA from '../../components/clubs/index/CTA'
import Hero from '../../components/clubs/teachers/Hero'
import Portal from '../../components/clubs/Portal'
import Benefits from '../../components/clubs/teachers/Benefits'
import FLIP from '../../components/clubs/teachers/FLIP'
import Numbers from '../../components/home/Numbers'
import Opportunities from '../../components/clubs/teachers/Opportunities'
import Enrichment from '../../components/clubs/teachers/Enrichment'

export default function students() {
  return (
    <Page
      title="Clubs"
      desc="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
    >
      <Hero />
      <div id="benefits">
        <Portal title="Supplement student’s learning with advanced material" />
        <Benefits />
        <FLIP />
        <Opportunities />
        <Numbers title="Join Our Growing Community!"/>
        <Enrichment />
        <CTA />
      </div>
    </Page>
  )
}