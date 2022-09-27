
import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
// import styled from 'styled-components';
import './App.css';
import { fetchExercise } from './pages/components/api_main';
import Nav from './pages/components/nav';
import Home from './pages/Home'
import Userprofile from './pages/Userprofile';
import Calorie from './pages/Calorie';
import Weight from './pages/Weight';
import UpdateAccount from './pages/UpdateAccount';
import SignUp from './pages/SignUp';
import {findUserInfo} from './pages/utils'
import {getCookie} from './pages/common/index'




function App() {

const [storedExercise, setExercise] = useState([])
const [userInfo, setUserInfo] = useState([])
useEffect(()=>{
  let cookie = getCookie("jwt_token");
      console.log(cookie);
      if (cookie !== false)
      {
          loginWithToken(cookie);
      }
  fetchExercise(setExercise)
  findUserInfo(getCookie("jwt_token"),setUserInfo)
},[])
  async function loginWithToken(cookie)
    {
        const cookieUser = await findUserInfo(cookie);
        setUserInfo(cookieUser);
        console.log("signed in with cookies on app.js");
    }
  console.log(storedExercise)
  console.log(`User test ${userInfo.name}`)




  
  return (

    <div>
      <Nav />
      <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/Weight" element={<Weight exercise={storedExercise} usersInfo = {userInfo} />} />
      <Route exact path="/Calorie" element={ <Calorie /> } />
      <Route exact path="/Userprofile" element={ <Userprofile /> } />
      <Route exact path="/UdateAccount" element={ <UpdateAccount /> } />
      <Route exact path="/SignUp" element={ <SignUp /> } />
      </Routes>
    </div>
  )
}

export default App;
