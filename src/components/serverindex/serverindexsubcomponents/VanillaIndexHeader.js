import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import { toast } from "react-toastify";

const VanillaHeader = (props) => {
    const [statusText, setStatusText] = useState("Offline")
    const handleCopyIp = (ip) => {
        navigator.clipboard.writeText(ip)
        console.log(props.copiedNotify)
        toast.info("Copied IP to clipboard", {
            position: "bottom-center",
            
        })
    }
    
    if (statusText === null) {
        setStatusText("Offline")
    }

    const getStatusIcon = () => {
        if (statusText === "Offline") {
            return "fa-solid fa-x"
        }
    }

    const getStatusStyle = () => {
        if (statusText === "Offline") {
            return {color: "red"}
        } else {
            return {color: "green"}
        }
    
    };

    return (
        <div className="control-panel-header">
            <div className="control-panel-title-image">
                <img className="control-panel-image" src="minecraft-vanilla.jpeg" alt=""></img>
                <div className="control-panel-main">
                    <h1 className="control-panel-title">Vanilla Minecraft</h1>
                    <div className="server-info">
                        <div className="status-container">
                            <p style={getStatusStyle()} className="status">{statusText}</p>
                        </div>
                        <div onClick={() => handleCopyIp("0.0.0.0")} className="ip-container">
                            <p className="ip ip-item">0.0.0.0</p>
                            <i id="ip-icon" className="fa fa-clipboard ip-item"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-container">
                <StartButton />
                <StopButton />
            </div>
        </div>
    )
};

export default VanillaHeader
