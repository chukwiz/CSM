import React from 'react';

const AboutUs = () => {
    return (
        <div style={{fontSize:"85%"}}>
          {/*[if lt IE 9]>
  <div style="text-align:center; padding: 6px 0; background: #cc0000; font-size: 18px; color: #fff; font-weight: 500;">You are using an old version of Internet Explorer. For a better experience, keep your browser up to date. <a href="http://windows.microsoft.com/ie" target="_blank" rel="noopener noreferrer "  class="btn btn-sm btn-info"><i class="fa fa-edge"></i> Get the latest IE</a></div>
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
        <a className="nav-link active" href="/whyus">
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
                  <li><a href="about-us.html">About</a></li>
                  <li className="active">Advantages of CSM Wealth</li>
                </ol>
              </div>
            </div> */}
            <div className="banner dark-translucent-bg pt-20" style={{paddingTop: '40px !important', minHeight: '350px', backgroundImage: 'url("../../static/redesign/images/inner/about/Advantages-header-image.jpg")', backgroundPosition: '50% 32%'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-5 pv-20">
                    <h1 className="text-uppercase title object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>CSM Wealth's <strong>Advantages</strong></h1>
                    <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100} />
                    <p className="object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>CSM Wealth offers a variety of tools, education material, contests and bonuses in order to meet traders needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <section className="main-container">
              <div className="container">
                <div className="row">
                  {/* main start */}
                  {/* ================ */}
                  <div className="main col-md-12">
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={100}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/hat2.png" style={{margin: 'auto', padding: '10px', paddingTop: '30px'}} alt="" /></div>
                          <a href="../trading-tools/video-tutorials.html"><h4>Comprehensive<br />educational materials</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={200}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/candlestick-charts.png" style={{margin: 'auto', padding: '10px'}} alt="" /></div>
                          <a href="https://blog.CSM Wealth.com/" target="_blank" rel="noopener noreferrer " ><h4>In-depth Daily<br />Market Analysis</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={300}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/calendar.png" style={{margin: 'auto', padding: '10px', paddingTop: '24px'}} alt="" /></div>
                          <a href="../trading-tools/economic-calendar.html"><h4>Stay up-to-date with CSM Wealth's<br />Economic Calendar</h4></a>
                        </div>
                      </div>
                      <div className="clearfix visible-md" />
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={100}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/calculator.png" style={{margin: 'auto', padding: '10px', paddingTop: '25px'}} alt="" /></div>
                          <a href="../trading-tools/trading-tools.html"><h4>Plan effectively with our useful<br />Trading Calculators</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={200}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/person.png" style={{margin: 'auto', padding: '10px', paddingTop: '25px'}} alt=""/></div>
                          <a href="https://connect.CSM Wealth.com/" target="_blank" rel="noopener noreferrer " ><h4>Easy online account<br />management portal</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={300}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/devices2.png" style={{margin: 'auto', padding: '10px', paddingTop: '28px'}}alt="" /></div>
                          <a href="../mt4-terminal/mt4-terminal.html"><h4>Industry-leading MT4 mobile<br />and desktop platforms</h4></a>
                        </div>
                      </div>
                      <div className="clearfix visible-md" />
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={100}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/hand.png" style={{margin: 'auto', padding: '10px'}} alt="" /></div>
                          <a href="../mt4-terminal/mt4-terminal.html"><h4>One click trading that<br />is ideal for scalpers</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={200}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/shield2.png" style={{margin: 'auto', padding: '10px', paddingTop: '30px'}} alt="" /></div>
                          <a href = "/"><h4>Protect your automated<br />startegies with VPS hosting</h4></a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-20 feature-box object-non-visible animated object-visible fadeInDownSmall text-center" data-animation-effect="fadeInDownSmall" data-effect-delay={300}>
                          <div style={{minHeight: '100px'}}><img src="../../static/redesign/images/inner/about/present.png" style={{margin: 'auto', padding: '10px', paddingTop: '25px'}} alt="" /></div>
                          <a href="../funding/bonus-offerings.html"><h4>Claim generous<br />bonuses</h4></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* main end */}
                </div>
              </div>
              <br clear="all" /><br clear="all" />
              <section className="section background-img-1 dark-translucent-bg bg-dark-blue" style={{backgroundPosition: '50% 42%'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="call-to-action text-center">
                        <div className="row">
                          <div className="col-sm-8">
                            <h1 className="title">Unlimited Options</h1>
                            <p>Take advantage of our diverse range of products including a wide variety of instruments, industry-leading MT4 mobile and desktop platforms, in depth Daily Market Analysis and several other tools.</p>
                          </div>
                          <div className="col-sm-4">
                            <br />
                            <p><a href="../account-types/open-account.html" className="btn btn-lg btn-gray-transparent">SIGN UP</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <br clear="all" /><br clear="all" />
              <section className="pv-20 padding-bottom-clear clearfix">
                <div className="container">
                  <h2 className="text-center">Why you should choose CSM Wealth</h2>
                  <div className="separator" />
                  <p className="text-center space-bottom">When it comes to trading, CSM Wealth is the broker you are looking for, an innovative online foreign exchange broker that offers advanced institutional and retail trading conditions to a global audience. We have thought of everything you might need, to ensure a smooth hassle-free trading experience.</p>
                  <div className="row">
                    <div className="col-md-6 space-top">
                      <br />
                      <div className="feature-box-2 object-non-visible right animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={100} style={{display:"flex", flexDirection:"row"}}>
                      <div className="col-md-3 col-sm-3"><img src="../../static/redesign/images/inner/about/cup.png" className="img-center-992" style={{padding: '10px', color:"red"}} alt="" /></div>
                        
                        <div className="body col-md-9 col-sm-9 mb-20 text-center-992" style={{marginRight: 0, paddingRight: 0}}>
                          <h4 className="title">Join exciting trading competitions</h4>
                          <p>With exciting competitions you can demostrate your trading skills and and win amazing prizes.</p>
                          <div className="separator-3 hidden-xs" />
                        </div>
                      </div>
                      <div className="feature-box-2 object-non-visible right animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={200}  style={{display:"flex", flexDirection:"row"}}>
                      <div className="col-md-3 col-sm-3"><img src="../../static/redesign/images/inner/about/head-set.png" className="img-center-992" style={{padding: '10px'}} alt=""/></div>
                        
                        <div className="body col-md-9 col-sm-9 mb-20 text-center-992" style={{marginRight: 0, paddingRight: 0}}>
                          <h4 className="title">24/7 multilingual support</h4>
                          <p>For any assistance you require chat with our Support Team in one of the languages we offer.</p>
                          <div className="separator-3 hidden-xs" />
                        </div>
                      </div>
                      <div className="feature-box-2 object-non-visible right animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={300} style={{display:"flex", flexDirection:"row"}}>
                      <div className="col-md-3 col-sm-3"><img src="../../static/redesign/images/inner/about/leverage.png" className="img-center-992" style={{padding: '10px'}} alt="" /></div>
                        
                        <div className="body col-md-9 col-sm-9 mb-20 text-center-992" style={{marginRight: 0, paddingRight: 0}}>
                          <h4 className="title">Leverage from 1:1 to 1:1000</h4>
                          <p>Choose among different leverages depending the account you want to open.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src="../../static/redesign/images/inner/about/advantages-photo.jpg" alt="" style={{marginTop: '45px'}} />
                    </div>
                  </div>
                </div>
              </section>
              <br clear="all" /><br clear="all" />
            </section>{/* main container ends */}
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

export default AboutUs;