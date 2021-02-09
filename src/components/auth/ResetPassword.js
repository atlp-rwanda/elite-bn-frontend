/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import FooterOne from '../FooterOne';
import HomeNavComponent from '../HomeNavComponent';
import ResetPasswordSkeleton from './ResetPasswordSkeleton';

import { reset } from '../../store/actions/index';
import ChangePassword from './ChangePassword';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  const newState = useSelector((state) => state);
  const [submitted, setSubmitted] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const forgotPassword = async () => {
    axios
      .post(
        'https://elite-barefoot-api.herokuapp.com/api/v1/users/forgotPassword',
        { email },
      )
      .then((response) => {
        console.log(token);
        setToken(response.data.data.token);
        setMessage(response.data.data.message);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HomeNavComponent />
      {loading && <ResetPasswordSkeleton />}
      {!loading && (
        <section className="bg-gray-100 p-6">
          <div className="bg-white rounded-2xl items-center content-center shadow-md p-6 sm:p-2">
            <div className="items-center md:m-6 md:p-6 xs:m-2 xs:p-2">
              <h3 className="text-primary-100 text-2xl content-center text-center mt-5">
                Reset password
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.OnReset(email, token, message);
                  setSubmitted(true);
                  if (email) {
                    dispatch(reset(email));
                    // dispatch(forgotPassword(email));
                    forgotPassword(newState.reset.email);
                    // dispatch(forgotPassword(newState.reset.email));
                  }
                }}
                className="content-center m-3 p-3 md:m-0.5 flex justify-center h-auto flex-col "
              >
                <div className="text-md content-center text-center m-2">
                  <h2 className="text-gray-700 xs:text-xs">Enter your email</h2>
                </div>
                <div className="m-3 p-3 flex flex-col justify-center items-center">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100"
                  />
                  <button
                    type="submit"
                    value="Submit"
                    name="submit"
                    className="w-1/2 sm:w-full border-primary-100 bg-primary-100 m-4 rounded content-center center shadow-md h-10 text-white"
                  >
                    Reset your password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      {error !== true && submitted === true && (token !== undefined || token !== '') && <ChangePassword token={token} /> }
      <FooterOne />
    </>
  );
};
const mapStateToProps = (state) => ({
  email: state.reset.email,
  token: state.reset.token,
  message: state.reset.message,
});

const mapDispatchToProps = (dispatch) => ({
  OnReset: (email, token, message) => dispatch(reset(email, token, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
