import React, { useEffect } from 'react'
import Hero from '../../components/people/apply/Hero'
import Page from '../../components/utility/Page'

export default function apply() {
  useEffect(() => {
    localStorage.setItem('hideHiringModal', 'yes')
  }, [])
  return (
    <Page
      title="Apply"
      desc="Passionate about what we do? Want to join an international team of leaders, creators, and economics enthusiasts? Learn how you can apply to join the YEI's team."
    >
      <Hero />
    </Page>
  )
}
