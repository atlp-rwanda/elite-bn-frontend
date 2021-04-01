/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  TRIP_CREATE_FAIL,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_SUCCESS,
} from '../../constants/tripConstants';

const url = 'http://localhost:5000/api/v1/trips';

export const createTrip = (trip) => async (dispatch) => {
  try {
    dispatch({
      type: TRIP_CREATE_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `${localStorage.getItem('jwtToken')}`,
        permission_name: 'view_t_request',
      },
    };
    const { data } = await axios.post(`${url}/`, JSON.stringify(trip), config);

    dispatch({
      type: TRIP_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log();
    dispatch({
      type: TRIP_CREATE_FAIL,
      payload: error,
    });
  }
};
