import {React} from "react";
import '../pages/Weight.css';
let listArray = []
function Weight (props){
//ading this comment to try and push this correctly I will cry if this doesnt work
    let exercise = props.exercise
    let chosenDesc = props.exercise[0].description.replace("<p>","").replace("</p>","")
    function submit(event){
        event.preventDefault()
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let timeExercised = document.getElementById("time").value
        if (timeExercised === ""){
            timeExercised = 1
        }
        let chosenObj = {
            name:chosenExercise,
            time:timeExercised,
            caloriesBurned: "12"
        }
        listArray.push(chosenObj)
        console.log(chosenExercise,timeExercised,chosenObj,listArray)
    }
    function exerciseDesc(){
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let filteredExercise = props.exercise.filter(filter => chosenExercise === filter.name)
        chosenDesc = filteredExercise[0].description
        chosenDesc = chosenDesc.replaceAll("<p>","").replaceAll("</p>","")
        document.getElementById("chosenDescription").textContent = chosenDesc
        console.log(chosenDesc)
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
                    <p>60</p>
                </div>
                <div className = "innerWeightFlex">
                    <p>60</p>
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
                <input onClick = {submit} type ="submit" value = "Submit" className = "buttonExercise"></input>
            </div>
            <div className = "chosenDescriptionFlex">
                <label id="chosenDescription">{chosenDesc}</label>
            </div>
        </div>

    )
}

export default Weight;