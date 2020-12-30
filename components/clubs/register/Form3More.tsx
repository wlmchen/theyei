import React from "react";

export default function More() {
  return (
    <>
      <div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          More About You
        </h3>
        <p className="mt-1 text-lg text-gray-500">
          Let's hear a little bit more about yourself.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <label
            htmlFor="econ_coursework"
            className="block text-xl font-medium text-gray-700"
          >
            What economics related coursework have you completed?
          </label>
          <p className="text-lg my-2 text-gray-500">
            IB Econ, AP Micro, AP Macro, etc. Include any self studying or test
            scores as well.
          </p>
          <div className="mt-1">
            <textarea
              id="econ_coursework"
              name="econ_coursework"
              rows={3}
              className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <label
            htmlFor="extracurriculars"
            className="block text-xl font-medium text-gray-700"
          >
            What activities do you participate in outside of school?
          </label>
          <p className="text-lg my-2 text-gray-500">
            1000 characters maximum. Include any relevant experiences as well.
          </p>
          <div className="mt-1">
            <textarea
              id="extracurriculars"
              name="extracurriculars"
              rows={3}
              className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
