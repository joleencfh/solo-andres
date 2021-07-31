import React from 'react'

export default function OptionChain({ company }) {


  return (
    <div className="OptionChain">

      {/* <h4>{company.chain.expiration1}</h4> */}

      {company.chain.expiration1.map(option => (

        <div>
          <h6>{option.description}</h6>
          <h6>{option.bid}</h6>
          <h6>{option.ask}</h6>
          <h6>{option.strike}</h6>
          <h6>{option.contract_size}</h6>
          <h6>{option.expiration_date}</h6>
          <h6>{option.option_type}</h6>
        </div>
      ))}


        {/* <h4>{company.chain.expiration2}</h4> */}
      
        {company.chain.expiration2.map(option => (

        <div>
          <h6>{option.description}</h6>
          <h6>{option.bid}</h6>
          <h6>{option.ask}</h6>
          <h6>{option.strike}</h6>
          <h6>{option.contract_size}</h6>
          <h6>{option.expiration_date}</h6>
          <h6>{option.option_type}</h6>
        </div>
      ))}
      

    </div>
  )
}


// {companiesList.map(company => (<ListOption key={company._id} company={company}