/* eslint-disable react/prop-types */
import React from 'react'
import AccomodationNavLink from './AccomodationNavLink'
import AllAccomodationComp from './AllAccomodationComp'

const AllAccomodation = (props) => {

  return (
    <>
      <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12 h-max">
        <AccomodationNavLink />
        <AllAccomodationComp />
      </div>
    </>
  )
}

export default AllAccomodation
