import React from "react";

const VanillaHeader = (props) => {
    return (
        <div className="control-panel-header">
            <div className="control-panel-title-image">
                <img className="control-panel-image" src="minecraft-vanilla.jpeg"></img>
                <h1 className="control-panel-title">Vanilla Minecraft</h1>
            </div>
            <h1 className="control-panel-symbol">+</h1>
        </div>
    )
};

export default VanillaHeader
