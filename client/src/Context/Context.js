import React  from 'react';

export const MainContext = React.createContext();
export const AuthContext = React.createContext();




// sample code 


// import React, { useState, useEffect } from 'react';

// const AuthContext = React.createContext({
//   isLoggedIn: false,
//   onLogout: () => {},
//   onLogin: (email, password) => {}
// });

// export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   const loginHandler = () => {
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//         onLogin: loginHandler,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


// 
// import React, { useContext } from 'react';


// function App() {
//   const ctx = useContext(AuthContext);

//   return (
//     <React.Fragment>
//       <MainHeader />
//       <main>
//         {!ctx.isLoggedIn && <Login />}
//         {ctx.isLoggedIn && <Home />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;