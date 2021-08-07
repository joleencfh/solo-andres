import './Balance.css';

export default function Balance({ userState }) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return (
    <div className="Balance">
      {/* <p> {console.log("This is the userState", userState)}</p> */}{console.log( formatter.format(userState.balance))}
      Balance: {console.log('TYPE',typeof formatter.format(userState.balance))}
      <div data-testid='balance' id="balance-box">{formatter.format(userState.balance)}</div>
    </div>
  )
}

// new 