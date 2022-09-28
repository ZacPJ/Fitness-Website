import React from "react";
import { useState } from "react";
import { login } from "../utils";
import './login.css'
const Login = ({ setter }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function submitHandler(event) {
        event.preventDefault();
        await login(email, password, setter);
        window.location.reload(false);
    }


    return (
        <form onSubmit={submitHandler} className="userForm">

            <div className="formFields">
                <label>
                    Email:
                    <br></br>
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>

                <label>
                    Password:
                    <br></br>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type="submit" className="loginButton"> Sign In </button>
            </div>


        </form>
    )
}



export default Login;