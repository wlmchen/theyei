import React from "react";

export default function ClubInfo() {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Club Information
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <fieldset>
              <legend className="block text-xl font-medium text-gray-700">
                Are you planning to register a <b>pre-existing club</b> or are
                you <b>starting a new chapter</b> at your school?
              </legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="preexisting_club"
                    name="club_type"
                    type="radio"
                    className="focus:ring-yei-primary-main h-5 w-5 text-yei-primary-main border-gray-300"
                  />
                  <label htmlFor="preexisting_club" className="ml-3">
                    <span className="block text-lg text-gray-700">
                      We're a pre-existing club
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="new_club"
                    name="club_type"
                    type="radio"
                    className="focus:ring-yei-primary-main h-5 w-5 text-yei-primary-main border-gray-300"
                  />
                  <label htmlFor="new_club" className="ml-3">
                    <span className="block text-lg text-gray-700">
                      We're starting a new club
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="club_more_info"
              className="block text-xl font-medium text-gray-700"
            >
              We'll also need some info about other officers to get started.
              Let's get their <b>names, emails, grade levels, and positions.</b>
            </label>
            <p className="text-lg my-2 text-gray-500">
              Include at least a <b>Vice President, Treasurer, </b> and your{" "}
              <b>Club Advisor</b>.
            </p>
            <div className="mt-1">
              <textarea
                id="club_more_info"
                name="club_more_info"
                rows={3}
                className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Note: clubs will be allowed to operate without an advisor
              temporarily due to the circumstances surround COVID-19.
            </p>
          </div>

          <div className="col-span-3 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="school"
                className="block text-xl font-medium text-gray-700"
              >
                What school will the club be in?
              </label>
              <input
                type="text"
                name="school"
                id="school"
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
              />
            </div>
            <div className="col-span-6">
              <p className="text-gray-700 font-medium text-xl mb-1">
                Where is the school located?
              </p>
              <label
                htmlFor="school_address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <input
                type="text"
                name="school_address"
                id="school_address"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
              />
              <p className="mt-2 text-sm text-gray-500">
                Specify country if international.
              </p>
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
                autoComplete="off"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
