import React from 'react'
import Link from 'next/link'
import currentClubs from '../../../data/currentClubs'
import Chapter from './Chapter'
import Map from './Map'




export default function Schools() {
  return (
    <div className="bg-white mt-8 sm:mt-20">
      <div className="mx-auto py-8 max-w-7xl lg:py-14">
        {/* <div className="pb-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            YEI Current Clubs
          </h2>
        </div> */}
        
        <ul className="flex flex-col sm:flex-row flex-wrap">
          {currentClubs.map(
            ({ name, email, founding, primaryFounding, region }) => {
              let key = name.replace(/[\W_]+/g, '-').toLowerCase()
              return (
                <Chapter
                  key={key}
                  imgSrc={`/img/clubs/current-clubs/${key}.jpg`}
                  name={name}
                  email={email}
                  founding={founding}
                  primaryFounding={primaryFounding}
                  region={region}
                />
              )
            }
          )}
        </ul>
      </div>
    </div>
  )
}
