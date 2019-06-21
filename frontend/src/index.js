import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import reducers from './main/reducers'

import AppLoginOrAppLogof from './main/AppLoginOrAppLogof';

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
       
const store = applyMiddleware(multi, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <AppLoginOrAppLogof />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
