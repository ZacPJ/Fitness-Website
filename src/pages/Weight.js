import {React} from "react";
import '../pages/Weight.css';
function Weight (props){
    let exercise = props.exercise
    function submit(event){
        event.preventDefault()
        let chosenExercise = document.getElementById("exerciseChoose").value.slice(0,-1)
        let timeExercised = document.getElementById("time").value
        if (timeExercised == ""){
            timeExercised = 1
        }
        console.log(chosenExercise,timeExercised)
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
                    <select className = "buttonExercise" id = "exerciseChoose">
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
        </div>

    )
}

export default Weight;