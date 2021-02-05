import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Toastify from 'toastify-js';
import Image from './image.png';
import { TextField } from './TextField';
import Navbar from './Navbar';
import axios from '../axios';
import 'toastify-js/src/toastify.css';
import setAthorizationToken from '../utils/setAuthorization';

export default function login({ history }) {
  const dispatch = useDispatch();
  const handleSubmit = (info) => {
    const { Email, Password } = info;
    axios.post('/users/signin', { email: Email, password: Password }).then((response) => {
      dispatch({ type: 'LOGGEDIN', payload: response.data.data });
      const { token } = response.data.data;
      localStorage.setItem('jwtToken', token);
      setAthorizationToken(token);

      Toastify({
        text: 'welcome to the profile page',
        duration: 3000,
        close: true,
        position: 'right',
        backgroundColor: 'green',
        color: 'white',
      }).showToast();




      history.push('/profile');
      
    }).catch((error) => {
      const getError = (error.response ? error.response.data.message : error);
     const errorMessage=[getError.details ? getError.details[0].message :getError]
      Toastify({
        text: errorMessage,
        duration: 3000,
        close: true,
        position: 'right',
        backgroundColor: 'red',
        color: 'white',
      }).showToast();
    });
  };
  const validate = Yup.object({
    Email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    Password: Yup.string()
      .required('Password is required'),
  });
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
          Email: '',
          Password: '',
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div className="flex w-full justify-between px-16">
            <div className="bg-red-500 h-auto hidden md:block">

              <img src={Image} className=" h-screen block md:block justify-self-start sm:hidden " alt="" />
            </div>
            <div className="h-auto">
              <section>
                <h1 className="py-6 text-2xl font-bold">Welcome Back !</h1>
                <p className="text-xs py-6 pt-2">You  have  been registered  on Barefoot-nomad .Please login with your email and password</p>
              </section>
              <section className="mt-10">
                <Form>
                  <div className="py-6">
                    <TextField label="Email" name="Email" type="text" />

                    <TextField label="Password" name="Password" type="password" />
                  </div>
                  <div className="py-6">
                    <button id="submit-button" onClick={() => handleSubmit(formik.values)} className="bg-indigo-600 text-white justify-center w-full h-8 rounded px-6" type="submit">Login</button>
                  </div>
                  <div className="flex justify-end text-purple-600 py-6 text-sm hover:text-purple-700 hover:underline hover:cursor-pointer mb-6">
                    Forgot password ?
                  </div>
                  <div className="space-y-5">
                    <div className="flex justify-between rounded border border-blue-600">
                      <div>
                        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="#" className="h-6 mt-1 ml-4" />
                      </div>
                      <div className="mt-2 text-gray-500">
                        Sign in With Google
                      </div>
                      <div className="mt-2" />

                    </div>
                    <div className="flex justify-between bg-blue-900 rounded h-8">
                      <div>
                        <img src="https://img.icons8.com/metro/48/ffffff/facebook-new.png" className="h-6 mt-1 ml-4" />
                      </div>
                      <div className="text-white">
                        Sign in With Facebook
                      </div>
                      <div className="mt-2" />
                    </div>

                  </div>
                </Form>
              </section>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
