import Balance from './Balance.component';
import { screen, render } from '@testing-library/react'; 


describe('Balance should always be of type number ',()=> {
  it ('Check if balance is of type number', () => {

    const userState = {balance: 340000}
    render( <Balance userState={userState} /> )
    const balanceField = screen.getByTestId(/balance/i);
    // expect(balanceField).toHaveTextContent()
    expect(balanceField).toBeDefined();
    expect(balanceField).not.toBeNaN();

  })
  
} )


/*

balance: 993760
email: "joe@biden.us"
firstName: "Joe"
lastName: "Biden"
password: "joe"
portfolio: []

*/