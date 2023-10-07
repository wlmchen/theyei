import {
  UserIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  PencilIcon
} from '@heroicons/react/24/outline'

const writtenRound = [
  {
    id: 1,
    name: 'The Exam',
    description:
      'During EconBowl, teams of 3-4 will have 60 minutes to collaboratively complete 60 questions. Each team will work together, and team captains will submit one exam on behalf of the entire team.',
    icon: PencilIcon,
  },
]
const quizBowl = [
  {
    id: 1,
    name: 'The top 8 teams',
    description:
      "We will invite the top 8 teams of the written round to the QuizBowl tournament. There will be 19 questions, split into non-calculation and calculation problems.",
    icon: UserGroupIcon,
  },
  {
    id: 2,
    name: 'Who will win?',
    description:
      'The team with the most questions correct will be champions of this year’s EconBowl!',
    icon: StarIcon,
  },
]

export default function Structure() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-10 sm:mb-0">
            Competition Structure
          </h2>
        </div>

        <div className="relative mt-6 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              The Written Round
            </h3>

            <dl className="mt-10 space-y-10">
              {writtenRound.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="/img/photos/programs/writtenround.svg"
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-6 lg:mt-8">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                QuizBowl
              </h3>

              <dl className="mt-10 space-y-10">
                {quizBowl.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                className="relative mx-auto"
                width={490}
                src="/img/photos/programs/quizbowl.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-14">
                <div className="rounded-md shadow">
                  <a
                    href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10"
                  >
                    Contest Details
                  </a>
                </div>
              </div> */}
      </div>
    </div>
  )
}
