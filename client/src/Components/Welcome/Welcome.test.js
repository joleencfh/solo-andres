import Welcome from './Welcome.component';
import { render, screen } from '@testing-library/react';

test('should have login text on button', ()=> {
  render(<Welcome />);
 
  const loginBtn = screen.getByRole('button', {name: /Log in/i}); 
  expect(loginBtn).toBeInTheDocument();
  
})

test('should have register text on button', ()=> {
  render(<Welcome />);
  
  const registerBtn = screen.getByRole('button', {name: /Register/i}); 
  expect(registerBtn).toBeInTheDocument();
})