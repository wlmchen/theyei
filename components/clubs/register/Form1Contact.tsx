import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          Contact
        </h3>
        <p className="mt-1 text-lg text-gray-500">
          The chapter president / representative should be filling out this
          form.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first_name"
            className="block text-lg font-medium text-gray-700"
          >
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="off"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last_name"
            className="block text-lg font-medium text-gray-700"
          >
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="off"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <label
            htmlFor="email_address"
            className="block text-lg font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="text"
            name="email_address"
            id="email_address"
            autoComplete="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
          />
          <p className="mt-2 text-sm text-gray-500">
            We will use this address to get in contact once your application is
            approved.
          </p>
        </div>
      </div>
    </>
  );
}
