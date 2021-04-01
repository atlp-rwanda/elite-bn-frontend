/* eslint-disable */
import axios from 'axios'
import {
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_SUCCESS,
} from '../actions/ActionTypes'
const initialState = {
  notifications: [],
  error: {},
  loading: true,
}
const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_NOTIFICATION_REQUEST:
      return { ...state, notifications: [], error: {}, loading: true }
    case GET_NOTIFICATION_SUCCESS:
      return { ...state, notifications: payload, error: {}, loading: false }
    case GET_NOTIFICATION_FAILED:
      return { ...state, error: payload, loading: false, loading: false }
    default:
      return state
  }
}

export default notificationReducer
