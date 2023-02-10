import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

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
              Event Information
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What is EconOlympiad?
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            EconOlympiad is a two-part competition focused on the application,
            not merely the knowledge, of economics. The first part is a
            presentation round in which you and your team will have three weeks
            to develop and submit a video that responds to one of the two
            provided prompts. The second part is a debate round. After
            completing the presentation, top teams will advance to a debate
            round. A prompt will be released, and teams will have one week to
            research and prepare. will compose your team’s final score.
          </p>
          <p className="mt-6 text-xl text-gray-500 leading-8">
            Professors from the country’s top economics programs will serve as
            judges for both the presentation and debate rounds.
          </p>

          {/* <a
            href="https://www.youtube.com/watch?v=XxS0PSG9aro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-3 px-6 py-2 rounded-full text-base font-medium bg-green-100 hover:text-green-900 trans-300 text-green-700"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 mr-3" />
            2022 EconOlympiad Prompt & Guidelines
          </a> */}
        </div>
        <div className="mt-8 prose prose-green prose-lg text-gray-500 mx-auto">
          <h2>Presentation Round</h2>
          <p>
            Competitors will have up to one week to create their presentation up
            to 10 minutes in duration. There will be 2 prompts to choose from:
            one that focuses on Microeconomics and the other that concentrates
            on Macroeconomics concepts. Your group will have a chance to
            research the prompts, take a position, provide facts to support your
            argument, and use your reasoning to tie it all together.
          </p>
          <h2>Debate Round</h2>
          <p>
            Top teams will participate in a debate with a prompt different from
            previous choices, determining the final EconOlympiad winners.
          </p>

          {/* <h2>Team Matching: A New Way To Find Members</h2>
          <p>
            Are you looking to join a team or would like some extra members to
            join yours? Join our{' '}
            <a href="https://discord.gg/RC588cv" target="_blank">
              Discord server
            </a>{' '}
            and react to the “finding teams” message in the “EconOlympiad”
            channel! Doing this will allow you to join a channel specifically
            for team finding, where you will be able to meet others who are
            looking for teammates as well.{' '}
          </p> */}
          {/* <p>
            If you are not able to give yourself the role via the above process
            for some reason, please fill out{' '}
            <a href="http://bit.ly/econolyteamfinder" target="_blank">
              this form
            </a>{' '}
            so we can manually give you the role. Happy team finding!
          </p> */}
        </div>
      </div>
    </div>
  )
}
