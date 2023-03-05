import React, { useEffect, useRef, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FocusError from '../../utility/FocusError'
import SuccessAlert from '../../utility/SuccessAlert'

// export default function SubmitPage() {
//   return (
//     <div className="bg-gray-100">
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-base font-semibold text-yei-primary-main tracking-wide uppercase">
//             Testimonials
//           </h2>
//           <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 sm:tracking-tight">
//             Hear what our past competitors have to say!
//           </p>
//         </div>
//       </div>
//       <div className="mt-16 mx-auto">
//         <SubmitPage />
//       </div>
//     </div>
//   )
// }

export default function Submit() {
  const [isStudent, setIsStudent] = useState(true)

  const [currPage, setCurrPage] = useState(-1)
  const [submitted, setSubmitted] = useState(false)
  const form1 = useRef(null)
  const form2 = useRef(null)
  const form3 = useRef(null)

  const handleClick = (e) => {
    [form1, form2, form3].map((form, i) => {
      if (form.current)
        if (form.current.contains(document.activeElement)) setCurrPage(i)
    })
  }

  useEffect(() => {
    [form1, form2, form3].map((form) => {
      if (form.current) form.current.onclick = handleClick
    })
  }, [])

  return (
    <>
      <div className="container pt-6 pb-14">
        <div id="yei-form" className="space-y-6 sm:px-6 lg:px-0">
          <Formik
            initialValues={{
              fName: '',
              lName: '',
              hearAboutUs: '',
              email: '',
              clubStatus: '',
              clubInfo: '',
              school: '',
              address: '',
              city: '',
              state: '',
              zip: '',
              econCoursework: '',
              ECs: '',
            }}
            validationSchema={
              isStudent ? StudentApplicationSchema : TeacherApplicationSchema
            }
            onSubmit={(values, { setSubmitting, resetForm }) => {
              let data = new FormData()

              data.append('Submission Type', isStudent ? 'STUDENT' : 'TEACHER')
              data.append('Full Name', `${values.fName} ${values.lName}`)
              data.append('Email', values.email)
              data.append('How did you hear about us?', values.hearAboutUs)
              data.append('Club Type', values.clubStatus)
              if (isStudent) data.append('Info About the Club', values.clubInfo)
              data.append('School', values.school)
              data.append(
                'School Full Address',
                `street address: ${values.address}, city: ${values.city}, state: ${values.state}, zip/postal: ${values.zip}`
              )
              if (isStudent) {
                data.append(
                  'Completed Economics Coursework',
                  values.econCoursework
                )
                data.append('Extracurriculars', values.ECs)
              }
              data.append(
                '_cc',
                'admin@theyei.org,miriam@theyei.org,kavin@theyei.org,ian@theyei.org,expansion@theyei.org,henry@theyei.org'
              )
              data.append('_replyto', values.email)
              data.append(
                '_subject',
                `New EconClub Application Submission (${isStudent ? 'STUDENT' : 'TEACHER'
                })`
              )

              fetch('https://formsubmit.co/ajax/ab3308b6570d4ffe111661f129ec434a', {
                method: 'POST',
                mode: 'no-cors',
                body: data,
              })
              resetForm({})
              setSubmitted(true)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <div className="flex flex-col space-y-6">
                  <div ref={form1}>
                    <div
                      id="more"
                      className="trans-150 shadow rounded-md sm:overflow-hidden focus-within:border-yei-primary-main border-transparent"
                    >
                      <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
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
                              htmlFor="econCoursework"
                              className="block text-xl font-medium text-gray-700"
                            >
                              What economics related coursework have you completed?
                            </label>
                            <p className="text-lg my-2 text-gray-500">
                              IB Econ, AP Micro, AP Macro, etc. Include any self studying or
                              test scores as well.
                            </p>
                            <div className="mt-1">
                              <Field
                                component="textarea"
                                id="econCoursework"
                                name="econCoursework"
                                rows={3}
                                className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full  border-gray-300 rounded-md"
                              />
                              <ErrorMessage
                                className="formik-error"
                                component="div"
                                name="econCoursework"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3">
                            <label
                              htmlFor="ECs"
                              className="block text-xl font-medium text-gray-700"
                            >
                              What activities do you participate in outside of school?
                            </label>
                            <p className="text-lg my-2 text-gray-500">
                              1000 characters maximum. Include any relevant experiences as well.
                            </p>
                            <div className="mt-1">
                              <Field
                                component="textarea"
                                id="ECs"
                                name="ECs"
                                rows={3}
                                className="shadow-sm focus:ring-yei-primary-main focus:border-yei-primary-main mt-1 block w-full  border-gray-300 rounded-md"
                              />
                              <ErrorMessage
                                className="formik-error"
                                component="div"
                                name="ECs"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <SubmitBottomBar
                            submitted={submitted}
                            isSubmitting={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FocusError />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

function SubmitBottomBar({ submitted, isSubmitting }) {
  return (
    <>
      {!submitted ? (
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
      )}
    </>
  )
}

const StudentApplicationSchema = Yup.object().shape({
  fName: Yup.string()
    .max(50, 'Name too long.')
    .required('First name required.'),
  lName: Yup.string().max(50, 'Name too long.').required('Last name required.'),
  hearAboutUs: Yup.string().required('This field is required.'),
  email: Yup.string().email('Invalid email.').required('Email required.'),
  clubStatus: Yup.string().required('This field is required.'),
  clubInfo: Yup.string().required('This field is required.'),
  school: Yup.string().required('School name is required.'),
  address: Yup.string().required('Address is required.'),
  city: Yup.string().required('City is required.'),
  state: Yup.string().required('State is required.'),
  zip: Yup.string().required('ZIP / Postal is required.'),
  econCoursework: Yup.string().required('This field is required.'),
  ECs: Yup.string()
    .required('This field is required.')
    .max(1000, '1000 characters maximum'),
})

const TeacherApplicationSchema = Yup.object().shape({
  fName: Yup.string()
    .max(50, 'Name too long.')
    .required('First name required.'),
  lName: Yup.string().max(50, 'Name too long.').required('Last name required.'),
  hearAboutUs: Yup.string().required('This field is required.'),
  email: Yup.string().email('Invalid email.').required('Email required.'),
  clubStatus: Yup.string().required('This field is required.'),
  school: Yup.string().required('School name is required.'),
  address: Yup.string().required('Address is required.'),
  city: Yup.string().required('City is required.'),
  state: Yup.string().required('State is required.'),
  zip: Yup.string().required('ZIP / Postal is required.'),
})
