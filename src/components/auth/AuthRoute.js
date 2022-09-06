import React, { useEffect } from "react";
import { useNavigate, Route } from "react-router";
import SignIn from "./SignIn";

const AuthRoute = (props) => {
    useEffect( function() {
        if (props.signedIn === false) {
            props.navigate("/");
        }
    })

    if (props.signedIn === false) {
        return (<SignIn />)
    } else {
        return props.element
    }
};

export default AuthRoute;
