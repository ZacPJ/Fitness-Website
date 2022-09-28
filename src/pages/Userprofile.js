import React from "react";
import '../pages/Userprofile.css';
import { Route, Routes, Link } from "react-router-dom";
import UpdateAccount from './UpdateAccount';
import Deleteuser from "./components/Deleteuser";
let userInfo =[]
async function setVars(props) {
    userInfo = await props.usersInfo
    await props.setIsNav(true)
}


function Userprofile(props) {
    setVars(props)
    return (
        <div>
            <h1 className="title">Userprofile page</h1>

            <div>
                <Link to="/UdateAccount"><button className="updatebutton" >Update Account</button></Link>
                <Routes><Route exact path="/UdateAccount" element={<UpdateAccount />} /></Routes>
            </div>
            <div class="card">
                <div class="content">
                    <div class="front">
                        <h3 class="title">{userInfo.name}</h3>
                        <p class="subtitle">{userInfo.email}</p>
                    </div>

                    <div class="back">
                        <p class="description">
                            Userprofile Info Here
                            <br></br>
                            Desired Weight: {userInfo.desiredWeight}
                            <br></br>
                            Sex: {userInfo.sex}
                            <br></br>
                            Height: {userInfo.height}
                            <br></br>
                            Age: {userInfo.age}
                            <br></br>
                            calories: {userInfo.calories}
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <Deleteuser />
                <button onClick={<Deleteuser />} className="deletebutton" >Delete Account</button>
            </div>
        </div>
    )
}

export default Userprofile;