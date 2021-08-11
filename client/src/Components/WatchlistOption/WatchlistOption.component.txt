import './WatchlistOption.css';
import React, {useContext} from 'react';
import { deleteFromWatchlist, optionToPortfolio } from '../../Utils/OptionsUtils';
import { MainContext } from '../../Context/Context';

export default function WatchlistOption({ option}) {

const {userState, setUserState} = useContext(MainContext);

 
  return (
    <div className="WatchlistOption">
      
      <div id="the=description">
        {option.description}
      </div>

      <div id="the-buttons">
        <button id="wl-to-pf-button" onClick={() => {
          optionToPortfolio(option, userState.email)
          setUserState((prevUser) => ({...prevUser, portfolio: [...prevUser.portfolio, option], balance: prevUser.balance - option.ask}));
        }}>🤑</button>
    

    
        <button id="remove-from-wl-button" onClick={() => {
        deleteFromWatchlist(option, userState.email)
        setUserState((prevUser) => ({...prevUser, watchlist: prevUser.watchlist.filter(userOption => userOption._id !== option._id)}));
        }}
        
        
      // }))
        >❌</button>
      </div>
        
    </div>
  )
}
