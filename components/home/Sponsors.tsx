import React from 'react'
import partners from '../../data/companies/partners'
import supporters from '../../data/companies/supporters'
import DoubleGridBg from '../utility/DoubleGridBg'

export default function Sponsors() {
  return (
    <div className="bg-white relative overflow-hidden">
      <DoubleGridBg color="text-gray-100" />
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Partners />
        <Supporters />
      </div>
    </div>
  )
}

function Partners() {
  return (
    <>
      
      <h2 className="w-full text-2xl mb-5 uppercase text-gray-400 font-black text-center max-w-xs m-auto border-b-2 border-gray-300 pb-5">
            Partners
          </h2>
      <div className="flow-root mt-4 md:mt-6 lg:mt-8">
        <div className="max-w-5xl m-auto flex flex-wrap sm:flex-row justify-center">
          {partners.map((p) => {
            let key = p.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <div
                key={key}
                className="mt-4 px-4 pt-6 lg:px-8 items-center flex"
              >
                <a href={p.link} target="_blank">
                  <img
                    className="my-2 sm:my-0 w-32 h-auto md:w-40 mx-auto"
                    src={`/img/logos/other/partners/${key}.png`}
                    alt={p.name}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

function Supporters() {
  return (
    <div className="pt-20 pb-4">
      
    <h2 className="w-full text-2xl mb-5 uppercase text-gray-400 font-black text-center max-w-xs m-auto border-b-2 border-gray-300 pb-5">
          Supporters
        </h2>
      <div className="flow-root">
        <div className="flex flex-wrap sm:flex-row justify-center">
          {supporters.map((s) => {
            let key = s.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <div key={key} className="mt-4 px-4 lg:px-8 items-center flex">
                <a href={s.link} target="_blank">
                  <img
                    className="my-2 sm:my-0 w-36 h-auto lg:w-48 mx-auto"
                    src={`/img/logos/other/supporters/${key}.png`}
                    alt={s.name}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
