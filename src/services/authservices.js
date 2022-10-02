import axios from "axios";

export const logIn = function (data) {
    const body = {
        route: "LogIn",
        data: data,
    };

    return axios.post("/", body);
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
