import React from "react";
import { useState } from "react";
import { signUp } from "../utils";


const SignUp = ({setter}) =>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [weight, setWeight] = useState();
    const [desiredWeight, setDesiredWeight] = useState();
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [sex, setSex] = useState();


    async function submitHandler(event)
    {
        event.preventDefault();
        await signUp(name,email,password,weight,desiredWeight,age,height,sex,setter);
    }

    return(
        <form onSubmit={submitHandler} className="userForm">

            <div className="formFields">
                <label>
                    name
                    <input onChange={(event) => setName(event.target.value)} />
                </label>
                <br></br>

                <label>
                    email
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br></br>

                <label>
                    password
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br></br>

                <label>
                    weight
                    <input onChange={(event) => setWeight(event.target.value)} />
                </label>
                <br></br>

                <label>
                    target weight
                    <input onChange={(event) => setDesiredWeight(event.target.value)} />
                </label>
                <br></br>

                <label>
                    age
                    <input onChange={(event) => setAge(event.target.value)} />
                </label>
                <br></br>

                <label>
                    height
                    <input onChange={(event) => setHeight(event.target.value)} />
                </label>
                <br></br>



                <label for="sex">sex</label>

                <select name="sex" onChange={(event) => setSex(event.target.value)}>
                    <option hidden disabled selected value></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select> 

                {/*
                <label>
                    sex
                    <input onChange={(event) => setSex(event.target.value)} />
                </label>
                <br></br>
                */}


            </div>

            <button type = "submit"> sign up </button>

        </form>
    )
}



export default SignUp;