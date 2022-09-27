
import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
// import styled from 'styled-components';
import './App.css';
import { fetchExercise } from './pages/components/api_main';
import Navbar from './pages/components/nav';
import Home from './pages/Home'
import Userprofile from './pages/Userprofile';
import Calorie from './pages/Calorie';
import Weight from './pages/Weight';
import UpdateAccount from './pages/UpdateAccount';
import SignUp from './pages/SignUp';
import { findUserInfo } from './pages/utils'
import { getCookie } from './pages/common/index'




function App() {

  const [storedExercise, setExercise] = useState([])
  useEffect(() => {
    fetchExercise(setExercise)
  }, [])
  console.log(storedExercise)

  return (

    <div>
      <Navbar />
      <div className="wrapper" style={{ border: "solid black" }}>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Weight" element={<Weight exercise={storedExercise} />} />
          <Route exact path="/Calorie" element={<Calorie />} />
          <Route exact path="/Userprofile" element={<Userprofile />} />
          <Route exact path="/UdateAccount" element={<UpdateAccount />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>

      </div>
    </div>
      )
}

export default App;
