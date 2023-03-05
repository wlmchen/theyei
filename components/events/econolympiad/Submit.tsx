import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import * as Yup from 'yup'
import camelCase from '../../../utils/camelCase'

interface Props { }

const Submit: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [submitted, setSubmitted] = useState(false)
  const fieldTypes = ['Team Leader First Name', 'Team Leader Last Name', 'Team Name', 'Main Contact Email Address', 'Youtube Link', 'Questions']

  return (
    <div className="max-w-3xl w-full m-auto mb-16 px-6 mt-16" id="submit">
      <div className="space-y-2 text-lg text-gray-600">
        <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Finished your presentation?
        </h2>
        <p className="text-center text-xl">
          Upload as an unlisted video to YouTube and submit below!
        </p>
      </div>
      <Formik
        initialValues={{
          teamName: '',
          teamLeaderFirstName: '',
          teamLeaderLastName: '',
          mainContactEmailAddress: '',
          youtubeLink: '',
          questions: ''
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitted(false)
          setSubmitting(true)
          let data = new FormData()

          data.append('Team Name', values.teamName)
          data.append('Team Leader First Name', values.teamLeaderFirstName)
          data.append('Team Leader Last Name', values.teamLeaderLastName)
          data.append('Main Contact Email Address', values.mainContactEmailAddress)
          data.append('Youtube Link', values.youtubeLink)
          data.append('Questions', values.questions)

          console.log(data)

          fetch(
            `/api/econolympiadSubmit`,
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
            <div className="w-full max-w-2xl mx-auto mt-4 flex flex-col items-center justify-center">
              <div className="space-y-12 w-full mt-8">
                <div className="w-full">
                  <div className="w-full grid grid-cols-8 gap-4 mt-2">
                    {fieldTypes.map((field, index) => {
                      const fieldKebab = `${camelCase(
                        field
                      )}`
                      return (
                        <div
                          key={index}
                          className={` ${field === 'Youtube Link'
                            ? 'col-span-8'
                            : field === 'Questions'
                              ? 'col-span-8'
                              : 'col-span-8 sm:col-span-4'
                            }`}
                        >
                          <label
                            htmlFor={fieldKebab}
                            className="block text-base font-medium text-gray-700"
                          >
                            {field === 'Youtube Link'
                              ? 'YouTube Link'
                              : field === 'Questions'
                                ? 'Any Questions?'
                                : field}
                          </label>
                          <Field
                            type={field === 'Main Contact Email Address' ? 'email' : 'text'}
                            name={fieldKebab}
                            id={fieldKebab}
                            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main text-base`}
                            placeholder={field === 'Youtube Link' ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' : null}
                          />
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
                  Submit{' '}
                  <ArrowRightIcon className="ml-2 h-6 w-6 text-white" />
                </button>
              </div>
              <span className="text-gray-600 mt-3 text-lg">
                {isSubmitting && "Submitting..."}
                {submitted && "Your presentation was submitted successfully!"}
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Submit

const RegisterSchema = Yup.object().shape({
  teamName: Yup.string()
    .max(50, 'Name too long.')
    .required('Team name required.'),
  teamLeaderFirstName: Yup.string()
    .max(50, 'Name too long.')
    .required('First name required.'),
  teamLeaderLastName: Yup.string()
    .max(50, 'Name too long.')
    .required('Last name required.'),
  mainContactEmailAddress: Yup.string()
    .email('Invalid email.')
    .required('Contact email required'),
  youtubeLink: Yup.string().
    url('Invalid link').
    required('Submission Link Required'),
  questions: Yup.string()
})
