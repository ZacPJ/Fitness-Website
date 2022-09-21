import React from "react";
import '../pages/Userprofile.css';
import { Route, Routes, Link } from "react-router-dom";
import UpdateAccount from './UpdateAccount';


function Userprofile (){
    return(
        <div>
            <h1 className="heading">Userprofile page</h1>
            
            <div>
            <Link to="/UdateAccount"><button className="updatebutton" >Update Account</button></Link>
            <Routes><Route exact path="/UdateAccount" element={ <UpdateAccount /> } /></Routes>
            </div>
            
            <div>
                <button className="deletebutton" >Delete Account</button>
            </div>
        </div>
    )
}

export default Userprofile;