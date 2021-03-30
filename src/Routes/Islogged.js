import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LoginRoute = ({ IsloggedIn, component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (IsloggedIn ?  <Component {...props} />  : <Redirect to="/login" /> )} />
);

LoginRoute.propTypes = {
	component: PropTypes.func.isRequired
};

 function mapStateToProps(){
    const user =  JSON.parse(localStorage.getItem('userInfo'))
    return {
        IsloggedIn:user ? user : null
    }
}

export default connect(mapStateToProps)(LoginRoute);
