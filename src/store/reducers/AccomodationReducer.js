import {
  GET_ACCOMODATIONS, DELETE_ACCOMODATION, CREATE_ACCOMODATION
} from '../actions/ActionTypes'


const initialState = {
  accomodations: [],
  accomodation: null,
  loading: false

};

export default function (state = initialState, action) {

  const { type, payload } = action;
  switch (type) {

    case GET_ACCOMODATIONS:
    case DELETE_ACCOMODATION:
      return {
        ...state,
        accomodations: payload,
        loading: false
      };

    case CREATE_ACCOMODATION:
      return {
        ...state,
        accomodation: payload,
        loading: false
      };



    default:
      return state;
  }
}
