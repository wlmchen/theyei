import React, { useState } from "react";
import Link from "next/link";

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
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {questions.map(({ q, a }) => (
              <Question key={q} q={q} a={a} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Question({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-6">
      <dt className="text-lg">
        {/* Expand/collapse question button */}
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="text-left w-full flex justify-between items-start text-gray-400"
        >
          <span className="font-medium text-gray-900">{q}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`${
                open ? "-rotate-180" : "rotate-0"
              } h-6 w-6 transform trans-150`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 ${open ? "block" : "hidden"}`}>
        <p className="text-base text-gray-500">{a}</p>
      </dd>
    </div>
  );
}
