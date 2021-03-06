import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {store} from "./store"

import {App} from './App';

import "./index.css";
import "normalize.css";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));

