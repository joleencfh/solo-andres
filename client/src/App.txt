import React, { useState } from 'react';
// remember to import context here after creating it
import { MainContext } from './Context/Context';
import Navbar from './Components/Navbar/Navbar.component';
import Welcome from './Components/Welcome/Welcome.component';
import Dashboard from './Components/Dashboard/Dashboard.component';
import './App.css';



function App() {

  
  // user state
  const [userState, setUserState] = useState({}); 

  // authentication state
  const [authentication, setAuthentication] = useState(false);
  // if false --> user not logged in, true --> user is logged in



  return (
  <MainContext.Provider 
       value = {{
        userState: userState,
        setUserState: setUserState,
        authentication: authentication,
        setAuthentication: setAuthentication
      }}>
      <div className="App">
        <Navbar /> 
        {!authentication ?  <Welcome /> : <Dashboard />} 
      </div>      
  </ MainContext.Provider>
  );
}

export default App;




 // handler functions

  // async function login(email, password) {
  //   const currentUser = await findUser(email, password);
  //   console.log(currentUser)
  //   setUserState(currentUser);
  //   setAuthentication(true); 
  // }

  // async function register(firstName, lastName, email, password) {
  //   const newUser =  await addUser(firstName, lastName, email, password);
  //   console.log(newUser);
  //   setUserState(newUser);
  //   setAuthentication(true);
  // }


  // async function optionToWatchlist(option) {
  //   await addOptionToWatchlist(option, userState.email);
  //   setUserState((prevUser) => ({...prevUser, watchlist: [...prevUser.watchlist, option]}));
  // }

  // async function optionToPortfolio(option) {
  //   await addOptionToPortfolio(option, userState.email);
  //   setUserState((prevUser) => ({...prevUser, portfolio: [...prevUser.portfolio, option], balance: prevUser.balance - option.ask}));
  // }

  // async function deleteFromWatchlist(option) {
  //   await deleteOptionFromWatchlist(option, userState.email);
  //   setUserState((prevUser) => ({...prevUser, watchlist: prevUser.watchlist.filter(userOption => userOption._id !== option._id)}))
  // }

  // async function deleteFromPortfolio(option) {
  //   await deleteOptionFromPortfolio(option, userState.email);
  //   setUserState((prevUser) => ({...prevUser, portfolio: prevUser.portfolio.filter(userOption => userOption._id !== option._id), balance: prevUser.balance + option.bid}));
  // }