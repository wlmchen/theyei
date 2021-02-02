import React, { useState } from "react";

const questions = [
  {
    q: "Does everyone on my team have to be from the same school or grade?",
    a:
      "Absolutely not. You can have people from different schools and different grade levels. ",
  },
  {
    q: "Can I register if I live outside of the U.S.?",
    a: "Yes! ",
  },
  {
    q: "Do I need to be a part of a YEI chapter to compete?",
    a: "Nope! Everyone is welcome.",
  },
  {
    q: "What is the cost to sign up?",
    a: "EconBowl is absolutely FREE to compete in. ",
  },
  {
    q: "When does registration close?",
    a: "Registration will close on November 1st at 11:59pm PDT. ",
  },
  {
    q: "Will it be online?",
    a:
      "Under normal circumstances, EconBowl would be in-person. However, it will be online this year due to the pandemic. Please make sure you have a zoom account. You will need to sign up with the email associated with your zoom account. ",
  },
  {
    q: "What do I need to compete?",
    a:
      "You'll need internet connection and Zoom installed on your computer (with a Zoom account). For the QuizBowl round, you'll need headphones/earbuds, and we suggest you also have a second device (e.g. phone).",
  },
  {
    q: "Do I have to have a zoom account to join?",
    a:
      "Yes -- please create one if you don't have one. In the sign up form, it’ll ask you for an email associated with your zoom account. We will be using the email you submit to assign breakout rooms. We will also send information about EconBowl to the same email so make sure it’s one you check often. ",
  },
  {
    q: "Any other questions, concerns, or feedback?",
    a: (
      <span>
        Email{" "}
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
];

export default function FAQs() {
  return (
    <div className="bg-gray-100">
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
          className="text-left w-full flex justify-between items-start text-gray-500"
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
        <p className="text-base text-gray-600">{a}</p>
      </dd>
    </div>
  );
}
