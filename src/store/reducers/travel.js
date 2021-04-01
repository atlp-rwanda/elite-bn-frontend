/* eslint-disable no-unused-vars */
import { FETCH_TRAVEL_FAIL, FETCH_TRAVEL_START, FETCH_TRAVEL_SUCCESS } from '../../constants/actionTypes';
import updateObject from '../utility';
import { travelInitialState } from '../initialState';

const fetchStart = (state, action) => updateObject(state, { error: null, loading: true });

const fetchSuccess = (state, action) => updateObject(state, {
  error: null,
  loading: false,
  data: action.data,
});

const fetchFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const reducer = (state = travelInitialState, action) => {
  switch (action.type) {
    case FETCH_TRAVEL_START:
      return fetchStart(state, action);
    case FETCH_TRAVEL_SUCCESS:
      return fetchSuccess(state, action);
    case FETCH_TRAVEL_FAIL:
      return fetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
