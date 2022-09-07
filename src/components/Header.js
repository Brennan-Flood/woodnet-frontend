import React from "react";
import { handleCollapse } from "../functions/handleCollapse";

const Header = (props) => {
    return (
        <header className="app-header">
            {props.signedIn && <i onClick={() => handleCollapse(["dropdown"])} id="header-bars" className="fa fa-bars"></i> }
            <h1 className="app-title">Woodnet 2.0</h1>
        </header>
    )
};

export default Header;
