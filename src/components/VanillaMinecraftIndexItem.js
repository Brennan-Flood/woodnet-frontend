import React from "react";
import StartButton from "./vanillasubcomponents/StartButton";
import StopButton from "./vanillasubcomponents/StopButton";
import VanillaHeader from "./vanillasubcomponents/VanillaIndexHeader";
import { handleCollapse } from "../functions/handleCollapse";



const VanillaMinecraftContainer = (props) => {

    const toggleCollapse = () => {
        handleCollapse("vanilla-control-panel")
    };

    return (
        <div className="index-button vanilla-container">
            <VanillaHeader />
        </div>
    )
};

export default VanillaMinecraftContainer;
