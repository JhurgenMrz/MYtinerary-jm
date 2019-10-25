import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

import { App } from "./App";
import './index.css'

const store = createStore(
    reducer,
    {msg:"Hello World"},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() &&
    applyMiddleware(reduxThunk)
  )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"));
