import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../../services/authservices";
import { FidgetSpinner } from "react-loader-spinner";
import Loading from "../Loading";

const SignIn = (props) => {
    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate(null);
    const signIn = () => {};

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleWrongPassword = () => {
        document
            .getElementById("password-input")
            .classList.toggle("has-danger");
        console.log("test");
        setPasswordError(true);
        props.badLogin();
    };

    const handleSubmit = (e) => {
        if (password !== "password") {
            handleWrongPassword();
            return;
        }
        props.handleSignIn();
        navigate("/home");
    };

    const handleSignIn = async function (e) {
        props.setLoading(true);
        e.preventDefault();
        let data = { swag: "swag" };
        let res = await logIn(data);
        props.setLoading(false);
        console.log(res);
        if (password !== "password") {
            handleWrongPassword();
            return;
        }
        props.handleSignIn();
        navigate("/home");
    };

    if (props.loading) {
        return <Loading />;
    }

    return (
        <div className="signin">
            <ToastContainer />
            <form
                style={{ backgroundColor: "#0F3460" }}
                className="form-control signin-form"
                onSubmit={handleSignIn}
            >
                <h1 className="signin-title">Welcome, Gamer</h1>
                {passwordError && (
                    <p className="password-error">Nice try, bozo</p>
                )}
                <input
                    required
                    id="password-input"
                    className="form-control has-feedback"
                    onChange={handlePassword}
                    type="password"
                    placeholder="Password"
                ></input>
                <div className="link-container">
                    <Link to="/register">Register Instead</Link>
                    <Link to="/forgotpass">Forgot Password</Link>
                </div>
                <button
                    style={{ padding: "10px", margin: "10px" }}
                    className="btn btn-primary"
                    type="submit"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
