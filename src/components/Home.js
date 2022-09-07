import React from "react";
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div className="home">
            <div className="home-index-container">
                <h1 className="home-title">Choose a Destination, Gamer</h1>
                <div className="home-index">
                    <Link className="home-index-item" to="/servers"> 
                        <i class="fa fa-solid fa-server"></i> 
                        <p className="home-index-item-text">Server List</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home