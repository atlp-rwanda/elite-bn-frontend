import userReducer from '../../../store/reducers/user';
describe('testing user login reducers ', () => {
  let userLoginReducer;
  let newState;
  test('Testing reducer for default  state', () => {
    userLoginReducer = userReducer(undefined, {});
    expect(userLoginReducer).toEqual({});
  });
  test('Testing reducer for default  state', () => {
    userLoginReducer = userReducer(undefined, { type: 'LOGGEDIN' });
    expect(userLoginReducer).toEqual(newState);
  });
});
