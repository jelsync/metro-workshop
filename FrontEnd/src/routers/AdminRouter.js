import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AdminKitchenScreen } from "../components/adminKitchen/AdminKitchenScreen";
import { AdminRoomScreen } from "../components/adminRoom/AdminRoomScreen";

import { FormProduct } from "../components/adminRoom/FormProduct";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";

export const AdminRouter = () => {
    return (
        <Router>
            <NavbarAdmin/>
            <Switch>
                <Route exact path="/admin/AdminRoom" component={AdminRoomScreen}/>
                <Route exact path="/admin/AdminRoom/product/:id">
                    <FormProduct/>
                </Route>
                    

                <Route exact path="/admin/AdminKitchen" component={AdminKitchenScreen} />
                <Route exact path="/admin/AdminKitchen/product" component={FormProduct}/>

                {/* <Redirect to="/admin/AdminKitchen" /> */}



            </Switch>

        </Router>
    )
}
