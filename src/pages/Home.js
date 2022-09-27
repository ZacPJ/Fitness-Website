import React from "react";
import { useState } from "react";
import Login from "./components/Login.js"
import { Route, Routes, Link } from "react-router-dom";
import SignUp from './SignUp';

function Home() {

    const [user, setUser] = useState();

    return (
        <div>

            <h1 className="title">Home page</h1>

            {!user ?
                <div>
                    <Login setter={setUser} />

                    <Link to="/SignUp">Create an account</Link>
                    <Routes><Route exact path="/SignUp" element={<SignUp />} /></Routes>

                </div> :
                <div>
                    successfully signed in with the email {user}, this message can be removed later
                </div>
            }


        </div>
    )
}

export default Home;