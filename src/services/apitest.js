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

export const authorizedRequest = async function (url, method, body) {
    let headers = {
        "Authorization": localStorage.getItem('AccessToken'),
    }

    if (["POST", "PUT"].includes(method)) {
        headers["Content-Type"] = "application/json"
    }
    
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: headers,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: body, // body data type must match "Content-Type" header
    });

    return response
}

export const unauthorizedRequest = async function (url, method, body) {
    if (["POST", "PUT"].includes(method)) {
        headers["Content-Type"] = "application/json"
    }
    
    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: headers,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: body, // body data type must match "Content-Type" header
    });
}