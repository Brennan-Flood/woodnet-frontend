import { request } from "../services/apitest"

const urls = {
    "ark": "https://dev.backend.woodnet.io/stop-ark",
    "minecraft": "https://dev.backend.woodnet.io/stop-minecraft"
}

export const stopServer = (props) => {
    console.log("Stopping " + props.type + " server...");

    request(urls[props.type], "POST")

    return "Stopping Server..."
}
