import React from "react";
import { useState } from "react";

import SignUp from "./components/SignUp.js"
import '../pages/SignUp.css';
import { useNavigate } from "react-router-dom"


import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';

function SignUpFunc() {
    const navigate = useNavigate()
    const [user, setUser] = useState();
    async function goHome(){
        await navigate("/")
        await window.location.reload(false);
    }
    return (
        <div>
            <h1>Sign Up</h1>



            {!user ?
                <div>
                    <SignUp setter={setUser} />
                    <button onClick={goHome}>return to home page</button>
                </div> :
                <div>
                    account created, return to <Link to="/">home page</Link> to log in


                    <Routes><Route exact path="/Home" element={<Home />} /></Routes>
                </div>
            }
        </div>
    )
}

export default SignUpFunc;