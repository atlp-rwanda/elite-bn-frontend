import React from 'react'
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import { useSelector } from 'react-redux';
// import Accomodation from '../Accomodation/readAccomodation';
import Addaccomodation from '../Accomodation/addAccomoation'

export default function createAccomodation() {
    const userData = useSelector(state => state.userProfile.userData)
    return (
        <div className="">
            <NavBar userData={userData} />
            <div className="flex">
                <SideBar />
                {/* <Accomodation /> */}
                <Addaccomodation />
            </div>
            {/* <Footer /> */}
        </div >
    )
}
