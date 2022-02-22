import React from 'react'
import TestimonialSlider from './TestimonialSlider'

export default function Testimonials() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yei-primary-main tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 sm:tracking-tight">
            Hear what our past competitors have to say!
          </p>
          <div className="mt-16 mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  )
}
