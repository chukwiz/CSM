import React,{Component} from 'react';

import Grid from '@material-ui/core/Grid';
import btc from '../../../../Assets/crypto-icons/crypto-icons/128/black/btc.png';
import Eth from '../../../../Assets/crypto-icons/crypto-icons/128/black/eth.png';
import Dash from '../../../../Assets/crypto-icons/crypto-icons/128/black/dash.png';
import ltc from '../../../../Assets/crypto-icons/crypto-icons/128/black/ltc.png';
import { ArrowUpwardRounded, ArrowDownwardRounded } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';

import Coin from '../Coin/Coin';

const cc = require('cryptocompare');

class Coins extends Component{

    state = {
        coins:[],
        prevCoins:[]
    }

    componentDidMount(){
        this.fetchCoins()
        setInterval(this.fetchCoins,10000)
    }

    fetchCoins = async () => {
        let allCoins;
        let coinList = await cc.priceFull(['BTC', 'ETH','DASH','LTC'], ['USD'])
        let [btc,eth,ltc,dash] = [coinList.BTC.USD,coinList.ETH.USD,coinList.LTC.USD,coinList.DASH.USD]
        allCoins = [btc,eth,ltc,dash]
        allCoins.map((coin,i) => {
            let data= {...this.state.coins};
            data[i] = coin.PRICE
            this.setState((prevState)=>(
                {coins:data,prevCoins:prevState.coins!==data?prevState.coins:prevState.prevCoins}
            ) )
        })
    }

    priceChange = (prevCoins,coins) => {
        const diff = prevCoins - coins;
        const change = diff/prevCoins;
        return (change * 100).toFixed(5);
    }

    render(){
        // console.log("c",this.state.coins[2]+"p"+ this.state.prevCoins[2])
        // console.log("p",this.state.prevCoins[0])
        return(
            
            <div>
            <Grid container spacing={3}>
            
            <Grid item md={3} sm={6} >
            <Coin color = "linear-gradient(90deg, rgba(35,26,101,1) 0%, rgba(94,83,162,1) 100%)" icon = {btc} name = "Bitcoin" >
                <div>
                <Typography variant="h6" gutterBottom>${this.state.coins[0]?this.state.coins[0].toLocaleString():""} </Typography>
                </div>
                <div >
                <p gutterBottom style = {{display:"inline", paddingRight:"10px", color:"#868686"}}>{this.priceChange(this.state.prevCoins[0] + 0.2,this.state.coins[0])}</p>
                <ArrowUpwardRounded  style = {{color:"#464646"}} />
                </div>
            </Coin>
            </Grid>
            <Grid item md={3} sm={6} >
            <Coin color = "linear-gradient(90deg, rgba(185,32,32,1) 0%, rgba(76,62,155,1) 100%)" icon = {ltc} name = "Litecoin">
            <div>
                <Typography variant="h6" gutterBottom>${this.state.coins[1]?this.state.coins[1].toLocaleString():""}</Typography>
                </div>
                <div >
                <p style = {{display:"inline", paddingRight:"10px", color:"#868686"}}> {this.priceChange(this.state.prevCoins[1],this.state.coins[1])} </p>
                <ArrowUpwardRounded  style = {{color:"#464646"}} />
                </div>
            </Coin>
            </Grid>
            <Grid item md={3} sm={6} >
            <Coin color = "linear-gradient(279deg, rgba(58,21,88,1) 0%, rgba(121,68,134,1) 100%)" icon = {Eth} name = "Ethereum">
            <div>
                <Typography variant="h6" gutterBottom>${this.state.coins[2]?this.state.coins[2].toLocaleString():""}</Typography>
                </div>
                <div >
                <p style = {{display:"inline", paddingRight:"10px", color:"#868686"}}> {this.priceChange(this.state.prevCoins[2],this.state.coins[2])} </p>
                <ArrowDownwardRounded  style = {{color:"#464646"}} />
                </div>
            </Coin>
            </Grid>
            <Grid item md={3} sm={6} >
            <Coin color = "linear-gradient(90deg, rgba(6,8,37,1) 0%, rgba(68,54,149,1) 100%)" icon = {Dash} name = "Dash">
            <div>
                <Typography variant="h6" gutterBottom>${this.state.coins[3]?this.state.coins[3].toLocaleString():""}</Typography>
                </div>
                <div >
                <p style = {{display:"inline", paddingRight:"10px", color:"#868686"}}>{this.priceChange(this.state.prevCoins[3],this.state.coins[3])} </p>
                <ArrowUpwardRounded  style = {{color:"#464646"}} />
                </div>
            </Coin>
            </Grid>
        </Grid>
        </div>
        )
    }
}

  export default Coins;
  