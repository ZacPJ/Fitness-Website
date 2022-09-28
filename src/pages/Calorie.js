import React from "react";
import { useState } from "react";
import '../pages/Calorie.css';
import { useEffect } from "react";
import { listUserCals } from "./utils"
let usersInfo = []
let allUsers = []
let pageLoad = 0
async function setVars(props) {
    usersInfo = await props.usersInfo
    await props.setIsNav(true)
}



function Calorie(props) {
    async function getUsers() {
        allUsers = await listUserCals()
        allUsers = await allUsers.sort((a, b) => b.calories - a.calories)
        if (pageLoad === 0) {
            setAllUsersState(allUsers)
        }
    }
    const [userInfoState, setUserInfoVar] = useState([])
    const [allUsersState, setAllUsersState] = useState([])
    setVars(props)
    console.log(props.usersInfo)
    useEffect(() => {

        setUserInfoVar(usersInfo)
        setAllUsersState(allUsers)
        props.setIsNav(true)
    }, [userInfoState])
    getUsers()

    console.log("BREAK")
    return (
        <div>
            <h1 className="title">Your Total Calories Burned: {userInfoState.calories}</h1>

            <div className = "primaryLeaderBoardFlex">
                <h1>Top Calories Burned</h1>
                <div className="leaderBoardInfoFlex">
                    {allUsersState?.length > 0 ? (
                        <div>
                            {allUsersState.map((arrayVar, index) => {
                                let isEven = true
                                let isYou = false
                                pageLoad = 1
                                let suffix = ""
                                let indexUnit = String(index + 1).slice(-1,2)
                                switch (indexUnit) {
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
                                if((index+1)%2 === 0){
                                    console.log(`index is even`)
                                    isEven = true
                                }else{
                                    isEven = false
                                }
                                if (arrayVar.name === userInfoState.name && arrayVar.calories === userInfoState.calories){
                                    isYou = true
                                }
                                return (
                                    <div key={index}>
                                        <div>
                                            <div className = {isYou ? 'leaderBoardInfoYou' : isEven ? 'leaderBoardInfoEven' : 'leaderBoardInfo'}>
                                                <li className = "position">{index + 1}{suffix}   </li>
                                                <li>   {arrayVar.name} burned a total of {arrayVar.calories} calories</li>
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
            </div>
            )
}

            export default Calorie;