import React from 'react';
import { useState } from 'react';
import User from '../User/User.component';
import Market from '../Market/Market.component';
import './Dashboard.css';
import { useContext } from 'react';

// userState, setUserState, optionToWatchlist, optionToPortfolio, deleteFromWatchlist, deleteFromPortfolio
export default function Dashboard() {
  const [selectedView, setSelectedView] = useState(false);
  // default value?? if false --> show watchlist, otherwise --> show portfolio

  return (
    <div className='Dashboard'>
      <div id='user-component'>
        <User selectedView={selectedView} setSelectedView={setSelectedView} />
      </div>

      <div id='market-component'>
        <Market selectedView={selectedView} setSelectedView={setSelectedView} />
      </div>
    </div>
  );
}
