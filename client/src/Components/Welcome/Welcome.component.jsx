import { useState } from 'react'
import { AuthContext } from '../../Context/Context';
import Login from '../Login/Login.component';
import Register from '../Register/Register.component';
import appLogo from '../../images/app_logo.png';
import homeBackground from '../../images/home_background.png';
import homeFooterLeft from '../../images/footer_left.png';
import homeFooterRight from '../../images/footer_right.png';
import './Welcome.css';

export default function Welcome() {

  const [selectedButton, setSelectedButton] = useState(true);
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [firstNameState, setFirstNameState] = useState('');
  const [lastNameState, setLastNameState] = useState('');


  return (
      <AuthContext.Provider 
        value={{
          emailState: emailState,
          setEmailState: setEmailState,
          passwordState: passwordState,
          setPasswordState: setPasswordState,
          firstNameState: firstNameState,
          setFirstNameState: setFirstNameState,
          lastNameState: lastNameState,
          setLastNameState: setLastNameState,
        }}
        >
    <div className="Welcome">

      <div 
        id="static-info"
        style={{backgroundImage: `url(${homeBackground})`}}
      >

        <div id="welcome-message">
          <img id="big-logo"src={appLogo} alt="logo goes here"></img>
          <h2>welcome to ace options</h2>
        </div>

        <div id="slogan">
          <p>options trading made simple</p>
        </div>

        {/* <div id="seen">
          as seen on
        </div> */}

        <div id="snapshot-div">
          {/* <img id="snapshot" src={bloomberg} alt="bloomberg"></img>
          <img id="snapshot" src={forbes} alt="forbes"></img>
          <img id="snapshot" src={economist} alt="images"></img> */}
        </div>

      </div>
      

      <div id="unstatic-info">
        
        <button 
          id="buttons-register-login"
          onClick={ () => setSelectedButton(true) }
        >Log In</button>

        <button 
          id="buttons-register-login"
          onClick={ () => setSelectedButton(false) }
        >Register</button>

        

        {selectedButton ? 
          <Login /> :
          <Register 
            // firstNameState={firstNameState}
            // setFirstNameState={setFirstNameState}
            // lastNameState={lastNameState}
            // setLastNameState={setLastNameState}
            // emailState={emailState}
            // setEmailState={setEmailState}
            // passwordState={passwordState}
            // setPasswordState={setPasswordState}
            // register={register}
          />
        }

      </div>

      <div id="footer">
        <img src={homeFooterRight} id="footer-right"></img>
        <img src={homeFooterLeft} id="footer-left"></img>
      </div>
      
    </div>
    </AuthContext.Provider>
  )
}
