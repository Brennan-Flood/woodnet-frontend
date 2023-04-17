import { request } from "../services/apitest"

const urls = {
    "ark": "https://dev.backend.woodnet.io/stop-ark",
    "minecraft": "https://dev.backend.woodnet.io/stop-minecraft"
}

export const stopServer = (type) => {
    console.log("Stopping " + type + " server...");

    request(urls[type], "POST")

    return "Stopping Server..."
}
