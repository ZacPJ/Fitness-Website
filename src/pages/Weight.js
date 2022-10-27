
import { React, useState, useEffect } from "react";
import '../pages/Weight.css';
import { calorieCount } from "./components/api_main"
import { update } from "./utils";
let exercise = []
let chosenDesc = ""
let listArray = []
let usersInfo = []
let grabCalories = 0
let actualWeight = 0
let initialiseTest = 0
async function setVars(propsInner) {
    await propsInner.setIsNav(true)
    exercise = await propsInner.exercise
    usersInfo = await propsInner.usersInfo
    let chosenExercise = ""
    chosenExercise = document.getElementById("exerciseChoose").value.slice(0, -1)
    if (await chosenDesc === "" && await chosenExercise !== "2 Handed Kettlebell Swing" && await chosenExercise !== ""){
        chosenDesc = "Sorry. No description was found for this exercise."
    }
    if (await chosenDesc === ""){
    chosenDesc = await propsInner.exercise[0].description.replace("<p>", "").replace("</p>", "")
    }
    
}
function Weight(props) {
    if (initialiseTest !== 1) {
        actualWeight = props.usersInfo.currentWeight
    }
    const [listExercise, setExercise] = useState([])
    useEffect(() => {
        setExercise(listArray)
    }, [listExercise])
    setVars(props)
    async function Submit(event) {
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0, -1)
        let timeExercised = document.getElementById("time").value
        let filteredExercise = exercise.filter(filter => chosenExercise === filter.name)

        if (timeExercised === "") {
            timeExercised = 1
        }

        let chosenObj = {
            name: chosenExercise,
            time: timeExercised,
            caloriesBurned: calorieCount(usersInfo.currentWeight, usersInfo.height, usersInfo.age, filteredExercise[0].intensity, timeExercised, usersInfo.sex)
        }
        listArray.push(chosenObj)
        setExercise(...listArray, event)
        updateCalories(chosenObj.caloriesBurned)

        await props.pullInfo(usersInfo)
        props.usersInfo.currentWeight = props.usersInfo.currentWeight - Math.round(grabCalories / 3500)
        actualWeight = await actualWeight - grabCalories / 3500
        if (String(props.usersInfo.currentWeight < String(actualWeight).slice(0, 1))) {
            props.usersInfo.currentWeight = await Math.ceil(actualWeight)
        }
        usersInfo = await props.usersInfo.currentWeight
        initialiseTest = 1
        await update(usersInfo.email, usersInfo.name, usersInfo.desiredWeight, usersInfo.sex, usersInfo.height, usersInfo.age, (usersInfo.calories), (props.usersInfo.currentWeight))

    }
    function exerciseDesc() {
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0, -1)
        let filteredExercise = exercise.filter(filter => chosenExercise === filter.name)
        chosenDesc = filteredExercise[0].description
        chosenDesc = chosenDesc.replaceAll("<p>", "").replaceAll("</p>", "")
        if (chosenDesc === ""){
            chosenDesc = "Sorry. No description was found for this exercise."
        }
        document.getElementById("chosenDescription").textContent = chosenDesc
        setExercise(listArray)

    }
    async function updateCalories(calories) {
        calories = Math.round(calories)
        usersInfo.calories = calories + usersInfo.calories
        await update(usersInfo.email, usersInfo.name, usersInfo.desiredWeight, usersInfo.sex, usersInfo.height, usersInfo.age, (usersInfo.calories), (usersInfo.currentWeight))
    }


    return (
        <div>
            <div>
                <h1 className="title">Weight page</h1>
            </div>
            <div className="weightFlex">
                <div className="innerWeightFlex">
                    <p>Current Weight</p>
                </div>
                <div className="innerWeightFlex">
                    <p>Target Weight</p>
                </div>
                <div className="innerWeightFlex">
                    <p>Total Calories Burned</p>
                </div>
            </div>
            <div className="weightFlex">
                <div className="innerWeightFlexLower">
                    <p id="currentWeight">{props.usersInfo.currentWeight}</p>
                </div>
                <div className="innerWeightFlexLower">
                    <p>{props.usersInfo.desiredWeight}</p>
                </div>
                <div className="innerWeightFlexLower">
                    <p>{props.usersInfo.calories}</p>
                </div>
            </div>
            <div className="weightFlex">
                <div className="dropdown">
                    <select onClick={exerciseDesc} className="buttonExercise" id="exerciseChoose" >
                        {exercise.map((exerciseVar, index) => {
                            return (
                                <option key={index} className="dropDownContent" value={exerciseVar.name + index}>{exerciseVar.name}---{exerciseVar.area}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <form>
                    <label htmlFor="time">Time Exercised (Hours) </label>
                    <input min="1" placeholder="1" type="number" id="time" name="time"></input>
                </form>
                <input onClick={Submit} type="submit" value="Submit" className="buttonExercise"></input>
            </div>
            <div className="chosenDescriptionFlexBox">
                <p id="chosenDescription" className="chosenDescriptionFlex">{chosenDesc}</p>
            </div>
            <div className="descPrimaryFlex">
                <h1>Your Exercises</h1>
                <div className="descSecondaryFlex">
                    {listExercise?.length > 0 ? (
                        <div>
                            {listExercise.map((arrayVar, index) => {
                                grabCalories = arrayVar.caloriesBurned
                                return (
                                    <div key={index} className="descWeightFlex">
                                        <div className="groupDescFlex">
                                            <div className="innerDescFlex">
                                                <p>{arrayVar.name} for {arrayVar.time} hours</p>
                                            </div>
                                            <div className="innerDescFlex">
                                                <p>This exercise burned a total of {Math.round(arrayVar.caloriesBurned)} calories</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    ) : (
                        <div>
                            <h1>Nothing to display!</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}

export default Weight;