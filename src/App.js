import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthRoute from "./components/auth/AuthRoute";
import Header from "./components/Header";
import SignIn from "./components/auth/SignIn";
import ServerIndex from "./components/serverindex/ServerIndex";
import Dropdown from "./components/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/home/Home";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import PreAuthRoute from "./components/auth/PreAuthRoute";
import Splash from "./components/auth/Splash";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import { callApi } from "./services/apitest";
import { getUsers } from "./services/dbservice";

function App() {
    const [signedIn, setSignedIn] = useState(false);
    // const navigate = useNavigate(null);
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);
    window.getUsers = getUsers;
    const eventListenerCallback = useCallback((e) => {
        let id = e.target.id;
        let app = document.getElementById("app");
        let idArray = [
            "dropdownMenuLink",
            "dropdown-menu",
            "dropdown-divider",
            "dropdown-container",
            "dropdown-button",
        ];
        if (!idArray.includes(id) || e.target.id === "") {
            setCollapsed(false);
            app.removeEventListener("click", eventListenerCallback, true);
        }
    });

    // window.callApi = callApi;

    useEffect(() => {
        let app = document.getElementById("app");
        if (!collapsed === true) {
            // console.log("Should be removed");
            app.removeEventListener("click", eventListenerCallback, true);
        } else {
            app.addEventListener("click", eventListenerCallback, true);
        }
    }, [collapsed]);

    const handleSignIn = () => {
        setSignedIn(true);
        successLogin();
    };

    const handleLogout = () => {
        setSignedIn(false);
    };

    const successLogout = () => {};

    const successLogin = () => {
        toast.success("Successfully Logged In!", {
            position: "bottom-center",
        });
    };

    const badLogin = () => {
        toast.error("Invalid Credentials", {
            position: "bottom-center",
            closeOnClick: true,
        });
    };

    return (
        <div id="app" className="app">
            <div className="background-image"></div>
            <ToastContainer />
            <Header
                handleLogout={handleLogout}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                signedIn={signedIn}
            />
            <Routes style={{ zIndex: "1" }}>
                <Route
                    style={{ zIndex: "1" }}
                    path="/"
                    element={
                        <PreAuthRoute
                            signedIn={signedIn}
                            element={
                                <Splash
                                    badLogin={badLogin}
                                    handleSignIn={handleSignIn}
                                />
                            }
                        />
                    }
                ></Route>
                <Route
                    path="/signin"
                    element={
                        <PreAuthRoute
                            signedIn={signedIn}
                            element={
                                <SignIn
                                    badLogin={badLogin}
                                    handleSignIn={handleSignIn}
                                    loading={loading}
                                    setLoading={setLoading}
                                />
                            }
                        />
                    }
                ></Route>
                <Route
                    path="/forgotpass"
                    element={
                        <PreAuthRoute
                            signedIn={signedIn}
                            element={
                                <ForgotPassword
                                    badLogin={badLogin}
                                    handleSignIn={handleSignIn}
                                    loading={loading}
                                    setLoading={setLoading}
                                />
                            }
                        />
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <PreAuthRoute
                            signedIn={signedIn}
                            element={
                                <Register
                                    badLogin={badLogin}
                                    handleSignIn={handleSignIn}
                                    loading={loading}
                                    setLoading={setLoading}
                                />
                            }
                        />
                    }
                ></Route>

                <Route
                    exact
                    path="/home"
                    element={
                        <AuthRoute signedIn={signedIn} element={<Home />}>
                            {" "}
                        </AuthRoute>
                    }
                ></Route>

                <Route
                    exact
                    path="/servers"
                    element={
                        <AuthRoute
                            signedIn={signedIn}
                            element={<ServerIndex />}
                        >
                            {" "}
                        </AuthRoute>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
