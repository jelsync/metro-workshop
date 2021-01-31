import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { DashboardRouter } from "./DashboardRouter";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/CreateUserScreen" component={CreateUserScreen} />

                <Route exact path="/admin" component={NavbarAdmin} />
                
                <Route path="/" component={DashboardRouter} />

            </Switch>

        </Router>

    )
}
