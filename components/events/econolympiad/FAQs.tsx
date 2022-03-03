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
    q: 'Who is allowed to participate',
    a: 'Students in middle school or high school, including international students, are eligible to participate!',
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
    q: 'What is the schedule?',
    a: 'Competitors will meet only on the first and third weeks to take the test and attend the award ceremony. The second week of EconBowl is asynchronous.',
  },
  {
    q: 'How are final scores determined?',
    a: 'Competitors will have three weeks to work on their video pitch presentation. For top teams, scores from this round will be combined with scores of the debate round to determine the EconOlympiad champions! Otherwise, scores from the presentation round will be used to determine rankings.',
  },
  {
    q: 'What will I need?',
    a: 'You will need a Zoom account to attend the opening ceremony, debate round, and awards ceremony. A device capable of recording is required for creating the presentation.',
  },
  { q: 'What is the cost?', a: 'EconOlympiad is absolutely free to attend! ' },
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
