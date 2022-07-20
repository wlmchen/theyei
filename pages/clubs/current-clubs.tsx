import React, { useEffect, useRef, useState } from 'react'
import Schools from '../../components/clubs/current-clubs/Schools'
import Page from '../../components/utility/Page'
import Header from '../../components/clubs/current-clubs/Header'
import Map from '../../components/clubs/current-clubs/Map'
import Stats from '../../components/clubs/current-clubs/Stats'

export default function currentclubs() {
  return (
    <Page
      title="Current Clubs"
      desc="YEI EconClubs is the premier high school economics club program for students who want to supercharge their economics journey. View YEI's current list of clubs."
    >
      <div className="pt-16 px-4 sm:px-6 lg:px-8 ">
        <Header />
        <Stats />
        <Map />
        <Schools />
      </div>
    </Page>
  )
}
