/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import UpdateForm from '../UpdateForm';
import { fetchUserInfo } from '../../../store/actions/profileAction';

const UpdateProfile = ({ userData, GetUserProfile }) => {
  useEffect(() => {
    GetUserProfile();
  }, []);

  return (
    <div className="bg-gray-100 grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout  ">
      <NavBar userData={userData} />
      <SideBar />
      <UpdateForm userData={userData} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userProfile.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetUserProfile: () => dispatch(fetchUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
