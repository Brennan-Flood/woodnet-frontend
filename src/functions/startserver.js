import { request } from "../services/apitest"

const urls = {
    "ark": "https://dev.backend.woodnet.io/start-ark",
    "minecraft": "https://dev.backend.woodnet.io/start-minecraft"
}

export const startServer = (props) => {
    console.log("Starting " + props.type + " server...")

    request(urls[props.type], "POST")

    return "Starting Server... "
};
