import React from "react";

export default function ClubInfo() {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Personal Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Use a permanent address where you can recieve mail.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="given-name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="family-name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <label
            htmlFor="email_address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="text"
            name="email_address"
            id="email_address"
            autoComplete="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country / Region
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="street_address"
            className="block text-sm font-medium text-gray-700"
          >
            Street address
          </label>
          <input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State / Province
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="postal_code"
            className="block text-sm font-medium text-gray-700"
          >
            ZIP / Postal
          </label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
          />
        </div>
      </div>
    </>
  );
}
