import React, { useState } from "react";
import Link from "next/link";
import FAQCollapse from './../../utility/FAQCollapse';

const questions = [
  {
    q: "Is this a team or individual competition?",
    a: (
      <>
        This is a team competition. Each team must have 3 or 4 members. If you
        haven’t found a team yet but would still like to compete, fill out{" "}
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSextfmULazhONEMgtZcJirbHNzBFGFsqIjSYXfTmO2loU1p-g/viewform"
          className="green-link"
        >
          this form{" "}
        </a>
        for further information. This will enable you to join a channel within
        our Discord server, specifically for team matching.
      </>
    ),
  },
  {
    q: "Who can participate?",
    a:
      "Anyone from YEI member chapters can participate. This includes international students, middle schoolers, and high schoolers.",
  },
  {
    q: "Do I actually have to be part of a YEI chapter to compete?",
    a: (
      <>
        Yes. Unlike EconBowl, EconOlympiad is exclusive to YEI members. You may
        register for EconOlympiad as soon as you fill out the{" "}
        <Link href="/clubs/register">
          <a className="green-link">club registration form </a>
        </Link>
        .
      </>
    ),
  },
  {
    q: "What is the schedule?",
    a:
      "Competitors will meet only on the first and third weeks to take the test and attend the award ceremony. The second week of EconBowl is asynchronous.",
  },
  {
    q: "What will I need?",
    a: "You will need a Zoom account, if you don’t already have one. ",
  },
  { q: "What is the cost?", a: "EconOlympiad is absolutely free to attend! " },
  {
    q: "Any other questions, concerns, or feedback?",
    a: (
      <>
        Email{" "}
        <a
          href="mailto:events@theyei.org"
          target="_blank"
          className="green-link"
        >
          events@theyei.org
        </a>.
      </>
    ),
  },
];

export default function FAQs() {
  return (
    <FAQCollapse questions={questions} />
  );
}
