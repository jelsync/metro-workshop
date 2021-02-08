import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { DashboardRouter } from "./DashboardRouter";
import { firebase } from '../firebase/firebase-config';
import { clientLogin } from "../auth/clientAuth";
import { AdminKitchenScreen } from "../components/adminKitchen/AdminKitchenScreen";
import { AdminRoomScreen } from "../components/adminRoom/AdminRoomScreen";
import { AdminRouter } from "./AdminRouter";

export const AppRouter = () => {
    // const [loggInd, setLoggInd] = useState(false)

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user?.uid) {
    //             clientLogin(user.email, user.uid);
    //             setLoggInd(true);
    //         } else {
    //             setLoggInd(false);
    //         }
    //     });
    // }, [setLoggInd])

    return (
        <Router>
            <Switch>
                <Route exact path="/admin" component={AdminRouter} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/CreateUserScreen" component={CreateUserScreen} />

                <Route path="/" component={DashboardRouter} />

            </Switch>

        </Router>

    )
}
