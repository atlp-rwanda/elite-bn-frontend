/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logoutActionCreator } from '../../../store/actions/LogoutAction'
import { fetchUserInfo } from '../../../store/actions/profileAction'
import NavBar from '../NavBar'
import Footer from '../Footer'
import SideBar from '../Sidebar'
import BookAccommodation from './bookAccommodations'

export const DashBoard = ({
  Logout,
  LogoutAction,
  userData,
  GetUserProfile,
}) => {
  const token = localStorage.getItem('jwtToken')
  useEffect(() => {
    GetUserProfile()
  }, [])
  return (
    <>
      {token ? (
        <div className="bg-white grid grid-cols-12 h-full  grid-rows-mdScreen md:grid-rows-layout">
          <NavBar
            userData={userData}
            LogoutAction={LogoutAction}
            Logout={Logout}
          />
          <BookAccommodation className="w-full col-end-13" />
          <SideBar />
          <Footer />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
