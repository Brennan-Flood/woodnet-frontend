import React, {useState, useEffect} from "react";


const SignIn = (props) => {
    const [password, setPassword] = useState(null);
    const [passwordError, setPasswordError] = useState(false);

    const signIn = () => {

    };

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handleWrongPassword = () => {
        document.getElementById("password-input").classList.toggle("has-danger")
        console.log("test")
        setPasswordError(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        if (password !== "password") {
            handleWrongPassword();
            return;
        }
        props.handleSignIn();
        props.navigate("/home")
    };

    return (
        <div className="signin">
            <form style={{backgroundColor: "#0F3460"}} className="form-control signin-form" onSubmit={handleSubmit}>
                <h1 className="signin-title">Sign In, Gamer</h1>
                { passwordError && <p className="password-error">Nice try, bozo</p>}
                <input required id="password-input" className="form-control has-feedback" onChange={handlePassword} type="password" placeholder="Password"></input>
                <button style={{padding: "10px", margin: "10px"}} className="btn btn-primary" type="submit">Sign In</button>
            </form>
        </div>
    )
};

export default SignIn
