import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/userInterface/Navbar';

import { HomeArticlesScreen } from "../components/articles/HomeArticlesScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { KitchenScreen } from "../components/kitchen/KitchenScreen";
import { RoomScreen } from "../components/room/RoomScreen";

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/HomeArticlesScreen" component={HomeArticlesScreen} />
                <Route exact path="/BuyScreen" component={BuyScreen} />
                <Route exact path="/KitchenScreen" component={KitchenScreen} />
                <Route exact path="/RoomScreen" component={RoomScreen} />



                <Redirect to="/HomeArticlesScreen" />

            </Switch>
        </>
    )
}
