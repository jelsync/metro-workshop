import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/userInterface/Navbar';

import { HomeArticlesScreen } from "../components/articles/HomeArticlesScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { ProductScreen } from '../components/buy/ProductScreen';
import { CategoryScreen } from '../components/category/CategoryScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>

            <Switch>
                <Route exact path="/HomeArticlesScreen" component={HomeArticlesScreen} />
                <Route exact path="/ProductScreen" component={ProductScreen} />
                <Route exact path="/BuyScreen/:id" component={BuyScreen} />
                <Route exact path="/CategoryScreen/:id" component={CategoryScreen} />
                <Redirect to="/HomeArticlesScreen" />
            </Switch>
        </>
    )
}
