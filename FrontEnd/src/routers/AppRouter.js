import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { DashboardRouter } from "./DashboardRouter";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";
import { firebase } from '../firebase/firebase-config';
import { userLogin } from "../auth/userAuth";

export const AppRouter = () => {
    const [loggInd, setLoggInd] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                userLogin(user.email, user.uid);
                setLoggInd(true);
            } else {
                setLoggInd(false);
            }
        });
    }, [setLoggInd])

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
