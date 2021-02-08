import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AdminKitchenScreen } from "../components/adminKitchen/AdminKitchenScreen";
import { AdminRoomScreen } from "../components/adminRoom/AdminRoomScreen";
import { Delete } from "../components/adminRoom/Delete";

import { FormProduct } from "../components/adminRoom/FormProduct";
import { NavbarAdmin } from "../components/userInterface/NavbarAdmin";

export const AdminRouter = () => {
    return (
        <Router>
            <NavbarAdmin/>
            <Switch>
                <Route exact path="/Admin/AdminRoom" component={AdminRoomScreen}/>
                <Route exact path="/AdminRoom/product/:id">
                    <FormProduct/>
                </Route>
                <Route exact path="/AdminRoom/delete/:id">
                    <Delete/>
                </Route>
                    

                <Route exact path="/AdminKitchen" component={AdminKitchenScreen} />
                <Route exact path="/AdminKitchen/product" component={FormProduct}/>

                {/* <Redirect to="/admin/AdminKitchen" /> */}



            </Switch>

        </Router>
    )
}
