/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const LocationNavLink = (props) => {

  return (

    <div>
      <Link to="/dashboard/accomodation">
        <button className="text-sm text-blackColor1 font-semibold ml-1 border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-blue-700 rounded">ALL ACCOMODATION</button>
      </Link>
      <Link to="/dashboard/accomodation/create">
        <button className="text-sm text-blackColor1 font-semibold ml-1  border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-blue-700 rounded ml-2">CREATE ACCOMODATION</button>
      </Link>
      <Link to="/dashboard/accomodation/manage">
        <button className="text-sm text-blackColor1 font-semibold ml-1  border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-blue-700 rounded ml-2">MANAGE ACCOMODATION</button>
      </Link>

    </div>

  )
}

export default LocationNavLink
