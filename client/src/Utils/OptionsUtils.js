import { 
  addOptionToWatchlist,
  addOptionToPortfolio,
  deleteOptionFromWatchlist,
  deleteOptionFromPortfolio } from '../Services/ApiService'

// ---- email is UserState.email !!!! --------
export async function optionToWatchlist(option, email) {
   return await addOptionToWatchlist(option, email);
    // setUserState((prevUser) => ({...prevUser, watchlist: [...prevUser.watchlist, option]}));
  }

export async function optionToPortfolio(option, email) {
    return await addOptionToPortfolio(option, email);
    // setUserState((prevUser) => ({...prevUser, portfolio: [...prevUser.portfolio, option], balance: prevUser.balance - option.ask}));
  }

export async function deleteFromWatchlist(option, email) {
    return await deleteOptionFromWatchlist(option, email);
    // setUserState((prevUser) => ({...prevUser, watchlist: prevUser.watchlist.filter(userOption => userOption._id !== option._id)}))
  }

export async function deleteFromPortfolio(option, email) {
   return await deleteOptionFromPortfolio(option, email);
//     setUserState((prevUser) => ({...prevUser, portfolio: prevUser.portfolio.filter(userOption => userOption._id !== option._id), balance: prevUser.balance + option.bid}));
  }
