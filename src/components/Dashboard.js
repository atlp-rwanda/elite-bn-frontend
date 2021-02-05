import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchLogout } from '../store/actions/logout';
import NavBar from './Dashboard/NavBar';
import SideBar from './Dashboard/SideBar';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard = ({ isLoggedIn, Logout }) => {
  const { isAuthenticated } = isLoggedIn;
  useEffect(() => {
    if (!isAuthenticated) {
      // eslint-disable-next-line no-alert
      alert('Unauthorized');
    } else {
      toast.success('user Logged successfully');
    }
  }, []);
  return (
    <div>
      <ToastContainer />
      {isAuthenticated ? (
        <>
          <NavBar Logout={Logout} LoggedInStatus={isAuthenticated} />
          <SideBar />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

const mapState = (state) => ({
  isLoggedIn: state.User,
});
const mapDispatchToProps = (dispatch) => ({
  Logout: () => dispatch(fetchLogout()),
});

Dashboard.protoTypes = {
  Logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.object,
};

export default connect(mapState, mapDispatchToProps)(Dashboard);
