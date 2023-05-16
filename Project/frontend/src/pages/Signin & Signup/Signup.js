import React , {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'

function Signup() {

  // set this state variable true if you want to display the error
  const[errorState , setErrorState] = useState(false)

  // password validator
  const [passwordValidator , setPasswordValidator] =useState({
      username:"",
      email:"",
      password:"",
      repassword:""
  })

  const signUpFieldHandler = (e) => {
    setPasswordValidator({...passwordValidator , [e.target.name]:e.target.value})
  }

  const signupSubmitHandler = (e) => {
    e.preventDefault()

    if(passwordValidator.password !== passwordValidator.repassword){
      setErrorState(true)
    }
    else{
      setErrorState(false)
    }
  }

  return (
    <div className="signin-signup-cpt-frame">
        <form onSubmit={signupSubmitHandler}>
              {/* username container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Username*</span>
                <input type="text" className="signin-signup-input-field" placeholder='Enter your username' name='username' value={passwordValidator.username} onChange={signUpFieldHandler}/>
              </div>
              {/* email container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Email*</span>
                <input type="text" className="signin-signup-input-field" placeholder='Enter your email' name='email' value={passwordValidator.email} onChange={signUpFieldHandler}/>
              </div>
               {/* password container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Password*</span>
                <input type="password" className="signin-signup-input-field" placeholder='Enter your password' name='password' value={passwordValidator.password} onChange={signUpFieldHandler}/>
              </div>
               {/* confirm password container */}
              <div className="input-container-signin-signup">
                <span className="signin-signup-label">Re-enter Password*</span>
                <input type="password" className="signin-signup-input-field" placeholder='Re-enter the password' name='repassword' value={passwordValidator.repassword} onChange={signUpFieldHandler}/>
              </div>
              {/* error message */}
              <span className={errorState ? `error-state-signin` : `error-state-signin hide`}>
               passwords are not matching!
              </span>
              <button type='submit' className="signin-signup-btn">Sign up</button>
        </form>
    </div>
  )
}

export default Signup