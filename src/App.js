import React from 'react';
import {Route, Switch} from "react-router-dom";

import {AppHeader} from "./components/AppHeader";

import {Form} from "./pages/Form";
import {Pallete} from "./pages/Pallete";

import "./App.scss"

export const App = () => {
    return (
        <div className="app">
            <div className="app-page">
                <AppHeader />
                <Switch>
                    <Route exact path="/" component={Form}/>
                    <Route exact path="/pallete" component={Pallete}/>
                </Switch>
            </div>
        </div>
    );
};



