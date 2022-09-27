import React from "react";
import '../pages/Calorie.css';
import {listUserCals} from "./utils"
let usersInfo = {calories:0}
let allUsers =[]
async function setVars(props) {
    usersInfo = await props.usersInfo
    
}
async function getUsers(){
    allUsers = await listUserCals()
    allUsers = await allUsers.sort((a,b)=> b.calories - a.calories)
}

function Calorie (props){
    setVars(props)
    getUsers()
    console.log("BREAK")
    return(
        <div>
            <h1 className="title">Calorie page</h1>
            <h2>Your Total Calories Burned: {usersInfo.calories}</h2>
        <div>
            <h1>Top Calories Burned</h1>
            {allUsers?.length > -1 ? (
                    <div>
                {allUsers.map((arrayVar,index)=>{
                    let suffix = ""
                    let indexUnit = String(index+1).slice(-1)
                    switch(indexUnit){
                        case "1":
                            suffix = "st"
                            break
                        case "2":
                            suffix = "nd"
                            break
                        case "3":
                            suffix = "rd"
                            break
                        default:
                            suffix = "th"
                            break
                    }
                    return(
                                                <div key = {index}>
                                                    <div>
                                                        <div>
                                                        <p>{index+1}{suffix} {arrayVar.name} burned a total of {arrayVar.calories} calories</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                            })
                        }
                </div>
                ) : (
                <div>
                    <h2>~~~Error Getting Leaderboard~~~</h2>
                </div>
                )}
        </div>
        </div>
    )
}

export default Calorie;