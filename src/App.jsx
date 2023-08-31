import React from 'react'
import { useState } from 'react'
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import BackgroundImage from './images/bg-login-reg.jpg'
// import Login from './Login'
import Home from './Home'
import WeeklyCalendar from './WeeklyCalendar'
// import './App.scss'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/weeklycalendar" element={<WeeklyCalendar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
