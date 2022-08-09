import React, { useState } from 'react'
import Hero from '../../components/people/team/Hero'
import Page from '../../components/utility/Page'
import Members from './../../components/people/team/Members'
import { useEffect } from 'react'
import CTA from '../../components/people/team/CTA'

export default function team() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  return (
    <Page
      title="Team"
      desc="Get to know the people who make the magic happen at the Youth Economics Initiative. Learn how you can apply to join YEI's team."
    >
      <Hero />
      <Members />
      <CTA />
      <div>
        <button
          type="button"
          className={`fixed ${
            showTopBtn ? 'right-5' : '-right-96'
          } transition-right duration-1000 bottom-5 shadow-bigGray inline-flex items-center px-5 py-2 text-sm tracking-widest uppercase rounded-full text-gray-500 font-semibold border-gray-400 border-2 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main z-[200]`}
          onClick={goToTop}
        >
          Scroll to top
        </button>
      </div>
    </Page>
  )
}
