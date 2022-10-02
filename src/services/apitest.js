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
