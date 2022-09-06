import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router"
import AuthRoute from "./components/auth/AuthRoute";
import Header from "./components/Header";
import SignIn from "./components/auth/SignIn";
import HomeScreen from "./components/HomeScreen";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate(null);

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

  const copiednotify = () => {
    toast.info("Copied IP to Clipboard", {
      position: "bottom-center",
      closeOnClick: true
    })
  };  

  return (
    <div className="app">
      <div className="background-image"></div>
      <ToastContainer />
      <Header />
      <Routes style={{zIndex: "1"}}>
        <Route style={{zIndex: "1"}} element={<SignIn badLogin={badLogin} handleSignIn={handleSignIn} navigate={navigate} />} path="/"></Route>
        <Route element={
          <AuthRoute copiednotify={copiednotify} navigate={navigate} signedIn={signedIn}
            element={
              <HomeScreen copiednotify={copiednotify}/>
            }
          />
        } path="/Home"/>
        <Route />
      </Routes>
      
    </div>
    )
  }

export default App;
