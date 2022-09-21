import React from "react";
import {useState} from "react";
import Login from "./components/Login.js"

function Home (){

    const [user, setUser]=useState();

    return(
        <div>
            <h1>Home page</h1>

            {!user ? 
            <div>
                <Login setter = {setUser} />
            </div>: 
            <div>
                successfully signed in with the email {user}, this message can be removed later
            </div>
            }
            

        </div>
    )
}

export default Home;