import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import FocusError from '../../utility/FocusError'
import * as Yup from 'yup'
import camelCase from '../../../utils/camelCase'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import SignatureCanvas from 'react-signature-canvas'

interface Props { }

const Signup: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    const [canvas, setCanvas] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [fourth, setFourth] = useState(null)
    const fieldTypes = ['First Name', 'Last Name', 'Email', 'Grade', 'School']

    return (
        <div className="max-w-3xl w-full m-auto mb-16 px-6" id="register">
            <h2 className="mb-4 mx-auto px-5 text-left text-2xl font-extrabold tracking-tight sm:text-3xl">
                Interested? Signup!
            </h2>

            <Formik
                initialValues={{
                    fullName: '',
                    grade: '',
                    contactEmail: '',
                    school: '',
                    city: ''
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitted(false)
                    setSubmitting(true)
                    let data = new FormData()

                    data.append('Full Name', values.fullName)
                    data.append('Contact Email', values.contactEmail)
                    data.append('School', values.school)
                    data.append('City', values.city)
                    data.append('Grade', values.grade)

                    console.log(data)

                    fetch(`/api/flipSignup`, {
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
                                <div className="w-32">
                                    <label
                                        htmlFor="grade"
                                        className="block text-xl font-medium text-gray-700 py-2"
                                    >
                                        Grade{' '}
                                    </label>
                                    <Field
                                        type="text"
                                        name="grade"
                                        id="grade"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                                    />
                                    <ErrorMessage
                                        className="formik-error"
                                        component="div"
                                        name="grade"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex space-x-4 justify-center items-start">
                                <div className="w-full">
                                    <label
                                        htmlFor="school"
                                        className="block text-xl font-medium text-gray-700 py-2"
                                    >
                                        School Name{' '}
                                    </label>
                                    <Field
                                        type="text"
                                        name="school"
                                        id="school"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                                    />
                                    <ErrorMessage
                                        className="formik-error"
                                        component="div"
                                        name="school"
                                    />
                                </div>
                                <div className="w-full basis-1/2">
                                    <label
                                        htmlFor="city"
                                        className="block text-xl font-medium text-gray-700 py-2"
                                    >
                                        City{' '}
                                    </label>
                                    <Field
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                                    />
                                    <ErrorMessage
                                        className="formik-error"
                                        component="div"
                                        name="city"
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
                                    Signup{' '}
                                    <ArrowRightIcon className="ml-2 h-6 w-6 text-white" />
                                </button>
                            </div>
                            <span className="text-gray-600 mt-3 text-lg">
                                {isSubmitting && 'Submitting...'}
                                {error && 'An error occured'}
                                {submitted && 'Registered successfully!'}
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
    grade: Yup.number()
        .required("Grade required."),
    school: Yup.string()
        .required('School Name Required.'),
    city: Yup.string()
        .required("City Required."),
    contactEmail: Yup.string()
        .email("Valid Email Required.")
        .required("Email Required."),
})
