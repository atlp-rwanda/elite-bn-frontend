import axios from 'axios';
import { GET_ACCOMODATIONS, DELETE_ACCOMODATION, CREATE_ACCOMODATION } from './ActionTypes';



// Get Accomodations
export const getAccomodations = () => dispatch => {
  axios
    .get('https://elite-staging.herokuapp.com/api/v1/accomodations/read')
    .then(res =>
      dispatch({
        type: GET_ACCOMODATIONS,
        payload: res.data.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ACCOMODATIONS,
        payload: null
      })
    );
};


// Delete location
export const deleteAccomodation = (id) => async dispatch => {

  try {
    const config = {
      headers: {

        'permission_name': 'c_accomodation'
      }
    }

    const res = await axios.delete(`https://elite-staging.herokuapp.com/api/v1/accomodations/delete/${id}`, config);

    dispatch({
      type: DELETE_ACCOMODATION,
      payload: res.data
    });

    // history.push('/dashboard/Accomodation/Location/');

  } catch (err) {
    dispatch({
      type: DELETE_ACCOMODATION,
      payload: null
    })
  }

}

// Create accomodation
export const createAccomodation = (formData, history, edit = false) => async dispatch => {

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'permission_name': 'c_accomodation'
      }
    }

    const res = await axios.post('https://elite-staging.herokuapp.com/api/v1/accomodations/create', formData, config)
    dispatch({
      type: CREATE_ACCOMODATION,
      payload: res.data
    });
    history.push('/dashboard/Accomodation/ManageAccomodation');

  } catch (err) {


    dispatch({
      type: CREATE_ACCOMODATION,
      payload: {
        msg: err.response.data
      }
    });

  }
};

