import React from 'react'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./Home.js";
import Navbar from '../Navbar/Navbar.js';
import Eleve from '../Eleve/Eleve.js';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Navbar} />
                    <Route path="/eleve" exact component={Eleve} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
