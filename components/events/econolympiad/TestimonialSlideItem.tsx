import React from 'react'

export default function SlideItem({ text }) {
  return (
    <div className="px-4">
      <div className="flex justify-center flex-col text-center space-y-4">
        <div>
          <div className="text-xl text-gray-500 font-medium">"{text}"</div>
        </div>
      </div>
    </div>
  )
}
