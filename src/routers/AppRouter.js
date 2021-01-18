import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { BedroomScreen } from "../components/bedroom/BedroomScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { KitchenScreen } from "../components/kitchen/KitchenScreen";
import { CreateUserScreen } from "../components/login/CreateUserScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { OthersScreen } from "../components/others/OthersScreen";
import { RoomScreen } from "../components/room/RoomScreen";


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route path="/BedroomScreen" component={ BedroomScreen }/>
                    <Route path="/BuyScreen" component={ BuyScreen }/>
                    <Route path="/KitchenScreen" component={ KitchenScreen }/>
                    <Route path="/CreateUserScreen" component={ CreateUserScreen }/>
                    <Route path="/LoginScreen" component={ LoginScreen }/>
                    <Route path="/RoomScreen" component={ RoomScreen }/>
                    <Route path="/OthersScreen" component={ OthersScreen }/>

                </Switch>
            </div>
        </Router>

    )
}
