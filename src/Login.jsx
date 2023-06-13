import React from 'react'
import { useState } from 'react'
import './App.scss'

function Login() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  return(
    <div className="big-login">
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
    </div>
  )
}
export default Login