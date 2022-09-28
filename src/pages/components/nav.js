import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div id="nav">
            <div id="nav-left">
                <ul>
                    <Link className="tesla-font" to="/">MI40</Link>
                </ul>
            </div>
            <div id="nav-center">
                <ul>
                    <Link className="nav-link" to="/Weight">Exercise Calculator</Link>
                    <Link className="nav-link" to="/Calorie">Calories Leaderboard</Link>
                </ul>
            </div>
            <div id="nav-right">
                <ul>
                    <Link className="nav-link" to="/Userprofile">User Profile</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;