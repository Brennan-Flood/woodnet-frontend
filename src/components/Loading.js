import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loading = (props) => {
    const params = {
        height: "300px",
        width: "300px",
        backgroundColor: "purple",
    };

    return (
        <div className="signin">
            <FidgetSpinner
                wrapperStyle={{ marginTop: "100px" }}
                width={params.height}
                height={params.width}
                backgroundColor={params.backgroundColor}
            ></FidgetSpinner>
        </div>
    );
};

export default Loading;
