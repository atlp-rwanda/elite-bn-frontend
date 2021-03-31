/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logoutActionCreator } from '../../../store/actions/LogoutAction'
import { fetchUserInfo } from '../../../store/actions/profileAction'
import Footer from '../Footer'
import NavBar from '../NavBar'
// import Profile from '../Profile'
import SideBar from '../Sidebar'

const CreateTravelRequest = ({
  userData,
  GetUserProfile,
  LogoutAction,
  Logout,
}) => {
  useEffect(() => {
    GetUserProfile()
  }, [])
  return (
    <div className="bg-gray-100 grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout  ">
      <NavBar userData={userData} LogoutAction={LogoutAction} Logout={Logout} />
      <SideBar />
      <div className="col-start-3 min-h-screen  row-start-2  col-end-13 p-4 md:p-12">
        <h1 className="text-center">Hello elite</h1>
      </div>
      <Footer />
    </div>
  )
}
export const mapStateToProps = (state) => ({
  Logout: state.user,
  userData: state.userProfile.userData,
})

export const mapDispatchToProps = (dispatch) => ({
  GetUserProfile: () => dispatch(fetchUserInfo()),
  LogoutAction: () => dispatch(logoutActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTravelRequest)
