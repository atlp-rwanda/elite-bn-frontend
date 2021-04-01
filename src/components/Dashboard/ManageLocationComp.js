/* eslint-disable react/prop-types */
import React from 'react'
import LocationNavLink from './LocationNavLink'
import LocationT from './LocationT'

const ManageLocationComp = (props) => {

  return (
    <>
      <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12 h-screen">
        <LocationNavLink />
        <LocationT />
      </div>
    </>
  )
}

export default ManageLocationComp
