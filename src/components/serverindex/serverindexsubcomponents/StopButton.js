import React from "react";
import { stopServer } from "../../../functions/stopserver";

const StopButton = ({type="minecraft"}) => {
    const handleClick = () => {
        stopServer(type);
    };

    return (
        <div className="server-button-container">
            <button
                id="control-button"
                onClick={handleClick}
                className="btn btn-danger"
            >
                Stop
            </button>
        </div>
    );
};

export default StopButton;
