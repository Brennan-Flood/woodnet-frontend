import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../../services/authservices";
import Loading from "../Loading";

const Register = (props) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const getInputStyle = () => {
        return { marginTop: "15px", marginBottom: "10px" };
    };

    const handleSignUp = async function (e) {
        e.preventDefault();
        props.setLoading(true);
        let data = { swag: "swag" };

        let res = await signUp(data);
        props.setLoading(false);
        props.handleSignIn();
        console.log(res);
    };

    if (props.loading) {
        return <Loading />;
    }

    return (
        <div className="signin">
            <form
                onSubmit={handleSignUp}
                style={{ backgroundColor: "#0F3460" }}
                className="form-control signin-form"
            >
                <h1 className="signin-title">Register, Gamer</h1>
                <input
                    style={getInputStyle()}
                    className="form-control"
                    value={username}
                    placeholder="Username"
                ></input>
                <input
                    style={getInputStyle()}
                    className="form-control"
                    value={password}
                    placeholder="Password"
                ></input>
                <div>
                    <Link to="/signin">Sign in Instead</Link>
                </div>
                <button
                    style={{ padding: "10px", margin: "10px" }}
                    className="btn btn-primary"
                    type="submit"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
