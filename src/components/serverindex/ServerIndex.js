import React from "react";
import VanillaMinecraftContainer from "./VanillaMinecraftIndexItem.js";

const HomeScreen = (props) => {
    console.log(props.copiedNotify);
    return (
        <div className="control-index">
            <VanillaMinecraftContainer copiedNotify={props.copiedNotify} />
        </div>
    );
};

export default HomeScreen;
