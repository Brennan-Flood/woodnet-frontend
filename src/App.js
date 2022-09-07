import React from "react";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AuthRoute from "./components/auth/AuthRoute";
import Header from "./components/Header";
import SignIn from "./components/auth/SignIn";
import ServerIndex from "./components/serverindex/ServerIndex";
import Dropdown from "./components/Dropdown"
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/home/Home";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  // const navigate = useNavigate(null);
  
  const handleSignIn = () => {
    setSignedIn(true);
    successLogin()
  };

  const successLogin = () => {
    toast.success("Successfully Logged In!", {
      position: "bottom-center"
    })
  };

  const badLogin = () => {
    toast.error("Invalid Credentials", {
      position: "bottom-center",
      closeOnClick: true,
    });
  };


  return (
    <BrowserRouter>
      <div className="app">
        <div className="background-image"></div>
        <Dropdown />
        <ToastContainer />
        <Header signedIn={signedIn} />
        <Routes style={{zIndex: "1"}}>
          <Route style={{zIndex: "1"}} element={<SignIn badLogin={badLogin} handleSignIn={handleSignIn} />} path="/"></Route>
          <Route exact path="/home" element={
            <AuthRoute signedIn={signedIn} element={ <Home />}> </AuthRoute>}>
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
    )
  }

export default App;
