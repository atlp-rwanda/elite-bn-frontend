import React from 'react'
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
//import Footer from '../Footer';
import { useSelector } from 'react-redux';
import ReadAccomodation from '../Accomodation/readAccomodation';
//import Addaccomodation from '../Accomodation/addAccomoation'

export default function createAccomodation() {
    const userData = useSelector(state => state.userProfile.userData)
    return (
        <div className="">
            <NavBar userData={userData} />
            <div className="flex">
                <SideBar />
                <ReadAccomodation />
                {/* <Addaccomodation /> */}
            </div>
            {/* <Footer /> */}
        </div >
    )
}
