import { useState, useEffect } from 'react';
import WatchlistOption from '../WatchlistOption/WatchlistOption.component';
import PortfolioOption from '../PortfolioOption/PortfolioOption.component';
import './WatchlistPortfolio.css';



export default function WatchlistPortfolio({ selectedView, userState, setUserState, optionToPortfolio }) {

  const [titleState, setTitleState] = useState('Watchlist');
  // console.log('selectedView', selectedView)

  const watchlistItems = userState.watchlist.map(option => {
    return (
      <div id="watchlist">
        <WatchlistOption
          id={option._id}
          option={option}
          optionToPortfolio={optionToPortfolio}
        />
      </div>
    )
  })

  const portfolioItems = userState.portfolio.map(option => {
    return (
      <div id="portfolio">
        <PortfolioOption 
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
            <div className="portfolio-headers exp-date">Exp.</div>
            <div className="portfolio-headers exp-date">Money</div>
            <div className="portfolio-headers p-l">P&L</div>
            <div className="portfolio-headers sekk">Sell</div>
          </div>
          {portfolioItems}
          </div>
      :
        <div id="wl-or-pf">{watchlistItems}</div>
      }



    </div>
  )
}
