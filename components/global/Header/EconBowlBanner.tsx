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
            <div className="flex items-center flex-wrap font-medium text-white text-center justify-center space-x-2 px-1 py-2">
                <div>EconBowl will be held on November 12, 2022!</div>
                <Link href={path}><a className="underline font-semibold inline-flex items-center">Register Now<ArrowRightIcon className=" ml-1 h-4 w-4"/></a></Link>
            </div>
        {/* } */}
        </div>

    )
}