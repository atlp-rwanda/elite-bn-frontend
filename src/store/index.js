import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import counterReducer from './reducers/counter';
import resultReducer from './reducers/result';
import User from './reducers/user';
import { setAuthHeader } from './utility';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  User: User,
});

const logger = () => (next) => (action) => {
  const result = next(action);
  return result;
};

const composeEnhancers = composeWithDevTools || compose;
setAuthHeader(localStorage.Authorization);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
