import React from 'react'
import { pastEvents, futureEvents } from '../../../data/content/events'

function Cards() {
  return (
    <div className="mt-4 mb-16 w-full mx-auto flex items-center gap-x-6 justify-center flex-col space-y-8">
      <h2 className="w-full text-4xl text-center font-extrabold">Upcoming Events</h2>
      {futureEvents.map(
        ({ name, date, desc, eventUrl, signUpUrl, img }) => {
          return (
            <div className="w-full flex items-stretch flex-col sm:flex-row justify-center shadow-lg rounded-xl overflow-hidden border border-gray-200">
              <div className="w-full sm:w-96 overflow-hidden">
                <img src={img} className="w-full sm:h-full sm:object-cover" />
              </div>
              <div className="w-full space-y-2 p-5">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>
                  {date} 
                </p>
                <p className="text-gray-500">{desc}</p>
                <div className="pt-2 flex flex-col sm:flex-row">
                  {signUpUrl ? <a
                    target="_blank"
                    rel="noreferrer"
                    href={signUpUrl}
                    className="w-full sm:mr-2 text-center sm:w-auto sm:inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none"
                  >
                    Sign Up
                  </a> : <div
                    className="w-full sm:mr-2 text-center sm:w-auto sm:inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-800 focus:outline-none"
                  >
                    No Registration Link Available
                  </div>}
                  {eventUrl && <a
                    target="_blank"
                    rel="noreferrer"
                    href={eventUrl}
                    className="mt-2 sm:mt-0 w-full sm:w-auto sm:inline-flex text-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yei-primary-main bg-yei-primary-trans hover:bg-yei-primary-transDarker focus:outline-none"
                  >
                    Learn More
                  </a>}
                </div>
              </div>
            </div>
          )
        }
      )}
      <h2 className="pt-5 w-full text-4xl font-extrabold text-center">Past Events</h2>
      {pastEvents.map(
        ({ name, date, desc, eventUrl, img }) => {
          return (
            <div className="w-full flex items-stretch flex-col sm:flex-row justify-center shadow-lg rounded-xl overflow-hidden border border-gray-200">
              <div className="w-full sm:w-96 overflow-hidden">
                <img src={img} className="w-full sm:h-full sm:object-cover" />
              </div>
              <div className="w-full space-y-2 p-5">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>
                  {date} 
                </p>
                <p className="text-gray-500">{desc}</p>
                <div className="pt-2 flex flex-col sm:flex-row">
                  {eventUrl && <a
                    target="_blank"
                    rel="noreferrer"
                    href={eventUrl}
                    className="mt-2 sm:mt-0 w-full sm:w-auto sm:inline-flex text-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-yei-primary-main bg-yei-primary-trans hover:bg-yei-primary-transDarker focus:outline-none"
                  >
                    Learn More
                  </a>}
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
