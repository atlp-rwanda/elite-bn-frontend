/* eslint-disable */
import axios from 'axios'
import {
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_REQUEST,
} from './ActionTypes'

const fetchNotificationRequest = () => {
  return {
    type: GET_NOTIFICATION_REQUEST,
  }
}

export const fetchNotificationSuccess = (notifications) => {
  return {
    type: GET_NOTIFICATION_SUCCESS,
    payload: notifications,
  }
}

const fetchNotificationFailed = (error) => {
  return {
    type: GET_NOTIFICATION_FAILED,
    payload: error,
  }
}

export const fetchNotificationActionCreator = () => (dispatch) => {
  dispatch(fetchNotificationRequest)
  const url = 'https://elite-staging.herokuapp.com/api/v1/notifications'
  axios
    .get(url)
    .then((res) => {
      const notifyData = res.data.data
      console.log(notifyData)
      dispatch(fetchNotificationSuccess(notifyData))
    })
    .catch((err) => {
      dispatch(fetchNotificationFailed(err))
      console.log(err)
    })
}
