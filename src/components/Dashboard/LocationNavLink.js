/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const LocationNavLink = (props) => {

  return (

    <div>
      <Link to="/dashboard/location/create">
        <button className="text-sm text-blackColor1 font-semibold ml-1 border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-blue-700 rounded">LOCATION ADDRESS</button>
      </Link>
      <Link to="/dashboard/location/manage">
        <button className="text-sm text-blackColor1 font-semibold ml-1  border-2 border-blackColor1 hover:border-blackColor2 p-1 hover:text-blue-700 rounded ml-2">MANAGE LOCATION</button>
      </Link>
    </div>

  )
}

export default LocationNavLink
