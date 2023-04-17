import axios from "axios";
import { unauthorizedRequest } from "./apitest";

export const logIn = async function (data) {
    const url = "https://dev.backend.woodnet.io/sign-in";
    let success = false;

    data = await request(url, "POST", JSON.stringify(data))

    if ("AccessToken" in data) {
        localStorage.setItem("AccessToken", data.AccessToken);
        localStorage.setItem("RefreshToken", data.RefreshToken);
        localStorage.setItem("IdToken", data.IdToken);
        localStorage.setItem("LoggedIn", "true");
        success = true
    } else {
        success = false
    }

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
    localStorage.removeItem("LoggedIn");

    return axios.post("/", body);
};

export const userDelete = function (data) {
    const body = {
        route: "UserDelete",
        data: data,
    };

    return axios.post("/", body);
};
