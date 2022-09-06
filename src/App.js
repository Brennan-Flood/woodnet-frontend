import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router"
import AuthRoute from "./components/auth/AuthRoute";
import Header from "./components/Header";
import SignIn from "./components/auth/SignIn";
import HomeScreen from "./components/HomeScreen";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate(null);

  const handleSignIn = () => {
    setSignedIn(true);
  }

  return (
    <div className="app">
      <div className="background-image"></div>
      <Header />
      <Routes style={{zIndex: "1"}}>
        <Route style={{zIndex: "1"}} element={<SignIn handleSignIn={handleSignIn} navigate={navigate} />} path="/"></Route>
        <Route element={
          <AuthRoute navigate={navigate} signedIn={signedIn}
            element={
              <HomeScreen />
            }
          />
        } path="/Home"/>
        <Route />
      </Routes>
    </div>
    )
  }

export default App;
