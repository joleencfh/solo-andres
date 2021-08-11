import React from 'react';
import './Balance.css';
import { MainContextType } from '../../Types';
import { MainContext } from '../../Context/Context';

import { useContext } from 'react';

export default function Balance() {
  // receive userState through context

  const { userState } = useContext(MainContext);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div className='Balance'>
      {/* <p> {console.log("This is the userState", userState)}</p> */}
      {console.log('🔥balance', userState.balance)}
      {/* change from userState.balance to context.balance */}
      Balance: {console.log('TYPE', userState.balance)}
      {/* Balance: {console.log('TYPE', typeof formatter.format(userState.balance))} */}
      <div data-testid='balance' id='balance-box'>
        {userState.balance}
        {/* {formatter.format(userState.balance)} */}
      </div>
    </div>
  );
}

// new
