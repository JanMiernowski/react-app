
import React from "react";

import  Route from "react-router-dom/Route";
import  Redirect from "react-router-dom/Redirect";


function PrivateRoute ({ children, ...rest }) {
    const authItem = localStorage.getItem('authorization');
    return (

        <Route {...rest} render={() => {
            return authItem && authItem.token && authItem.login
                ? children
                : <Redirect to='/login' />
        }} />

    )
}

export default PrivateRoute;
