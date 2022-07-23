import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Hero from '../../components/people/team/Hero'
import Page from '../../components/utility/Page'
import Members from './../../components/people/team/Members'
import { useEffect } from 'react'
import { departments } from '../../data/people/team'
import CTA from '../../components/people/team/CTA'

export default function team() {
  const router = useRouter()
  const p = router.asPath
  const pDept = p.substring(p.indexOf('#') + 1, p.length)
  const [currentDepartment, setCurrentDepartment] = useState('')
  const [showTopBtn, setShowTopBtn] = useState(false)
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    if (router.isReady) {
      if (p.includes('#')) {
        // if the path has a # then
        if (departments.indexOf(pDept) != -1) {
          // if path # value is included in departments array
          setCurrentDepartment(pDept) // set it to that
        } else {
          setCurrentDepartment('All') // if not default
        }
      } else {
        // if not, default to
        setCurrentDepartment('All')
      }
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1400) {
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
      <Hero
        updateDept={(dept) => setCurrentDepartment(dept)}
        currentDepartment={currentDepartment}
      />
      <Members currentDepartment={currentDepartment} />
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
