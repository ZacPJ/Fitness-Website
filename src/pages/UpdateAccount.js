import React from "react";
import '../pages/UpdateAccount.css';
import UpdateUserInfo from "./components/UpdateComponent";

function UpdateAccount(props) {
    return (
        <div>
            <h1 className="title">Update Account</h1>
            <UpdateUserInfo userInfo={props.usersInfo} />
        </div>
    )
}

export default UpdateAccount;