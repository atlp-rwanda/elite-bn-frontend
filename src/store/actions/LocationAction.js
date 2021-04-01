import axios from 'axios';
import { GET_LOCATIONS } from './ActionTypes';
import { CREATE_LOCATION, DELETE_LOCATION } from './ActionTypes';

// Get Locations
export const getLocations = () => dispatch => {
  axios
    .get('https://elite-staging.herokuapp.com/api/v1/locations/read')
    .then(res =>
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LOCATIONS,
        payload: null
      })
    );
};


// Create location
export const createLocation = (formData, history) => async dispatch => {

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'permission_name': 'c_accomodation'
      }
    }

    const res = await axios.post('https://elite-staging.herokuapp.com/api/v1/locations/create', formData, config)
    dispatch({
      type: CREATE_LOCATION,
      payload: res.data
    });
    history.push('/dashboard/location/manage');

  } catch (err) {
    dispatch({
      type: CREATE_LOCATION,
      payload: null
    })
  }
};

// Delete location
export const deleteLocation = (id) => async dispatch => {

  try {
    const config = {
      headers: {
        'permission_name': 'c_accomodation'
      }
    }

    const res = await axios.delete(`https://elite-staging.herokuapp.com/api/v1/locations/delete/${id}`, config);

    dispatch({
      type: DELETE_LOCATION,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: DELETE_LOCATION,
      payload: null
    })
  }

}

