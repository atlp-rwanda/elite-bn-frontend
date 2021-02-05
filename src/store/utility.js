import axios from 'axios';

export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});
export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
