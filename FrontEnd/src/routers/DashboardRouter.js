import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/userInterface/Navbar';

import { HomeArticlesScreen } from "../components/articles/HomeArticlesScreen";
import { BedroomScreen } from "../components/bedroom/BedroomScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { KitchenScreen } from "../components/kitchen/KitchenScreen";
import { OthersScreen } from "../components/others/OthersScreen";
import { RoomScreen } from "../components/room/RoomScreen";
import { AdminBedroomScreen } from '../components/adminBedroom/AdminBedroomScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/HomeArticlesScreen" component={HomeArticlesScreen} />
                <Route exact path="/BedroomScreen" component={BedroomScreen} />
                <Route exact path="/BuyScreen" component={BuyScreen} />
                <Route exact path="/KitchenScreen" component={KitchenScreen} />
                <Route exact path="/RoomScreen" component={RoomScreen} />
                <Route exact path="/OthersScreen" component={OthersScreen} />

                <Route exact path="/AdminBedroom" component={AdminBedroomScreen} />


                <Redirect to="/HomeArticlesScreen" />
            </Switch>

        </>
    )
}
