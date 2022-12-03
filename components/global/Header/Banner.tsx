import Link from "next/link";
import {
    ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useRouter } from "next/router";

const data = {
    primary: "FLIP is hosting a College Finances Workshop",
    secondary: "on December 8!",
    linkText: "Register Now"
}

export default function EconBowlBanner() {


    return (
        <div className="z-40 w-screen bg-green-700">
        {/* {currPath !== path &&  */}
            <div className="flex items-center flex-wrap font-medium text-white text-center justify-center space-x-2 px-1 py-2">
                <div>{data.primary}</div>
                <div className="sm:block hidden">{data.secondary}</div>
                <a target="_blank" href="https://www.tinyurl.com/FLIPWorkshop" className="underline font-semibold inline-flex items-center">{data.linkText}<ArrowRightIcon className=" ml-1 h-4 w-4"/></a>
            </div>
        {/* } */}
        </div>

    )
}