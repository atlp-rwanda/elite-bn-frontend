import axios from 'axios';
<<<<<<< HEAD
=======
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 1ddcb04 (feat(usersToManagers): assign users to managers)
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ASSIGN_USERS_TO_MANAGERS_START,
  ASSIGN_USERS_TO_MANAGERS_SUCCESS,
  ASSIGN_USERS_TO_MANAGERS_FAIL,
} from '../../constants/actionTypes';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  error,
});

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

export const assignUsersToManagersFail = (error) => ({
  type: ASSIGN_USERS_TO_MANAGERS_FAIL,
  error,
});

export const assignUsersToManagersStart = () => ({
  type: ASSIGN_USERS_TO_MANAGERS_START,
});

export const assignUsersToManagersSuccess = (assigned) => ({
  type: ASSIGN_USERS_TO_MANAGERS_SUCCESS,
  assigned,
});

export const assignUsersToManagers = (lineManagerId, id) => (dispatch) => {
  dispatch(assignUsersToManagersStart());
  const token = localStorage.getItem('jwtToken');
<<<<<<< HEAD
  const url = 'http://localhost:5000/api/v1/users/assign/manager';
=======
  const url = 'https://elite-staging.herokuapp.com/api/v1/users/assign/manager';
>>>>>>> 1ddcb04 (feat(usersToManagers): assign users to managers)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    lineManagerId,
    id,
  };

  axios
    .put(url, body, config)
    .then((res) => {
      const time = new Date().getTime();
      dispatch(assignUsersToManagersSuccess({ time }));
<<<<<<< HEAD
    })
    .catch((err) => {
      dispatch(assignUsersToManagersFail(err));
=======
      toast.success('User assigned succesfully');
    })
    .catch((err) => {
      dispatch(assignUsersToManagersFail(err));
      toast.error('User assign failed');
>>>>>>> 1ddcb04 (feat(usersToManagers): assign users to managers)
    });
};

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersStart());
  const token = localStorage.getItem('jwtToken');
<<<<<<< HEAD
  const url = 'http://localhost:5000/api/v1/users/getUser';
=======
  const url = 'https://elite-staging.herokuapp.com/api/v1/users/getUser';
>>>>>>> 1ddcb04 (feat(usersToManagers): assign users to managers)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(url, config)
    .then((res) => {
      const { data } = res.data;
      const fetchedUsers = [...data];
      dispatch(fetchUsersSuccess(fetchedUsers));
    })
    .catch((err) => {
      dispatch(fetchUsersFail(err));
    });
};
