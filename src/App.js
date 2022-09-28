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
import { findUserInfo } from './pages/utils'
import { getCookie } from './pages/common/index'




function App() {

  const [storedExercise, setExercise] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [isNav, setIsNav] = useState(false)
  async function pull_userInfo(data) {
    await setUserInfo(data)
    console.log(`This is data sent fromt the child`)
    console.log(data)
  }
  useEffect(() => {
    let cookie = getCookie("jwt_token");
    console.log(cookie);
    if (cookie !== false) {
      loginWithToken(cookie);
    }
    fetchExercise(setExercise)
    findUserInfo(getCookie("jwt_token"), setUserInfo)
  }, [])
  async function loginWithToken(cookie) {
    const cookieUser = await findUserInfo(cookie);
    setUserInfo(cookieUser);
    console.log("signed in with cookies on app.js");
  }
  console.log(storedExercise)
  console.log(`User test ${userInfo.name}`)





  return (

    <div>
      {isNav ? <Nav /> : null}
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Home setIsNav = {setIsNav} isNav = {isNav} />} />
          <Route exact path="/Weight" element={<Weight isNav = {isNav} setIsNav = {setIsNav} exercise={storedExercise} usersInfo={userInfo} pullInfo={pull_userInfo} />} />
          <Route exact path="/Calorie" element={<Calorie usersInfo={userInfo} isNav = {isNav}setIsNav = {setIsNav}/>} />
          <Route exact path="/Userprofile" element={<Userprofile usersInfo = {userInfo} setIsNav = {setIsNav}/>} />
          <Route exact path="/UdateAccount" element={<UpdateAccount usersInfo={userInfo} />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;