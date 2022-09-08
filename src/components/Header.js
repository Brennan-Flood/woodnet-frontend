import React from "react";
import { handleCollapse } from "../functions/handleCollapse";
import Dropdown from "./Dropdown";

const Header = (props) => {
    return (
        <header className="app-header">
            {props.signedIn && <Dropdown collapsed={props.collapsed} setCollapsed={props.setCollapsed} handleLogout={props.handleLogout} signedIn={props.signedIn}/>}
            <h1 className="app-title">Woodnet 2.0</h1>
        </header>
    )
};

export default Header;
