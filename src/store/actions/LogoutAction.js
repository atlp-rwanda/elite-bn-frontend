import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOGOUT_FAILED, LOGOUT_SUCCESS } from './ActionTypes';

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
const logoutFailed = () => ({
  type: LOGOUT_FAILED,
});
const token = localStorage.getItem('jwtToken');

const logoutActionCreator = () => (dispatch) => {
  if (token) {
    dispatch(logoutSuccess);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userInfo');
  } else {
    toast.error('User logout failed');

    dispatch(logoutFailed);
  }
};

export { logoutSuccess, logoutFailed, logoutActionCreator };
