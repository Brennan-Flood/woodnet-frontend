import axios from "axios";
import { unauthorizedRequest } from "./apitest";

export const logIn = function (data) {
    const url = "https://dev.backend.woodnet.io/sign-in";
    let success = false;
    console.log("starting log in request")
    // fetch(url, {
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
    data = unauthorizedRequest(url, "POST", JSON.stringify(data))
    
    console.log("logIn response")
    console.log(data)

    if (data.status === 200) {
        localStorage.setItem('AccessToken', data.body.AccessToken);
        localStorage.setItem('RefreshToken', data.body.RefreshToken);
        localStorage.setItem('IdToken', data.body.IdToken);
        console.log("localStorage saved")
        success = true
    } else {
        console.log("error")
        success = false
    }
    
    console.log("finished log in request")

    return success
};

export const signUp = function (data) {
    const body = {
        route: "SignUp",
        data: data,
    };

    return axios.post("/", body);
};

export const logOut = function (data) {
    const body = {
        route: "LogOut",
        data: data,
    };

    return axios.post("/", body);
};

export const userDelete = function (data) {
    const body = {
        route: "UserDelete",
        data: data,
    };

    return axios.post("/", body);
};
