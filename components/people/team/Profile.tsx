import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Profile({
  key,
  name,
  type,
  positions,
  imgSrc,
  email,
  linkedin,
  github,
}: ProfileProps) {
  return (
    <div
      className="h-full flex items-center w-full sm:w-auto border-2 border-gray-200 p-4 rounded-3xl sm:border-0 sm:p-0 sm:rounded-none"
      key={key}
    >
      <div className="relative w-full flex flex-row sm:flex-col items-center sm:w-44 space-x-5 sm:space-x-0">
        <div className="flex-shrink-0">
          <img
            className="h-28 w-28 sm:h-44 sm:w-44 rounded-2xl bg-gray-900 object-cover"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="w-full flex-grow">
          <h3 className="text-xl sm:text-lg font-bold text-yei-secondary-main mt-2">
            {name}
          </h3>
          <div className="flex flex-col sm:flex-row justify-between w-full items-start max-w-full sm:max-h-12 h-full">
            <p className="font-medium text-gray-500 shrink text-xs sm:text-[10px] whitespace-normal pt-0.5">
              {positions.join(', ')}
            </p>
            <div className="flex flex-shrink-0 pt-2 sm:pt-0 sm:pl-1">
              {[
                {
                  href: 'https://www.linkedin.com/in/' + linkedin,
                  icon: faLinkedin,
                  sr: 'linkedin',
                },
                { href: 'mailto:' + email, icon: faEnvelope, sr: 'github' },
                {
                  href: github && 'https://github.com/' + github,
                  icon: faGithub,
                  sr: 'email',
                },
              ].map(({ href, sr, icon }) => (
                <div key={sr + href}>
                  {href && (
                    <div className="mr-1">
                      <a
                        target="_blank"
                        href={href}
                        className="cursor-pointer justify-center items-center p-1 rounded-full inline-block w-5 h-5 bg-yei-primary-faded text-yei-secondary-main hover:text-yei-secondary-main"
                      >
                        <FontAwesomeIcon
                          icon={icon}
                          color="#279361"
                          className="w-3 h-3"
                        />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ProfileProps = {
  key: string
  type: string
  name: string
  positions: string[]
  imgSrc: string
  email: string
  linkedin: string
  github?: string
}
