import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalendar,
  faCalendarWeek,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { resolveHref } from "next/dist/next-server/lib/router/router";

export default function Benefits() {
  return (
    <div className="py-12 sm:pt-18 sm:pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-1">
        <div>
          <h2 className="text-base text-yei-primary-darker font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Join?
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <div className="mt-10">
          <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "Resources",
                content:
                  "Whether you're a new club just starting out or a pre-existing club wanting to join, Youth Economics Initiative will provide you with invaluable resources including our comprehensive AP/IB Economics club curriculum and our FLIP Personal Finance club workshop guide.",
                href: "/resources",
                ctaText: "Get Access Now",
                icon: faBook,
              },
              {
                title: "Network",
                content:
                  "Take advantage of the Youth Economics Initiative's network of leaders, creators, and entrepreneurs. You'll form connections with FBLA champions, business leaders, and entrepreneurs while sharpening your leadership and teamwork skills.",
                href: "/events/econtalks",
                ctaText: "Our Professional Network",
                icon: faGlobe,
              },
              {
                title: "Community",
                content:
                  "Join a community of problem-solvers, innovators, and leaders. By joining YEI, you join a movement towards empowering students with economic literacy and uniting economics clubs throughout the world.",
                href: "https://discord.gg/RC588cv",
                ctaText: "Join our Discord",
                icon: faUsers,
              },
              {
                title: "Events",
                content:
                  "Beyond club resources and mentorship, the YEI offers a variety of exclusive events, including EconBowl, EconOlympiad, EconTalks, leadership conferences, and more.",
                href: "/events",
                ctaText: "Join Our Events",
                icon: faCalendarWeek,
              },
            ].map((reason) => (
              <div key={reason.href} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                    <FontAwesomeIcon icon={reason.icon} className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl leading-6 font-medium text-gray-900">
                      {reason.title}
                    </div>
                    <div>
                      <p className="mt-2 text-lg text-gray-600">
                        {reason.content}
                      </p>
                    </div>
                  </div>
                  <div>
                    {reason.href.startsWith("/") ? (
                      <Link href={reason.href}>
                        <a className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded text-green-700 bg-gray-200 ">
                          {reason.ctaText}
                        </a>
                      </Link>
                    ) : (
                      <a
                        href={reason.href}
                        target="_blank"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded text-green-700 bg-gray-200 "
                      >
                        {reason.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
