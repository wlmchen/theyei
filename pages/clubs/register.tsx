import React from 'react'
import Application from '../../components/clubs/register/Application'
import Hero from '../../components/clubs/register/Hero'
import Page from '../../components/utility/Page'

export default function register() {
  return (
    <Page
      title="Register Your Club"
      desc="EconClubs is YEI’s signature program and is designed to help students launch economics clubs at their own schools. Starting a YEI EconClub is easy."
    >
      <Hero />
      <Application />
    </Page>
  )
}
