import React from 'react';

const TradingTools = () => {
    return (
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
        <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
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
          <a className="dropdown-item active" href="/tradingtools">
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
        <a className="nav-link active" href="/ourteam">
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
                  <li><a href="../500.html">Home</a></li>
                  <li><a href="../rading-tools/trading-tools.html">Trading Tools</a></li>
                  <li className="active">Trading Tools</li>
                </ol>
              </div>
            </div> */}
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main content starts */}
                  <div className="col-md-12 ar-reverse">
                    <h1 className="page-title">Trading Tools</h1>
                    <div className="separator-2" />
                    <p>LMFX is pleased to provide our selection of essential forex calculators to traders, enabling you to have comprehensive statistics on your trades. Using these tools, you can estimate profit and losses on your trades, evaluate margin requirements for secure trading and calculate the impact of taking specific positions with different sizes.</p>
                    <br clear="all" />
                    <h3 className="heading-sm">Our Calculators</h3>
                    <br clear="all" />
                    <div className="tab-v1">
                      <ul className="nav nav-tabs">
                        <li className><a href="#fibonacci" data-toggle="tab" aria-expanded="false" onclick="loadCalc('fibonacci-calculator')" id="startHere">Fibonacci</a></li>
                        <li className><a href="#pivotpoints" data-toggle="tab" aria-expanded="false" onclick="loadCalc('pivot-points-calculator')">Pivot Points</a></li>
                        <li className="active"><a href="#pointssize" data-toggle="tab" aria-expanded="true" onclick="loadCalc('position-size-calculator')">Position Size</a></li>
                        <li><a href="#pipvalue" data-toggle="tab" onclick="loadCalc('pip-value-calculator')">Pip Value</a></li>
                        <li><a href="#riskandreward" data-toggle="tab" onclick="loadCalc('risk-and-reward-calculator')">Risk and Reward</a></li>
                        <li><a href="#riskpersentage" data-toggle="tab" onclick="loadCalc('risk-percentage-calculator')">Risk Percentage</a></li>
                        <li><a href="#multitarget" data-toggle="tab" onclick="loadCalc('multitarget-calculator')">Multitarget</a></li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade in active" id="fibonacci">
                          <br clear="all" />
                          <h4>Fibonacci Calculator</h4>
                          <p>Enter the high and low to quickly calculate four basic Fibonacci support and resistance retracement values at 23.8%, 38.2%, 50% and 61.8%. </p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="fibonacci-calculatorIn" />
                        </div>
                        <div className="tab-pane fade" id="pivotpoints">
                          <br clear="all" />
                          <h4>Pivot Points Calculator</h4>
                          <p>Enter High, Low, Close and Current Open Price to calculate Floor, Woodie’s, Camarilla and DeMark’s pivot points and to predict support and resistance levels.</p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="pivot-points-calculatorIn" />
                        </div>
                        <div className="tab-pane fade" id="pointssize">
                          <br clear="all" />
                          <h4>Position Size Calculator</h4>
                          <p>Free Forex tool that lets you to calculate the size of the position in units and lots to accurately manage your risks. It works with all major currency pairs and crosses. It requires the minimum input values, but allows you to tune it finely to your specific needs. All you need to do is to fill the form below and press the Calculate button:</p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="position-size-calculatorIn">
                            <div className="tools-box-container well panel">
                              <div className="row">
                                <form className="position-size-calculator" style={{padding: '5px'}} id="f">
                                  <div className="col-md-12 clearfix">
                                    <label style={{display: 'none', fontSize: '12px', color: '#CD0511'}} id="error" />
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                        Account Currency:
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <select name="currency" id="currency" className="f2 form-control">
                                          <option value="USD">USD</option>
                                          <option value="EUR">EUR</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{marginTop: '10px'}}>
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                        Account Leverage:
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <div style={{float: 'left', width: '5%', paddingTop: '8px'}}>1:</div><input type="text" defaultValue={100} name="leverage" style={{width: '95%'}} id="leverage" className="f3 non-empty form-control" tabIndex={1} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{marginTop: '10px'}}>
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                        Currency pair:
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <select name="pair" id="pair" className="f2 form-control">
                                          <option value="EUR/USD">EUR/USD</option>
                                          <option value="GBP/USD">GBP/USD</option>
                                          <option value="USD/JPY">USD/JPY</option>
                                          <option value="USD/CHF">USD/CHF</option>
                                          <option value="USD/CAD">USD/CAD</option>
                                          <option value="EUR/JPY">EUR/JPY</option>
                                          <option value="GBP/JPY">GBP/JPY</option>
                                          <option value="AUD/USD">AUD/USD</option>
                                          <option value="NZD/USD">NZD/USD</option>
                                          <option value="EUR/GBP">EUR/GBP</option>
                                          <option value="EUR/CHF">EUR/CHF</option>
                                          <option value="EUR/AUD">EUR/AUD</option>
                                          <option value="EUR/CAD">EUR/CAD</option>
                                          <option value="EUR/NZD">EUR/NZD</option>
                                          <option value="GBP/CHF">GBP/CHF</option>
                                          <option value="GBP/AUD">GBP/AUD</option>
                                          <option value="GBP/CAD">GBP/CAD</option>
                                          <option value="GBP/NZD">GBP/NZD</option>
                                          <option value="AUD/CHF">AUD/CHF</option>
                                          <option value="CAD/CHF">CAD/CHF</option>
                                          <option value="CHF/JPY">CHF/JPY</option>
                                          <option value="NZD/CHF">NZD/CHF</option>
                                          <option value="AUD/CAD">AUD/CAD</option>
                                          <option value="AUD/JPY">AUD/JPY</option>
                                          <option value="AUD/NZD">AUD/NZD</option>
                                          <option value="CAD/JPY">CAD/JPY</option>
                                          <option value="NZD/CAD">NZD/CAD</option>
                                          <option value="NZD/JPY">NZD/JPY</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{marginTop: '10px'}}>
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                        Position size, units:
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <input type="text" name="ls" id="ls" className="f2 form-control" tabIndex={1} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{marginTop: '10px'}}>
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <input type="button" defaultValue="Calculate Margin" onclick="change_calc(0)" className="f2 btn-u btn-u-green ff-rounded non-empty form-control" tabIndex={1} style={{width: '130px'}} />
                                        &nbsp;&nbsp;OR&nbsp;&nbsp;
                                        <input type="button" defaultValue="Calculate Volume" onclick="change_calc(1)" className="f2 btn-u btn-u-green ff-rounded non-empty form-control" tabIndex={1} style={{width: '130px'}} />
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{marginTop: '10px'}} className="row">
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix">
                                        <div id="extra_request_text">Volume:</div>
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <input type="text" name="extra_request" id="extra_request" className="f3 form-control" tabIndex={1} />
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{marginTop: '20px'}} className="row">
                                    <div className="col-md-12 clearfix">
                                      <div className="col-xs-12 col-sm-3 clearfix" />
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <input type="button" defaultValue="Calculate" onclick="CalcPV();" className="f2 btn btn-primary ff-rounded non-empty" tabIndex={1} />
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{marginTop: '20px'}} className="row">
                                    <div className="col-md-12 clearfix">
                                      <div style={{fontWeight: 'bold'}} className="col-xs-12 col-sm-3 clearfix">
                                        <div id="extra_request_text_res" style={{paddingTop: '10px'}}>Margin:</div>
                                      </div>
                                      <div className="col-xs-12 col-sm-9 clearfix">
                                        <input type="text" name="result" id="result" className="f2 form-control" tabIndex={1} />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade in" id="pipvalue">
                          <br clear="all" />
                          <h4>Pip Value Calculator</h4>
                          <p>To calculate pip value, simply enter your account currency, currency pair being traded and position size. </p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="pip-value-calculatorIn" />
                        </div>
                        <div className="tab-pane fade" id="riskandreward">
                          <br clear="all" />
                          <h4>Risk and Reward Calculator</h4>
                          <p>The risk and reward calculator will help you to calculate the position's best targets and their respective reward-to-risk ratios based on the Fibonacci retracements from the local peak and bottom. It's a powerful tool to determine the potential risks before entering any positions.<br /><br />
                            Fibonacci retracements (0.382 and 0.618) are calculated to form the entry, target and stop-loss levels. It's better to enter positions only if the current price (C) is close to 0.382 Fibonacci level.</p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="risk-and-reward-calculatorIn" />
                        </div>
                        <div className="tab-pane fade in" id="riskpersentage">
                          <br clear="all" />
                          <h4>Risk Percentage Calculator</h4>
                          <p>To quickly determine your lot size, simply enter: account currency; currency pair; your account balance and the percentage that you are willing to risk; open price; and, stop loss price.</p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="risk-percentage-calculatorIn" />
                        </div>
                        <div className="tab-pane fade in" id="multitarget">
                          <br clear="all" />
                          <h4>Multitarget Calculator</h4>
                          <p>This calculator helps traders to plan what portion of their positions should be closed at certain target levels in order to gain the best possible Return to Risk Ratio. If a trader believes that a market will move relatively little, then it is better to emphasize Targets 1 and 2 when taking profits. However, if a trader believes that the market move has the potential to develop into a longer term trend, then the trader may want to close a larger portion of the trade at Target 3.</p>
                          <br clear="all" />
                          <div className="fullWidth calcIn" id="multitarget-calculatorIn" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* sidebar start */}
                  {/* sidebar starts */}
                  {/* <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar" style={{marginTop: '0px'}}>
                      <div style={{background: '#131c28', float: 'left', width: '100%', padding: '10px 20px 20px 20px'}} className="mb-30 clearfix">
                        <h4 className="color-white">Join LMFX</h4>
                        <div className="separator-2 custom-separator-2" />
                        <a href="../account-types/open-account.html" className="btn btn-sm btn-default btn-ocean-green full-width"><b>OPEN LIVE ACCOUNT</b></a>
                        <a href="../account-types/demo-account.html" className="btn btn-sm btn-default full-width"><b>OPEN DEMO ACCOUNT</b></a>
                      </div>
                      <a href="../funding/bonus-offerings.html"><img className="img-responsive" src="../../static/redesign/images/sidebar-pamm.jpg" alt="" /></a>
                      <div className="pv-30 clearfix">
                        <h4 className="title">Education</h4>
                        <div className="separator-2" />
                        <nav>
                          <ul className="nav nav-pills nav-stacked list-style-icons">
                            <li><a href="video-tutorials.html"><i className="fa fa-angle-double-right" />Video Tutorials</a></li>
                            <li><a href="trading-tools.html"><i className="fa fa-angle-double-right" />Trading Tools</a></li>
                            <li><a href="economic-calendar.html"><i className="fa fa-angle-double-right" />Economic Calendar</a></li>
                            <li><a href="https://blog.lmfx.com/"><i className="fa fa-angle-double-right" />Market Analysis</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                  {/* sidebar ends */}
                  {/* sidebar ends */}
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
          </div></div>
      );
}

export default TradingTools;