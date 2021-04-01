/* eslint-disable import/prefer-default-export */

import {
  TRIP_CREATE_FAIL,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_SUCCESS,
} from '../../constants/tripConstants';

export const tripCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIP_CREATE_REQUEST:
      return { loading: true };
    case TRIP_CREATE_SUCCESS:
      return { loading: false, trip: action.payload };
    case TRIP_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
