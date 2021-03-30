import axios from 'axios';
import { successToast, errorToast } from '../../utils/toast';

import { FETCH_TRAVEL_START, FETCH_TRAVEL_SUCCESS, FETCH_TRAVEL_FAIL } from '../../constants/actionTypes';

export const travelStart = () => ({
  type: FETCH_TRAVEL_START,
});

export const travelSuccess = (data) => ({
  type: FETCH_TRAVEL_SUCCESS,
  data,
});

export const travelFail = (error) => ({
  type: FETCH_TRAVEL_FAIL,
  error,
});

export const travel = (page, itemsPerPage) => (dispatch) => {
  dispatch(travelStart());
  const url = `https://elite-staging.herokuapp.com/api/v1/trips/${page}/${itemsPerPage}`;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      permission_name: 'view_t_request',
    },
  };
  axios
    .get(url, config)
    .then((response) => {
      successToast(null, response.data.message);
      const { data } = response.data;
      dispatch(travelSuccess(data));
    })
    .catch((error) => {
      errorToast('Failed to get travel requests');
      dispatch(travelFail(error));
    });
};

export const editTravelRequest = (tRequest, page) => (dispatch) => {
  dispatch(travelStart());
  const url = `https://elite-staging.herokuapp.com/api/v1/trips/update-travel-request/${tRequest.id}`;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      permission_name: 'edit_t_request',
    },
  };
  axios
    .patch(url, tRequest, config)
    .then((response) => {
      successToast(null, response.data.message);
      dispatch(travel(page));
    })
    .catch((error) => {
      errorToast('Failed to edit the travel request');
      dispatch(travelFail(error));
    });
};

export const manageTravelRequest = (action, tRequests, page) => (dispatch) => {
  dispatch(travelStart());
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  };

  for (let i = 0; i < tRequests.length; i += 1) {
    let url = 'https://elite-staging.herokuapp.com/api/v1/trips/';
    switch (action) {
      case 'approve':
        config.headers.permission_name = 'approve_reports';
        url = `${url}approve-travel-request/${tRequests[i].id}`;
        axios
          .patch(url, null, config)
          .then((response) => {
            successToast(null, response.data.message);
            dispatch(travel(page));
          })
          .catch((error) => {
            errorToast('Failed to approve the travel requests');
            dispatch(travelFail(error));
          });
        break;
      case 'reject':
        config.headers.permission_name = 'reject_reports';
        url = `${url}reject-travel-request/${tRequests[i].id}`;
        axios
          .patch(url, null, config)
          .then((response) => {
            successToast(null, response.data.message);
            dispatch(travel(page));
          })
          .catch((error) => {
            errorToast('Failed to reject the travel requests');
            dispatch(travelFail(error));
          });
        break;
      case 'cancel':
        config.headers.permission_name = 'cancel_reports';
        url = `${url}cancel-travel-request/${tRequests[i].id}`;
        axios
          .patch(url, config)
          .then((response) => {
            successToast(null, null, response.data.message);
            dispatch(travel(page));
          })
          .catch((error) => {
            errorToast('Failed to cancle the travel requests');
            dispatch(travelFail(error));
          });
        break;
      default:
        errorToast('Action is required');
        dispatch(travelFail('Action is required'));
    }
  }
};
