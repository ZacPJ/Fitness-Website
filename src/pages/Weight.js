import {React} from "react";
import '../pages/Weight.css';
function Weight (props){
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
            
                <button>excercises</button>
                <div className = "dropdown-content">
                    <a>{props.exercise[0].name}</a>
                </div>
            </div>
        </div>

    )
}

export default Weight;