import Market from './Market.component';
import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OptionsList from '../OptionsList/OptionsList.component';
import OptionChain from '../OptionChain/OptionChain.component';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { MainContext } from '../../Context/Context';


const selectedView = true;
const setSelectedView = jest.fn();
const selectOption = jest.fn();
const selectedChain = {};
const setListOrChain = jest.fn();
const setUserState = jest.fn();
const userState = {}


// const MockMarket = () => {
//      const [listOrChain, setListOrChain] = useState(false);
//      const [selectedChain, setSelectedChain] = useState({});
//   render (
//     <Market /> 
//   )
// }

const listOrChain = false;

describe('renders option list or option chain correctly', () => {


  it('should display Option Chain', async () => {
    render (
        <MainContext.Provider 
            value={{
                userState, 
                setUserState, 
            }} >
      <Market
      selectedView= {selectedView}
      setSelectedView = {setSelectedView}
      >
        {/* {listOrChain? 
        <OptionsList  selectOption={selectOption}/>
        :
        <OptionChain  company={selectedChain}
          showList={setListOrChain} 
          setSelectedView={setSelectedView}
          />
          } */}
      </ Market>
      </ MainContext.Provider>
      
      )

      const textSecurities = screen.getByText(`Securities`)
      // (/Securities/i)
      console.log('test maybe passsing?')
      expect(textSecurities).toBeInTheDocument();
       
    
    await waitFor(() => screen.getAllByTestId("ticker"))

    //find where to click
    const matchedTickers = screen.getAllByTestId("ticker")
    // console.log('matchedTickers---', matchedTick ers)
    
    userEvent.click(matchedTickers[0]);
    const backBtn = screen.getByRole("button", {name: /back/i} )
    expect(backBtn).toBeInTheDocument();

  })
})