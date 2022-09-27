import React from "react";
import { removeUser } from "../utils";
import { findUser } from "../utils";
import { getCookie } from "../common";


const Deleteuser = () =>{

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    async function searchUser() {
        
        let cookie = getCookie("jwt_token")
        if (cookie !== false) {
            const user =  await findUser(cookie)
            console.log(user.email, user.password)
            await removeUser(user.email, user.password);
        }
    }

    async function submitHandler(event)
    {
        event.preventDefault();
        
        searchUser()
    }

    return(
        <form onSubmit={submitHandler} >
            <button type = "submit" className="deleteUserButton"> Delete Account </button>
        </form>
    )
}



export default Deleteuser;