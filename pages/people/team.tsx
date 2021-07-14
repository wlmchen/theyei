import React from 'react'
import Hero from '../../components/people/team/Hero'
import Page from '../../components/utility/Page'
import Members from './../../components/people/team/Members'

export default function team() {
  return (
    <Page
      title="Team"
      desc="Get to know the people who make the magic happen at the Youth Economics Initiative. Learn how you can apply to join YEI's team."
    >
      <Hero />
      <Members />
    </Page>
  )
}
