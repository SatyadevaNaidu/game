import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import history from './history';
import Instructions from "./Instructions/Instructions";
import Options from "./Options/Options1";
import Game from "./components/Game2"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Instructions" component={Instructions} />
                    <Route path="/Options" component={Options} />
                    <Route path="/Game" component={Game}/>
                </Switch>
            </Router>
        )
    }
}
