import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {

    const navigate = useNavigate()

    const getStyle = () => {
        return props.collapsed ? {display: "block"} : {display: "none"};
    };

    const handleCollapse = () => {
        props.setCollapsed(!props.collapsed)
    };
    
    return (
        <div id="dropdown-container" className="dropdown show">
        <i onClick={handleCollapse} className="fa fa-bars" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
        <div style={getStyle()} className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a onClick={() => navigate("/home")} className="dropdown-item" >Home</a>
          <a onClick={() => navigate("/servers")} className="dropdown-item">Servers</a>
          <div className="dropdown-divider"></div>
          <a onClick={props.handleLogout} className="dropdown-item">Logout</a>
        </div>
        </div>
    )
};

export default Dropdown;