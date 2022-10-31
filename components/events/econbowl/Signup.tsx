import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import FocusError from '../../utility/FocusError'
import * as Yup from 'yup'
import camelCase from '../../../utils/camelCase'
import { ArrowRightIcon, XIcon } from '@heroicons/react/outline'
import SignatureCanvas from 'react-signature-canvas'

interface Props { }

const referralSources = [
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Reddit',
  "From your school's economic club",
  'From a friend',
  'From your school admin/teachers/newsletters',
]
const Signup: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [canvas, setCanvas] = useState();
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
        <h3 className="text-xl font-bold text-black pt-4">Eligibility</h3>
        <p>
          Each team must consist of{' '}
          <b>3-4 high school or middle school students</b>
          {` `}(U.S. grades 6-12 or equivalent in your country).{' '}
          <b>ONLY your team captain should be filling out this form.</b> The
          team captain will also be the one submitting the written exam on the
          day of the event.
        </p>
        <p className="text-sm italic text-gray-600">
          By registering and entering, you and your team members are agreeing to
          receive emails from the Youth Economics Initiatives regarding
          EconBowl, as well as future events and competitions.
        </p>
      </div>
      <Formik
        initialValues={{
          teamName: '',
          team: [
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
          ],

          fourthFirstName: '',
          fourthLastName: '',
          fourthEmail: '',
          fourthGrade: '',
          fourthSchool: '',

          referral: [],
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitted(false)
          setSubmitting(true)
          let data = new FormData()

          data.append('Team Name', values.teamName)
          data.append(
            'Captain FULL NAME',
            values.team[0].firstName + ' ' + values.team[0].lastName
          )
          data.append('Captain EMAIL', values.team[0].email)
          data.append('Captain GRADE', values.team[0].grade)
          data.append('Captain SCHOOL', values.team[0].school)

          data.append(
            '2nd Teammate FULL NAME',
            values.team[1].firstName + ' ' + values.team[1].lastName
          )
          data.append('2nd Teammate EMAIL', values.team[1].email)
          data.append('2nd Teammate GRADE', values.team[1].grade)
          data.append('2nd Teammate SCHOOL', values.team[1].school)

          data.append(
            '3rd Teammate FULL NAME',
            values.team[2].firstName + ' ' + values.team[2].lastName
          )
          data.append('3rd Teammate EMAIL', values.team[2].email)
          data.append('3rd Teammate GRADE', values.team[2].grade)
          data.append('3rd Teammate SCHOOL', values.team[2].school)

          // Checks if all entries for 4th teammate is blank
          const combinedFourth =
            values.fourthFirstName +
            values.fourthLastName +
            values.fourthEmail +
            values.fourthGrade +
            values.fourthSchool

          // if not blank, include it in the email
          if (combinedFourth.trim() !== '') {
            data.append(
              '4th Teammate FULL NAME',
              values.fourthFirstName + ' ' + values.fourthLastName
            )
            data.append('4th Teammate EMAIL', values.fourthEmail)
            data.append('4th Teammate GRADE', values.fourthGrade)
            data.append('4th Teammate SCHOOL', values.fourthSchool)
          }

          data.append('How did you hear about us?', values.referral.join(', '))

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

          fetch(
            `/api/econbowlSignup`,
            {
              method: 'POST',
              // mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(Object.fromEntries(data)),
            }
          ).then(response => {
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
                {new Array(4).fill('').map((item, teamNum) => {
                  return (
                    <div key={teamNum} className="w-full">
                      <p className="text-lg font-bold flex flex-col sm:flex-row sm:items-center mb-4">
                        {teamNum === 0
                          ? 'Team Captain'
                          : `Teammate #${teamNum + 1}`}
                        <span className="sm:pl-2 text-gray-500 text-sm font-medium mt-1 mb-2 sm:mt-0 sm:mb-0 italic">
                          {teamNum === 3 && (
                            <span>
                              (<b>Optional: </b>leave blank if you do not have a
                              4th teammate)
                            </span>
                          )}
                        </span>
                      </p>

                      <div className="w-full grid grid-cols-8 gap-4 mt-2">
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
                              className={` ${field === 'Email'
                                ? 'col-span-8'
                                : field === 'Grade'
                                  ? 'col-span-3 sm:col-span-2'
                                  : field === 'School'
                                    ? 'col-span-5 sm:col-span-6'
                                    : 'col-span-8 sm:col-span-4'
                                }`}
                            >
                              <label
                                htmlFor={field === 'Grade' ? gradeKebab : otherKebab}
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
                      </div>
                    </div>
                  )
                })}
                <div>
                  <p className="text-lg font-bold">
                    How did you hear about us?
                  </p>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group"
                    className="grid grid-cols-2 gap-4 mt-2"
                  >
                    {referralSources.map((source, index) => {
                      return (
                        <label
                          key={index}
                          className="text-gray-700 flex flex-row"
                        >
                          <Field
                            type="checkbox"
                            name="referral"
                            value={source}
                            className="h-4 w-4 rounded border-gray-300 text-yei-primary-main focus:ring-yei-primary-main focus:border-yei-primary-main text-base mt-1 mr-2"
                          />
                          {source}
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold">
                    Integrity Contract
                  </p>
                  <p className="italic text-gray-600 text-sm mt-2 mb-4">
                    This contract is to help us insure the integrity of the competition. Thank you in advance for adhering to the guidelines below.
                  </p>
                  <div>
                    <p className="mb-2">My teammates and I will not use external resources during the exam. This includes:</p>
                    <ul className="list-disc space-y-1 ml-7 mb-2">
                      <li>Searching the internet</li>
                      <li>Using written notes or textbooks</li>
                      <li>Communicating with people that are not on your team</li>
                    </ul>

                    <p className="mb-2">Additionally, There will be proctors cycling through the rooms. For proctoring purposes:</p>
                      <ul className="list-disc space-y-1 ml-7 mb-2">
                        <li>Have your camera on through the exam. Your camera should be angled so that the proctors can see your arms and hands</li>
                        <li>Keep your microphone unmuted</li>
                        <li>Do not have any notes or other material out</li>
                        <li>Have you phone face-down in the camera view</li>
                        <li>There should be no typing</li>
                        <li>The captains should have their screen share of the test on throughout the exam (Written Exam)</li>
                        <li>Rules specific for only one portion are marked at the end of each bullet point. All other rules apply to both the QuizBowl and Written Exam.</li>
                      </ul>
                    <p className="mb-2">Violation of this contract may result in point deductions or disqualification.</p>

                    <p className="mb-4">If for any reason, you or your teammates are unable to follow these guidelines as stated above, please us know by sending us an email at <a href="emailto:events@theyei.org" className="underline text-green-700">events@theyei.org</a>.</p>

                    <p className="mb-4">By signing below, you are agreeing to this contract on behalf of yourself and your entire team.</p>
                    <div className="flex flex-col px-3 w-4/5 mx-auto">
                      <div className="border border-gray-500 rounded inline-block">
                        <SignatureCanvas ref={(ref) => {setCanvas(ref)}} 
                          canvasProps={{className: "w-full"}} />
                      </div>
                      <div className="flex items-end justify-end">
                        <button className="text-gray-400 underline text-sm" onClick={(e) => canvas.clear()}>Clear</button>
                      </div>
                    </div>
                  </div>

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
                {isSubmitting && "Submitting..."}
                {submitted && "Your team was registered successfully!"}
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
