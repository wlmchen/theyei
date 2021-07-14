import React from 'react'
import FAQs from '../../components/events/econolympiad/FAQs'
import Hero from '../../components/events/econolympiad/Hero'
import Info from '../../components/events/econolympiad/Info'
import KeyDates from '../../components/events/econolympiad/KeyDates'
import Prizes from '../../components/events/econolympiad/Prizes'
import Page from '../../components/utility/Page'
import Agenda from '../../components/events/econolympiad/Agenda'
import Judges from '../../components/events/econolympiad/Judges'
import Speaker from '../../components/events/econolympiad/Speaker'

export default function econolympiad() {
  return (
    <Page
      title="EconOlympiad"
      desc="Youth Economics Initiative's (YEI) Flagship Competition, EconOlympiad, takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members."
    >
      <Hero />
      <KeyDates />
      <Prizes />
      <Judges />
      <Speaker />
      <Info />
      <Agenda />
      <FAQs />
    </Page>
  )
}
