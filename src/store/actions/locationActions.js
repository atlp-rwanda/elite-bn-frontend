/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  LOCATION_LIST_FAIL,
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
} from '../../constants/locationConstants';

const url = 'https://elite-staging.herokuapp.com/api/v1/locations';

export const listLocation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOCATION_LIST_REQUEST,
    });

    const {
      newState: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${url}/read`, config);

    dispatch({
      type: LOCATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOCATION_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
