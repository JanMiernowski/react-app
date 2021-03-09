import React from "react";

import {Route, Redirect} from "react-router-dom";
import {isLogged} from "../Common/LocalStorageService";


function PrivateRoute(props) {
    if (isLogged()) {
        return <Route {...props} />;
    } else {
        return <Redirect to='/login'/>
    }
}

export default PrivateRoute;
