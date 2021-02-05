import { LOGOUT_FAILED, LOGOUT_SUCCESS } from '../../../store/actions/ActionTypes';

import userReducer from '../../../store/reducers/user';

describe('Logout reducers ', () => {
  let userLogoutReducer;

  test('Test logout  reducer for default  state', () => {
    userLogoutReducer = userReducer(undefined, {});
    expect(userLogoutReducer).toEqual({
      loading: false,
      isAuthenticated: false,
    });
  });
  test('Test logout success reducer', () => {
    userLogoutReducer = userReducer(undefined, { type: LOGOUT_SUCCESS });
    expect(userLogoutReducer).toEqual({
      loading: false,
      isAuthenticated: false,
    });
  });
  test('Test logout failed reducer', () => {
    userLogoutReducer = userReducer(undefined, { type: LOGOUT_FAILED });
    expect(userLogoutReducer).toEqual({
      loading: false,
      isAuthenticated: false,
    });
  });
});
