import React from "react";

export default function NavItemDrop({ name, dropRoutes, itemStyle }) {
  return (
    <>
      <div className={itemStyle}>
        <button
          type="button"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          className="font-medium"
        >
          {name} <i className="ml-1 fa fa-angle-down" aria-hidden="true"></i>
        </button>
      </div>
      {/*
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Account settings
          </a>
        </div>
      </div>
  */}
    </>
  );
}
