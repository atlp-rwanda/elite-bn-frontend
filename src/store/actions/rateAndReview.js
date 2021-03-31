import axios from 'axios';
import { FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAIL,SAVE_REVIEWS_SUCCESS, SAVE_REVIEWS_FAIL,FETCH_RATING_SUCCESS, FETCH_RATING_FAIL,SAVE_RATING_SUCCESS, SAVE_RATING_FAIL } from './ActionTypes';

export const fetchReviews = () => async (dispatch) => {
  const authHeader = localStorage.getItem('jwtToken');
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://elite-staging.herokuapp.com/api/v1/review/allreviews',
      headers: {
        Authorization: `Bearer: ${authHeader}`,
      },
    });
    const { data } = res;
    dispatch({
      type: FETCH_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else if (error.message) {
      console.log(error.message);
    }
    dispatch({
      type: FETCH_REVIEWS_FAIL,
      payload: error.message,
    });
  }
};
export const saveReview = (body) => async (dispatch) => {
  const authHeader = localStorage.getItem('jwtToken');
  try {
    await axios({
      method: 'POST',
      url: 'https://elite-staging.herokuapp.com/api/v1/review/review',
      headers: {
        Authorization: `Bearer: ${authHeader}`,
      },
      data: body
    });
    dispatch({
      type: SAVE_REVIEWS_SUCCESS,
      payload: data,
    });
    console.log('data..........................');
    console.log(data);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else if (error.message) {
      console.log(error.message);
    }
    dispatch({
      type: SAVE_REVIEWS_FAIL,
      payload: error.message,
    });
  }
}

export const fetchRatings = () => async (dispatch) => {
  const authHeader = localStorage.getItem('jwtToken');
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://elite-staging.herokuapp.com/api/v1/rating/accomodationratings',
      headers: {
        Authorization: `Bearer: ${authHeader}`,
      },
    });
    const { data } = res;
    dispatch({
      type: FETCH_RATING_SUCCESS,
      payload: data,
    });
    console.log(data)
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else if (error.message) {
      console.log(error.message);
    }
    dispatch({
      type: FETCH_RATING_FAIL,
      payload: error.message,
    });
  }
};

export const saveRating = (body) => async (dispatch) => {
  const authHeader = localStorage.getItem('jwtToken');
  try {
    await axios({
      method: 'POST',
      url: 'https://elite-staging.herokuapp.com/api/v1/rating/rate',
      headers: {
        Authorization: `Bearer: ${authHeader}`,
      },
      data: body
    });
    dispatch({
      type: SAVE_RATING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else if (error.request) {
      console.log(error.request);
    } else if (error.message) {
      console.log(error.message);
    }
    dispatch({
      type: SAVE_RATING_FAIL,
      payload: error.message,
    });
  }
}
