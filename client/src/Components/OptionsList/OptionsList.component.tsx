import React, { useState, useEffect } from 'react';
import { getCompanies } from '../../Services/ApiService';
import ListOption from '../ListOption/ListOption.component';
import './OptionsList.css';
import { CompanyType } from '../../Types';

export default function OptionsList({ selectOption }) {
  const [companiesList, setCompaniesList] = useState([] as CompanyType[]);

  async function getAllCompanies() {
    const allCompanies: CompanyType[] = await getCompanies();
    setCompaniesList(allCompanies);
  }

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div className='OptionsList'>
      <div id='both-buttons'>
        <button id='underlying-type'>📈Securities</button>
        <button id='underlying-type'>🚀Futures</button>
      </div>

      <h2 id='type'>Securities</h2>

      <div id='search-div'>
        <input id='search-field' placeholder='Find by description'></input>
      </div>

      <div id='headers'>
        <h4 id='ticker'>Ticker</h4>
        <h4 id='desc'>Description</h4>
        <h4 id='next-exp'>Next Expiration</h4>
      </div>

      {companiesList.map((company: CompanyType) => (
        <ListOption
          key={company._id}
          company={company}
          selectOption={selectOption}
        />
      ))}
    </div>
  );
}
