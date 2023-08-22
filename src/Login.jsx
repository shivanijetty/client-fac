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
            <div className='input-box'>
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="Email" />
              <label>Email</label>
            </div>
            
            <div className='input-box'>
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="Password" />
              <label>Password</label>
            </div>

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