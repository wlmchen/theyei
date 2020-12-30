import React from "react";

export default function More() {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Notifications
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Provide basic informtion about the job. Be specific with the job
          title.
        </p>
      </div>
      <fieldset>
        <legend className="text-base font-medium text-gray-900">
          By Email
        </legend>
        <div className="mt-4 space-y-4">
          <div className="flex items-start">
            <div className="h-5 flex items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start">
              <div className="h-5 flex items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-700"
                >
                  Candidates
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start">
              <div className="h-5 flex items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Offers
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <legend className="text-base font-medium text-gray-900">
          Push Notifications
        </legend>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <input
              id="push_everything"
              name="push_notifications"
              type="radio"
              className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300"
            />
            <label htmlFor="push_everything" className="ml-3">
              <span className="block text-sm font-medium text-gray-700">
                Everything
              </span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="push_email"
              name="push_notifications"
              type="radio"
              className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300"
            />
            <label htmlFor="push_email" className="ml-3">
              <span className="block text-sm font-medium text-gray-700">
                Same as email
              </span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="push_nothing"
              name="push_notifications"
              type="radio"
              className="focus:ring-yei-primary-main h-4 w-4 text-yei-primary-main border-gray-300"
            />
            <label htmlFor="push_nothing" className="ml-3">
              <span className="block text-sm font-medium text-gray-700">
                No push notifications
              </span>
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
}
