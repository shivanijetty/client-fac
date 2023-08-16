import React from 'react'
import { useState } from 'react'
// import './App.scss'

function Login() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  return(
    <div className="big-login">
      <div className="wrapper">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="email" value='email' name='email' /><br />
            <input type="password" value='password' name='password' /><br />
            <div className="remember">
              <label>
                <input type="checkbox" />Remember me
              </label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register">
              <p>Don't have an account?
                <a className="register-link">  Register</a>
              </p>              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login