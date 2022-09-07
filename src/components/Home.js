import React from "react";
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div className="home">
            <div className="home-index">
                <Link to="/servers">Server List</Link>
            </div>
        </div>
    )
};

export default Home