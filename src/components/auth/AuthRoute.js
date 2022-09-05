import React, { useEffect } from "react";
import { useNavigate, Route } from "react-router";

const AuthRoute = (props) => {
    useEffect( function() {
        if (props.signedIn === false) {
            props.navigate("/");
        }
    })

    if (props.signedIn === false) {
        return (<div>
            Oops, something went wrong!
        </div>)
    } else {
        return props.element
    }
};

export default AuthRoute;
