import React from "react";
import { removeUser } from "../utils";
import { findUser } from "../utils";
import { getCookie } from "../common";
import { useNavigate } from "react-router-dom"
import { reloadOnDelete } from "../Home"


const Deleteuser = () => {
    const navigate = useNavigate()
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    async function searchUser() {

        let cookie = getCookie("jwt_token")
        if (cookie !== false) {
            const user = await findUser(cookie)
            console.log(user.email, user.password)
            await removeUser(user.email, user.password);
            // call home page here
        }
    }

    async function submitHandler(event, option) {
        event.preventDefault();
        if (option === true) {
            let path = "/"
            await searchUser()
            navigate(path)
            reloadOnDelete()
        }
    }

    return (
        <form onSubmit={(event) => {
            if (window.confirm('Are you sure you wish to delete your account (This cannot be undone)')) {
                submitHandler(event, true)
            } else {
                submitHandler(event, false)
            }
        }}

        >
            <button type="submit" className="deleteUserButton" > Delete Account </button>
        </form>
    )
}



export default Deleteuser;