import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import userReducer from './reducers/user';
import userProfileReducer from './reducers/ProfileReducer';
import setAuthorization from '../utils/setAuthorization';
import authReducer from './reducers/auth';
import accomodation from './reducers/accomodations';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  userProfile: userProfileReducer,
  accomodation: accomodation,
});
const logger = () => (next) => (action) => {
  const result = next(action);
  return result;
};

setAuthorization(localStorage.jwtToken);

const composeEnhancers = composeWithDevTools || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
