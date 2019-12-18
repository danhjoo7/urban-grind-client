import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import App from './App';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
