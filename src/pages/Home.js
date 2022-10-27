import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login.js"
import { Route, Routes, Link } from "react-router-dom";
import SignUp from './SignUp';

import './Home.css';
import { getCookie } from "./common/index.js";
import { findUser } from "./utils/index.js";
export async function reloadOnDelete() {
    let name = 'jwt_token'
    document.cookie = await name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload(false);
}
function Home(props) {

    const [userEmail, setUserEmail] = useState();

    useEffect(() => {
        props.setIsNav(false)
    })

    useEffect(() => {

        let cookie = getCookie("jwt_token");
        if (cookie !== false) {
            loginWithToken(cookie);
        }

    })

    async function loginWithToken(cookie) {
        const cookieUser = await findUser(cookie);
        setUserEmail(cookieUser.email);
        props.setIsNav(true)
    }

    async function logOut() {
        let name = 'jwt_token'
        document.cookie = await name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setUserEmail();
        window.location.reload(false);
    }

    return (


        <div>


            <div style={{ margin: "0 70px" }}>

                {
                    !userEmail ?
                        <div>
                            < div id="nav-white" >
                                <div id="nav-left">
                                    <ul>
                                        <Link className="tesla-font-black" to="/">MI40</Link>
                                    </ul>

                                </div>
                            </div >
                            <div className="form">
                                <Login setter={setUserEmail} />

                                <Link style={{ textUnderlineOffset: "8px", fontWeight: "700", textTransform: "uppercase", color: "#000", marginBottom: "20px", padding: "10px 0" }} to="/SignUp">Not Registered? Create an account</Link>
                                <Routes><Route exact path="/SignUp" element={<SignUp />} /></Routes>


                            </div>
                        </div>
                        :
                        <div>
                            <h1 className="title"> Welcome, {props.usersInfo.name} </h1>
                            <br></br>

                            <p className="title">Our Weight Calculator will let you choose an exercise and figure out how many calories you have burned.</p>
                            <p className="title">Check out our leaderboard to see how your exercising compares to other people's.</p>
                            <button className="loginButton" onClick={() => logOut()}>Sign Out</button>

                        </div>
                }

            </div>




        </div >
    )
}

export default Home;