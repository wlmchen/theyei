import Link from "next/link";
import {
    ArrowRightIcon
} from '@heroicons/react/outline'
import { useRouter } from "next/router";

export default function EconBowlBanner() {

    const path = "/events/econbowl"
    const currPath = useRouter().pathname

    return (
        <div className="z-40 w-screen bg-green-700">
        {/* {currPath !== path &&  */}
            <div className="flex items-center h-10">
                <p className="truncate font-medium text-white text-center mx-auto">
                    <span className="mr-2">EconBowl will be held on November 12, 2022!</span>
                    <Link href={path}><a className="underline font-semibold inline-flex items-center">Register Now<ArrowRightIcon className=" ml-1 h-4 w-4"/></a></Link>
                </p>
            </div>
        {/* } */}
        </div>

    )
}