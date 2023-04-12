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
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Authorization": localStorage.getItem('AccessToken'),
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
}