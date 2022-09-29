import React, { Component } from "react";
import { useState, useEffect, forceUpdate } from "react";
import '../pages/Userprofile.css';
import { Route, Routes, Link } from "react-router-dom";
import UpdateAccount from './UpdateAccount';
import Deleteuser from "./components/Deleteuser";
let userInfo = []
async function setVars(props) {
    userInfo = await props.usersInfo
    await props.setIsNav(true)
}


function Userprofile(props) {
    const [userInfoState, setUserInfoVar] = useState([])
    useEffect(() => {
        setUserInfoVar(userInfo)
        props.setIsNav(true)
    }, [userInfoState])
    setVars(props)
    if (userInfoState === []){
        setVars(props)
    }

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
                        <h3 class="title">{userInfoState.name}</h3>
                        <p class="subtitle">{userInfoState.email}</p>
                    </div>

                    <div class="back">
                        <p class="description">
                            Userprofile Info Here
                            <br></br>
                            Desired Weight: {userInfoState.desiredWeight}
                            <br></br>
                            Sex: {userInfoState.sex}
                            <br></br>
                            Height: {userInfoState.height}
                            <br></br>
                            Age: {userInfoState.age}
                            <br></br>
                            calories: {userInfoState.calories}
                        </p>
                    </div>
                </div>
            </div>
            <div className="deletebutton">
                <Deleteuser />
            </div>
        </div>
    )
}

export default Userprofile;