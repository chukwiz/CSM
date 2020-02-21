import React from 'react';

const Forex =() => {
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
          <a className="dropdown-item" href="/crypto">
            Crypto
          </a>
          <a className="dropdown-item active" href="/forex">
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
                  <li className="active">Forex Trading</li>
                </ol>
              </div>
            </div> */}
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div className="col-md-12 ar-reverse">
                    <h1 className="page-title">Forex Trading</h1>
                    <div className="separator-2" />
                    <p>At CSM Wealth we try to provide you with the best possible spreads at every opportunity. We provide you with the option of choosing how you want to see the pricing. Variable through the premium account; fixed through the FIX Account or tight spreads plus commission through the Zero Account, we have the ability to give you what you want.</p>
                    <p>Whilst the table below shows you the currency pairs you can trade and the associated trading variables such as SWAPs; Margin; in order to see the spreads associated to each of our account types use the link below.</p>
                    {/* <a className="btn btn-animated btn-gray-transparent" href="spreads.html">Spreads <i className="fa fa-signal pl-20" /></a>
                    <a className="btn btn-animated btn-gray-transparent" href="swap-policy.html">SWAP Policy <i className="fa fa-pie-chart pl-20" /></a>
                    <a className="btn btn-animated btn-gray-transparent" href="trading-hours.html">Trading Hours <i className="fa fa-calendar pl-20" /></a>
                    <a className="btn btn-animated btn-gray-transparent" href="execution-desk.html">Execution Desk <i className="fa fa-area-chart pl-20" /></a> */}
                    <br clear="all" /><br clear="all" />
                    <div className="table-responsive">
                      <table className="table table-striped align-center table-colored" id="dataTable">
                      <thead>
          <tr role="row">
            <th className="instrument sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Instrument: activate to sort column ascending" style={{width: 25}}>Instrument</th>
            <th className="leverage sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Leverage: activate to sort column ascending" style={{width: 25}}>Leverage</th>
            <th className="margin sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Margin: activate to sort column ascending" style={{width: 25}}>Margin</th>
            <th className="spread sorting" tabIndex={0} aria-controls="DataTables_Table_3" rowSpan={1} colSpan={1} aria-label="Spread: activate to sort column ascending" style={{width: 25}}>Spread</th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={0} href="/trading-info/financial-instruments-index/fxoptions/eur-usd?i_key=EUR%2FUSD" data-di-id="di-id-352b90c-e6a0d90e">EUR/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>0.9</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={1} href="/trading-info/financial-instruments-index/fxoptions/gbp-usd?i_key=GBP%2FUSD" data-di-id="di-id-352b90c-29b7d893">GBP/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.6</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={2} href="/trading-info/financial-instruments-index/fxoptions/usd-jpy?i_key=USD%2FJPY" data-di-id="di-id-352b90c-6cfaa492">USD/JPY</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.1</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={3} href="/trading-info/financial-instruments-index/fxoptions/eur-jpy?i_key=EUR%2FJPY" data-di-id="di-id-352b90c-25b4690">EUR/JPY</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.8</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={4} href="/trading-info/financial-instruments-index/fxoptions/aud-usd?i_key=AUD%2FUSD" data-di-id="di-id-352b90c-bf4221f6">AUD/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.1</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={5} href="/trading-info/financial-instruments-index/fxoptions/eur-chf?i_key=EUR%2FCHF" data-di-id="di-id-352b90c-8d9cbfdc">EUR/CHF</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>2</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={6} href="/trading-info/financial-instruments-index/fxoptions/eur-gbp?i_key=EUR%2FGBP" data-di-id="di-id-352b90c-f0a26ba">EUR/GBP</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.5</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={7} href="/trading-info/financial-instruments-index/fxoptions/usd-cad?i_key=USD%2FCAD" data-di-id="di-id-352b90c-9db1c63a">USD/CAD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>2</td>
          </tr>
          <tr role="row" className="odd">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={8} href="/trading-info/financial-instruments-index/fxoptions/usd-chf?i_key=USD%2FCHF" data-di-id="di-id-352b90c-e33d5dde">USD/CHF</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.6</td>
          </tr>
          <tr role="row" className="even">
            <td>
              <div className="btn-symbol-popup-wrapper"><a className="btn-symbol-popup" data-index={9} href="/trading-info/financial-instruments-index/fxoptions/nzd-usd?i_key=NZD%2FUSD" data-di-id="di-id-352b90c-b9dbfc8b">NZD/USD</a></div>
            </td>
            <td>100<i className="lev-col-sort-fix" />1</td>
            <td>1.00%</td>
            <td>1.8</td>
          </tr>
        </tbody>
                      </table>
                    </div>
                    {/* <small style={{fontWeight: 'bold'}} className="clearfix marginTop10">
                      *&nbsp;Margin Based on a position size of 1 lot which equals to 100,000 and 1:100 leverage.<br />
                      ***&nbsp;Trading session is open between 09:20 - 17:55 GMT+2<br />
                      (A) Volume limitation applies.<br />
                    </small> */}
                    <br clear="all" /><br clear="all" />
                    <h4>Forex Overnight SWAP Rates</h4>
                    <div className="separator-2" />
                    <p>All Forex contracts are subject to an overnight SWAP with triple SWAPS being applied on the positions held over a Wednesday.<br />
                      Please note that Forex related SWAPs are factored as pips/lot.</p>
                  </div>
                  {/* main content ends */}
                </div>{/* row ends */}
              </div>{/* container ends */}
            </section>
            {/*  */}
            <section className = "main-container" style={{padding:"10px 100px", textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <div style={{display:"block", margin:"30px"}}>
                  <h2>About Forex Trading</h2>
                  <p>Forex trading, or currency trading, or FX trading, as it can be also abbreviated, are all 
                  terms that describe the currency exchange market as we know it today, which in simple language 
                  refers to the global, decentralized marketplace where individuals, companies and financial 
                  institutions exchange currencies for one another at floating rates. The current floating rates 
                  system, which we know today, was adopted after World War II and has been in effect ever since. Prior
                   to the current forex trading rates system, a monetary management system called the Bretton Woods 
                   Agreement was in existence, in which the exchange prices of currencies against each other were tied
                    and correlated to the reserves of gold in possession of the two countries that were the originators
                     of the actual currencies related to a transaction.</p>
                  </div>
            </section>
            <section className = "main-container" style={{padding:"10px 100px", textAlign:"center",flexDirection:"column",justifyContent:"center"}}>
                  <div style={{display:"block", margin:"30px"}}>
                  <h2>Forex Trading Marketplace</h2>
                  <p>The forex trading marketplace, as it stands today, is the world’s largest and most liquid market due to
                   a number of factors which include, but are not limited to, ease of performing transactions over the internet,
                    the modern development of travelling, ease of international communication and modern transportation, which have
                     made our world a smaller place. By making our world a smaller and more global place, this automatically means 
                     that people, goods and services can travel faster and more easily. This also means that a necessity of 
                     currencies to be traded against each other is needed in order for this to happen. All these factors have 
                     determined a growing forex trading marketplace, which will only continue to grow and become more dynamic, 
                     liquid and responsive.</p>
                  </div>
            </section>
            <section className = "main-container" style={{padding:"10px 100px", textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <div style={{display:"block", margin:"30px"}}>
                  <h2>Online Forex Trading</h2>
                  <p>Among the main participants of the forex trading market, one of the most growing segments of the 
                  total pool of participants of the marketplace, are retail foreign exchange traders (individuals) who
                   participate in online forex trading for mainly speculative reasons with the ultimate goal of generating a profit
                    from currency fluctuations (market changes), or hedging unwanted currency risk. This segment participates in the
                     forex trading marketplace via a broker (like CSM Wealth), or via a bank. In this case, the bank or the broker 
                     will issue the retail client a trading account that will be funded in a base currency (usually the local currency
                      of the region where the client is domiciled), and the client will have the opportunity to buy and sell currencies
                       both online and over the phone with the goal of deriving profit.</p>
                  </div>
            </section>
            <section className = "main-container" style={{padding:"10px 100px", textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <div style={{display:"block", margin:"30px"}}>
                  <h2>Forex Trading via a Broker</h2>
                  <p>Participating in the forex trading marketplace via a broker like CSM Wealth means that the client receives access 
                  to real-time pricing of the forex marketplace and is quoted buy and sell prices for a number of instruments via
                   an online trading platform (or via the phone). The client has the freedom to decide at which price they decide 
                   to buy or sell, and vice versa, and can execute a transaction at any time they wish.</p>
                  </div>
            </section>
            {/*  */}
            <section className = "main-container" style={{padding:"10px 100px", textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{display:"block", margin:"30px"}}>
          <h2>Our investment Packages</h2>
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
                <h4>Weeekly:<span className = "text-primary">5% - 8%</span></h4>
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
                <p>Est ROI:<span className = "text-primary">250%</span></p>
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
          <section className = "main-container" style={{padding:"60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                WHAT IS FOREX TRADING
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
            Forex trading, also known by the name of currency trading or FX trading, refers to buying a particular currency while selling another in exchange. Trading currencies always involves exchanging one currency for another
              <p>
              The ultimate aim can vary and can be any of the listed below but not limited to them
              </p>
              <ul>
                <li>Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for travelling purposes</li>
                <li>Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for trading purposes</li>
                <li>Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for speculative purposes, with the goal to make a profit</li>
              </ul>
              <p>Due to all the above, and not limited to the above, the forex trading market is today the world’s most liquid and most volatile market, with over $5 trillion traded daily</p>
              </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                HOW DOES FOREX TRADING WORK?
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            <p>
            Forex trading is in essence trading currencies for one another. As such, a CSM Wealth client sells one currency against another at a current market rate.

In order to be able to trade, it is required to open an account and hold currency A and then exchange currency A for currency B either for a long term or a short-term trade, with the ultimate goal varying accordingly.

Since FX trading is performed on currency pairs (i.e. the quotation of the relative value of one currency unit against another currency unit), in which the first currency is the so-called base currency, while the second currency is called the quote currency.

For example, the quotation EUR/USD 1.2345 is the price of the euro expressed in US dollars, which means that 1 euro equals 1.2345 US dollars.

Currency trading can be carried out 24 hours a day, from 22.00 GMT on Sunday until 22.00 GMT on Friday, with currencies traded among the major financial centers of London, New York, Tokyo, Zürich, Frankfurt, Paris, Sydney, Singapore and Hong Kong.
            </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                WHAT INFLUENCES PRICES IN FOREX TRADING
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
                <p>There is an endless number of factors that all contribute and influence the prices in forex trading (i.e. currency rates) daily, but it could be safe to say that there are 6 major factors which contribute the most and are more or less the main driving forces for forex trading price fluctuation:</p>
                <ul>
                  <li>Differentials in inflation</li>
                  <li>Differentials in interest rates</li>
                  <li>Current account deficits</li>
                  <li>Public debt</li>
                  <li>Terms of trade</li>
                  <li>Political and economic stability</li>
                </ul>
                <p>In order to best comprehend the above 6 factors, you will have to keep in mind that currencies are traded against one another. So when one falls, another one rises as the price denomination of any currency is always stated against another currency</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo">
                WHO ARE FOREX TRADING MARKET PARTICIPANTS
              </button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <p>Forex trading market participants can fall in any of the following categories</p>
              <ul>
                <li>Travellers or overseas consumers who exchange money to travel overseas or purchase goods from overseas</li>
                <li>Businesses that purchase raw materials or goods from overseas and need to exchange their local currency to the currency of the country of the seller</li>
                <li>Investors or speculators who exchange currencies, which either require a foreign currency, to perform trading in equities or other asset classes from overseas or either are trading currencies with the aim of making a profit from market changes</li>
                <li>Banking institutions that exchange money to service their clients or to lend money to overseas clients</li>
                <li>Governments or central banks that either buy or sell currencies and try to adjust financial imbalances, or adjust economic conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                WHAT IS IMPORTANT IN FOREX TRADING?
              </button>
            </h2>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
             <p>As a retail foreign exchange trader, the most important factors that affect your trading is trade execution quality, speed and spreads. The one affects the other.

A spread is the difference between the bid and the ask price of a currency pair (buy or sell price), and so to make it even easier it is the price at which your broker or bank is willing to sell or buy your requested trade order. Spreads, however, only matter with the correct execution.

In the forex trading marketplace, when we refer to execution we mean the speed at which a foreign exchange trader can actually buy or sell what they see on their screen or what they are quoted as bid/ask price over the phone. A good price makes no sense if your bank or broker cannot fill your order fast enough to get that bid/ask price.</p>
             </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseTwo">
                WHAT ARE MAJORS IN FOREX TRADING?
              </button>
            </h2>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            <p>In forex trading, some currency pairs are nicknamed majors (major pairs). This category includes the most traded currency pairs and they always include the USD on one side.

Major pairs include: EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, NZD/USD</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo">
                WHAT ARE MINORS IN FOREX TRADING?
              </button>
            </h2>
          </div>
          <div id="collapseSeven" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <p>In forex trading, minor currency pairs or crosses are all currency pairs that do not include the USD on one side</p>
             </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo"  style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseTwo">
                WHAT ARE EXOTICS IN FOREX TRADING?
              </button>
            </h2>
          </div>
          <div id="collapseEight" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              <p>In forex trading, exotic pairs include the less traded currency pairs that include a major currency paired with the currency of a smaller or emerging economy. These pairs usually have less volatility, less liquidity and do not present the dynamic behavior of major pairs and crosses.</p>
              </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#202431"}}>
            <h2 className="mb-0">
              <button className="btn collapsed" style={{color:"#fff"}} type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseTwo">
                WHAT IS THE GUARANTEE OF INVESTING WITH CSM WEALTH?
              </button>
            </h2>
          </div>
          <div id="collapseNine" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
            Here in CSM Wealth we have a risk management methodology that safeguards 90% of your capital thereby making it loss free
            </div>
          </div>
        </div>
      </div>
          </section>
            {/* main container ends */}
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
        </div>
      );
}

export default Forex;