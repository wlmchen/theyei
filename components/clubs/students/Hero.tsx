import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import StudentsSVG from '../../../data/content/clubs/students'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="bg-yei-primary-gray">
      <div className="max-w-7xl mx-auto md:min-h-screen grid md:grid-cols-2 grid-cols-1 relative overflow-hidden">
        <main className="">
          <div className="md:pt-10 mb-20 md:mb-40 mx-8 sm:mx-16 lg:ml-24 lg:mr-20 text-left">
            <h1 className="tracking-tight font-bold text-yei-primary-darker text-5xl mt-28 md:mt-48">
              <Link href="/clubs/teachers">
                <p className="relative inline-flex cursor-pointer text-base font-semibold uppercase tracking-wider">
                  <span>I'm a teacher</span>
                  <FontAwesomeIcon className="mt-1 ml-2 h-4 w-4" icon={faArrowRight} />
                </p>
              </Link>
              <span className="mt-5 block">
                For students
              </span>
            </h1>
            <p className="mt-10 text-gray-500 text-2xl lg:mx-0">
              Advance your economics knowledge and become a leader
            </p>
            <div className="mt-10 md:flex md:justify-start">
              <div className="rounded-md shadow">
                <AnchorLink href="#benefits" offset="63px">
                  <a className="trans-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10">
                    Learn more
                  </a>
                </AnchorLink>
              </div>
            </div>
          </div>
        </main>
        <div className="hidden md:block">
          <main>
            <StudentsSVG />
          </main>
        </div>
      </div>
    </div>
  )
}