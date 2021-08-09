import { useState, useEffect, useContext } from 'react';
import WatchlistOption from '../WatchlistOption/WatchlistOption.component';
import PortfolioOption from '../PortfolioOption/PortfolioOption.component';
import './WatchlistPortfolio.css';
import { MainContext } from '../../Context/Context';




export default function WatchlistPortfolio({ selectedView }) {

  const [titleState, setTitleState] = useState('Watchlist');
  const {userState} = useContext(MainContext);
  
  console.log('watchlistPortfolio user:  ', userState);

  const watchlistItems = userState.watchlist.map((option, i) => {
    return (
      <div id="watchlist">
        <WatchlistOption
          key={option._id + i}
          id={option._id}
          option={option}
        />
      </div>
    )
  })

  const portfolioItems = userState.portfolio.map((option, i) => {
    return (
      <div id="portfolio">
        <PortfolioOption 
          key={option._id + i}
          id={option._id}
          option={option}
        />
      </div>
    )
  })

  useEffect(() => {
    if (selectedView) {
      setTitleState('Portfolio')
    }
    else {
      setTitleState('Watchlist')
    }
  }, [selectedView])
  

  return (
    
    <div className="WatchlistPortfolio">

      <h2 id="pf-wl-title">{titleState}</h2>

      
      {titleState === 'Portfolio' ? 

        <div id="wl-or-pf">
          <div id="portfolio-headers">
            <div className="portfolio-headers description">Ticker</div>
            <div className="portfolio-headers type">Type</div>
            <div className="portfolio-headers bid">Bid</div>
            <div className="portfolio-headers ask">Ask</div>
            <div className="portfolio-headers buy-price">Buy Price</div>
            <div className="portfolio-headers strike">Strike</div>
            <div className="portfolio-headers exp-date">Expiration</div>
            <div className="portfolio-headers exp-date">Money</div>
            <div className="portfolio-headers p-l">P&L</div>
            <div className="portfolio-headers sell">Sell</div>
          </div>
          {portfolioItems}
          </div>
      :
        <div id="wl-or-pf">{watchlistItems}</div>
      }



    </div>
  )
}
