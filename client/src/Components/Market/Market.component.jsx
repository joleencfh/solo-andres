import { useState } from 'react';
import OptionsList from '../OptionsList/OptionsList.component';
import OptionChain from '../OptionChain/OptionChain.component';


export default function Market({ selectedView, setSelectedView }) {

  const [listOrChain, setListOrChain] = useState(false);
  const [selectedChain, setSelectedChain] = useState({});
  // false --> show options list component; true --> show option chain component

  function selectOption (company) {
    setSelectedChain(company);
    setListOrChain(true);
  };

  return (

    <div className="Market">

      {!listOrChain ?
        <OptionsList 
          selectOption={selectOption}
        />
      :
        <OptionChain 
          company={selectedChain}
          showList={setListOrChain}
        

          // selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      }
    </div>
  )
}
