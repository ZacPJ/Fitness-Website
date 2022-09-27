import React from "react";
import '../pages/UpdateAccount.css';
import UpdateUserInfo from "./components/UpdateComponent";

function UpdateAccount (props){
    return(
        <div>
<<<<<<< HEAD
            <h1 className="title">Update Account</h1>
=======
            <h1>Update Account</h1>

            <UpdateUserInfo userInfo = {props.usersInfo}/>
>>>>>>> 64617a0eb4d1751d1378261b8f7ca12c4739047b
        </div>
    )
}

export default UpdateAccount;