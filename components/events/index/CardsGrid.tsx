import React from "react";
import events from "../../../data/content/events";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CardsGrid() {
  return (
    <div className="bg-white relative overflow-hidden pt-16">
      <div className="mx-auto py-8 px-6 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <h2 className="font-extrabold tracking-tight text-5xl mb-4">
            Events
          </h2>
          <div className="text-gray-600 text-xl space-y-4">
            <p>
              Whether you’re an experienced high school economist, or just
              dipping your toes into the world of economics, YEI offers a broad
              range of events, from competitions, to EconTalks, to socials and
              conferences!
            </p>
            <p>
              Through YEI Events, students gain access to a expansive network of
              driven and motivated students and professionals, while finding
              their unique path toward applying their knowledge. Win cash
              prizes, network with professors and professionals, learn material,
              find your pathway to a career in economics, finance or business.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -my-2 md:-mb-2 mb-1 -mx-4">
          {events.map(({ title, content, href, hrefText, imgTitle }) => (
            <div key={title} className="w-full md:w-1/2 p-3">
              <div className="rounded relative shadow trans-300 h-full p-6 bg-gray-100 space-y-4">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="pb-4 space-y-2">
                    <h2 className="font-bold text-4xl text-yei-secondary-main">
                      {title}
                    </h2>
                    <p className="text-gray-600 sm:text-xl text-lg">
                      {content}
                    </p>
                  </div>
                  {href && (
                    <div className="inline-flex">
                      {href.startsWith("/") ? (
                        <Link href={href}>
                          <a className="trans-300 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-secondary-brighter hover:bg-yei-secondary-darker">
                            {hrefText ? hrefText : "Learn more"}{" "}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ml-2 -mr-1 text-gray-500 w-4 h-4"
                            />
                          </a>
                        </Link>
                      ) : (
                        <a
                          target="_blank"
                          href={href}
                          className="trans-300 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-secondary-brighter hover:bg-yei-secondary-darker"
                        >
                          {hrefText ? hrefText : "Learn more"}{" "}
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="ml-2 text-gray-500 w-4 h-4 -mr-1"
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <img
                  className="absolute bottom-5 opacity-10 h-auto right-3 w-44 md:w-48"
                  src={`/img/logos/${imgTitle ? imgTitle : "yei"}.png`}
                  alt={title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
