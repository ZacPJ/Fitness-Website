import {React} from "react";
import '../pages/Weight.css';
function Weight (props){
    let exercise = props.exercise
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
            <div className= "dropdown">
                <button class = "buttonExercise">excercises</button>
                <div className = "dropdown-content">
                    {exercise.map((exerciseVar,index)=>{
                        return(
                        <li key = {index} className="dropDownContent">{exerciseVar.name}---{exerciseVar.area}</li>
                        )
                    })
                    }
                </div>
            </div>
        </div>

    )
}

export default Weight;