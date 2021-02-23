import axios from 'axios';
import {
  RESET_PASSWORD,
  //   CHANGE_PASSWORD, RESET_FAIL, RESET_SUCESS,

} from '../../constants/actions';

export const forgotPassword = async (email) => {
  axios.post('https://elite-barefoot-api.herokuapp.com/api/v1/users/forgotPassword', { email }).then((response) => {
    console.log(response);
    return {
      type: RESET_PASSWORD,
      email,
      token: response.data.data.token,
      error: false,
      loading: true,
      message: response.data.data.message,
    };
  }).catch((err) => {
    console.log(err);
  });
};

export const newPassword = async (data, token) => {
  axios.put(`/users/reset-password/${token}`, data).then((response) => {
    console.log({ ...response.data });
  }).catch((err) => {
    console.log(err);
  });
};
