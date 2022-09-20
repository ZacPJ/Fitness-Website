//import './App.css'; //--Gets called for in index.js
import {useEffect, useState} from "react";
import {Navbar} from './pages/components/nav.js';
import { fetchExcercise} from "./comps/api_main.js";

function App() {
  const [storedExcercise, setExcercise] = useState([]);
  useEffect(()=>{
    fetchExcercise(setExcercise);
  },[])
//  return (
    //<Nav/>
 // )
 
}

export default App;