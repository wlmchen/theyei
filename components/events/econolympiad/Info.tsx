import React from "react";

export default function Info() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-yei-primary-main font-semibold tracking-wide uppercase">
              EconOlympiad
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Event Information
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            EconOlympiad is a two-part competition. The first part is a written
            round in which you and your team will work together to answer four
            multi-part, open-ended free response questions. The second part is a
            presentation round. After taking the first part, the presentation
            prompt will be released. The scores from both parts will be added
            together to form your team’s final score.
          </p>
        </div>
        <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
          <h2>Written Round</h2>
          <p>
            The written portion will count for 50% of your final score. Teams
            will have 45 minutes to answer the questions. Each of the four
            questions is worth 10 points for a total of 40 points. Parts of each
            question may be weighed differently. This portion of the test will
            be taken through a testing software. The questions will be a mix of
            microeconomics and macroeconomics.{" "}
            <strong>
              Any usage of outside materials during this portion of the test
              will result in disqualification.
            </strong>
          </p>
          <h2>Presentation Round</h2>
          <p>
            The presentation prompt will be released after all teams have
            completed the written portion. Competitors will have one week to
            create a presentation up to 10 minutes long. In the presentation,
            you and your team will research the prompt, take a position, provide
            evidence, and use reasoning to answer the prompt. After the video is
            uploaded, it will be scored. The rubric is as follows:
          </p>
          <ul>
            <li>
              <strong>Thesis:</strong> 10%
            </li>
            <li>
              <strong>Evidence:</strong> 20%
            </li>
            <li>
              <strong>Reasoning:</strong> 50%
            </li>
            <li>
              <strong>Presentation:</strong> 10%
            </li>
          </ul>
          <p>
            If you have any questions, message in the YEI Discord or email{" "}
            <a href="mailto:events@theyei.org" target="_blank">
              events@theyei.org
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
