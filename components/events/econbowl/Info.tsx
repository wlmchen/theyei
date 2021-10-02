import { CheckIcon } from '@heroicons/react/outline'

const details = [
  {
    name: 'Date',
    description: 'November 13th, 2021',
  },
  {
    name: 'Times',
    description: (
      <ul>
        <li>9:00am - 12:00pm PST, Team Track, Written</li>
        <li>1:00pm - 2:30pm PST, Team Track, QuizBowl</li>
        <li>5:00pm - 7:15pm PST, Individual Track</li>
      </ul>
    ),
  },
  {
    name: 'Location',
    description: 'Zoom.',
  },
]

export default function Info() {
  return (
    <div className="bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Competition Info
          </h2>
        </div>
        <dl className="mt-12 space-y-10 flex items-center justify-center flex-col border-b border-gray-500 pb-10">
          {details.map((detail) => (
            <div key={detail.name} className="relative max-w-sm w-full">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-white">
                  {detail.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-400">
                {detail.description}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="https://form.jotform.com/212418764280153"
          className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-yei-primary-main cursor-pointer"
        >
          Sign Up!
        </a>
      </div>
    </div>
  )
}
