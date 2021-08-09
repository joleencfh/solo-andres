import './Login.css';
import { AuthContext, MainContext} from '../../Context/Context';

import { useContext } from 'react';
import {login} from '../../Utils/AuthUtils';
import { findUser } from '../../Services/ApiService';


export default function Login() {

  const { emailState, passwordState, setEmailState,
     setPasswordState}  = useContext(AuthContext);
  const { userState, setUserState, setAuthentication}  = useContext(MainContext);
  

  const submitHandler = async  (e) => {
    e.preventDefault();
// console.log('set email state ',setEmailState )
    // console.log(emailState, passwordState)
// login function from Api utils login(email, password)
  const user = await findUser(emailState, passwordState)
  // console.log('emailState', emailState);
  // console.log('passwordState', passwordState);
  // console.log('setUserState function', setUserState);
  // console.log('login user ', user);
  // console.log(setUserState);
  setUserState(user)
  // await setUserState(user)
  setAuthentication(true);
  // console.log('userState ----  ', userState);
  }

  return (
    <div className="Login">
      
      <form id="login-form" onSubmit={submitHandler}>

        <div id="email">
          {/* <h4 id="email-legend">Email</h4> */}
          <input 
            className="email-input"
            type="text"
            placeholder="Email"
            value={emailState}
            onChange={(e) => {
              setEmailState(e.target.value)
            }}
          />
        </div>

        <div id="password">
          {/* <h4 id="password-legend">Password</h4> */}
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={passwordState}
            onChange={(e) => {
              setPasswordState(e.target.value)
            }}
          />
        </div>

        <div >
          <button 
            type="submit"
            id="submit-button"
          >
            Go!
          </button>
        </div>
         
      </form>


    </div>
  )
}
