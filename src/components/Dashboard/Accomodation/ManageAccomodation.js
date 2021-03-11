import React from 'react'
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import { useSelector } from 'react-redux';
import CreateAccomodation from './CreateAccomodation';


export default function createAccomodation() {
  const userData = useSelector(state => state.userProfile.userData)

  return (
    <div className="">
      <NavBar userData={userData} />
      <div className="flex pr-14">
        <SideBar />
        <div className="flex justify-center items-start w-full">
          <CreateAccomodation />
        </div>
      </div>

    </div>
  )
}
