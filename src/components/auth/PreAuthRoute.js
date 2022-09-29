import React from "react";
import { Navigate } from "react-router-dom";

const PreAuthRoute = (props) => {
    console.log(props.signedIn);
    return props.signedIn ? <Navigate to="/home" /> : props.element;
};

export default PreAuthRoute;
