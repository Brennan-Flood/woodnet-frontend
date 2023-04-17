import React from "react";
import { startServer } from "../../../functions/startserver";

const StartButton = ({type="minecraft"}) => {
    const handleClick = () => {
        startServer(type);
    };

    return (
        <div className="server-button-container">
            <button
                id="control-button"
                onClick={handleClick}
                className="btn btn-success"
            >
                Start
            </button>
        </div>
    );
};

export default StartButton;
