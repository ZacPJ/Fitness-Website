
import {React, useState,useEffect} from "react";
import '../pages/Weight.css';
import {calorieCount} from "./components/api_main"
import {update} from "./utils";
let exercise = []
let chosenDesc = []
let listArray = []
let usersInfo = []
async function setVars(propsInner) {
    exercise = await propsInner.exercise
    usersInfo = await propsInner.usersInfo
    chosenDesc = await propsInner.exercise[0].description.replace("<p>","").replace("</p>","")
}
function Weight (props){
    const [listExercise, setExercise] = useState([])
    useEffect(()=>{
        props.setIsNav(true)
    }, [])
    useEffect(()=>{
        setExercise(listArray)
    },[listExercise])
    console.log(`Weight name ${props.usersInfo.name}`)
    setVars(props) 
    async function Submit(event){
        //event.preventDefault()
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let timeExercised = document.getElementById("time").value
        let filteredExercise = exercise.filter(filter => chosenExercise === filter.name)

        if (timeExercised === ""){
            timeExercised = 1
        }
        
        let chosenObj = {
            name:chosenExercise,
            time:timeExercised,
            caloriesBurned: calorieCount(usersInfo.currentWeight,usersInfo.height,usersInfo.age,filteredExercise[0].intensity,timeExercised,usersInfo.sex)
        }
        listArray.push(chosenObj)
        setExercise(...listArray,event)
        console.log(chosenExercise,timeExercised,chosenObj,listArray)
        updateCalories(chosenObj.caloriesBurned)
        await props.pullInfo(usersInfo)

        
        
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
    async function updateCalories (calories){
        calories = Math.round(calories)
        usersInfo.calories = calories+usersInfo.calories
        await update(usersInfo.email,usersInfo.name,usersInfo.desiredWeight,usersInfo.sex,usersInfo.height,usersInfo.age,(usersInfo.calories))
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
                    <div className = "innerWeightFlex">
                        <p>Total Calories Burned</p>
                    </div>
                </div>
                <div className = "weightFlex">
                    <div className = "innerWeightFlex">
                        <p>{props.usersInfo.currentWeight}</p>
                    </div>
                    <div className = "innerWeightFlex">
                        <p>{props.usersInfo.desiredWeight}</p>
                    </div>
                    <div className = "innerWeightFlex">
                        <p>{props.usersInfo.calories}</p>
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
                    
                {listExercise?.length > 0 ? (
                    <div>
                {listExercise.map((arrayVar,index)=>{
                    return(
                                                <div key = {index} className = "weightFlex">
                                                    <div>
                                                        <div className = "innerWeightFlex">
                                                        <p>{arrayVar.name} for {arrayVar.time} hours</p>
                                                        </div>
                                                        <div className = "innerWeightFlex">
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