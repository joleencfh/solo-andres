import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../Context/Context';

import './Email.css';
export default function Email() {
  const { userState } = useContext(MainContext);
  return (
    <div className='Email'>
      User:
      <div id='email-box'>{userState.email}</div>
    </div>
  );
}
