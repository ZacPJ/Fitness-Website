import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login.js"
import { Route, Routes, Link } from "react-router-dom";
import SignUp from './SignUp';

import './Home.css';
import { getCookie } from "./common/index.js";
import { findUser } from "./utils/index.js";

function Home(props) {

    const [user, setUser] = useState();
    useEffect(() => {
        props.setIsNav(false)
    }, [])
    
    const [userEmail, setUserEmail]=useState();

    useEffect(()=>{
        let cookie = getCookie("jwt_token");
        console.log(cookie);
        if (cookie !== false)
        {
            loginWithToken(cookie);
        }

    },[])

    async function loginWithToken(cookie)
    {
        const cookieUser = await findUser(cookie);
        setUserEmail(cookieUser.email);
        console.log("signed in with cookies");
    }

    return (


            <div className="wrapper">

                <div id="nav-white">
                    <div id="nav-left">
                        <ul>
                            <Link className="tesla-font-black" to="/">MI40</Link>
                        </ul>
                    </div>
                </div>

                <h1 className="title">Home page</h1>
                
                {!user ?
                    <div className="form">
                        <Login setter={setUser} />

                        <Link to="/SignUp">Create an account</Link>
                        <Routes><Route exact path="/SignUp" element={<SignUp />} /></Routes>

                    </div>
                    :
                    <div>
                        successfully signed in with the email {user}, this message can be removed later
                    </div>
                }
            


        </div>
    )
}

export default Home;