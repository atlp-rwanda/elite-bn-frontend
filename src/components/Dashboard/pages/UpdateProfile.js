/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer'
import NavBar from '../NavBar'
import SideBar from '../Sidebar'
import UpdateForm from '../UpdateForm'
import { fetchUserInfo } from '../../../store/actions/profileAction'
import { logoutActionCreator } from '../../../store/actions/LogoutAction'

export const UpdateProfile = ({
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
      <UpdateForm userData={userData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)
