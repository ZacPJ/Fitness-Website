import React from "react";
import { useState, useEffect } from "react";
import { update } from "../utils";
import { useNavigate } from "react-router-dom"
import "./updateComponent.css"

let usersInfo = []
const UpdateUserInfo = (props) => {
    async function setVars(props) {
        usersInfo = await props.userInfo
        setProps(true)
    }
    async function ReturnToProfile() {
        await navigate("/Userprofile")
        window.location.reload(false);
    }
    setVars(props)
    const [currentWeight, setCurrentWeight] = useState();
    const [name, setName] = useState();
    const [desiredWeight, setDesiredWieght] = useState();
    const [sex, setSex] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [propTrue, setProps] = useState()
    useEffect(() => {
        setVars(props)
    }, [])
    // const [password, setPassword] = useState();
    // email, name, desiredWeight, sex, height, age 
    const navigate = useNavigate()
    async function submitHandler(event) {
        event.preventDefault();
        await update(usersInfo.email, name, desiredWeight, sex, height, age, usersInfo.calories, currentWeight);

        await navigate("/Userprofile")
        window.location.reload(false);
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="userForm">

                <div className="formFields">

                    <label >
                        Name
                        <br></br>
                        <input defaultValue={usersInfo.name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label >
                        Current Weight(Kg)
                        <br></br>
                        <input onChange={(event) => setCurrentWeight(event.target.value)} />
                    </label>

                    <label >
                        Desired Weight(Kg)
                        <br></br>
                        <input onChange={(event) => setDesiredWieght(event.target.value)} />
                    </label>

                    <label for="sex">sex</label>

                    <select name="sex" onChange={(event) => setSex(event.target.value)}>
                        <option hidden disabled selected value>{usersInfo.sex}</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>

                    <label >
                        Height(cm)
                        <br></br>
                        <input onChange={(event) => setHeight(event.target.value)} />
                    </label>

                    <label >

                        Age
                        <br></br>
                        <input onChange={(event) => setAge(event.target.value)} />
                    </label>
                </div>

                <button type="submit" className="updateButton"> Update </button>

            </form>
            <button class = "backArrowButtonUpdate" onClick={ReturnToProfile}><span class = "backArrowUpdate"></span></button>
        </div>
    )
}



export default UpdateUserInfo;