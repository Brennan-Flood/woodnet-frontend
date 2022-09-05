import React, {useState, useEffect} from "react";


const SignIn = (props) => {
    const [password, setPassword] = useState(null);

    const signIn = () => {

    };

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        props.handleSignIn();
        props.navigate("/home")
    };

    return (
        <div className="signin">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h1 className="signin-title">Sign In, Gamer</h1>
                <input value={password} onChange={handlePassword} type="password" placeholder="Password"></input>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
};

export default SignIn
