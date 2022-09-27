
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

<<<<<<< HEAD
  const [storedExercise, setExercise] = useState([])
  useEffect(() => {
    fetchExercise(setExercise)
  }, [])
=======
const [storedExercise, setExercise] = useState([])
const [userInfo, setUserInfo] = useState([])
async function pull_userInfo(data){
  await setUserInfo(data)
  console.log(`This is data sent fromt the child`)
  console.log(data)
}
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
>>>>>>> 64617a0eb4d1751d1378261b8f7ca12c4739047b
  console.log(storedExercise)

  return (

    <div>
<<<<<<< HEAD
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
=======
      <Nav />
      <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/Weight" element={<Weight exercise={storedExercise} usersInfo = {userInfo} pullInfo = {pull_userInfo} />} />
      <Route exact path="/Calorie" element={ <Calorie usersInfo = {userInfo} /> } />
      <Route exact path="/Userprofile" element={ <Userprofile /> } />
      <Route exact path="/UdateAccount" element={ <UpdateAccount usersInfo = {userInfo}/> } />
      <Route exact path="/SignUp" element={ <SignUp /> } />
      </Routes>
>>>>>>> 64617a0eb4d1751d1378261b8f7ca12c4739047b
    </div>
      )
}

export default App;
