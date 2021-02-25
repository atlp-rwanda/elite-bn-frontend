/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import 'react-toastify/dist/ReactToastify.css';
import accomodationImage from '../../assets/images/accomodationImage.png';
import { auth } from '../../store/actions/index';
import Header from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Footer';
import SocialSignin from '../../components/UI/socialSignin/socialSignin';
import Spinner from '../../components/UI/Spinner/Spinner';
import SignupSkeleton from '../../skeletons/Signup/SignupSkeleton';

const Auth = (props) => {
  let registerButton = <Button btnType="Success">Register</Button>;

  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setSkeleton(true);
    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (props.loading) {
    registerButton = (
      <Button btnType="Success" disabled>
        <Spinner />
        Register
      </Button>
    );
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    await props.onAuth(data.firstName, data.lastName, data.email, data.password);
    reset();
  };

  const { error, message } = props;

  useEffect(() => {
    if (message) {
      toast.success('Account created successfully, Check your email to verify the account.', {
        delay: 10000,
      });
      props.history.push({
        pathname: '/login',
      });
    } else if (error && error.includes('Network')) {
      toast.warning('Sorry, We are in troubleshoting the system');
    } else if (error) {
      toast.error(props.error);
    }
  }, [props.message, props.error]);

  return (
    <div className="bg-gray-100 w-full m-0">
      <Header />
      {skeleton && <SignupSkeleton />}
      {!skeleton && (
        <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
          <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">

            <div className=""></div>

          </div>
          <div className="col-start-3 hidden md:block">
            <img
              src={accomodationImage}
              alt="accomodation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (firstName, lastName, email, password) =>
    dispatch(auth(firstName, lastName, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
