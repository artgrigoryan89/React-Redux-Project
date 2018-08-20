import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './app';
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
