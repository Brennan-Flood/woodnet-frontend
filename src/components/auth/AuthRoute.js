import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import SignIn from "./SignIn";

const AuthRoute = ({ signedIn, ...props }) => {
    return signedIn ? props.element : <Navigate to="/" />;
};

export default AuthRoute;
