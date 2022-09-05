import React from "react"
import { startServer } from "../../functions/startserver";

const StartButton = (props) => {

    const handleClick = () => {
        startServer()
    };

    return (
        <div className="server-button-container">
            <button onClick={handleClick} className="btn btn-success">Start Server</button>
        </div>
    )
};

export default StartButton;
