import { findUser, addUser } from '../Services/ApiService'

export async function login(email, password) {
    return await findUser(email, password);
    
    // setUserState(currentUser);
    // setAuthentication(true); 
  }

export async function register(firstName, lastName, email, password) {
   return await addUser(firstName, lastName, email, password);
    
    // setUserState(newUser);
    // setAuthentication(true);
  }



  