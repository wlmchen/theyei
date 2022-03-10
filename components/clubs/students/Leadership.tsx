import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Leadership() {
  return (
    <div className="bg-yei-primary-gray px-8 sm:px-16 py-16">
      <div>
        <div>
          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yei-primary-main">
            <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-white" />
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Develop your leadership skills
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The YEI helps students start their own clubs worldwide. Participate in our semi-annual 
            leadership conferences,{' '}
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=sRZ1_yXDw7Q&feature=youtu.be"
              className="font-bold text-yei-primary-main hover:text-yei-primary-darker"
            >SELC and WELC</a>.
            Each conference offers our student leaders the opportunity to connect with other motivated 
            students in the YEI family, attend leadership workshops from industry professionals, and 
            better understand YEI and the resources we offer.  SELC {`&`} WELC are also home to our 
            Semi Annual Keynotes which outline new opportunities and initiatives YEI is launching.
          </p>
        </div>
      </div>
    </div>
  )
}