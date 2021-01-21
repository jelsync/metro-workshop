import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { DashboardRouter } from "./DashboardRouter";


export const AppRouter = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/CreateUserScreen" component={CreateUserScreen} />

                <Route path="/" component={DashboardRouter} />

            </Switch>

        </Router>

    )
}
