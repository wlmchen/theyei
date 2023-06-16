import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import * as Yup from 'yup'

interface Props { }

const Signup: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    return (
        <div className="max-w-3xl w-full m-auto mb-16 px-6 mt-16" id="submit">
            <div className="space-y-2 text-lg text-gray-600 mb-8">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
                    Register Now!
                </h2>
            </div>

            <Formik
                initialValues={{
                    fullName: '',
                    contactEmail: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitted(false)
                    setSubmitting(true)
                    setError(false)
                    let data = new FormData()

                    data.append('Full Name', values.fullName)
                    data.append('Contact Email', values.contactEmail)

                    console.log(data)

                    fetch(`/api/flip`, {
                        method: 'POST',
                        // mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(Object.fromEntries(data)),
                    }).then((response) => {
                        setError(false)
                        if (response.ok) {
                            resetForm({})
                            setSubmitted(true)
                            setSubmitting(false)
                        } else {
                            setError(true)
                            setSubmitting(false)
                        }
                    })
                }}
            >
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
                            <div className="w-full flex space-x-4 justify-center items-start">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-xl font-medium text-gray-700 py-2"
                                    >
                                        Full Name{' '}
                                    </label>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                                    />
                                    <ErrorMessage
                                        className="formik-error"
                                        component="div"
                                        name="fullName"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="contactEmail"
                                    className="block text-xl font-medium text-gray-700 py-2"
                                >
                                    Email Address{' '}
                                </label>
                                <Field
                                    type="text"
                                    name="contactEmail"
                                    id="contactEmail"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                                />
                                <ErrorMessage
                                    className="formik-error"
                                    component="div"
                                    name="contactEmail"
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
                                {isSubmitting && 'Submitting...'}
                                {error && <span className="text-red-500">An error occured</span>}
                                {submitted && 'Submitted successfully!'}
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
    fullName: Yup.string()
        // .max(50, 'Name too long.')
        .required('Full name required.'),
    contactEmail: Yup.string()
        .email("Valid Email Required.")
        .required("Email Required.")
})
