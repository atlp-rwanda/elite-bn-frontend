/* eslint-disable react/prop-types */
import React from 'react'
import LocationNavLink from './LocationNavLink'
import LocationForm from './LocationForm'

const CreateLocationComp = (props) => {

  return (
    <>
      <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12 h-screen">
        <LocationNavLink />
        <LocationForm />
      </div>
    </>
  )
}

export default CreateLocationComp
