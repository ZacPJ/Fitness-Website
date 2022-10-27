import React from "react";
import { useState } from "react";
import '../pages/Userprofile.css';
import { Route, Routes, Link } from "react-router-dom";
import UpdateAccount from './UpdateAccount';
import Deleteuser from "./components/Deleteuser";
let userInfo = []



function Userprofile(props) {
    async function setVars(props) {
        userInfo = await props.usersInfo
        await props.setIsNav(true)
        setUserInfoVar(userInfo)
    }
    const [userInfoState, setUserInfoVar] = useState([])
    setVars(props)
    return (
        <div>
            <h1 className="title">Userprofile page</h1>

            <div>
                <Link to="/UdateAccount"><button className="updatebutton" >Update Account</button></Link>
                <Routes><Route exact path="/UdateAccount" element={<UpdateAccount />} /></Routes>
            </div>
            <div className="mainCard">
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h3 className="title">{userInfoState.name}</h3>
                            <p className="subtitle"> Email: {userInfoState.email}</p>
                        </div>

                        <div className="back">
                            <p className="description">
                                {/* <b>Userprofile Info Here</b> */}
                                <br></br>
                                Current Weight (Kg): {userInfoState.currentWeight}
                                <br></br>
                                Desired Weight (Kg): {userInfoState.desiredWeight}
                                <br></br>
                                Sex: {userInfoState.sex}
                                <br></br>
                                Height (cm): {userInfoState.height}
                                <br></br>
                                Age: {userInfoState.age}
                                <br></br>
                                All Time Calories Burned: {userInfoState.calories} Kcal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="deletebutton" >
                <Deleteuser />
            </div>
        </div>
    )
}

export default Userprofile;