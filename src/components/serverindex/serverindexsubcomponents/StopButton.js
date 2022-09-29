import React from "react";
import { stopServer } from "../../../functions/stopserver";

const StopButton = (props) => {
    const handleClick = () => {
        stopServer();
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
