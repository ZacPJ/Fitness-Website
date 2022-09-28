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
                    email
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br></br>

                <label>
                    password
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br></br>
            </div>

            <button type="submit" className="loginButton"> sign in </button>

        </form>
    )
}



export default Login;