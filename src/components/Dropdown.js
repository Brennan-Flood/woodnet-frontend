import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../services/authservices";

const Dropdown = (props) => {
    const navigate = useNavigate();

    const getStyle = () => {
        return props.collapsed ? { display: "block" } : { display: "none" };
    };

    const handleCollapse = () => {
        props.setCollapsed(!props.collapsed);
    };

    const handleLogout = async function () {
        let data = { res: "logout successful" };
        props.handleLogout();
        logOut(data).then((res) => {
            toast.success("Logout Successful", {
                position: "bottom-center",
            });
        });
    };

    return (
        <div id="dropdown-container" className="dropdown show">
            <i
                onClick={handleCollapse}
                className="fa fa-bars"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            ></i>
            <div
                id="dropdown-menu"
                style={getStyle()}
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
            >
                <a
                    id="dropdown-button"
                    onClick={() => navigate("/home")}
                    className="dropdown-item"
                >
                    Home
                </a>
                <a
                    id="dropdown-button"
                    onClick={() => navigate("/servers")}
                    className="dropdown-item"
                >
                    Servers
                </a>
                <div id="dropdown-divider" className="dropdown-divider"></div>
                <a
                    id="dropdown-button"
                    onClick={handleLogout}
                    className="dropdown-item"
                >
                    Logout
                </a>
            </div>
        </div>
    );
};

export default Dropdown;
