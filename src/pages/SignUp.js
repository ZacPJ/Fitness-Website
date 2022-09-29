import React from "react";
import { useState } from "react";

import SignUp from "./components/SignUp.js"
import '../pages/SignUp.css';



import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';

function SignUpFunc() {
    const [user, setUser] = useState();
    return (
        <div>
            <h1>Sign Up</h1>



            {!user ?
                <div>
                    <SignUp setter={setUser} />
                    <Link to="/">return to home page</Link>
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