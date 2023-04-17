import axios from "axios";

export const callApi = async function () {
    const body = {
        route: "SignUp",
        data: {
            hello: "world",
        },
    };

    // var arr = [];
    // for (var i = 0; i < body.length; i++) {
    //     arr.push(body.charCodeAt(i));
    // }

    // return await fetch("", {
    //     method: "POST",
    //     // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: body,
    // });
    return axios.post("/", body);
};

export const request = async function (url, method, body=null, headers={}) {
    let request = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };

    // Determine necessary headers
    const token = localStorage.getItem('IdToken')
    if (token) {
        headers["Authorization"] = token;
    };

    if (["POST", "PUT"].includes(method) && body) {
        headers["Content-Type"] = "application/json"
    };

    request["headers"] = headers;

    // Check if body was submitted
    if (body) {
        request["body"] = body // body data type must match "Content-Type" header
    };
    
    return await fetch(url, request).then(response => response.json());
}

export const unauthorizedRequest = async function (url, method, body) {
    let request = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };

    // Determine necessary headers
    let headers = {};
    
    if (["POST", "PUT"].includes(method)) {
        headers["Content-Type"] = "application/json"
    };

    request["headers"] = headers;

    // Check if body was submitted
    if (body) {
        request["body"] = body // body data type must match "Content-Type" header
    };

    return await fetch(url, request).then(response => response.json());
}