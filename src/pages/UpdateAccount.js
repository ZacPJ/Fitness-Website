import React from "react";
import '../pages/UpdateAccount.css';
import UpdateUserInfo from "./components/UpdateComponent";

function UpdateAccount(props) {
    return (
        <div className="mainFlex">
            <div className="innerFlex1">
                <div className="innerFlex">
                    <h1 className="title">Update Account</h1>
                </div>
                <div className="innerFlex">
                    <UpdateUserInfo userInfo={props.usersInfo} />
                </div>
            </div>
        </div>
    )
}

export default UpdateAccount;