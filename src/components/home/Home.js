import React from "react";
import HomeIndexItem from "./HomeIndexItem.js";

const Home = (props) => {
    return (
        <div className="home">
            <div className="home-index-container">
                <h1 className="home-title">Choose a Destination, Gamer</h1>
                <div className="home-index">
                    <HomeIndexItem
                        destination="/servers"
                        icon="fa fa-solid fa-server"
                        indexItemName={"Server List"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
