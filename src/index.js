import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';
import './styles.css';
import setAthorizationToken from './utils/setAuthorization';

setAthorizationToken(localStorage.jwtToken);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
