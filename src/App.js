import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router"
import AuthRoute from "./components/auth/AuthRoute";
import Header from "./components/Header";
import SignIn from "./components/auth/SignIn";
import HomeScreen from "./components/HomeScreen";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate(null);

  const handleSignIn = () => {
    setSignedIn(true);
  }

  return (
    <div className="app">

      <Header />
      <Routes>
        <Route  element={<SignIn handleSignIn={handleSignIn} navigate={navigate} />} path="/"></Route>
        <Route element={
          <AuthRoute navigate={navigate} signedIn={signedIn}
            element={
              <HomeScreen />
            }
          />
        } path="/Home"/>
      </Routes>
    </div>
    )
  }

export default App;
