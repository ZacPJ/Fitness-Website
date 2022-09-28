import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login.js"
import { Route, Routes, Link } from "react-router-dom";
import SignUp from './SignUp';

import HomeStyles from './Home.css';
import { getCookie } from "./common/index.js";
import { findUser } from "./utils/index.js";

function Home(props) {

    const [userEmail, setUserEmail] = useState();

    useEffect(() => {
        props.setIsNav(false)
    }, [])

    useEffect(() => {

        let cookie = getCookie("jwt_token");
        console.log(cookie);
        if (cookie !== false) {
            loginWithToken(cookie);
        }

    }, [])

    async function loginWithToken(cookie) {
        const cookieUser = await findUser(cookie);
        setUserEmail(cookieUser.email);
        console.log("signed in with cookies");
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

                                <Link to="/SignUp">Create an account</Link>
                                <Routes><Route exact path="/SignUp" element={<SignUp />} /></Routes>


                            </div>
                        </div>
                        :
                        <div>
                            successfully signed in with the email {userEmail}, this message can be removed later

                            <br></br>
                            <button onClick={() => logOut()}>sign out</button>
                        </div>
                }

            </div>




        </div >
    )
}

export default Home;