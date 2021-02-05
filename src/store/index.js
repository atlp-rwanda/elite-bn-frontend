import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import User from './reducers/user';

const rootReducer = combineReducers({
  User: User,
});

// setAuthHeader(localStorage.Authorization);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
