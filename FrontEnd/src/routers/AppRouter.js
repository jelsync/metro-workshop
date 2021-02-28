import React, { useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { DashboardRouter } from "./DashboardRouter";
import { firebase } from '../firebase/firebase-config';
import { AdminRouter } from "./AdminRouter";
import '../styles/login.css';
import { types } from "../types/types";
import { LoginAdminScreen } from "../components/login/LoginAdminScreen";

import { PrivateAdminRoute } from "./PrivateAdminRoute";
import { PublicAdminRoute } from "./PublicAdminRoute";

export const AppRouter = () => {
    const { user, dispatch } = useContext(AuthContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: types.login,
                    payload: {
                        name: user.displayName,
                    }
                });
            } else {
                console.log('You must authenticate');
            }
        });
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
                <PublicRoute exact path="/create-user" component={CreateUserScreen} isAuthenticated={user.logged} />

                <PublicAdminRoute exact path="/admin/login" component={LoginAdminScreen} isAuthenticated={user.logged} />
                <PrivateAdminRoute path="/admin" component={AdminRouter} isAuthenticated={user.logged} />

                <PrivateRoute path="/" component={DashboardRouter} isAuthenticated={user.logged} />
            </Switch>
        </Router>
    )
}
