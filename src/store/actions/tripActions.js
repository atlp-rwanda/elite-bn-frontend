/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import {
  TRIP_CREATE_FAIL,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_SUCCESS,
} from '../../constants/tripConstants'

const url = 'https://elite-staging.herokuapp.com/trip'

export const createTrip = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRIP_CREATE_REQUEST,
    })

    const {
      newState: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(`${url}/`, config)

    dispatch({
      type: TRIP_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRIP_CREATE_FAIL,
      payload: error.response.data.message,
    })
  }
}
