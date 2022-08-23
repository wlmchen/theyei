import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function WSO() {
  return (
    <div className="container py-20">
      <div>
        <div className="flex items-center flex-row">
          <span className="h-12 w-12 mr-3 rounded-md flex items-center justify-center bg-yei-primary-main">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </span>
          <span className="rotate-45 pr-1 text-3xl text-black">+</span>
          <span className="h-12">
            <img src="/img/logos/other/wso-logo.png" className="h-12" />
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Free Financial Modeling and Excel Resources
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Wall Street Oasis is the largest online community focused on careers
            in finance with over 900,000 members. They have an extensive set of
            free{' '}
            <a
              className="text-gray-600 underline"
              href="https://www.wallstreetoasis.com/resources"
            >
              corporate finance resources
            </a>{' '}
            on various topics to help you break into your dream finance career
            and get promoted once you're there. This includes articles,
            templates and guides on how to learn{' '}
            <a
              className="text-gray-600 underline"
              href="https://www.wallstreetoasis.com/resources/excel"
            >
              Excel
            </a>
            ,{' '}
            <a
              className="text-gray-600 underline"
              href="https://www.wallstreetoasis.com/resources/financial-modeling"
            >
              financial modeling
            </a>
            ,{' '}
            <a
              className="text-gray-600 underline"
              href="https://www.wallstreetoasis.com/resources/interviews"
            >
              interview questions
            </a>{' '}
            as well as{' '}
            <a
              className="text-gray-600 underline"
              href="https://www.wallstreetoasis.com/resources/careers"
            >
              career advice
            </a>
            .
          </p>

          <p className="mt-4">
            <a className="trans-300 inline-flex w-auto items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker" href="https://docs.google.com/document/d/1AOncBulY6urN7Jv9_XP4_ods-_Vnl48UWPVkudfwNDU/edit?usp=sharing" target="_blank">
              View Resources
                  <FontAwesomeIcon
                    className="ml-2 h-4 w-4 inline"
                    icon={faExternalLinkSquareAlt}
                    />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
