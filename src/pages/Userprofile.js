import React from "react";
import '../pages/Userprofile.css';

function Userprofile (){
    return(
        <div>
            <h1 className="heading">Userprofile page</h1>
            <div>
                <button className="updatebutton" >Update Account</button>
            </div>
            <div>
                <button className="deletebutton" >Delete Account</button>
            </div>
        </div>
    )
}

export default Userprofile;