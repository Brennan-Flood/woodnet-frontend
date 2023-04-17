import React from "react";
import VanillaHeader from "./serverindexsubcomponents/VanillaIndexHeader";
// import { handleCollapse } from "../../functions/handleCollapse";
import { ToastContainer } from "react-toastify";

const ArkContainer = (props) => {
    // const toggleCollapse = () => {
    //     handleCollapse("vanilla-control-panel")
    // };

    return (
        <div className="index-button vanilla-container">
            <ToastContainer />
            <VanillaHeader copiedNotify={props.copiedNotify} />
        </div>
    );
};

export default ArkContainer;
