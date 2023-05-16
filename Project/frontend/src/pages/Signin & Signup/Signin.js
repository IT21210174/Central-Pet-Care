import React, { useState } from 'react'
import './SigninSignupStyles.scss'
function Signin() {
  // set this state variable true if you want to display the error
  const[errorState , setErrorState] = useState(true)

  return (
    <div className="signin-signup-cpt-frame">
        <form onSubmit="">
              {/* email container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Email*</span>
                <input type="text" className="signin-signup-input-field" placeholder='Enter your email'/>
              </div>
              {/* password container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Password*</span>
                <input type="text" className="signin-signup-input-field" placeholder='Enter your password'/>
              </div>
              {/* error message */}
              <span className={errorState ? `error-state-signin` : `error-state-signin hide`}>
               incorrect email or password!
              </span>
              <button type='submit' className="signin-signup-btn">Sign in</button>
        </form>
    </div>
  )
}

export default Signin