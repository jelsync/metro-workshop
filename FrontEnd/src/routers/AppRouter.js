import React, { useContext, useEffect, useState } from "react";
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
    const userLogged = JSON.parse(localStorage.getItem('uid'));

    const [client, setClient] = useState([]);
    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () => {
        const resp = await fetch(`http://localhost:4000/api/client`);
        const body = await resp.json();
        const { clients } = body;
        setClient(clients);
    };

    let admin = client.map((admin) => {
        if (admin.isAdmin) {
            return (admin.uid)
        }
    })
    let [uid] = admin;
    const isAdmin = userLogged === uid ? true : false;

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: types.login,
                    payload: {
                        name: user.displayName,
                    }
                });
            }
        });
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged && !isAdmin} />
                <PublicRoute exact path="/create-user" component={CreateUserScreen} isAuthenticated={user.logged && !isAdmin} />

                <PublicAdminRoute exact path="/admin/login" component={LoginAdminScreen} isAuthenticated={user.logged && isAdmin} />
                <PrivateAdminRoute path="/admin" component={AdminRouter} isAuthenticated={user.logged && isAdmin} />

                <PrivateRoute path="/" component={DashboardRouter} isAuthenticated={user.logged && !isAdmin} />
            </Switch>
        </Router>
    )
}
