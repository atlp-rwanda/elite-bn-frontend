import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import userReducer from './reducers/user'
import resetReducer from './reducers/reset'
import changeReducer from './reducers/change'
import userProfileReducer from './reducers/ProfileReducer'
import authReducer from './reducers/auth'
import setAuthorization from '../utils/setAuthorization'
import notificationReducer from './reducers/notificationReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  reset: resetReducer,
  change: changeReducer,
  userProfile: userProfileReducer,
  notify: notificationReducer,
})

const logger = () => (next) => (action) => {
  const result = next(action)
  return result
}
setAuthorization(localStorage.jwtToken)
const composeEnhancers = composeWithDevTools || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
)

export default store
