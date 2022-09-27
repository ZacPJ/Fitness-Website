import {React, useState,useEffect} from "react";
import '../pages/Weight.css';
import {calorieCount} from "./components/api_main"
import {update} from "./utils";
let exercise = []
let chosenDesc = []
let listArray = []
let usersInfo = []
async function setVars(props) {
    exercise = await props.exercise
    usersInfo = await props.usersInfo
    chosenDesc = await props.exercise[0].description.replace("<p>","").replace("</p>","")
    return props
}
function Weight (props){
    const [listExercise, setExercise] = useState([])
    useEffect(()=>{
        setExercise(listArray)
      },[listExercise])
    console.log(`Weight name ${props.usersInfo.name}`)
    setVars(props) 
    function Submit(event){
        //event.preventDefault()
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let timeExercised = document.getElementById("time").value
        let filteredExercise = exercise.filter(filter => chosenExercise === filter.name)
        console.log (`FilteredChoice ${filteredExercise[0].intensity} should be ${exercise[1].intensity}`)
        if (timeExercised === ""){
            timeExercised = 1
        }
        
        let chosenObj = {
            name:chosenExercise,
            time:timeExercised,
            caloriesBurned: calorieCount(usersInfo.currentWeight,usersInfo.height,usersInfo.age,filteredExercise[0].intensity,timeExercised,usersInfo.sex)
        }
        listArray.push(chosenObj)
        setExercise(listArray)
        console.log(chosenExercise,timeExercised,chosenObj,listArray)
        updateCalories(chosenObj.caloriesBurned)
        
    }
    function exerciseDesc(){
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let filteredExercise = exercise.filter(filter => chosenExercise === filter.name)
        chosenDesc = filteredExercise[0].description
        chosenDesc = chosenDesc.replaceAll("<p>","").replaceAll("</p>","")
        document.getElementById("chosenDescription").textContent = chosenDesc
        console.log(chosenDesc)
        setExercise(listArray)
    }
    function updateCalories (calories){
        calories = Math.round(calories)
        update(usersInfo.email,usersInfo.name,usersInfo.desiredWeight,usersInfo.sex,usersInfo.height,usersInfo.age,calories)
    }
    return(
        <div>
            <div>
            <h1>Weight page</h1>
            </div>
            <div className = "weightFlex">
                <div className = "innerWeightFlex">
                    <p>Current Weight</p>
                </div>
                <div className = "innerWeightFlex">
                    <p>Target Weight</p>
                </div>
            </div>
            <div className = "weightFlex">
                <div className = "innerWeightFlex">
                    <p>{props.usersInfo.currentWeight}</p>
                </div>
                <div className = "innerWeightFlex">
                    <p>{props.usersInfo.desiredWeight}</p>
                </div>
            </div>
            <div className = "weightFlex">
                <div className= "dropdown">
                    <select onClick = {exerciseDesc} className = "buttonExercise" id = "exerciseChoose" >
                        {exercise.map((exerciseVar,index)=>{
                            return(
                            <option key = {index} className="dropDownContent" value={exerciseVar.name + index}>{exerciseVar.name}---{exerciseVar.area}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <form>
                    <label htmlFor="time">Time Exercised (Hours) </label>
                    <input min = "1" placeholder = "1" type ="number" id = "time" name = "time"></input>
                </form>
                <input onClick = {Submit} type ="submit" value = "Submit" className = "buttonExercise"></input>
            </div>
            <div className = "chosenDescriptionFlex">
                <label id="chosenDescription">{chosenDesc}</label>
            </div>
            <div id = "exerciseMap">
            <div className = "list">
                {listExercise.map((arrayVar,index)=>{
                return(
                    <div key = {index} className = "weightFlex">
                        <div>
                            <div className = "innerWeightFlex">
                            <label>{arrayVar.name} for {arrayVar.time} hours</label>
                            <label>This exercise burned a total of {Math.round(arrayVar.caloriesBurned)} calories</label>
                            </div>
                        </div>
                    </div>
                )
                })
                }
                </div>
            </div>
        
        </div>

    )
}

export default Weight;