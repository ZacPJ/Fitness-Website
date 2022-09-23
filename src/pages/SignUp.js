import React from "react";
import {useState} from "react";
import SignUp from "./components/SignUp.js"
import '../pages/SignUp.css';

function SignUpFunc()
{

    const [user, setUser]=useState();

    return(
        <div>
            <h1>Sign Up</h1>

            <SignUp setter = {setUser} />
        </div>
    )
}

export default SignUpFunc;