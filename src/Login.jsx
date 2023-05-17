import React from 'react'
import { useState } from 'react'
import './App.css'

function Login() {



  return(
    <div class="background">
      <div>
        <form>
          <input type="email" value={formData.email} name='email' onChange={e => handleChange(e)} placeholder="EMAIL" /><br />
          <input type="password" value={formData.password} name='password' onChange={e => handleChange(e)} placeholder="PASSWORD" /><br />
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