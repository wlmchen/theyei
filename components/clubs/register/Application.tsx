import React, { useState } from "react";
import Contact from "./Form1Contact";
import { ClubIcon, ContactIcon, MoreIcon } from "./Icons";
import More from "./Form3More";
import ClubInfo from "./Form2ClubInfo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FocusError from './FocusError';

export default function Application() {
  const [currPage, setCurrPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 container pt-6 pb-14">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 relative">
        <nav className="space-y-1 lg:sticky lg:top-20">
          {[
            { title: "Contact", icon: ContactIcon, href: "#contact" },
            { title: "Club Information", icon: ClubIcon, href: "#clubinfo" },
            { title: "More About You", icon: MoreIcon, href: "#more" },
          ].map((navItem, index) => {
            let active = false; // currPage == index;
            let styles =
              "my-1 w-full cursor-pointer trans-150 group rounded-md px-3 py-2 flex items-center text-md font-medium ";
            if (active)
              styles +=
                "bg-gray-50 text-yei-primary-darker hover:text-yei-primary-darker hover:bg-gray-100";
            else styles += "text-gray-800 hover:text-gray-900 hover:bg-gray-50";

            return (
              <AnchorLink
                href={navItem.href}
                key={navItem.title}
                offset="69.69px"
              >
                <span
                  onClick={() => setCurrPage(index)}
                  className={styles}
                  aria-current="page"
                >
                  <navItem.icon active={false} />
                  <span className="truncate">{navItem.title}</span>
                </span>
              </AnchorLink>
            );
          })}
        </nav>
      </aside>
      <div id="yei-form" className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <Formik
          initialValues={{
            fName: "",
            lName: "",
            email: "",
            clubStatus: "",
            clubInfo: "",
            school: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            econCoursework: "",
            ECs: "",
          }}
          validationSchema={ApplicationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("SUDNFDKJ");
            let data = new FormData();

            data.append("Full Name", `${values.fName} ${values.lName}`);
            data.append("Email", values.email);
            data.append("Club Type", values.clubStatus);
            data.append("Info About the Club", values.clubInfo);
            data.append("School", values.school);
            data.append(
              "School Full Address",
              `street address: ${values.address}, city: ${values.city}, state: ${values.state}, zip/postal: ${values.zip}`
            );
            data.append(
              "Completed Economics Coursework",
              values.econCoursework
            );
            data.append("Extracurriculars", values.ECs);
            data.append(
              "_cc",
              "masonwang025@gmail.com"
            );

            fetch("https://formsubmit.co/ajax/masonwang0025@gmail.com", {
              method: "POST",
              mode: "no-cors",
              body: data,
            });
            resetForm({});
            setSubmitted(true);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <div className="flex flex-col space-y-6">
                <Contact />
                <ClubInfo />
                <More isSubmitting={isSubmitting} />
              </div>
              <FocusError />
            </Form>
          )}
        </Formik>
        {submitted && <SuccessAlert />}
      </div>
    </div>
  );
}

const SuccessAlert = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className={visible ? "block" : "hidden"}>
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            {/* Heroicon name: check-circle */}
            <svg
              className="h-7 w-7 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-green-800">
              Application Submitted
            </h3>
            <div className="mt-2 text-md text-green-700">
              <p>
                Thank you for applying! We'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <Link href="/">
                  <a className="trans-300 bg-green-50 px-2 py-1.5 rounded-md text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    Return Home
                  </a>
                </Link>
                <button
                  onClick={() => setVisible(false)}
                  className="trans-300 ml-3 bg-green-50 px-2 py-1.5 rounded-md text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplicationSchema = Yup.object().shape({
  fName: Yup.string()
    .max(50, "Name too long.")
    .required("First name required."),
  lName: Yup.string().max(50, "Name too long.").required("Last name required."),
  email: Yup.string().email("Invalid email.").required("Email required."),
  clubStatus: Yup.string().required("This field is required."),
  clubInfo: Yup.string().required("This field is required."),
  school: Yup.string().required("School name is required."),
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
  state: Yup.string().required("State is required."),
  zip: Yup.string().required("ZIP / Postal is required."),
  econCoursework: Yup.string().required("This field is required."),
  ECs: Yup.string()
    .required("This field is required.")
    .max(1000, "1000 characters maximum"),
});
