import React from "react";
import { Link } from "react-router-dom"

const HomeIndexItem = (props) => {
    return (
        <Link className="home-index-item" to={props.destination}> 
            <i class={props.icon}></i> 
            <p className="home-index-item-text">{props.indexItemName}</p>
        </Link>
    )
};

export default HomeIndexItem;