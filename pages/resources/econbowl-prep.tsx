import React from 'react'
import EconBowlPrep from '../../components/resources/econbowl-prep/prep'
import Page from '../../components/utility/Page'

export default function events() {
  return (
    <Page
      title="EconBowl Prep"
      desc="View the in-depth prepatory material that the Youth Economics Initiative (YEI) has created to help students prepare for the EconBowl."
    >
      <EconBowlPrep />
    </Page>
  )
}
