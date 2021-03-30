import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoutes = ({ isSuperAdmin, component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (isSuperAdmin ?   <Redirect to="/dashboard" /> : <Component {...props} />)} />
);

AuthRoutes.propTypes = {
	component: PropTypes.func.isRequired
};

 function mapStateToProps(){
    const user =  JSON.parse(localStorage.getItem('userInfo'))
    return {
        isSuperAdmin:user ? user : null
    }
}

export default connect(mapStateToProps)(AuthRoutes);
