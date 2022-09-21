
import './App.css';
import {fetchExcercise } from './pages/components/api_main';
import Nav from './pages/components/nav';
import {useState, useEffect} from 'react'

function App() {
  const [storedExcercise, setExcercise] = useState([])
  useEffect(()=>{
    fetchExcercise(setExcercise)
  },[])
  console.log(storedExcercise)
  
  return (
    <Nav/>
  )
}

export default App;