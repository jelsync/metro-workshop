import React, { useContext, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
import { AdministratorRoute } from "./AdministratorRoute";
import { types } from "../types/types";

export const AppRouter = () => {
    const { dispatch } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: types.login,
                    payload: {
                        name: user.displayName
                        // payload: localStorage.setItem('user', JSON.stringify (user.uid))
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
                <AdministratorRoute path="/admin" component={AdminRouter} isAuthenticated={user.logged} />
                <PrivateRoute path="/" component={DashboardRouter} isAuthenticated={user.logged} />
            </Switch>
        </Router>
    )
}
