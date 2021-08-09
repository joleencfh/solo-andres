// import App, {login} from './App';
// import ApiService from './Services/ApiService';
// // import React from 'react';
// import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom'; 
// import { Simulate } from 'react-dom/test-utils';
// import { expect } from '@jest/globals';
// import {userEvent} from '@testing-library/user-event';
// import { jest } from '@jest/globals';



// describe("clicking on a ticker title renders the options chain page", () => {
 
//     test("once clicked on a ticker title, the BACK button should be visible", async() =>{

//         //rendering stuff
//         render( <Router>
//                     <App />
//                 </Router>
//                 );

//         //acting
//         const loginBtn = screen.getByRole('button', {name: /Go!/i})
//         const emailInput = screen.getByPlaceholderText(/email/i);
//         const passwordInput = screen.getByPlaceholderText(/password/i);

//         // populate input fields 
//         fireEvent.change(emailInput,{target: {value: 'Joe@biden.us'}}); 
//         fireEvent.change(passwordInput, 'joe');        
        
//         // simulate click 
//         fireEvent.click(loginBtn); 

//         //wait for the page to be re-rendered
//         await waitFor(() => screen.getByText(/securities/i));
        
//         //expect to see securities title
//         expect(screen.getByText(/securities/i)).toBeInTheDocument();
        
//         // console.log(securities)
//         // Simulate.click(getByText('Securities'));

//         //wait for page change/re-render
//         // await waitFor(() => getByText(/Back/i))

//         //expect
//         // expect(getByText(/back/i)).toBeInTheDocument();    
//     })
// })

// describe("the login function calls findUser successfully", () => {
  
// //   jest.mock(ApiService, () => ({
// //     findUser: () => ({firstName: 'Joe', lastName:'Biden', email:'Joe@biden.us', password:'joe'})
// //   }));


//   test('should call findUser once', async () => {
//     // const mockFindUser = () => ({firstName: 'Joe', lastName:'Biden', email:'Joe@biden.us', password:'joe'})
//     // const findUser = jest.fn(() => ({firstName: 'Joe', lastName:'Biden', email:'Joe@biden.us', password:'joe'}));
//     jest.mock('./Services/ApiService');
//     const {findUser} = require('./Services/ApiService');

//     findUser.mockImplementation(() => ({firstName: 'Joe', lastName:'Biden', email:'Joe@biden.us', password:'joe'}));

//     render( <Router><App /></Router>);
  
//     //acting
//     const loginBtn = screen.getByRole('button', {name: /Go!/i})
//     const emailInput = screen.getByPlaceholderText(/email/i);
//     const passwordInput = screen.getByPlaceholderText(/password/i);
    
//     // populate input fields 
//     fireEvent.change(emailInput,{target: {value: 'Joe@biden.us'}}); 
//     fireEvent.change(passwordInput, 'joe');        
    
//     // simulate click 
//     fireEvent.click(loginBtn); 

//     //expect
//     expect(findUser).toHaveBeenCalledTimes(1);
//     });

// })

// //   test('should render correct username ', async () => {
    
// //     // login 
// //     render( <Router>
// //       <App />
// //   </Router>
// //   );

// // //acting
// // const loginBtn = screen.getByRole('button', {name: /Go!/i})
// // const emailInput = screen.getByPlaceholderText(/email/i);
// // const passwordInput = screen.getByPlaceholderText(/password/i);

// // // populate input fields 
// // fireEvent.change(emailInput,{target: {value: 'Joe@biden.us'}}); 
// // fireEvent.change(passwordInput, 'joe');        

// // // simulate click 
// // fireEvent.click(loginBtn); 

// // // 
// // //wait for the page to be re-rendered
// // await waitFor(() => screen.getByText(/securities/i));

// // // 


// // //expect to see securities title
// // expect(screen.getByText(/securities/i)).toBeInTheDocument();
// //   }


