import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AdminClientScreen } from "../components/adminClient/AdminClientScreen";
import { FormClient } from "../components/adminClient/FormClient";
import { AdminCategoryScreen } from "../components/adminCategory/AdminCategoryScreen";
import { FormProduct } from "../components/adminCategory/FormProduct";
import { NewProduct } from "../components/adminCategory/NewProduct";
import { Sidebar } from "../components/userInterface/Sidebar";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";
import '../styles/simple-sidebar.css';

export const AdminRouter = () => {
    return (
        <div className="d-flex" id="wrapper" >
            <Sidebar />
            <div className="container" id="page-content-wrapper">
                <NavbarAdmin />
                <div className="container" >
                    <Switch>
                        <Route exact path="/admin/AdminCategoryScreen/:id" component={AdminCategoryScreen} />
                        <Route exact path="/admin/product/edit/:id" component={FormProduct} />
                        <Route exact path="/admin/createProduct" component={NewProduct} />
                        <Route exact path="/admin/client" component={AdminClientScreen} />
                        <Route exact path="/admin/client/edit/:id" component={FormClient} />

                        <Redirect to="/admin/client" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
