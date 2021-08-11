import React from 'react';
import './Login.css';
import { AuthContext, MainContext } from '../../Context/Context';

import { MainContextType } from '../../Types';

import { useContext } from 'react';
import { login } from '../../Utils/AuthUtils';
import { findUser } from '../../Services/ApiService';

export default function Login() {
  const { userState, setUserState, setAuthentication } =
    useContext<MainContextType>(MainContext);

  const { emailState, passwordState, setEmailState, setPasswordState } =
    useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await findUser(emailState, passwordState);
    setUserState(user);
    setAuthentication(true);
  };

  return (
    <div className='Login'>
      <form id='login-form' onSubmit={submitHandler}>
        <div id='email'>
          {/* <h4 id="email-legend">Email</h4> */}
          <input
            className='email-input'
            type='text'
            placeholder='Email'
            value={emailState}
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
          />
        </div>

        <div id='password'>
          {/* <h4 id="password-legend">Password</h4> */}
          <input
            className='password-input'
            type='password'
            placeholder='Password'
            value={passwordState}
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
          />
        </div>

        <div>
          <button type='submit' id='submit-button'>
            Go!
          </button>
        </div>
      </form>
    </div>
  );
}