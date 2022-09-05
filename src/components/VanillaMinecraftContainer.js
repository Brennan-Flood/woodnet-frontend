import React from "react";
import StartButton from "./vanillasubcomponents/StartButton";
import StopButton from "./vanillasubcomponents/StopButton";
import VanillaHeader from "./vanillasubcomponents/VanillaHeader";
import { handleCollapse } from "../functions/handleCollapse";



const VanillaMinecraftContainer = (props) => {

    const toggleCollapse = () => {
        handleCollapse("vanilla-control-panel")
    };

    return (
        <div className="vanilla-container">
            <VanillaHeader toggleCollapse={toggleCollapse} />
            <div id="vanilla-control-panel" className="control-panel collapsed">
                <StartButton />
                <StopButton />
            </div>
        </div>
    )
};

export default VanillaMinecraftContainer;
