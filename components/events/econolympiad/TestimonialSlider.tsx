import React from 'react'

import Carousel from 'react-elastic-carousel'
import testimonials from '../../../data/content/econOlympiadTestimonals'

import SlideItem from './TestimonialSlideItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function SpeakerSlider() {
  const bp = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ]

  return (
    <Carousel breakPoints={bp} renderArrow={Arrow} pagination={false}>
      {testimonials.slice(0, 10).map((quote) => {
        let key = quote.content.replace(/[\W_]+/g, '-').toLowerCase()
        return (
          <SlideItem
            key={key}
            text={quote.content}
          />
        )
      })}
    </Carousel>
  )
}

function Arrow({ type, onClick, isEdge }) {
  const pointer =
    type === 'PREV' ? (
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={`${
          isEdge
            ? 'text-gray-200 cursor-not-allowed'
            : 'cursor-pointer text-gray-500'
        } block h-8 w-8`}
      />
    ) : (
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`${
          isEdge
            ? 'text-gray-200 cursor-not-allowed'
            : 'cursor-pointer text-gray-500'
        } block h-8 w-6`}
      />
    )
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}
