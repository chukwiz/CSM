import React from 'react';
import "./Faq.css"

const Faq = () => {
    return(
        <div style={{fontSize:"85%"}}>
          {/*[if lt IE 9]>
  <div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
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
          className="nav-link  dropdown-toggle"
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
        <a className="nav-link active" href="/faq">
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
                  <li><a href="../trading/premium-account.html">Account Types</a></li>
                  <li className="active">Open Account</li>
                </ol>
              </div>
            </div> */}
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  {/* <div style={{display:"flex", justifyContent:"center"}}>

                  </div> */}
                  <div className="col-lg-4">
        <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
          <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
            <i className="mdi mdi-help-circle" /> Frequently Asked Questions
          </a>
          <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
            <i className="mdi mdi-account" /> Beginners Guide to CSM Wealth
          </a>
          <a href="#tab3" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab3" aria-selected="false">
            <i className="mdi mdi-account-settings" /> Leverage
          </a>
          <a href="#tab4" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab4" aria-selected="false">
            <i className="mdi mdi-heart" /> Liquidation
          </a>
          <a href="#tab5" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab5" aria-selected="false">
            <i className="mdi mdi-coin" /> Fees
          </a>
          {/* <a href="#tab6" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab6" aria-selected="false">
            <i className="mdi mdi-help" /> General help
          </a> */}
        </div>
      </div>

      {/*  */}
      <div className="col-lg-8">
        <div className="tab-content" id="faq-tab-content">
          
          <div className="tab-pane active" id="tab2" role="tabpanel" aria-labelledby="tab2">
            <div className="accordion" id="accordion-tab-2">
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">HOW TO GET STARTED WITH CSM Wealth?</button>
                  </h5>
                </div>
                <div className="collapse " id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>Sign Up, Select an investment plan that suits your investor type,Fund your portfolio and trading kicks off.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">HOW LONG DOES IT TAKE TO FUND ACCOUNT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>Bullethill Capital offers multiple deposit methods and their processing times differ. Before you 
                    go ahead and fund your account, please make sure that your account is fully activate. Cryptocurrency 
                    payments are credited instantly*. If there is any delay, please contact Customer support.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">WHAT IS THE MINIMUM AMOUNT I NEED TO DEPOSIT IN OTHER TO OPEN AN ACCOUNT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>The minimum deposit amount for any investment on Bullethill Capital is $20,000 or its equivalent in any currency.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-4" aria-expanded="false" aria-controls="accordion-tab-2-content-4">WHERE CAN I VIEW ALL MY TRADE HISTORY?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-4" aria-labelledby="accordion-tab-2-heading-4" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>Duplicates of trade made on your account are reported/provided to your web account/contact email</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-5" aria-expanded="false" aria-controls="accordion-tab-2-content-4">WHEN AM I DUE TO WITHDRAW?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-5" aria-labelledby="accordion-tab-2-heading-5" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>This depends on the period, as specified on your investment plan. Each package is unique and has specified time limit to access profit.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-6" aria-expanded="false" aria-controls="accordion-tab-2-content-4">HOW DO I MAKE WITHDRAWALS/UPGRADE?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-6" aria-labelledby="accordion-tab-2-heading-6" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>After period of trading an accrued interest on your account, you have the choice of withdrawing all your funds including profits made or keep the funds and withdraw the profits. If our profits become enough to a plan you wish to upgrade, notify us with an email so you can decide on when to upgrade.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-7" aria-expanded="false" aria-controls="accordion-tab-2-content-4">HOW LONG DOES IT TAKE TO SEND MY PROFITS?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-7" aria-labelledby="accordion-tab-2-heading-7" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>On completion of the withdrawal process, your money will be sent to you with 48 hours with the method you choose, Bullethill Capital provides an efficient and guaranteed withdrawals. If withdrawals will take time, clients are informed prior to time.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-2-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-8" aria-expanded="false" aria-controls="accordion-tab-2-content-4">KNOW YOUR DEPOSIT AND WITHDRAWAL OPTION</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-2-content-8" aria-labelledby="accordion-tab-2-heading-8" data-parent="#accordion-tab-2">
                  <div className="card-body">
                    <p>It’s swift, convenient and it’s saves time and money. Cryptocurrencies available for funding</p>
                  <ul>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                    <li>Litecoin</li>
                    <li>Ripple</li>
                    <p>For Bank Wire, send a message to the customer support to have a financial officer allocate an account for funding your portfolio.</p>
                  </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
           <div className="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3" >
            <div className="accordion" id="accordion-tab-3">
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-1" aria-expanded="false" aria-controls="accordion-tab-3-content-1">HOW MUCH LEVERAGE DOES CSM Wealth OFFER?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion-tab-3-content-1" aria-labelledby="accordion-tab-3-heading-1" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>The amount of leverage CSM Wealth offers varies from product to product. Leverage is determined by the Initial Margin and Maintenance Margin levels. These levels specify the minimum equity you must hold in your account to enter and maintain positions. Leverage is not a fixed multiplier but rather a minimum equity requirement. You can see the minimum Initial Margin and Maintenance Margin levels for all products here. The highest leverage CSM Wealth offers is up to 100x leverage on its Daily Bitcoin / JPY Futures Contract and the Perpetual Bitcoin / USD Perpetual Contract.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-2" aria-expanded="false" aria-controls="accordion-tab-3-content-2">WHAT IS INITIAL MARGIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-3-content-2" aria-labelledby="accordion-tab-3-heading-2" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>Initial Margin is the minimum amount of Bitcoin you must deposit to open a position.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-3-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-3" aria-expanded="false" aria-controls="accordion-tab-3-content-3">WHAT IS MAINTENANCE MARGIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-3-content-3" aria-labelledby="accordion-tab-3-heading-3" data-parent="#accordion-tab-3">
                  <div className="card-body">
                    <p>Maintenance Margin is the minimum amount of Bitcoin you must hold to keep a position open. If your margin balance on CSM Wealth drops below this level your position will be taken over by the Liquidation Engine and be Liquidated.</p>
                    <p><strong>Example: </strong>Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4">
            <div className="accordion" id="accordion-tab-4">
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-1" aria-expanded="false" aria-controls="accordion-tab-4-content-1">WHY DID I GET LIQUIDATED?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion-tab-4-content-1" aria-labelledby="accordion-tab-4-heading-1" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>When the Mark Price of a contract falls below your liquidation price for longs, or rises above your liquidation price for shorts, your Maintenance Margin level has been breached and the Liquidation Engine takes over your position. In your Trade History, the price the liquidated position was closed at is the Bankruptcy Price (equivalent to where your Maintenance Margin is equal to 0).</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-2" aria-expanded="false" aria-controls="accordion-tab-4-content-2">HOW DOES THE LIQUIDATION ENGINE WORK?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-2" aria-labelledby="accordion-tab-4-heading-2" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>Upon liquidation, the Liquidation Engine attempts to close the position at the prevailing market price. If it is unable to do so then Auto-Deleveraging will occur.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-3" aria-expanded="false" aria-controls="accordion-tab-4-content-3">CAN I GO BANKRUPT?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-3" aria-labelledby="accordion-tab-4-heading-3" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>No. We have a sophisticated margin and liquidation process that is designed to prevent any trader’s margin balance on CSM Wealth from ever going below 0.</p>
                    <p><strong>Example: </strong>Oh Leela! You're the only person I could turn to; you're the only person who ever loved me.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-4-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-4" aria-expanded="false" aria-controls="accordion-tab-4-content-4">DO YOU SOCIALISE LOSSES?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-4-content-4" aria-labelledby="accordion-tab-4-heading-4" data-parent="#accordion-tab-4">
                  <div className="card-body">
                    <p>No. CSM Wealth employs an Auto-Deleveraging System that does not need to socialise losses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5">
            <div className="accordion" id="accordion-tab-5">
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion1" aria-expanded="false" aria-controls="accordion1">IS THERE A FEE TO DEPOSIT BITCOIN?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion1" aria-labelledby="accordion1" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No, CSM Wealth does not charge fees on deposits</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-2" aria-expanded="false" aria-controls="accordion-tab-5-content-2">IS THERE A FEE TO WITHDRAW BITCOIN?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-2" aria-labelledby="accordion-tab-5-heading-2" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No, CSM Wealth does not charge fees on withdrawals. When withdrawing Bitcoin, the minimum Bitcoin Network fee is set dynamically based on blockchain load and can be viewed on the Withdrawal Page.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-3" aria-expanded="false" aria-controls="accordion-tab-5-content-3">ARE THERE FEES TO TRADE?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-3" aria-labelledby="accordion-tab-5-heading-3" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>Yes, CSM Wealth charges a trading fee on every completed trade. Please view the Fees page for more information.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-5-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-4" aria-expanded="false" aria-controls="accordion-tab-5-content-4">DO YOU SOCIALISE LOSSES?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-5-content-4" aria-labelledby="accordion-tab-5-heading-4" data-parent="#accordion-tab-5">
                  <div className="card-body">
                    <p>No. CSM Wealth employs an Auto-Deleveraging System that does not need to socialise losses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          {/* <div className="tab-pane" id="tab6" role="tabpanel" aria-labelledby="tab6">
            <div className="accordion" id="accordion-tab-6">
              <div className="card">
                <div className="card-header" id="accordion-tab-6-heading-1">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-6-content-1" aria-expanded="false" aria-controls="accordion-tab-6-content-1">Doomsday device?</button>
                  </h5>
                </div>
                <div className="collapse show" id="accordion-tab-6-content-1" aria-labelledby="accordion-tab-6-heading-1" data-parent="#accordion-tab-6">
                  <div className="card-body">
                    <p>Ah, now the ball's in Farnsworth's court! We'll need to have a look inside you with this camera. Stop it, stop it. It's fine. I will 'destroy' you! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!</p>
                    <p><strong>Example: </strong>So I really am important? How I feel when I'm drunk is correct?</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-6-heading-2">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-6-content-2" aria-expanded="false" aria-controls="accordion-tab-6-content-2">And so we say goodbye to our beloved pet, Nibbler?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-6-content-2" aria-labelledby="accordion-tab-6-heading-2" data-parent="#accordion-tab-6">
                  <div className="card-body">
                    <p>Nibbler, who's gone to a place where I, too, hope one day to go. The toilet. But existing is basically all I do! I suppose I could part with 'one' and still be feared. I just told you! You've killed me!</p>
                    <p><strong>Example: </strong>What's with you kids? Every other day it's food, food, food.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-6-heading-3">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-6-content-3" aria-expanded="false" aria-controls="accordion-tab-6-content-3">Tell her you just want to talk?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-6-content-3" aria-labelledby="accordion-tab-6-heading-3" data-parent="#accordion-tab-6">
                  <div className="card-body">
                    <p>It has nothing to do with mating. Soon enough. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Daylight and everything. Hey! I'm a porno-dealing monster, what do I care what you think?</p>
                    <p><strong>Example: </strong>Is that a cooking show? It doesn't look so shiny to me. And why did 'I' have to take a cab?</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="accordion-tab-6-heading-4">
                  <h5>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-6-content-4" aria-expanded="false" aria-controls="accordion-tab-6-content-4">Good man. Nixon's pro-war and pro-family?</button>
                  </h5>
                </div>
                <div className="collapse" id="accordion-tab-6-content-4" aria-labelledby="accordion-tab-6-heading-4" data-parent="#accordion-tab-6">
                  <div className="card-body">
                    <p>I don't 'need' to drink. I can quit anytime I want! THE BIG BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR NO RAISEN! There's one way and only one way to determine if an animal is intelligent. Dissect its brain!</p>
                    <p><strong>Example: </strong>Guess again. Yeah, I do that with my stupidness. And when we woke up, we had these bodies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/*  */}
                </div>
              </div>
            </section>
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
    )
}

export default Faq;