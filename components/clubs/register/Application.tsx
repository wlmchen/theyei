import React, { useEffect, useRef, useState } from "react";
import Contact from "./Form1Contact";
import { ClubIcon, ContactIcon, MoreIcon } from "./Icons";
import More from "./Form3More";
import ClubInfo from "./Form2ClubInfo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FocusError from "../../utility/FocusError";
import SuccessAlert from "../../utility/SuccessAlert";

export default function Application() {
  const [currPage, setCurrPage] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const form1 = useRef(null);
  const form2 = useRef(null);
  const form3 = useRef(null);

  const handleClick = (e) => {
    [form1, form2, form3].map((form, i) => {
      if (form.current.contains(document.activeElement)) setCurrPage(i);
    });
  };

  useEffect(() => {
    [form1, form2, form3].map((form) => {
      form.current.onclick = handleClick;
    });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 container pt-6 pb-14">
      <aside className="pb-6 pt-1 sm:py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 relative">
        <nav className="space-y-1 lg:sticky  lg:top-20">
          {[
            { title: "Contact", icon: ContactIcon, href: "#contact" },
            { title: "Club Information", icon: ClubIcon, href: "#clubinfo" },
            { title: "More About You", icon: MoreIcon, href: "#more" },
          ].map((navItem, index) => {
            let active = currPage == index;
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
                  <navItem.icon active={active} />
                  <span className={`truncate ${active ? "font-bold" : ""}`}>
                    {navItem.title}
                  </span>
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
              "admin@theyei.org,neha@theyei.org,ian@theyei.org,expansion@theyei.org,henry@theyei.org"
            );
            data.append("_replyto", values.email);
            data.append("_subject", "New EconClub Application Submission");

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
                <div ref={form1}>
                  <Contact />
                </div>
                <div ref={form2}>
                  <ClubInfo />
                </div>
                <div ref={form3}>
                  <More
                    submitBottomBar={
                      !submitted ? (
                        <div className="text-right">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-lg bg-yei-primary-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main"
                          >
                            Submit
                          </button>
                        </div>
                      ) : (
                        <SuccessAlert
                          title="Application Submitted"
                          desc="Thank you for applying! We'll get back to you as soon as possible."
                        />
                      )
                    }
                  />
                </div>
              </div>
              <FocusError />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

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
