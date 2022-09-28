import React from "react";
import { useState } from "react";
import { update } from "../utils";
import { useNavigate } from "react-router-dom"
let usersInfo = []
async function setVars(props) {
    usersInfo = await props.userInfo
    return props
}

const UpdateUserInfo = (props) => {
    setVars(props)
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [desiredWeight, setDesiredWieght] = useState();
    const [sex, setSex] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    // const [password, setPassword] = useState();
    // email, name, desiredWeight, sex, height, age 
    const navigate = useNavigate()
    async function submitHandler(event) {
        event.preventDefault();
        await update(email, name, desiredWeight, sex, height, age, usersInfo.calories);
        navigate("/Userprofile")
    }

    return (
        <form onSubmit={submitHandler} className="userForm">

            <div className="formFields">
                <label>
                    {/* Current email doesnt update */}
                    email
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Name
                    <input onChange={(event) => setName(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Desired Weight(Kg)
                    <input onChange={(event) => setDesiredWieght(event.target.value)} />
                </label>
                <br></br>


                <label for="sex">sex</label>

                <select name="sex" onChange={(event) => setSex(event.target.value)}>
                    <option hidden disabled selected value></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                <br></br>

                <label>
                    Height(cm)
                    <input onChange={(event) => setHeight(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Age
                    <input onChange={(event) => setAge(event.target.value)} />
                </label>
                <br></br>
            </div>

            <button type="submit" className="updateButton"> Update </button>

        </form>
    )
}



export default UpdateUserInfo;