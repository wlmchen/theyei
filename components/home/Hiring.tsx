import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hiring() {
  const [showModal, setShowModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('hideHiringModal') === 'yes') {
      setDeleteModal(true)
    } else if (localStorage.getItem('hideHiringModal') === null) {
      localStorage.setItem('hideHiringModal', 'no')
    }
    setTimeout(() => setShowModal(true), 5000)
  }, [])

  const handleClick = () => {
    setOpenModal(true)
  }

  const handleDelete = () => {
    setDeleteModal(true)
    localStorage.setItem('hideHiringModal', 'yes')
  }

  return (
    <>
      {!deleteModal ? (
        <button
          className={`fixed bottom-4 right-4 z-50 max-w-xs ${
            openModal ? 'cursor-auto' : 'cursor-pointer'
          }`}
          onClick={handleClick}
        >
          <div
            className={`relative w-full rounded-xl rounded-br-none px-5 hiring-modal-transition overflow-hidden ${
              openModal
                ? 'bg-white shadow-xl py-5 max-h-96'
                : 'bg-yei-primary-main shadow-xlGreen cursor-pointer hover:bg-yei-primary-lighter py-2 max-h-12'
            } ${showModal ? 'block slide-in-from-right' : 'hidden'}`}
          >
            {openModal ? (
              <div
                className="absolute top-2 right-2 z-30 cursor-pointer"
                onClick={handleDelete}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="h-4 w-4 text-gray-300"
                />
              </div>
            ) : (
              ''
            )}
            <h3
              className={`text-lg font-semibold mb-2 ${
                openModal ? 'text-black' : 'text-white'
              }`}
            >
              Guess what? We're hiring!
            </h3>
            <div>
              <p className="text-gray-400 mb-4">
                Passionate about what we do? Want to join an international team
                of leaders, creators, and economics enthusiasts?
              </p>
              <Link href="/people/apply">
                <div className="w-full trans-300 bg-yei-primary-main border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yei-primary-darker focus:outline-none cursor-pointer">
                  Apply Now!
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`-mr-1 ml-3 h-4 w-4`}
                  />
                </div>
              </Link>
            </div>
          </div>
        </button>
      ) : (
        ''
      )}
    </>
  )
}
