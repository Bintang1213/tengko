import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

        const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""  />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Nama' required />}
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign up"?"Create account":"login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Dengan melanjutkan, saya menyetujui ketentuan penggunaan & kebijakan privasi</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
