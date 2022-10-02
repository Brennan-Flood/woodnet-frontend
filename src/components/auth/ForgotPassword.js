import React, { useState } from "react";
import { useNavigate } from "react-router";
import { userDelete } from "../../services/authservices";
import Loading from "../Loading";

const ForgotPassword = (props) => {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate(null);

    const handleForgotPass = async function (e) {
        e.preventDefault();
        props.setLoading(true);
        let data = { poo: "pee" };

        let res = await userDelete(data);
        props.setLoading(false);
        setMessage(
            "Your User Account has been successfully deleted! Congratulations! Please create a new user!",
        );
        console.log(res);
    };

    const handleRedirect = () => {
        navigate("/");
    };

    if (props.loading) {
        return <Loading />;
    }

    if (message) {
        return (
            <div className="signin">
                <div className="signin-form">
                    <h1>{message}</h1>
                    <button
                        style={{ padding: "10px", margin: "10px" }}
                        className="btn btn-primary"
                        onClick={handleRedirect}
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="signin">
            <form
                className="form-control signin-form"
                style={{ backgroundColor: "#0F3460" }}
                onSubmit={handleForgotPass}
            >
                <input></input>
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

export default ForgotPassword;
