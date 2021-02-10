import axios from 'axios';
import jwt from 'jsonwebtoken';

import { USER_PROFILE_DATA, USER_PROFILE, USER_PROFILE_FAILED } from './ActionTypes';

const getUserProfile = (id) => {
  return {
    type: USER_PROFILE,
    payload: id,
  };
};

const getUserProfileData = (user) => {
  return {
    type: USER_PROFILE_DATA,
    payload: user,
  };
};

const getUserProfileDataFailed = (error) => {
  return {
    type: USER_PROFILE_FAILED,
    payload: error,
  };
};

const fetchUserInfo = () => {
  const user = jwt.decode(localStorage.getItem('jwtToken'));
  const { id } = user;
  return (dispatch) => {
    dispatch(getUserProfile(id));
    axios
      .get(`http://localhost:5000/api/v1/users/profile/${id}`)
      .then((res) => {
        const userData = res.data.data;
        dispatch(getUserProfileData(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUserProfileDataFailed(errorMsg));
      });
  };
};

export { getUserProfileDataFailed, fetchUserInfo, getUserProfile };
