/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  ACCOMODATION_LIST_FAIL,
  ACCOMODATION_LIST_REQUEST,
  ACCOMODATION_LIST_SUCCESS,
} from '../../constants/accomodationConstants';

const url = 'https://elite-staging.herokuapp.com/api/v1/accomodations';

export const listAccomodation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACCOMODATION_LIST_REQUEST,
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
      type: ACCOMODATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACCOMODATION_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
