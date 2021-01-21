import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';

const myStore = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
<Provider store ={myStore}>
<App />
</Provider>
</React.StrictMode>,
 document.getElementById('root'));


