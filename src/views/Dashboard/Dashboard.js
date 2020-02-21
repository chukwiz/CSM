import React,{Component} from 'react';
import CoinsComponent from '../../components/Dashboard/CoinComponent/Coins/Coins';
import BalanceComponent from '../../components/Dashboard/BalanceComponent/Balances/Balances';
import MarketcapComponent from '../../components/Dashboard/MarketComponent/Market';
import TradeHoldComponent from '../../components/Dashboard/Tradehold/TradeHold';
import TopClients from '../../components/Dashboard/TopClients/TopClients';
import ChartComponent from '../../components/Dashboard/Chart/Chart';

class Dashboard extends Component{
  render(){
    return(
      <div>
      <CoinsComponent /> 
      <BalanceComponent />
      <TradeHoldComponent />
      <ChartComponent />
      <TopClients />
      <MarketcapComponent />
      </div>
    )
  }
}

export default Dashboard;