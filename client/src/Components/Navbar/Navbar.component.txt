import React, { useContext } from 'react'
import Email from '../Email/Email.component';
import Balance from '../Balance/Balance.component';
import './Navbar.css';
import appLogo from '../../images/app_logo.png';
import { MainContext } from '../../Context/Context';




export default function Navbar() {

  const { authentication, setAuthentication } = useContext(MainContext);

  return (
    <div className="Navbar">

      <div id="logo">
        <img src={appLogo} alt="LOGO"></img>
      </div>

      <div id="app-name">
        <h1>ace options</h1>
        {/* <img src={appName} alt="ace-options"></img> */}
      </div>
      
      {authentication ?

        <div className="user-info">
    
          <div id="email-navbar">
            <Email 
              id="email-render"
      
            />
          </div>

          <div id="balance">
            <Balance 
     
            />
          </div>

          <div id="div-logout-button">
            <button 
              id="logout-button"
              onClick={() => setAuthentication(false)}
            >
              Log Out
            </button>
          </div>

        </div>
      : 
        <div id="not-auth-text">

          <div id="home-button">
            <h6>Home</h6>
          </div>

          <div id="login-button">
            <h6>Our Technology</h6>
          </div>

          <div id="register-button">
            <h6>Help Center</h6>
          </div>

        </div>
      }

    </div>
  )
}
