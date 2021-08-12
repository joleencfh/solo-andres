import Market from './Market.component';
import { render, screen, waitFor } from '@testing-library/react';
import { expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import { MainContext } from '../../Context/Context';


const selectedView = true;
const setSelectedView = jest.fn();
const setUserState = jest.fn();
const userState = {}




// const listOrChain = false;

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
       
      </ Market>
      </ MainContext.Provider>
      
      )

      const textSecurities = screen.getByText(`Securities`)
     
      console.log('test maybe passsing?')
      expect(textSecurities).toBeInTheDocument();
       
    
    await waitFor(() => screen.getAllByTestId("ticker"))

    const matchedTickers = screen.getAllByTestId("ticker")

    
    userEvent.click(matchedTickers[0]);
    const backBtn = screen.getByRole("button", {name: /back/i} )
    expect(backBtn).toBeInTheDocument();

  })
})