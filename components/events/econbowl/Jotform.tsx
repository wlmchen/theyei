import JotformEmbed from 'react-jotform-embed'

import React from 'react'

function Jotform() {
  return (
    <div className="max-w-4xl w-full m-auto" id="register">
    <h1 className="text-5xl font-bold text-black text-center mb-10"><span className="text-green-700">Interested?</span> Signup here!</h1>
      <div className="overflow-hidden rounded-lg shadow-2xl"><JotformEmbed src="https://form.jotform.com/213135272600140" />
      </div>
    </div>
  )
}

export default Jotform
