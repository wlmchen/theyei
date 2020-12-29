import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import routes from "./../../../data/routes";
import NavItem from "./NavItem";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const currPath = useRouter().pathname;

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yei-primary-main"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/*
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yei-primary-main shadow-sm hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
              >
                {/* Heroicon name: plus */}
                <FontAwesomeIcon icon={faPlus} className="-ml-1 mr-2 h-3 w-3" />
                <span>Register a Club</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
      <div className="block lg:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {/* Current: "bg-indigo-50 border-yei-primary-main text-yei-primary-darker", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <a
            href="#"
            className="bg-indigo-50 border-yei-primary-main text-green-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Team
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Projects
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
