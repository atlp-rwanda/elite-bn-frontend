import {
  GET_LOCATIONS, CREATE_LOCATION, DELETE_LOCATION
} from '../actions/ActionTypes'


const initialState = {
  location: null,
  locations: [],
  loading: false
};

export default function (state = initialState, action) {

  const { type, payload } = action;
  switch (type) {

    case GET_LOCATIONS:
    case DELETE_LOCATION:
      return {
        ...state,
        locations: payload,
        loading: false
      };

    case CREATE_LOCATION:
      return {
        ...state,
        location: payload,
        loading: false
      };

    default:
      return state;
  }
}
