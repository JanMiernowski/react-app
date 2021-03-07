import React from "react";

import {Route, Redirect} from "react-router-dom";
import {getAuth} from "../Common/LocalStorageService";


function PrivateRoute(...props) {
    const authItem = getAuth();

    if (authItem && authItem.token && authItem.username) {
        return <Route {...props} />;
    } else {
        return <Redirect to='/login'/>
    }
}

export default PrivateRoute;
