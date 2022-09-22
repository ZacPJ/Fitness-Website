
import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
// import styled from 'styled-components';
import './App.css';
import { fetchExcercise } from './pages/components/api_main';
import Nav from './pages/components/nav';
import Home from './pages/Home'
import Userprofile from './pages/Userprofile';
import Calorie from './pages/Calorie';
import Weight from './pages/Weight';


function App() {
  const [storedExcercise, setExcercise] = useState([])
  useEffect(() => {
    fetchExcercise(setExcercise)
  }, [])
  console.log(storedExcercise)

  return (

    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Weight" element={<Weight />} />
        <Route exact path="/Calorie" element={<Calorie />} />
        <Route exact path="/Userprofile" element={<Userprofile />} />
      </Routes>
    </div>
  )
}

export default App;