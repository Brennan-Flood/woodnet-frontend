import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import { toast } from "react-toastify";

const VanillaHeader = ({
    image = "minecraft-vanilla.jpeg", 
    name = "Vanilla Minecraft", 
    type = "minecraft", 
    copiedNotify = ""
}) => {
    const [statusText, setStatusText] = useState("Offline");
    const handleCopyIp = (ip) => {
        navigator.clipboard.writeText(ip);
        console.log(copiedNotify);
        toast.info("Copied IP to clipboard", {
            position: "bottom-center",
        });
    };

    if (statusText === null) {
        setStatusText("Offline");
    }

    const getStatusIcon = () => {
        if (statusText === "Offline") {
            return "fa-solid fa-x";
        }
    };

    const getStatusStyle = () => {
        if (statusText === "Offline") {
            return { color: "red" };
        } else {
            return { color: "green" };
        }
    };

    return (
        <div className="control-panel-header">
            <div className="control-panel-title-image">
                <img
                    className="control-panel-image"
                    src={image}
                    alt=""
                ></img>
                <div className="control-panel-main">
                    <h1 className="control-panel-title">{name}</h1>
                    <div className="server-info">
                        <div className="status-container">
                            <p style={getStatusStyle()} className="status">
                                {statusText}
                            </p>
                        </div>
                        <div
                            onClick={() => handleCopyIp("0.0.0.0")}
                            className="ip-container"
                        >
                            <p className="ip ip-item">0.0.0.0</p>
                            <i
                                id="ip-icon"
                                className="fa fa-clipboard ip-item"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-container">
                <StartButton type={type} />
                <StopButton type={type} />
            </div>
        </div>
    );
};

export default VanillaHeader;
