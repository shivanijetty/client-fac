import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './LogReg.scss'
import React from 'react'

function Home() {
  const [showReg, setShowReg] = useState(false)

  const handleToggle = () => {
    setShowReg(!showReg)
  }
  

  return(
    <div className="big-login">
      <div>
        {showReg ? <Register handleToggle={handleToggle} /> : <Login handleToggle={handleToggle} />}
      </div>
    </div>
  )
}
export default Home