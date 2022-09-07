import React, { useState } from 'react'
import FAQCollapse from '../../utility/FAQCollapse'

const questions = [
  {
    q: 'Does everyone on my team have to be from the same school or grade?',
    a: 'Absolutely not. You can have people from different schools and different grade levels. ',
  },
  {
    q: 'Can I register if I live outside of the U.S.?',
    a: 'Yes! ',
  },
  {
    q: 'Do I need to be a part of a YEI chapter to compete?',
    a: 'Nope! Everyone is welcome.',
  },
  {
    q: 'What is the cost to sign up?',
    a: 'EconBowl is absolutely FREE to compete in. ',
  },
  {
    q: 'When does registration close?',
    a: 'Registration will close on November 8th at 11:59pm PDT. ',
  },
  {
    q: 'Will it be online?',
    a: 'Yes! To make economics as accessible as possible, EconBowl will be held virtually. ',
  },
  {
    q: 'What do I need to compete?',
    a: "You'll need internet connection and Zoom installed on your computer (with a Zoom account). For the QuizBowl round, you'll need headphones/earbuds, and we suggest you also have a second device (e.g. phone).",
  },
  {
    q: 'Any other questions, concerns, or feedback?',
    a: (
      <span>
        Email{' '}
        <a
          href="mailto:events@theyei.org"
          target="_blank"
          className="green-link"
        >
          events@theyei.org
        </a>
      </span>
    ),
  },
]

export default function FAQs() {
  return <FAQCollapse questions={questions} />
}
