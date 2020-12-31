import React, { useState } from "react";
import Contact from "./Form1Contact";
import { ClubIcon, ContactIcon, MoreIcon } from "./Icons";
import More from "./Form3More";
import ClubInfo from "./Form2ClubInfo";

export default function Application() {
  const [currPage, setCurrPage] = useState(2);
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 container pt-6 pb-14">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 relative">
        <nav className="space-y-1 lg:sticky lg:top-20">
          {[
            { title: "Contact", icon: ContactIcon },
            { title: "Club Information", icon: ClubIcon },
            { title: "More About You", icon: MoreIcon },
          ].map((navItem, index) => {
            let active = currPage == index;
            let styles =
              "w-full cursor-pointer trans-150 group rounded-md px-3 py-2 flex items-center text-md font-medium ";
            if (active)
              styles +=
                "bg-gray-50 text-yei-primary-darker hover:text-yei-primary-darker hover:bg-gray-100";
            else styles += "text-gray-800 hover:text-gray-900 hover:bg-gray-50";

            return (
              <button
                key={navItem.title}
                onClick={() => setCurrPage(index)}
                className={styles}
                aria-current="page"
              >
                <navItem.icon active={active} />
                <span className="truncate">{navItem.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <form action="#" method="POST">
          <div className="flex flex-col space-y-6">
            <Contact />
            <ClubInfo />
            <More />
          </div>
        </form>
      </div>
    </div>
  );
}
