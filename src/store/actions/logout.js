import { LOGOUT_SUCCESS, LOGOUT_FAILED } from './ActionTypes';
import { setAuthHeader } from '../utility';

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailed = () => ({
  type: LOGOUT_FAILED,
});
export const fetchLogout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthHeader(false);
  dispatch(logoutSuccess());
};
