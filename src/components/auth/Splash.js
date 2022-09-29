import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Splash = (props) => {
    const navigate = useNavigate(null);

    const redirect = (url) => {
        navigate(url);
    };

    const getButtonStyle = () => {
        return { padding: "15px", margin: "20px", width: "150px" };
    };

    return (
        <div className="splash-container">
            <div className="splash-page">
                <h1 className="signin-title">Welcome, Gamer</h1>
                <button
                    style={getButtonStyle()}
                    onClick={() => {
                        redirect("/register");
                    }}
                    className="btn btn-primary"
                >
                    Register
                </button>
                <button
                    style={getButtonStyle()}
                    onClick={() => {
                        redirect("/signin");
                    }}
                    className="btn btn-primary"
                >
                    Sign In{" "}
                </button>
            </div>
        </div>
    );
};

export default Splash;
