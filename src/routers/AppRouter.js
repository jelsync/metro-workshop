import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { HomeArticlesScreen } from "../components/articles/HomeArticlesScreen";
import { BedroomScreen } from "../components/bedroom/BedroomScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { KitchenScreen } from "../components/kitchen/KitchenScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { OthersScreen } from "../components/others/OthersScreen";
import { RoomScreen } from "../components/room/RoomScreen";
import { Navbar } from "../components/userInterface/Navbar";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ HomeArticlesScreen }/>
                    <Route exact path="/BedroomScreen" component={ BedroomScreen }/>
                    <Route exact path="/BuyScreen" component={ BuyScreen }/>
                    <Route exact path="/KitchenScreen" component={ KitchenScreen }/>
                    <Route exact path="/RoomScreen" component={ RoomScreen }/>
                    <Route exact path="/OthersScreen" component={ OthersScreen }/>
                    <Route exact path="/LoginScreen" component={ LoginScreen }/>
                    <Route exact path="/CreateUserScreen" component={ CreateUserScreen }/>

                    <Redirect to="/"/>

                </Switch>
            </div>
        </Router>

    )
}
