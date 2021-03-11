import React from 'react'
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import { useSelector } from 'react-redux';
import LocationsComponent from './LocationsComponent';

export default function createLocation() {
  const userData = useSelector(state => state.userProfile.userData)

  return (
    <div className="">
      <NavBar userData={userData} />
      <div className="flex pr-14">
        <SideBar />

        <div className="flex justify-center items-start w-full">
          <LocationsComponent />
        </div>

      </div>
    </div>
  )
}
