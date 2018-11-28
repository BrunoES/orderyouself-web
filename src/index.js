import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import AuthOrApp from './main/authOrApp'
//import Auth from './auth/auth';
//import Dashboard from './dashboard/dashboard';
//import './common/template/dependencies';
import reducers from './main/reducers';
import authOrApp from './main/authOrApp';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
, document.getElementById('app'))

registerServiceWorker()