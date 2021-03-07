
import React from "react";

import  Route from "react-router-dom/Route";
import  Redirect from "react-router-dom/Redirect";
import {getAuth} from "../Common/LocalStorageService";



function PrivateRoute ({ children, ...rest }) {
    const authItem = getAuth();
    return (

        <Route {...rest} render={() => {
            return authItem && authItem.token && authItem.username
                ? children
                : <Redirect to='/login' />
        }} />

    )
}

export default PrivateRoute;
