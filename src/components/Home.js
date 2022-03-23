import {Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Dashboard from "./Dashboard";

import '../css/home.css'



const Home = () => {

  const [token, setToken] = useState('')


  return (
    <div className="MainContainer">
        <Routes>
            <Route path="/" element={<Login setToken = {setToken}/>}/>
            <Route path="/dashboard" element={<Dashboard token = {token}/>}/>
        </Routes>
    </div>
  )
}

export default Home