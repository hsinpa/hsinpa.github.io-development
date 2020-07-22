import * as React from "react";
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Router from "./components/Layout/Router";

import {Reducer} from "./Reducer/ReducerContainer";
import { HashRouter, Route, Switch } from 'react-router-dom';

import './stylesheet/main.scss';

const store = createStore(Reducer, {}, applyMiddleware(thunkMiddleware));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>

        <Router></Router>

        </HashRouter>
    </Provider>,

    document.getElementById("hsinpa_portfolio")
)