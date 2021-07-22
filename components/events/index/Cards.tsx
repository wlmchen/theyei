import React from 'react'

const events = [
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
  {
    name: 'Event #',
    date: '7/24/2021',
    location: 'The Earth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt strud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    signupUrl: 'https://forms.google.com',
    eventUrl: 'https://theyei/events/PATH',
    img: 'https://theyei.org/img/photos/lynbrook-lunch.png',
  },
]

function Cards() {
  return (
    <div className="mt-4 mb-16 max-w-4xl w-full mx-auto flex items-center justify-center flex-col space-y-8">
      {events.map(
        ({ name, date, location, desc, signupUrl, eventUrl, img }, index) => {
          return (
            <div className="w-full flex items-stretch flex-col sm:flex-row justify-center shadow-lg rounded-xl overflow-hidden border border-gray-200">
              <div className="w-full sm:w-96 overflow-hidden">
                <img src={img} className="w-full sm:h-full sm:object-cover" />
              </div>
              <div className="w-full space-y-2 p-5">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>
                  {date} - {location}
                </p>
                <p className="text-gray-500">{desc}</p>
                <div className="pt-2 flex flex-col sm:flex-row">
                  <a
                    href={signupUrl}
                    className="w-full sm:mr-2 text-center sm:w-auto sm:inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none"
                  >
                    Sign Up
                  </a>
                  <a
                    href={eventUrl}
                    className="mt-2 sm:mt-0 w-full sm:w-auto sm:inline-flex text-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yei-primary-main bg-yei-primary-trans hover:bg-yei-primary-transDarker focus:outline-none"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default Cards
