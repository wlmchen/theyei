import React from 'react'
import Hero from '../../components/programs/Hero'
import Page from '../../components/utility/Page'
import ContentBlock from '../../components/programs/ContentBlock'
import Link from 'next/link'
import ApplicationCriteria from '../../components/programs/flip/ApplicationCriteria'
import Curriculum from '../../components/programs/flip/Curriculum'
import Event from '../../components/programs/flip/Event'
import Banner from '../../components/global/Header/Banner'
import Facts from '../../components/programs/wows/Facts'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FACTS = [
  {
    text: (
      <>
        <b>18%</b> of figures in traditional economics textbooks are women,
        while only <b>7%</b> of economics referenced in leading introductory
        economics textbooks are female. In short, gender is
        misrepresented in economics textbooks!
      </>
    ),
    link: 'https://fordschool.umich.edu/files/stevenson-manuscript-textbooks.pdf',
  },
  {
    text: (
      <>
        Only <b>26.3%</b> of economics professions are females.
      </>
    ),
    link: 'https://www3.weforum.org/docs/WEF_GGGR_2024.pdf',
  },
  {
    text: '8.2% of Fortune 500 CEOs are Women',
    link: 'https://www.ascendleadership.org/pressrelease/82-of-fortune-500-ceos-are-women-according-to-the-2021-women-ceos-in-america-reportnbsp',
  },
]

export default function wows() {
  return (
    <Page
      title="WOWS"
      desc="The Youth Economics Initiative (YEI) offers a number of exclusive supplemental programs for our EconClubs and members created to prepare aspiring leaders through community service and real work experience. Learn more about YEI programs such as FLIP and EARN."
    >
      <Hero
        programName="wows"
        desc="Women of Wall Street (WOWS) empowers young women in economics, finance, and business. Through mentorship, industry insights, and networking, participants gain the skills and confidence to break barriers and succeed in the business world."
        applyLink="https://docs.google.com/forms/u/4/d/e/1FAIpQLSc0G3fSrUg4rHwCjThgqnII8pbUrwEKazu3xc3xNZkj5fLeDQ/viewform?usp=header"
      />
      <ContentBlock
        subtitle="YEI WOWS"
        title="Women of Wall Street"
        imgSrc="/img/photos/programs/flip.jpg"
        boa={false}
      >
        <p>
          YEI is excited to announce our brand new Women of Wall Street (WOWS)
          program!
        </p>
        <p>
          Inviting female economists and business professionals to share their
          experiences breaking barriers in the economics field, bringing the
          best economics development program for girls interested in the
          business world!
        </p>
        <p className="font-bold">
          Learn to...
          <ul className="list-decimal list-inside font-normal text-gray-500">
            <li>Advocate for yourself</li>
            <li>Plan for a future in the economics/finance/business world</li>
            <li>Network in the economics world</li>
          </ul>
        </p>
      </ContentBlock>
      <Facts facts={FACTS} />
    </Page>
  )
}
