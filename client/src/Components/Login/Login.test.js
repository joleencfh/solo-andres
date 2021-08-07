import Login from './Login.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('login component', ()=> {


it('should call login wih correct credentials', async ()=> {
  const setEmailState = jest.fn();
  const setPasswordState = jest.fn();
  const login = jest.fn();
  const credentials = {email: 'John@doe.com', password:'doe'};

  render(

  <Login 
    setEmailState={setEmailState} 
    setPasswordState={setPasswordState}
    emailState={credentials.email} 
    passwordState={credentials.password}
   
    login={login}
  />
  )

  const emailInput = screen.getByPlaceholderText(/Email/i) ;
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const loginBtn = screen.getByRole('button', {name: /Go!/i}); 

 // populate input fields 
  userEvent.type(emailInput, 'John@doe.com'); 
  userEvent.type(passwordInput, 'pwd'); 

  // submit form 
  await userEvent.click(loginBtn); 

  // assert 
  expect(login).toHaveBeenCalledWith(credentials.email, credentials.password)

//   // to check how many times setEmailState and setPasswordState has been called 
//   expect(setPasswordState).toHaveBeenCalledTimes(3);
//   expect(setEmailState).toHaveBeenCalledTimes(12);
}) 

})

test('should have go text to login on button', ()=> {
  render(<Login />);
  // Go!
  const loginBtn = screen.getByRole('button', {name: /Go!/i}); 
  expect(loginBtn).toBeInTheDocument();
  
})






