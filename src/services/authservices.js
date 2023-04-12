import axios from "axios";
import { unauthorizedRequest } from "./apitest";

export const logIn = function (data) {
    const url = "https://dev.backend.woodnet.io/sign-in";
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
    unauthorizedRequest(url, "POST", JSON.stringify(data))
    .then(response => response.json())
    .then(
        result => {
            localStorage.setItem('AccessToken', result.body.AccessToken);
            localStorage.setItem('RefreshToken', result.body.RefreshToken);
            localStorage.setItem('IdToken', result.body.IdToken);
            console.log("localStorage saved")
            return true
        },
        error => {
            console.log(error)
            return false
        }
    );
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
