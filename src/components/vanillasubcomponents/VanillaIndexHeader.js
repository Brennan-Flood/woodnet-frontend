import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

const VanillaHeader = (props) => {
    const [statusText, setStatusText] = useState("Offline")
    const handleCopyIp = (ip) => {
        navigator.clipboard.writeText(ip)
        console.log(props.copiedNotify)
        props.copiedNotify()
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
            return
        }
    };

    return (
        <div className="control-panel-header">
            <div className="control-panel-title-image">
                <img className="control-panel-image" src="minecraft-vanilla.jpeg"></img>
                <div className="control-panel-main">
                    <h1 className="control-panel-title">Vanilla Minecraft</h1>
                    <div className="server-info">
                        <div className="status-container">
                            <i className={getStatusIcon()}></i>
                            <p style={getStatusStyle()} className="status">{statusText}</p>
                        </div>
                        <div onClick={() => handleCopyIp("000.000.000.000")} className="ip-container">
                            <p className="ip">000.000.000.000</p>
                            <i className="fa fa-clipboard"></i>
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
