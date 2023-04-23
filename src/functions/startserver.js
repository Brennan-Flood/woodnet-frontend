import { request } from "../services/apitest"

const urls = {
    "ark": "https://dev.backend.woodnet.io/start-ark",
    "minecraft": "https://dev.backend.woodnet.io/start-minecraft"
}

export const startServer = (type) => {
    console.log("Starting " + type + " server...")

    request(urls[type], "POST")

    return "Starting Server... "
};
