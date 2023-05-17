import React from 'react'
import { useState } from 'react'
import './App.css'

function Login() {
  const formData = {}


  return(
    <div className="background">
      <div className="login-form">
        <form>
          <input type="email" value='email' name='email' placeholder="EMAIL" /><br />
          <input type="password" value='password' name='password' placeholder="PASSWORD" /><br />
          <div>
            <input type="submit" />
            <button onClick={() => { navigate('/home') }}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login