// import react from 'react';
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <ul>
            <li><Link to="/"> Home </Link> </li>
            <li><Link to="/Weight"> Weight </Link> </li>
            <li><Link to="/Calorie"> Calorie </Link> </li>
            <li><Link to="/Userprofile"> Userprofile </Link> </li>
            <li><Link to="/UdateAccount"> UpdateAccount </Link> </li>
        </ul>
    );
};


export default Navbar;