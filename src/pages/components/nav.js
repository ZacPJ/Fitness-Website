import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    async function logOut(event, bool) {
        event.preventDefault()
        if (bool === true){
        let name = 'jwt_token'
        document.cookie = await name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        await navigate("/*")
        window.location.reload(false);
        }
    }
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
                    <Link className="nav-link" onClick={(event) => {
            if (window.confirm('Are you sure you wish to log out?')) {
                logOut(event, true)
            } else {
                logOut(event, false)
            }
        }}>SignOut</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;