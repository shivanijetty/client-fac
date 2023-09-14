import React from 'react'
import { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import './LogReg.scss'
// import './App.scss'

function Login( {handleToggle} ) {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  return(
    <div className='wrapper'>
    <div className="log-reg-form">
      <h2>Login</h2>
      <form id='form'>
        <div className='input-box'>
          <span className='icon'><ion-icon name="mail"></ion-icon></span>
          <input type="Email"  id='email' name='email' value={formData.email} onChange={e => handleChange(e)} required />
          <label for='email'>Email</label>
        </div>
          
        <div className='input-box'>
          <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
          <input type="Password" id='password' name='password' value={formData.password} onChange={e => handleChange(e)} required />
          <label for='password'>Password</label>
        </div>

        <div className="remember-agree">
          <label>
            <input type="checkbox" />Remember me
          </label>
        </div>
        <button type="submit" className="btn" onClick={() => {navigate('/weeklycalendar')}} >Login</button>
        <div className="log-reg">
          <p>Don't have an account?
            <a className="link" onClick={handleToggle} >  Register</a>
          </p>              
        </div>
      </form>
    </div>
    </div>
  )
}
export default Login