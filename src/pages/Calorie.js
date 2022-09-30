import React from "react";
import { useState } from "react";
import '../pages/Calorie.css';
import { useEffect } from "react";
import { listUserCals } from "./utils"
let usersInfo = []
let allUsers = []
async function setVars(props) {
    usersInfo = await props.usersInfo
    await props.setIsNav(true)
}



function Calorie(props) {
    async function getUsers() {
        allUsers = await listUserCals()
        allUsers = await allUsers.sort((a, b) => b.calories - a.calories)
        setAllUsersState(allUsers)
        setUserInfoVar(usersInfo)

    }
    const [userInfoState, setUserInfoVar] = useState([])
    const [allUsersState, setAllUsersState] = useState([])
    setVars(props)
    useEffect(() => {


        props.setIsNav(true)
    }, [userInfoState])
    getUsers()
    return (
        <div>
            <h1 className="title">Your Total Calories Burned: {userInfoState.calories}</h1>

            <div className="primaryLeaderBoardFlex">
                <h1>Top Calories Burned</h1>
                <div className="leaderBoardInfoFlex">
                    {allUsersState?.length > 0 ? (
                        <div>
                            {allUsersState.map((arrayVar, index) => {
                                let isEven = true
                                let isYou = false
                                let suffix = ""
                                let indexUnit = ""
                                const numArray = ["11", "12", "13"]
                                indexUnit = String(index + 1).slice(-1, 2)

                                if (indexUnit in numArray) {
                                    suffix = "th"
                                } else {
                                    indexUnit = String(index + 1).slice(-1)
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
                                }
                                if ((index + 1) % 2 === 0) {
                                    isEven = true
                                } else {
                                    isEven = false
                                }
                                if (arrayVar.name === userInfoState.name && arrayVar.calories === userInfoState.calories) {
                                    isYou = true
                                }
                                return (
                                    <div key={index}>
                                        <div>
                                            <div className={isYou ? 'leaderBoardInfoYou' : isEven ? 'leaderBoardInfoEven' : 'leaderBoardInfo'}>
                                                <li className="position">{index + 1}{suffix}   </li>
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
                            <h2>~~~Retrieving Leaderboard~~~</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calorie;