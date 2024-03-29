import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LogReg.scss";
// import Home from './Home';

function Register({handleToggle}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  })
  // const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleAlert = () => {
    window.location.reload()
    alert('Success! Now log in to get started!✨');
    // navigate('/')
  }
  
  
  return (
    <div className='wrapper' id='reg-wrapper'>
    <div className="log-reg-form" id='reg'>
    <h2>Register</h2>
    <form>
      <div className='input-box'>
        <span className='icon'><ion-icon name="person"></ion-icon></span>
        <input type="text" name='username' value={formData.username} onChange={e => handleChange(e)} required />
        <label>Username</label>
      </div>

      <div className='input-box'>
        <span className='icon'><ion-icon name="mail"></ion-icon></span>
        <input type="Email" name='email' value={formData.email} onChange={e => handleChange(e)} required />
        <label>Email</label>
      </div>
        
      <div className='input-box'>
        <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
        <input type="Password" name='password' value={formData.password} onChange={e => handleChange(e)} required />
        <label>Password</label>
      </div>

      <div className="remember-agree">
        <label>
          <input type="checkbox" />I agree to the Terms & Conditions
        </label>
      </div>
      <button type="submit" className="btn" onClick={handleAlert}>Register</button>
      <div className="log-reg">
        <p>Already have an account?
          <a className="link" onClick={handleToggle}>  Login</a>
        </p>              
      </div>
    </form>
  </div>
  </div>

  )
}
export default Register