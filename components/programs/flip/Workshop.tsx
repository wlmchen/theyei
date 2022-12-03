import React from 'react'
import Link from 'next/link'
import { CalendarIcon, InformationCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const data = [
    {
        icon: InformationCircleIcon,
        text: "FLIP is hosting a College Finances Workshop covering scholarships, student loans, debt, budgeting, and financial strategies to succeed in college and beyond."
    },
    {
        icon: CalendarIcon,
        text: "December 8, 2022 6:30 pm - 8:00 pm EST"
    },
]


export default function Workshop() {
    return (
        <div className="py-12 mt-12 bg-gray-100">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mb-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Financial Literacy Workshop
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        FLIP is hosting a <b>College Finances Workshop</b> covering scholarships, student loans, debt, budgeting, and financial strategies to succeed in college and beyond.
                        December 8, 2022 6:30 pm - 8:00 pm EST
                        Featuring guest speaker ANNA SHEUFELT - Assistant Director of Educational Programming at Duke University.
                    </p>
                </div>
                <div className="inline-flex">
                    <Link href="https://www.tinyurl.com/FLIPWorkshop" passHref={true}>
                        <a className="w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-lg text-white bg-yei-primary-main hover:bg-yei-primary-darker md:text-lg m-2">
                            Sign Up{' '}
                            <ChevronRightIcon className="h-7 w-7 ml-3 -mr-3" />
                        </a>
                    </Link></div>
            </div>
        </div>
    )
}
