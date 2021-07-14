import React from 'react'
import Hero from '../../components/people/advisory-board/Hero'
import Page from '../../components/utility/Page'
import Board from './../../components/people/advisory-board/Board'

export default function advisoryboard() {
  return (
    <Page
      title="Advisory Board"
      desc="YEI's Advisory Board is composed of a world-class group of economists, executives, educators, and leadership experts from prestigious universities and organizations nationwide. YEI's Advisory Board serves as a guiding force in the organization and provides their own experiences in their careers to help our organization grow and thrive."
    >
      <Hero />
      <Board />
    </Page>
  )
}
