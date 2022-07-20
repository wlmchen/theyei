import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export default function Chapter({
  name,
  imgSrc,
  email,
  founding,
  primaryFounding,
  region,
}) {
  return (
    <li className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-2">
      <div className="space-y-4">
        <div className="overflow-hidden w-full shadow-lg h-64 bg-gray-800 rounded-xl">
          <img
            className="sm:h-80 md:h-72 w-full bg-gray-800 object-cover"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3 className="text-lg font-bold leading-6">{name}</h3>
            <p className="text-yei-primary-main text-base">
              {region}{' '}
              {email && (
                <a
                  className="text-gray-400 text-sm whitespace-nowrap"
                  target="_blank"
                  href={'mailto:' + email}
                >
                  (<u>contact</u>{' '}
                  <FontAwesomeIcon
                    className="h-2 w-2 inline"
                    icon={faExternalLinkSquareAlt}
                    />
                  )
                </a>
              )}
            </p>
                    {founding && (
                      <div className="mt-0.5 mb-1">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {primaryFounding ? 'Primary ' : ''}Founding Club
                        </span>
                      </div>
                    )}
          </div>
        </div>
      </div>
    </li>
  )
}
