import initialState from './initialState';
import { LOGOUT_SUCCESS, LOGOUT_FAILED } from '../actions/ActionTypes';

const users = (state = initialState, action) => {
  const newState = action.payload;

  switch (action.type) {
    case 'LOGGEDIN':
      return { ...state, newState, isAuthenticated: true };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default users;
