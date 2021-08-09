import Login from "./Login.component";
import { findUser } from "../../Services/ApiService";
import {login} from '../../Utils/AuthUtils';
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { useContext } from "react";
import { expect } from "@jest/globals";
import { AuthContext, MainContext} from '../../Context/Context';

jest.mock('../../Services/ApiService', () => {
    return {
       findUser: () => ({
           email: 'test@test.com',
       }),
       addUser: () => {}
    }
})

describe('login function should call findUser function', () => {


it('checks if find user has been called once', async()=>{
const emailState = 'Joe@biden.us';
const passwordState = 'joe';
const setUserState = jest.fn();

render(
  <AuthContext.Provider 
  value = {{
    setEmailState: () => {},
    setPasswordState: () => {},
    emailState,
    passwordState,
  }}>
      <MainContext.Provider
      value= {
          {  setUserState,
             setPasswordState: () => {},
             setAuthentication: () => {},
             userState: {}
             }
         
      }>
         <Login />
       </MainContext.Provider>
  </AuthContext.Provider>
       );

const emailInput = screen.getByPlaceholderText(/Email/i) ;
const passwordInput = screen.getByPlaceholderText(/Password/i);
const loginBtn = screen.getByRole('button', {name: /Go!/i}); 

 // populate input fields 
userEvent.type(emailInput, 'John@doe.com'); 
userEvent.type(passwordInput, 'pwd'); 

// submit form 
await userEvent.click(loginBtn); 

expect(setUserState).toHaveBeenCalledWith({email: 'test@test.com'})




})  
    
})





