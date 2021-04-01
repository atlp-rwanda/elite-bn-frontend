/* eslint-disable react/prop-types */
import React from 'react'
import AccomodationNavLink from './AccomodationNavLink'
import ManageAccomodationForm from './ManageAccomodationForm'

const ManageAccomodationComp = (props) => {

  return (
    <>
      <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12 h-screen">
        <AccomodationNavLink />
        <ManageAccomodationForm />
      </div>
    </>
  )
}

export default ManageAccomodationComp
