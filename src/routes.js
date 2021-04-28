import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './style';

import NavBar from "./components/NavBar";
import Ticket from "./pages/Ticket";
import Development from "./pages/Development";

const Routes = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/overview" component={Development}/>
                <Route path="/ticket" component={Ticket}/>
                <Route path="/ideas" component={Development}/>
                <Route path="/contacts" component={Development}/>
                <Route path="/agents" component={Development}/>
                <Route path="/articles" component={Development}/>
                <Route path="/settings" component={Development}/>
                <Route path="/subscription" component={Development}/>
                <Route path="/" component={Development}/>
            </Switch>
            <GlobalStyle />
        </Router>
    )
}

export default Routes;