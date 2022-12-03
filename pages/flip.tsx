import React from 'react'
import Hero from '../components/programs/Hero'
import Page from '../components/utility/Page'
import ContentBlock from '../components/programs/ContentBlock'
import Link from 'next/link'
import ApplicationCriteria from '../components/programs/flip/ApplicationCriteria'
import Curriculum from '../components/programs/flip/Curriculum'
import Workshop from '../components/programs/flip/Workshop'

export default function flip() {
  return (
    <Page
      title="FLIP"
      desc="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
    >
      <Hero
        programName="FLIP"
        desc="YEI’s Financial Literacy Introduction Program (FLIP) is the service arm of our organization. Through FLIP, our members are empowered to educate their community on Financial Literacy with our comprehensive curriculum and support network."
        applyLink="https://docs.google.com/forms/d/1bjyw2csfGtJRDt4UFgCU1eyrCIV_nKECSY4LNDfvSH4/viewform"
      />
      <div>
      </div>
      <Workshop />
      <ContentBlock
        subtitle="YEI FLIP"
        title="Financial Literacy Introduction Program"
        imgSrc="/img/photos/programs/flip.jpg"
        boa={true}
      >
        <p>
          YEI EconClubs have the unique opportunity to apply to offer a
          Financial Literacy Introduction Program (FLIP) within their community.
          EconClubs accepted to FLIP will be paired with a partner nonprofit
          organization to deliver financial literacy workshops to underserved
          youths.
        </p>
        <p>
          Additionally, YEI will provide FLIP-affiliated EconClubs with
          year-round FLIP training sessions, our extensive 16-week FLIP
          curriculum including activities and post-session resources, and
          PVSA-certified volunteer hours for any members who volunteer with
          FLIP.
        </p>
        <p>
          In order to ensure we are delivering high-quality workshops,
          participation in FLIP is limited to YEI EconClubs. If you do not have
          a YEI EconClub at your school, you may apply to start one{' '}
          <Link href="/clubs/register">
            <a className="green-link">here</a>
          </Link>
          .
        </p>
      </ContentBlock>
      <ApplicationCriteria />
      <Curriculum />
    </Page>
  )
}
