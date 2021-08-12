import Login from './Login.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('login component', ()=> {
test('should call login wih correct credentials', async ()=> {
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

  userEvent.type(emailInput, 'John@doe.com'); 
  userEvent.type(passwordInput, 'pwd'); 

  await userEvent.click(loginBtn); 

  expect(login).toHaveBeenCalledWith(credentials.email, credentials.password)
}) 
})

test('should have go text to login on button', ()=> {
  render(<Login />);
  const loginBtn = screen.getByRole('button', {name: /Go!/i}); 
  expect(loginBtn).toBeInTheDocument();
})






