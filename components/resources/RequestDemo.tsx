import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FocusError from "../utility/FocusError";
import SuccessAlert from "../utility/SuccessAlert"

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div>
          <h1 className="text-2xl sm:text-3xl text-gray-500 text-center">
            Request a Demo
          </h1>
        </div>
        <div className="mt-6 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500"></span>
          </div>
        </div>
        <div className="mt-6">
          <Formik
            initialValues={{
              name: "",
              email: "",
              school: "",
              grade: "",
            }}
            validationSchema={RequestDemoSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              let data = new FormData();

              data.append("Full Name", values.name);
              data.append("Email", values.email);
              data.append("School", values.school);
              data.append("Grade", values.grade);

              fetch("https://formsubmit.co/ajax/masonwang0025@gmail.com", {
                method: "POST",
                mode: "no-cors",
                body: data,
              });

              resetForm({});
              setSubmitting(false);
              setSubmitted(true);
            }}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeHolder="Full name"
                      className="block w-full shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      className="formik-error text-sm"
                      component="div"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <Field
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeHolder="Email"
                      className="block w-full shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      className="formik-error text-sm"
                      component="div"
                      name="email"
                    />
                  </div>
                  <div className="grid grid-cols-6 space-x-2">
                    <div className="col-span-4">
                      <label htmlFor="school" className="sr-only">
                        School
                      </label>
                      <Field
                        type="text"
                        name="school"
                        id="school"
                        autoComplete="off"
                        placeHolder="School"
                        className="block w-full shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        className="formik-error text-sm"
                        component="div"
                        name="school"
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="grade" className="sr-only">
                        Grade
                      </label>
                      <Field
                        type="text"
                        name="grade"
                        id="grade"
                        autoComplete="off"
                        placeHolder="Grade"
                        className="block w-full shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-sm border-gray-300 rounded-md"
                      />
                      <ErrorMessage
                        className="formik-error text-sm"
                        component="div"
                        name="grade"
                      />
                    </div>
                  </div>
                  <div>
                    {submitted ? (
                        <SuccessAlert title="Demo Requested" desc="Thank you for submitting! We'll get back to you as soon as possible." />
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                      >
                        Request a Demo
                      </button>
                    )}
                  </div>
                </div>
                <FocusError />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
        <p className="text-sm leading-5 text-gray-500">
          Get full access to over 60 weeks of resources by joining us as a{" "}
          <Link href="/clubs/register">
            <a className="font-medium text-gray-900 hover:underline">
              YEI club
            </a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

const RequestDemoSchema = Yup.object().shape({
  name: Yup.string().max(50, "Name too long.").required("Name required."),
  email: Yup.string().email("Invalid email.").required("Email required."),
  school: Yup.string().required("School name is required."),
  grade: Yup.string().required("Required."),
});
