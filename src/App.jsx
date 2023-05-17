import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import BackgroundImage from './images/background.jpg'
import Login from './Login'

function App() {


  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
