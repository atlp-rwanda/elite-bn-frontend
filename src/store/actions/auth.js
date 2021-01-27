import axios from 'axios';

import {
  AUTH_START, AUTH_SUCCESS, AUTH_FAIL,
} from '../../constants/actionTypes';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (authData) => ({
  type: AUTH_SUCCESS,
  authData,
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  error,
});

export const auth = (firstName, lastName, email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    firstName,
    lastName,
    email,
    password,
  };
  console.log(authData);
  const url = 'http://127.0.0.1:3000/api/v1/users/signup';
  axios.post(url, authData)
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      const message = ((error.response && error.response.data)
      && (error.response.data.message || error.response.data.Message))
      || error.message || error.toString();
      dispatch(authFail(message));
    });
};
