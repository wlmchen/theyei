import React from 'react'
import Link from 'next/link'
import FAQCollapse from './../../utility/FAQCollapse'

const questions = [
  {
    q: 'Is this a team or individual competition?',
    a: (
      <>
        This is a team competition. Each team must have 3 to 4 members. 
        If you haven’t found a team yet but would still like to compete, 
        you can join our grabbag channel within our{' '}
        <a
          target="_blank"
          href="https://discord.gg/RC588cv"
          className="green-link"
        >
          Discord Server
        </a>{' '}
        specifically for team matching.      
      </>
    ),
  },
  {
    q: 'Who is allowed to participate?',
    a: 'Students in middle school or high school, including international students, are eligible to participate!',
  },
  {
    q: 'How do I register?',
    a: 'After creating your presentation, upload it onto the submission form and you will automatically be registered as one of our participating teams! ',
  },
  {
    q: 'Do competitors have to be a part of a YEI chapter?',
    a: (
      <>
        No, EconOlympiad is open to everyone! If you would like to become a YEI
        chapter, however (which we highly recommend — there are so many benefits!), you can fill out the{' '}
        <Link href="/clubs/register">
          <a className="green-link">club registration form </a>
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Do all competitors on a team have to be from the same school?',
    a: 'No, you and your teammates do not have to be from the same school, state, or even country! Given that the competition is completely virtual, interschool and interstate teams are permitted, and even encouraged for EconOlympiad. However, be sure to still list all schools/states/countries in the form, separating each with a slash.',
  },
  {
    q: 'How are the final scores determined?',
    a: 'Competitors will have three weeks to work on their video pitch presentation. For top teams, scores from this round will be combined with scores of the debate round to determine the EconOlympiad champions! Otherwise, scores from the presentation round will be used to determine rankings.',
  },
  {
    q: 'Are there any materials needed to compete?',
    a: 'You will need a Zoom account to attend the opening ceremony, debate round, and awards ceremony. A device capable of recording is required for creating the presentation.',
  },
  { q: 'Is there an entry fee to the competition?', a: 'EconOlympiad is absolutely free (the only cost is the opportunity cost of not participating)!' },
  {
    q: 'Any other questions, concerns, or feedback?',
    a: (
      <>
        Email{' '}
        <a
          href="mailto:events@theyei.org"
          target="_blank"
          className="green-link"
        >
          events@theyei.org
        </a>
        .
      </>
    ),
  },
]

export default function FAQs() {
  return <FAQCollapse questions={questions} />
}
