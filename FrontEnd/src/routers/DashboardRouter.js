import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/userInterface/Navbar';

import { HomeArticlesScreen } from "../components/articles/HomeArticlesScreen";
import { BuyScreen } from "../components/buy/BuyScreen";
import { ProductScreen } from '../components/buy/ProductScreen';
import { Delete } from '../components/buy/Delete';
import { CategoryScreen } from '../components/category/CategoryScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/HomeArticlesScreen" component={HomeArticlesScreen} />
                <Route exact path="/BuyScreen" component={BuyScreen} />
                <Route exact path="/ProductScreen" component={ProductScreen} />
                <Route exact path="/CategoryScreen/:id" component={CategoryScreen} />
                <Route path="/delete/:id" component={Delete} />
                <Redirect to="/HomeArticlesScreen" />
            </Switch>
        </>
    )
}
