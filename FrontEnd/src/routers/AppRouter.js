import React, { useContext } from "react";
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
// import { firebase } from '../firebase/firebase-config';
// import { clientLogin } from "../auth/clientAuth";
import { AdminRouter } from "./AdminRouter";
import '../styles/login.css';

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
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
                <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
                <PublicRoute exact path="/create-user" component={CreateUserScreen} isAuthenticated={user.logged} />
                <AdministratorRoute path="/admin" component={AdminRouter} isAuthenticated={user.logged} />
                <PrivateRoute path="/" component={DashboardRouter} isAuthenticated={user.logged} />
            </Switch>
        </Router>
    )
}
