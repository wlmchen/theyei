import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import FocusError from '../../utility/FocusError'
import * as Yup from 'yup'
import camelCase from '../../../utils/camelCase'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import SignatureCanvas from 'react-signature-canvas'

interface Props {}

const Signup: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [canvas, setCanvas] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [fourth, setFourth] = useState(null)
  const fieldTypes = ['First Name', 'Last Name', 'Email', 'Grade', 'School']

  return (
    <div className="max-w-3xl w-full m-auto mb-16 px-6" id="register">
      <div className="space-y-2 text-lg text-gray-600">
        <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Interested? Signup!
        </h2>
        <p>
          Please make sure that you and your team meet all eligibility
          requirements before signing up for EconBowl. If you have already
          registered, please DO NOT submit this form a second time. Email{' '}
          <a
            className="text-yei-primary-darker font-medium"
            href="mailto:events@theyei.org"
          >
            events@theyei.org
          </a>{' '}
          if you need to make any changes to information previously submitted
          (team roster, email address, etc).
        </p>

        <p>
          Finished your presentation? Upload as an unlisted video to Youtube and
          submit below!
        </p>
      </div>
      <Formik
        initialValues={{
          teamName: '',
          leaderFirstName: '',
          leaderLastName: '',
          contactEmail: '',
          video: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitted(false)
          setSubmitting(true)
          let data = new FormData()

          data.append('Team Name', values.teamName)
          data.append('Team Leader First Name', values.leaderFirstName)
          data.append('Team Leader Last Name', values.leaderLastName)
          data.append('Contact Email', values.contactEmail)
          data.append('Video Link', values.video)

          // data.append(
          //   '_cc',
          //   'admin@theyei.org,miriam@theyei.org,kavin@theyei.org,ian@theyei.org,expansion@theyei.org,henry@theyei.org'
          // )
          // data.append('_replyto', values.team[0].email)
          // data.append(
          //   '_subject',
          //   `New EconBowl 2022 Signup!`
          // )
          console.log(data)

          fetch(`/api/econolympiadSignup`, {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(data)),
          }).then((response) => {
            resetForm({})
            setSubmitted(true)
            setSubmitting(false)
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <div className="w-full max-w-2xl mx-auto mt-12 flex flex-col items-center justify-center">
              <div className="w-full">
                <label
                  htmlFor="teamName"
                  className="block text-xl font-medium text-gray-700"
                >
                  Team Name{' '}
                  <span className="text-gray-600 font-light text-xl">*</span>
                </label>
                <Field
                  type="text"
                  name="teamName"
                  id="teamName"
                  placeholder="The Econ Whiz Kids"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                />
                <ErrorMessage
                  className="formik-error"
                  component="div"
                  name="teamName"
                />
                <p className="italic text-gray-600 text-sm mt-2">
                  * If a name submitted is deemed inappropriate, it will be
                  replaced with a number.
                </p>
              </div>
              <div className="space-y-12 w-full mt-8">
                <div className="w-full">
                  <p className="text-lg font-bold flex flex-col sm:flex-row sm:items-center mb-4">
                    Team Captain
                    <span className="sm:pl-2 text-gray-500 text-sm font-medium mt-1 mb-2 sm:mt-0 sm:mb-0 italic"></span>
                  </p>

                  {/* <div className="w-full grid grid-cols-8 gap-4 mt-2">
                        {fieldTypes.map((field, index) => {
                          const fieldKebab = `team[${teamNum}].${camelCase(
                            field
                          )}`
                          const gradeKebab =
                            teamNum === 3 ? 'fourthGrade' : fieldKebab

                          const otherKebab =
                            teamNum === 3
                              ? field === 'First Name'
                                ? 'fourthFirstName'
                                : field === 'Last Name'
                                ? 'fourthLastName'
                                : field === 'School'
                                ? 'fourthSchool'
                                : 'fourthEmail'
                              : fieldKebab
                          return (
                            <div
                              key={index}
                              className={` ${
                                field === 'Email'
                                  ? 'col-span-8'
                                  : field === 'Grade'
                                  ? 'col-span-3 sm:col-span-2'
                                  : field === 'School'
                                  ? 'col-span-5 sm:col-span-6'
                                  : 'col-span-8 sm:col-span-4'
                              }`}
                            >
                              <label
                                htmlFor={
                                  field === 'Grade' ? gradeKebab : otherKebab
                                }
                                className="block text-base font-medium text-gray-700"
                              >
                                {field}
                              </label>
                              {field === 'Grade' ? (
                                <Field
                                  name={gradeKebab}
                                  id={gradeKebab}
                                  as="select"
                                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main"
                                >
                                  <option></option>
                                  <option>9th</option>
                                  <option>10th</option>
                                  <option>11th</option>
                                  <option>12th</option>
                                  <option>Other</option>
                                </Field>
                              ) : (
                                <Field
                                  type={field === 'Email' ? 'email' : 'text'}
                                  name={otherKebab}
                                  id={otherKebab}
                                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main text-base`}
                                />
                              )}
                              <ErrorMessage
                                className="formik-error"
                                component="div"
                                name={fieldKebab}
                              />
                            </div>
                          )
                        })}
                    </div> */}
                </div>
                <ErrorMessage
                  className="formik-error"
                  component="div"
                  name="referral"
                />
              </div>
              <div className="w-full flex items-left justify-left">
                <button
                  type="submit"
                  className="w-full mt-8 text-xl bg-yei-primary-main border border-transparent rounded-md shadow-sm py-4 px-4 justify-center font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main flex items-center"
                >
                  Signup my Team{' '}
                  <ArrowRightIcon className="ml-2 h-6 w-6 text-white" />
                </button>
              </div>
              <span className="text-gray-600 mt-3 text-lg">
                {isSubmitting && 'Submitting...'}
                {submitted && 'Your team was registered successfully!'}
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup

const RegisterSchema = Yup.object().shape({
  teamName: Yup.string()
    .max(50, 'Name too long.')
    .required('Team name required.'),
  team: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string()
        .max(50, 'Name too long.')
        .required('First name required.'),
      lastName: Yup.string()
        .max(50, 'Name too long.')
        .required('Last name required.'),
      email: Yup.string().email('Invalid email.').required('Email required.'),
      grade: Yup.string().required('Grade is required'),
      school: Yup.string().required('School name is required.'),
    })
  ),
  fourthFirstName: Yup.string().max(50, 'Name too long.'),
  fourthLastName: Yup.string().max(50, 'Name too long.'),
  fourthEmail: Yup.string().email('Invalid email.'),
  fourthGrade: Yup.string(),
  fourthSchool: Yup.string(),

  referral: Yup.array()
    .of(Yup.string().required())
    .required('Referral field is required.'),
})
