import React,{Component} from 'react';
import axios from 'axios';
import classes from './Crypto.module.css';

class Crypto extends Component   {

  state = {
    ticker:""
  }

  componentWillMount(){
    axios.get("https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no")
    .then((res) => {
      // <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no" width="100%" height="36px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}} />
      this.setState({ticker:res})
    })
}
  render(){
    
    return (
      <div style={{fontSize:"85%"}}>
        {/*[if lt IE 9]>
<div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" rel="noopener noreferrer"  class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
<![endif]*/}
        {/* scrollToTop */}
        {/* ================ */}
        <div className="scrollToTop circle"><i className="icon-up-open-big" /></div>
        {/* page wrapper start */}
        {/* ================ */}
        <div className="page-wrapper">
          {/* header-container start */}
          <nav className="navbar  navbar-light bg-white">
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
  <a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  <ul className="list-inline">
<li ><i className="fa fa-phone "></i>International: +44 2035192105</li>
<li className="">&nbsp;|&nbsp;</li>
<li><a href="mailto:support@csmwealth.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-envelope"></i> support@csmwealth.com</a></li>
<li className="">&nbsp;|&nbsp;</li>
{/* <li><a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-default-login" style={{margin:"0"}}><b>LOGIN</b></a></li> */}
</ul>

<ul className="ml-auto list-inline" style={{marginRight:"40px"}}>
<li className="hidden-xs"><a href="/login" className="btn btn-sm btn-white" style={{margin:"0", padding:"8px 20px 6px 20px"}}><b>CLIENT LOGIN</b></a></li>
<li><a href="/signup" className="btn btn-sm btn-default btn-ocean-green" style={{margin:"0"}}><b>SIGN UP</b></a></li>
</ul>

</nav>
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  
  <a className="navbar-brand" href="/">
    CSM
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto" style={{marginRight:"40px"}}>
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link active dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PORTFOLIO
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item active" href="/crypto">
            Crypto
          </a>
          <a className="dropdown-item" href="/forex">
            Forex
          </a>
          <a className="dropdown-item" href="/nfp">
            Trade Nfp
          </a>
          <a className="dropdown-item" href="/retirement">
            Retirement Income
          </a>
          <a className="dropdown-item" href="/tradingtools">
            Trading tools
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/whyus">
          WHY CSM
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ourteam">
          OUR TEAM
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ABOUT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/aboutus">
            About
          </a>
          <a className="dropdown-item" href="/contactus">
            Contact us
          </a>
          <a className="dropdown-item" href="/testimony">
            Testimonials
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</nav>
          {/* header-container end */}
          {/* <div className="breadcrumb-container" style={{borderTop: '2px solid #f1f1f1'}}>
            <div className="container">
              <ol className="breadcrumb">
                <li><a href="../index.html"><i className="fa fa-home" /></a></li>
                <li><a href="forex-trading.html">Trading Products</a></li>
                <li className="active">Crypto Trading</li>
              </ol>
            </div>
          </div> */}
          <section className = "main-container" style={{padding:"0px 60px",textAlign:"center"}}>
          <span style={{display:"block", margin:"30px"}}>
          <h2>What are crypto-currencies</h2>A cryptocurrency is a digital coin, designed to be transferred between people in virtual transactions. Cryptocurrencies exist only as data and not as physical objects; you cannot actually hold a Bitcoin in your hand or keep Ethereum in your safe. Owning a Bitcoin means you have the collective agreement of each and every computer on the Bitcoin network that it is currently owned by you and – more importantly – that it was legitimately created by a miner
          </span>
          <div style = {{display:"flex",justifyContent:"center"}}>
          <div style={{height: 560, backgroundColor: '#fff', overflow: 'hidden', boxSizing: 'border-box', lineHeight: 14, fontSize: 12, fontFeatureSettings: 'normal',textAlign:"center", textSizeAdjust: '100%', padding: 0, margin: 0, width: '60%',}}>
          {/* <div style={{height: 540, padding: 0, margin: 0, width: '100%'}}>
          <iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0, lineHeight: 14}} /> 
          </div> */}
          
          {/* <div style={{color: '#626B7F', lineHeight: 14, fontWeight: 400, fontSize: 11, boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}>
          <a href="https://coinlib.io/widgets" target="_blank" style={{fontWeight: 500, color: '#626B7F', textDecoration: 'none', fontSize: 11}}></a>
          </div> */}
          <div className="btcwdgt-chart" bw-cash="true" bw-noshadow="true"  />
          </div>
          </div>
          </section>

          {/* <section className = "main-container" style={{padding:"60px",display:"flex",justifyContent:"center"}}>
           <p>guguy</p> 
          <div style = {{width:"60%"}}>
          <div className="coinlore-list-widget" data-mcurrency="eur" data-top={10} data-cwidth="100%" data-bcolor="#fff" data-coincolor="#428bca" data-pricecolor="#4c4c4c" />
          </div>
          </section> */}
          <section className = "main-container" style={{padding:"0px 60px",color:"#4e4e4e"}}>
          <span style={{display:"block", margin:"30px"}}>
          <h2>Cryptocurrencies we offer</h2>A cryptocurrency is a digital coin, designed to be transferred between people in virtual transactions. Cryptocurrencies exist only as data and not as physical objects; you cannot actually hold a Bitcoin in your hand or keep Ethereum in your safe. Owning a Bitcoin means you have the collective agreement of each and every computer on the Bitcoin network that it is currently owned by you and – more importantly – that it was legitimately created by a miner
          </span>
          {/*  */}
          <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                BITCOIN
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              <p>Bitcoin is the world’s first digital currency and it is expanding in popularity worldwide. With the MetaTrader 4 platform you can trade this rapidly growing currency against the US Dollar 24/7. Many traders prefer to trade Bitcoin derivatives due to this asset’s highly volatile nature, which makes it ideal for CFD trading</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Why Trade Bitcoin with CSM Wealth</h3>
            <ul>
              <li><strong>Uncompromised Safety</strong> – With six regulatory authorities and segregated accounts, your money is protected at all times.</li>
              <li><strong>Many Cryptos to Choose From</strong> – Trade on the wide variety of cryptos available on our investing platform</li>
              <li><strong>No Hidden Fees</strong> – We offer zero commissions and no bank fees on transactions!</li>
              <li><strong>Bitcoin Never Goes to Sleep</strong> – TransferTel is one of the few brokers offer around-the-clock service and support in 14 languages.</li>
              <li><strong>Generous Leverage</strong> – Increase your initial capital with generous leverage and get far more exposure to trade than your account balance. Up to 20:1</li>
              <li><strong>Limit Your Risk</strong> – You can preset profit and loss levels by using stop losses or take profit limits when you trade. Determine the maximum amount you are prepared to risk when speculating on the price, or set a price at which you want to take profits. Future orders like Buy Stops and Buy Limits are also available</li>
              <li><strong>Trade Cryptos Against Fiat Currencies</strong> – Unlike many exchanges out there, who are restricting their clients to trade only Crypto to Crypto, our clients can trade Cryptos against Fiat currencies (USD, EUR, JPY etc.), as well</li>
            </ul>
            {/*  */}
            <p>Bitcoin is the world’s first digital currency and it is expanding in popularity worldwide. With the MetaTrader 4 platform you can trade this rapidly growing currency against the US Dollar 24/7. Many traders prefer to trade Bitcoin derivatives due to this asset’s highly volatile nature, which makes it ideal for CFD trading</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Bitcoin in the news</h3>
            <ul>
              <li><strong>November 2012</strong> – WordPress started accepting bitcoins</li>
              <li><strong>July 2013</strong> – Launching of a joint project in Kenya, linking bitcoin with M-Pesa, a popular East African mobile payments system</li>
              <li><strong>September 2014</strong> –TeraExchange, LLC, received approval from the U.S. Commodity Futures Trading Commission to begin listing an over-the-counter swap product based on the price of a bitcoin, marking the first time a U.S. regulatory agency approved a bitcoin financial product.</li>
              <li><strong>March 2016</strong> – The Cabinet of Japan recognised virtual currencies like bitcoin as having a function similar to real money.</li>
              <li><strong>August 1, 2017</strong> –  First fork in Bitcoin was created: Bitcoin Cash</li>
              <li><strong>October 24, 2017</strong> – The second fork in Bitcoin was created: Bitcoin Gold</li>
              <li><strong>December 10, 2017</strong> – Cboe Futures Exchange (CFE) starts offering Bitcoin futures trading</li>
              <li><strong>December 28, 2017</strong> – Third fork in Bitcoin created: New coin on SegWit2x chain called B2X</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn  collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                BITCOIN GOLD
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            <p>Bitcoin Gold (BTG) is the second fork from Bitcoin (i.e. the second version to stem from Bitcoin’s source code) after Bitcoin Cash. The Bitcoin Gold fork occurred on 24th of October 2017, at block height 491,407. It does retain Bitcoin’s transaction history, meaning if you owned Bitcoins before the fork, you now own the equal amount of Bitcoin Gold. This cryptocurrency aims to introduce an alternative mining algorithm that is less susceptible to ASIC-based optimisation, therefore allowing users to earn more with their computer cycles.</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>5 Facts you should know about Bitcoin Gold</h3>
            <ul>
              <li>This BTG coin was created by Jack Liao, founder of Lightning ASIC (a computer mining firm in Hong Kong). Liao made the project public in July 2017.</li>
              <li>Equihash is Bitcoin Gold’s new protocol. Bitcoin uses Secure Hash Algorythm (SHA-256 bit). BTG will be replaced by PoW algorithm, Equihash, which some say is superior, with vast memory and even faster execution</li>
              <li>To ensure the safety of the Bitcoin ecosystem, BTG implements unique cryptocurrency wallet addresses and replay protection system – double the protection from hackers and malicious threats</li>
              <li>Full transparency through a free open source software project. This project is built by volunteer developers and avid Bitcoin enthusiasts worldwide.</li>
              <li>As Bitcoin Gold uses decentralised mining it gives ordinary users a fair opportunity to mine with ubiquitous GPUs (Graphic Processing Units)</li>
            </ul>
            {/*  */}
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Why Trade Bitcoin Gold with TransferTel</h3>
            <ul>
              <li>We offer leveraged trading on Bitcoin Gold CFD trades with up to 20:1 leverage</li>
              <li>You can start trading Bitcoin Gold from as little as $100</li>
              <li>Volatile instruments such as Bitcoin Gold make for an excellent addition to any financial trading portfolio.</li>
              <li>Bitcoin Gold is available for TransferTel clients 24/7.</li>
              <li>You can SELL Bitcoin Gold (go short) and potentially profit even when the Bitcoin Gold price is on a downtrend</li>
              <li>Enjoy live language-specific customer support around the clock</li>
              <li>TransferTel offers zero commissions on Bitcoin Gold trading and no bank fees charged on transactions</li>
              <li>Zero exposure to hacking or theft simply because you don’t actually buy or sell the actual BTG coin</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn  collapsed" type="button" style={{color:"#fff"}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                BITCOIN CASH
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            <p>Bitcoin Cash was created by the Bitcoin hard fork on August 1, 2017, made a new version of the blockchain with different rules. Bitcoin Cash was created as a result of counteracting a prolonged Bitcoin scalability problem. It works by switching from the main Bitcoin blockchain to a new version, the software now has capacity for a larger number of transactions (by eight megabytes to be exact)</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>5 Facts you should know about Bitcoin Cash</h3>
            <ul>
              <li>Created from a hard fork of Bitcoin and expected to have quicker reactions to transactions, the Bitcoin Cash fork occurred at block 478,559.</li>
              <li>Despite its reasons for creation and its origins, the BCH coin is considered an altcoin for now. It is not Bitcoin and has no direct connection to Bitcoin’s value</li>
              <li>Having said that, Bitcoin Cash is its own currency and is useful in that it functions just as Bitcoin does only faster due to the increase in its block size</li>
              <li>When the hard fork occurred, the coin held no value at all and investors were able to gain ‘free coins’ – from the split of Bitcoin. As in this case Bitcoin Cash saw major changes in the market and managed to secure their place in the ‘top coins’ listing by market cap in November 2017.</li>
              <li>Investors have speculated that Bitcoin Cash was created only because high fees and slow transactions would destroy Bitcoin, and not because Bitcoin was reaching its maximum output of blocks</li>
            </ul>
            {/*  */}
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Why Trade Bitcoin Cash with TransferTel</h3>
            <ul>
              <li>We offer leveraged trading on Bitcoin Cash CFD trades with up to 20:1 leverage</li>
              <li>You can start trading Bitcoin Cash from as little as $100</li>
              <li>Volatile instruments such as Bitcoin Cash make for an excellent addition to any financial trading portfolio.</li>
              <li>Bitcoin Cash is available for TransferTel clients 24/7.</li>
              <li>You can SELL Bitcoin Cash (go short) and potentially profit even when the Bitcoin Gold price is on a downtrend</li>
              <li>Enjoy live language-specific customer support around the clock</li>
              <li>TransferTel offers zero commissions on Bitcoin Cash trading and no bank fees charged on transactions</li>
              <li>Zero exposure to hacking or theft simply because you don’t actually buy or sell the actual coin</li>
            </ul>  
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn  collapsed"  type="button"  style={{color:"#fff"}} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                LITECOIN
              </button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            <p>Litecoin has established itself as the leading competitor to Bitcoin, and now you can trade this exciting digital currency with TransferTel. When you trade Litecoin CFDs with TransferTel you can trade long or short (buy or sell) instantly, so you can act on your analysis whether you’re optimistic or cynical about the future of digital currencies</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Why CFDs make sense for Trading Litecoin</h3>
            <p>As CFDs allow you to speculate on the price of Litecoin future market movements, without physically owning the coin. Traders whether buying or selling are able to agree to pay on the difference on the price even if it rises or falls. In addition, they can to tap into the benefits and risks without actually owning the coin and benefit from</p>
            <ul>
              <li>Security – You don’t have to worry about your Litecoins being stolen. CFDs are a derivative product. Your potential profits are based on the movement of the Litecoin price but no Litecoins are bought or sold in your name.</li>
              <li>Simplicity – Buying cryptocurrencies directly can be complicated. With TransferTel CFD trading it’s as easy as selecting Litecoin from a menu and clicking to sell or buy. It’s so simple you can do it on your mobile or tablet too</li>
              <li>Get leverage of up to 20:1 – As a financial derivative you can trade CFDs on leverage, meaning you can open a larger position in the market.</li>
              <li>Diversify – As one of the world’s leading CFD brokers TransferTel offers a wide range of CFD products and Forex pairs for you to trade, all from a single platform.</li>
            </ul>  
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn  collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                ETHEREUM
              </button>
            </h2>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            <p>Ethereum is proving to be one of the most favorable technology investments of all time. It was created in 2015 and since then has grown by over 1000%. To better understand what it is, Ethereum is an open source network, much more than just a digital currency. Therefore, when you purchase Ethereum you are investing in the network, and placing money into a unique transformational platform, with many of its greatest applications still to come. The digital coin of Ethereum, known as “ether”, could be speeding up the decentralisation of the world economy, and has the potential to influence many other industries. Ethereum is backed by a variety of Fortune 500 companies, who met in 2016 to discuss and join forces on developing Ethereum’s network technology. The Ether trading coin can be volatile, which can serve as an asset for traders. Ethereum Classic is the original version of the Ethereum blockchain from which the newer version was created. The newer version adopted the name Ethereum. The blockchains are not compatible, and updates on one will not affect the other. These changes led the way for the creation of the new crypto coin with a different name, leger, price and market cap</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Advantages of Trading Ethereum with TransferTel</h3>
            <p>Trading Ethereum with TransferTel can be beneficial in ways that regular cryptocurrency exchanges do not offer</p>
            <ul>
              <li>Short selling, “Sell high, buy low” defines short selling which allows the trader to trade and benefit when the markets are down and then profit when they bounce back. In other words, short selling is driven by the belief that a price index will decline, allowing it to be bought back at the lower price to profit.</li>
              <li>Leveraged trading, is an advantage provided by the broker to a trader. It allows you to open a much larger position with minimal investment. Leverage can magnify your potential profits and at the same time can magnify your losses.</li>
              <li>Auto trading refers to using software called Expert Advisors that creates automatic orders and submits them to a market exchange. These systems can perform repetitive tasks at high speed. It can also provide social copying or mirroring the positions of experienced traders with a proven success record, like Zulutrade does</li>
            </ul>
            {/*  */}
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Advantgages of Ethereum Technology</h3>
            <ul>
              <li>The app can never be turned off</li>
              <li>Applications are protected against fraud and hackers due to the secured cryptography</li>
              <li>It cannot be censored, since the apps are based on the principle of a group decision making process.</li>
              <li>A third party cannot make changes to any of the data.</li>
              <li>Ethereum has more applications than Bitcoin</li>
              <p>Mist browser is the interface and digital wallet for Ethereum users. With it people can store, trade, and manage their contracts. Mist and MetaMask (another browser) help making blockchain-based applications easily accessible.</p>
              <p>Ethereum is moving forward with its user-friendly platform, which enables people to make use of the blockchain technology.</p>
              <p>Trade Ethereum CFD’s (Contracts for Difference) with TransferTel and benefit from the thorough market analysis we offer on Sharp Trader, our educational site, where you can find daily news, updates and many other helpful tools.</p>
            </ul>   
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn  collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                RIPPLE
              </button>
            </h2>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
            <p>The Ripple Cryptocurrency is an open payment system in beta. Its goal is to allow people to break free from financial institutions like banks, credit card companies, and other networks that enforce fees and foster delays. As per market size and capital, Ripple is the third-largest cryptocurrency, sitting just behind Bitcoin and Ethereum. The Ripple network now has billions of dollars’ worth of cryptocurrency on account. It was built as a digital payments network for real-time financial transactions, and is also the core owner of Ripple XRP, the digital coin that increased its value 40 times in 2017 alone.</p> 
            <h3 style={{textAlign:"center", textTransform:"uppercase"}}>Advantages of Trading Ripple with TransferTel</h3>
            <ul>
              <li>We offer Ripple CFD trades with up to 20:1 leverage.</li>
              <li>You can start trading Ripple from as little as $100</li>
              <li>This volatile crypto makes for an excellent addition to any financial trading portfolio</li>
              <li>TransferTel is one of the only brokers that offers around-the-clock Ripple trading, for maximum conveniene</li>
              <li>Enjoy live language-specific customer support around the clock</li>
              <li>TransferTel offers zero commissions on Ripple trading and no bank fees charged on transactions</li>
              <li>TransferTel is regulated on 5 continents</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                DASH
              </button>
            </h2>
          </div>
          <div id="collapseSeven" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
                EOS
              </button>
            </h2>
          </div>
          <div id="collapseEight" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div> */}
      </div>
          {/*  */}
          </section>
          <section className = "main-container" style={{padding:"60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{display:"block", margin:"30px"}}>
          <h2>Our Crypto investment Packages</h2>
          </div>
          <div className = "row">
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
            <div className= "card text-center">
              <div className = "card header text-light bg-dark" style = {{padding:"15px 0"}}>CSM Access</div>
              <div className = "card-body" >
                <p className = "font-bold">$15,000</p>
                <p>Investors:<span className = "text-primary">All type</span></p>
                <p>Contract:<span className = "text-primary">30 days</span></p>
                <p>Low Risk Trade</p>
                <p>Est ROI:<span className = "text-primary">25%</span></p>
                <p>Weeekly:<span className = "text-primary">5% - 8%</span></p>
                <a href="/signup" className = "btn btn-primary text-light">Sign Up</a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
            <div className= "card text-center">
              <div className = "card header text-light bg-dark" style = {{padding:"15px 0"}}>CSM Compact</div>
              <div className = "card-body" >
                <p className = "font-bold">$150,000</p>
                <p>Investors:<span className = "text-primary">All type</span></p>
                <p>Contract:<span className = "text-primary">90 days</span></p>
                <p>Low Risk Trade</p>
                <p>Est ROI:<span className = "text-primary">80%</span></p>
                <p>Weeekly:<span className = "text-primary">7% - 15%</span></p>
                <a href="/signup" className = "btn btn-primary text-light">Sign Up</a>

              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
            <div className= "card text-center">
              <div className = "card header text-light bg-dark" style = {{padding:"15px 0"}}>CSM Premium</div>
              <div className = "card-body" >
                <p className = "font-bold">$500,000</p>
                <p>Investors:<span className = "text-primary">All type</span></p>
                <p>Contract:<span className = "text-primary">365 days</span></p>
                <p>Low Risk Trade</p>
                <p>Est ROI:<span className = "text-primary">250%%</span></p>
                <p>Weeekly:<span className = "text-primary">7% - 15%</span></p>
                <a href="/signup" className = "btn btn-primary text-light">Sign Up</a>

              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
            <div className= "card text-center">
              <div className = "card header text-light bg-dark" style = {{padding:"15px 0"}}>CSM Ultimate</div>
              <div className = "card-body" >
                <p className = "font-bold">$700,000</p>
                <p>Investors:<span className = "text-primary">All type</span></p>
                <p>Contract:<span className = "text-primary">30 days</span></p>
                <p>Aggressive Trade</p>
                <p>Est ROI:<span className = "text-primary">60% - 75%</span></p>
                <p>Weeekly:<span className = "text-primary">10% - 20%</span></p>
                <a href="/signup" className = "btn btn-primary text-light">Sign Up</a>
              </div>
            </div>
          </div>
          {/*  */}
          </div>
          </section>
          {/* main </section>container ends */}
          {/*================== FOOTER starts here =======================*/}
          <section className="clearfix pv-20 hidden-sm hidden-xs" id="payment-methods" style = {{backgroundColor:"#42ce7a"}}>
<div className="container">
<div className="row" style={{display:"flex",justifyContent:"space-around"}}>
<div className="owl-clients-v1" style={{display:"flex",justifyContent:"space-around",margin:"10px 0px"}}>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/wire-transfer.png" alt="wire-transfer" title="wire-transfer"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/visa.png" alt="visa" title="visa" /></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/visa-electron.png" alt="visa-electron" title="visa-electron"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/mastercard.png" alt="mastercard" title="mastercard"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/maestro.png" alt="maestro" title="maestro"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/skrill.png" alt="skrill" title="skrill"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/neteller.png" alt="neteller" title="neteller"/></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/fasapay.png" alt="fasapay" title="fasapay" style={{border: "1px solid #ddd"}} /></a>
</div>
<div className="item">
<a href="funding/funding-methods.html"><img src="../static/redesign/images/payment-methods/vload1.png" alt="vload" title="vload" style={{border: "1px solid #ddd"}}/></a>
</div>
</div>
</div>
</div>
</section>
<footer id="footer" className="clearfix dark">
<div className="footer">
<div className="container">
<div className="footer-inner">
<div className="row">

</div>
<div className="row">
<div className="col-md-12">
<div className="footer-content" style={{padding:"0px"}}>
<div className="separator-2"></div>
<div className="row">
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-lock pr-10 color-white"></i> Secured by: GeoTrust Inc
</div>
<div className="col-md-3 color-offwhite" style={{paddingTop:"2px"}}>
<i className="fa fa-phone pr-10 color-white"></i> Telephone: +44 2035192105
</div>
<div className="col-md-2 color-offwhite" style = {{paddingTop:"2px",display:"flex", flexDirection:"row"}}>
<i className="fa fa-envelope-o pr-10 color-white"></i>support@csmwealth.com
</div>
<div className="col-md-4 color-offwhite">
<ul className="social-links circle animated-effect-1" style={{marginTop:"0px",marginBottom:"2px",float:"right"}}>
<li className="facebook"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-facebook"></i></a></li>
<li className="twitter"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-twitter"></i></a></li>
<li className="googleplus"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-google-plus"></i></a></li>
<li className="linkedin"><a target="_blank" rel="noopener noreferrer" href="/"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="separator-2"></div>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>CSM Wealth Ltd. Reg number 07659758</b>
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<a href="https://beta.companieshouse.gov.uk/company/07659758" target="_blank" rel="noopener noreferrer" style={{color:"#22356d"}}>Registered office address</a> <br />
1 Windsor Road, Northam, Bideford, Devon, England, EX39 1EN
</p>
<p className="color-offwhite" style={{fontSize:"11px"}}>
<b>Risk Warning:</b> Contracts for Difference (‘CFDs’) are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.
<br/>
As a result, CFDs may not be suitable for all investors because you may lose all your invested capital. You should not risk more than you are prepared to lose. Before deciding to trade, you need to ensure that you understand the risks involved taking into account your investment objectives and level of experience. All information on this website is not directed toward soliciting citizens or residents of the United States, United Kingdom, Japan or any other jurisdiction that would be contrary to local law or regulation.
<br/>
Past performance of CFDs is not a reliable indicator of future results. Most CFDs have no set maturity date. Hence, a CFD position matures on the date you choose to close an existing open position. Seek independent advice, if necessary. Please read CSM Wealth’s full ‘Risk Disclosure Statement’.
</p>
</div>
</div>
</div>
</div>
</div>
</footer>
          {/* footer end */}
        </div>
        {/* page-wrapper end */}
      </div>
    );
  }
    
}

export default Crypto;