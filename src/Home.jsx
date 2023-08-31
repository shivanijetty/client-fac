import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Login.scss'
import React from 'react'
import './App.scss'

function Home() {
  const [renderReg, setRenderReg] = useState(false)

  const handleToggle = () => {
    setRenderReg(!renderReg)
  }
  

  return(
    <div className="big-login">
      <div>
        {renderReg ? <Register handleToggle={handleToggle} /> : <Login handleToggle={handleToggle} />}
      </div>
    </div>
  )
}
export default Home