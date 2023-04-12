import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../../services/authservices";
import { FidgetSpinner } from "react-loader-spinner";
import Loading from "../Loading";

const SignIn = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate(null);
    const signIn = () => {};

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

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
        // props.setLoading(true);
        e.preventDefault();
        // let data = { swag: "swag" };
        // let res = await logIn(data);
        props.setLoading(false);
        // console.log(res);

        //
        // move this wherever
        const url = "https://dev.backend.woodnet.io/sign-in";
        const data = {
            username: username,
            password: password
        };
        const success = logIn(data)
        // const test_response = await fetch("https://backend.woodnet.io/test",
        //     {
        //         mode: "no-cors" //"cors",
        //     }
        // );
        // const jsonData = await test_response.json();
        // console.log(jsonData);
        // const response = await fetch(url, {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin", // include, *same-origin, omit
        //     headers: {
        //       "Content-Type": "application/json",
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: "follow", // manual, *follow, error
        //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(data), // body data type must match "Content-Type" header
        // })
        // .then(response => response.json())
        // .then(response => {
        //     localStorage.setItem('AccessToken', response.body.AccessToken)
        //     localStorage.setItem('RefreshToken', response.body.RefreshToken)
        //     localStorage.setItem('IdToken', response.body.IdToken)
        // });


        // move the above
        //

        if (!success) {
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
                    id="username-input"
                    className="form-control has-feedback"
                    onChange={handleUsername}
                    type="username"
                    placeholder="Username"
                ></input>
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
