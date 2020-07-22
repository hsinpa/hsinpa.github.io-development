import * as React from "react";
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Home from "./components/Home/Home";

import {Reducer} from "./Reducer/ReducerContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './stylesheet/main.scss';

const store = createStore(Reducer, {}, applyMiddleware(thunkMiddleware));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

        <Home></Home>

        </BrowserRouter>
    </Provider>,

    document.getElementById("hsinpa_portfolio")
)