import React, { useState } from "react";
import Contact from "./Form1Contact";
import { ClubIcon, ContactIcon, MoreIcon } from "./Icons";
import More from "./Form3More";
import ClubInfo from "./Form2ClubInfo";
import Link from "next/link";

export default function Application() {
  const [currPage, setCurrPage] = useState(2);
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 container pt-6 pb-14">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
          {[
            { title: "Contact", icon: ContactIcon },
            { title: "Club Information", icon: ClubIcon },
            { title: "More About You", icon: MoreIcon },
          ].map((navItem, index) => {
            let active = currPage == index;
            let disabled = index > currPage;
            let styles =
              "w-full disabled:cursor-not-allowed cursor-pointer trans-150 group rounded-md px-3 py-2 flex items-center text-md font-medium ";
            if (active)
              styles +=
                "bg-gray-50 text-yei-primary-darker hover:text-yei-primary-darker hover:bg-gray-100";
            else if (disabled) styles += "text-gray-900";
            else styles += " hover:text-gray-900 hover:bg-gray-50";

            return (
              <button
                key={navItem.title}
                onClick={() => setCurrPage(index)}
                className={styles}
                aria-current="page"
                disabled={disabled}
              >
                <navItem.icon active={active} disabled={disabled} />
                <span className="truncate">{navItem.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              {currPage === 0 && <Contact />}
              {currPage === 1 && <ClubInfo />}
              {currPage === 2 && <More />}
            </div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                {currPage < 2 && (
                  <button className="bg-yei-primary-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main">
                    Next
                  </button>
                )}
                {currPage === 2 && (
                  <button
                    type="submit"
                    className="bg-yei-primary-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                  >
                    Submit
                  </button>
                )}
                {currPage === 3 && (
                  <Link href="/">
                    <a className="bg-yei-primary-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main">
                      Return Home
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
