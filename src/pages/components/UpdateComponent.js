import React from "react";
import { useState } from "react";
import { update } from "../utils";


const UpdateUserInfo = ({setter}) =>{

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [desiredWeight, setDesiredWieght] = useState();
    const [sex, setSex] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    // const [password, setPassword] = useState();
    // email, name, desiredWeight, sex, height, age 

    async function submitHandler(event)
    {
        event.preventDefault();
        await update(email, name, desiredWeight, sex, height, age);
    }

    return(
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
                    Desired Weight
                    <input onChange={(event) => setDesiredWieght(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Sex
                    <input onChange={(event) => setSex(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Height
                    <input onChange={(event) => setHeight(event.target.value)} />
                </label>
                <br></br>

                <label>
                    Age
                    <input onChange={(event) => setAge(event.target.value)} />
                </label>
                <br></br>
            </div>

            <button type = "submit" className="updateButton"> Update </button>

        </form>
    )
}



export default UpdateUserInfo;