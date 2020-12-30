import React, { useState } from "react";
import routes from "../../../data/routes";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

import { faPlus, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false); // for mobile dropdown
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const currPath = useRouter().pathname;

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
                aria-expanded="false"
                onClick={toggleNav}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                  icon={faBars}
                  className={`${navOpen ? "hidden" : "block"} h-6 w-6`}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`${navOpen ? "block" : "hidden"} h-6 w-6`}
                />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-9 w-auto"
                src="/img/logos/yei-logo-full.png"
                alt="YEI logo"
              />
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 xl:space-x-8">
              {routes.map((r) => (
                <NavItem
                  key={r.name}
                  name={r.name}
                  href={r.href}
                  currPath={currPath}
                  dropRoutes={r.dropRoutes}
                  active={
                    r.dropRoutes
                      ? currPath.startsWith(r.href)
                      : r.href == currPath
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yei-primary-main shadow-sm hover:bg-yei-primary-darker"
              >
                <FontAwesomeIcon icon={faPlus} className="-ml-1 mr-2 h-3 w-3" />
                <span>Register a Club</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${navOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {routes.map((r) => (
            <MobileNavItem
              key={r.name}
              name={r.name}
              href={r.href}
              dropRoutes={r.dropRoutes}
              currPath={currPath}
              active={
                r.dropRoutes ? currPath.startsWith(r.href) : r.href == currPath
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
