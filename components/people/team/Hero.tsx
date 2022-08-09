import React, { useState, useEffect } from 'react'
import Announcement from '../../utility/Announcement'

export default function Hero() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {/* {visible && (
        <Announcement
          ctaHref="/people/apply"
          setVisible={setVisible}
          smTitle="Join the YEI Leadership Team!"
          title="The YEI is now recruiting multiple positions! Check our application page."
        />
      )} */}
      <div
        className={`bg-[#02222Ccc] bg-[url('/img/page-bg/team-bg.png')] relative overflow-hidden bg-cover bg-center pt-6`}
      >
        <div className="z-10 relative container py-24 px-4 sm:py-28 sm:px-6 lg:px-8 flex items-center flex-col">
          <div className="text-center">
            <p className="text-yei-primary-light text-sm sm:text-base font-extrabold tracking-widest mb-4">
              OUR TEAM
            </p>
            <h1 className="mt-1 max-w-[280px] text-5xl xs:text-4xl xs:max-w-xl sm:text-5xl font-medium text-white sm:max-w-3xl md:text-5xl sm:tracking-tight lg:text-6xl m-auto">
              Meet the people <br className="hidden xs:block" />
              who{' '}
              <b className="text-yei-primary-light relative whitespace-nowrap hidden xs:inline-block">
                make it all happen.
                <img
                  src="/img/misc/heading-underline.svg"
                  className="absolute -bottom-7 w-full right-0 left-0"
                />
              </b>
              <b className="text-yei-primary-light relative whitespace-nowrap inline-block xs:hidden">
                make it
                <br />
                all happen.
                <img
                  src="/img/misc/heading-underline.svg"
                  className="absolute -bottom-3 w-full right-0 left-0"
                />
              </b>
            </h1>
          </div>
        </div>
        <div className="w-full h-full backdrop-blur-sm bg-[#02222Ccc] absolute top-0 left-0 right-0 bottom-0"></div>
      </div>
    </>
  )
}
