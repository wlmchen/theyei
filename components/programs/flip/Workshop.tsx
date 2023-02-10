import React from 'react'
import Link from 'next/link'
import { CalendarIcon, InformationCircleIcon, ChevronRightIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const data = [
    {
        name: "Info",
        icon: <InformationCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />,
        text: <>FLIP is hosting a <b>College Finances Workshop</b> covering scholarships, student loans, debt, budgeting, and financial strategies to succeed in college and beyond.</>
    },
    {
        name: "Date",
        icon: <CalendarIcon className="h-6 w-6 text-green-500" aria-hidden="true" />,
        text: "December 8, 2022 6:30 pm - 8:00 pm EST"
    },
    {
        name: "Speaker",
        icon: <MegaphoneIcon className="h-6 w-6 text-green-500" aria-hidden="true" />,
        text: <>Featuring guest speaker <b>Anna Sheufelt</b> - Assistant Director of Educational Programming at Duke University.</>
    }
]


export default function Workshop() {
    return (
        <div className="bg-gray-100 mt-8" id="workshop">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:max-w-none max-w-prose mx-auto">
                    <div className="mb-6">
                    <h2 className="text-base text-yei-primary-main font-semibold tracking-wide uppercase">
            FLIP Event
          </h2>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-3">
                            Financial Literacy Workshop
                        </h2>
                        {data.map((detail) => (
                            <dl className="w-full md:max-w-none max-w-xl  mt-10 flex items-start justify-center flex-col space-y-4">
                                <div
                                    className="relative w-full flex flex-col items-start"
                                >
                                    <dt className="flex items-center flex-row">
                                        {detail.icon}
                                        <p className="ml-2 text-xl font-medium font-bold">
                                            {detail.name}
                                        </p>
                                    </dt>

                                    <dd className="mt-2 w-full flex-grow text-left text-lg text-gray-900">
                                        {detail.text}
                                    </dd>
                                </div>
                            </dl>
                        ))}
                    </div>
                    <div className="">
                        <a target="_blank" href="https://www.tinyurl.com/FLIPWorkshop" className="mx-auto w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-lg text-white bg-yei-primary-main hover:bg-yei-primary-darker md:text-lg m-2">
                            Sign Up{' '}
                            <ChevronRightIcon className="h-7 w-7 ml-3 -mr-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}