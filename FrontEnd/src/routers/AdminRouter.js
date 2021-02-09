import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AdminKitchenScreen } from "../components/adminKitchen/AdminKitchenScreen";
import { AdminRoomScreen } from "../components/adminRoom/AdminRoomScreen";
import { Delete } from "../components/adminRoom/Delete";

import { FormProduct } from "../components/adminRoom/FormProduct";
import { NewProduct } from "../components/adminRoom/NewProduct";
import { Sidebar } from "../components/Sidebar";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";
import '../styles/simple-sidebar.css';

export const AdminRouter = () => {
    return (
        <div className="d-flex" id="wrapper" >
            <Sidebar />
            <div className="container"  id="page-content-wrapper">
                <NavbarAdmin/>
                <div className="container" >
                    <Switch>
                        <Route exact path="/admin/adminRoom" component={AdminRoomScreen} />
                        <Route exact path="/admin/product/:action/:id" component={FormProduct} />
                        <Route exact path="/admin/delete/:id" component={Delete} />
                        <Route exact path="/admin/createProduct" component={NewProduct} />
                        <Route exact path="/admin/kitchen" component={AdminKitchenScreen} />
                        <Redirect to="/admin/adminRoom" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
