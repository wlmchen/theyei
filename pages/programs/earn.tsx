import React from 'react'
import ContentBlock from '../../components/programs/ContentBlock'
import Hero from '../../components/programs/Hero'
import Page from '../../components/utility/Page'
import Link from 'next/link'
import Benefits from '../../components/programs/earn/Benefits'
import GreatCandidate from '../../components/programs/earn/GreatCandidate'

export default function earn() {
  return (
    <Page
      title="EARN"
      desc="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
    >
      <Hero
        programName="EARN"
        desc="YEI’s EARN program connects students with research and internship opportunities in finance, economics, and business, through a singular centralized application."
        applyLink="https://docs.google.com/forms/d/e/1FAIpQLScJ2wmr5GuM_TSYCV-T2GiRQIXJ3UF5HvoeinJkikOZIe3YKA/viewform"
      />

      <ContentBlock
        subtitle="YEI EARN"
        title="Economics Achievement and Research Network"
        imgSrc="/img/photos/programs/earn.png"
      >
        <p>
          EARN is a highly selective program for members of YEI affiliated
          EconClubs who are truly passionate about economics and want to gain
          real-world experience. EARN leverages YEI’s connections to match
          motivated students with economics internships at top universities and
          companies.
        </p>
        <p>
          After passing a rigorous application process conducted by the YEI EARN
          team, students will be added to a prospective intern database that is
          available to our partner organizations. From there, EARN students may
          be contacted by these organizations with internship opportunities.
        </p>
        <p>
          Note that being accepted to EARN does not guarantee an internship
          position. All EARN applicants must be affiliated with a YEI EconClub.
          If you do not have a YEI EconClub at your school, you may apply to
          start one{' '}
          <Link href="/clubs/register">
            <a className="green-link">here</a>
          </Link>
          .
        </p>
      </ContentBlock>
      <Benefits />
      <GreatCandidate />
    </Page>
  )
}
