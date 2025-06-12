import ContentBlock from '../../components/programs/ContentBlock'
import Curriculum from '../../components/programs/wows/Curriculum'
import Hero from '../../components/programs/Hero'
import Facts from '../../components/programs/wows/Facts'
import Page from '../../components/utility/Page'
import SpeakerGrid from '../../components/events/wows/SpeakerGrid'

const FACTS = [
  {
    text: (
      <>
        <b>18%</b> of figures in traditional economics textbooks are women,
        while only <b>7%</b> of economics referenced in leading introductory
        economics textbooks are female. In short, gender is misrepresented in
        economics textbooks!
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
        title="Register now for our first event"
        subtitle="Event"
        boa={false}
        imgSrc="/img/people/wows/yolanda-perez.jpg"
      >
        <p>
          We are excited to announce our first event on June 19th at 6:00 PM
          EST!
        </p>
        <p>
          Featured Speaker:{' '}
          <a className="text-yei-primary-main underline" href="#speakers">
            Yolanda Perez
          </a>{' '}
          - Senior VP and International Wealth Advisor at Truist Wealth
        </p>
        <p>Eligibility: High school and middle school girls!</p>
        <p>
          Bonus: Two lucky attendees will get their college essays reviewed by
          Stanford admit Saqib Saiyed (former CEO) or UC Berkeley admit Alvina
          Lin (former COO).
        </p>
        <p>
          <b>Registration Closes on June 15th at 11:59 pm PST</b>. Registration
          and attendance is 100% free!
        </p>
        <a
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSepIxA9OUrKq3H9CYRsx7dZw6X-YGL_03e3IIFNmhO8y3j2og/viewform'
          }
          target="_blank"
          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-green-700 sm:px-8"
        >
          Register
        </a>
      </ContentBlock>
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
      <Curriculum />
      <SpeakerGrid />
    </Page>
  )
}
