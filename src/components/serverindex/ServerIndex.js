import React from "react";
import VanillaMinecraftContainer from "./VanillaMinecraftIndexItem.js";
import ArkContainer from "./ArkIndexItem.js";

const HomeScreen = (props) => {
    console.log(props.copiedNotify);
    return (
        <div className="control-index">
            <VanillaMinecraftContainer copiedNotify={props.copiedNotify} />
            <ArkContainer copiedNotify={props.copiedNotify} />
        </div>
    );
};

export default HomeScreen;
