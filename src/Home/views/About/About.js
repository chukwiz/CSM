import React from 'react';

const About = () => {
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
          className="nav-link active dropdown-toggle"
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
          <a className="dropdown-item active" href="/aboutus">
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
                  <li className="active">About Us</li>
                </ol>
              </div>
            </div> */}
            <div className="banner video-background-banner pv-40 dark-translucent-bg hovered" style={{paddingTop: '40px !important', minHeight: '350px'}}>
            <div style={{position: 'absolute', zIndex: -1, top: '0px', left: '0px', bottom: '0px', right: '0px', overflow: 'hidden', backgroundImage: 'url("../../static/redesign/images/bit6.jpg")', backgroundColor: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}}>

            </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-5 pv-20">
                    <h2 className="title object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>About Us</h2>
                    <div className="separator-2 object-non-visible mt-10 animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100} />
                    <p className="object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>CSM wealth is an innovative online platform which allows institutions as well as individuals to invest in cryptocurrency and attain yields. </p>
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
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={100}>
                          <div style={{height: '100px', position: 'relative'}}><a href="../trading-products/forex-trading.html"><img src="../../static/redesign/images/inner/about/chart.png" alt="" style={{position: 'absolute', bottom: '10px'}} /></a></div>
                          <h4>Advanced Institutional &amp; crypto investment</h4>
                          <p>We provide trading services and facilities to both retail and institutional clients.</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={200}>
                          <div style={{height: '100px', position: 'relative'}}><a href="../funding/security-of-funds.html"><img src="../../static/redesign/images/inner/about/shield.png" alt="" style={{position: 'absolute', bottom: '10px'}} /></a></div>
                          <h4>Security of Funds</h4>
                          <p>Rest assured that our extraordinary measures offer high levels of safety for your funds.</p>
                        </div>
                      </div>
                      {/* <div className="col-md-4 col-sm-6">
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={300}>
                          <div style={{height: '100px', position: 'relative'}}><a href="../mt4-terminal/webtrader.html"><img src="../../static/redesign/images/inner/about/devices.png" alt="" style={{position: 'absolute', bottom: '10px'}} /></a></div>
                          <h4>Mobile &amp; Desktop Trading</h4>
                          <p>Trade from anywhere, whether at home or on the move.</p>
                        </div>
                      </div> */}
                      <div className="clearfix visible-md" />
                      <div className="col-md-4 col-sm-6">
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={100}>
                          <div style={{height: '100px', position: 'relative'}}><a href="../trading-tools/video-tutorials.html"><img src="../../static/redesign/images/inner/about/hat.png" alt="" style={{position: 'absolute', bottom: '10px'}} /></a></div>
                          <h4>Exceptional Educational Resources</h4>
                          <p>Benefit from our education material and gain knowledge for trading.</p>
                        </div>
                      </div>
                      
                      {/* <div className="col-md-4 col-sm-6">
                        <div className="ph-10 feature-box object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay={300}>
                          <div style={{height: '100px', position: 'relative'}}><a href="../contact-us.html"><img src="../../static/redesign/images/inner/about/headphones.png" alt="" style={{position: 'absolute', bottom: '10px'}} /></a></div>
                          <h4>Dedicated Support</h4>
                          <p>Our friendly team offers valuable assistance for any problem or help you need.</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* main end */}
                </div>
              </div>
            </section>
            <section className="object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay={100}>
              <div className="full-width-section">
                <div className="hovered">
                  <img className="to-right-block" src="../../static/redesign/images/inner/about/why-choose-lmfx.jpg" alt="" />
                </div>
                <div className="full-text-container light-gray-bg border-bottom-clear">
                  <h2>Why <strong>Choose Us</strong></h2>
                  <div className="separator-2 visible-lg" />
                  <p>CSM Wealth is an innovative online solution that offers advanced institutional and crypto investment conditions to a global audience. We believe in the <b>importance of building strong, secure foundations</b> and the cornerstone of our mission is <b>to provide the full spectrum of cutting-edge investment services that our clients require to succeed in the world’s most liquid market.</b></p>
                  <p>Our goal is to deliver an <b>unparalleled crypto and investment experience</b> that offers the most competitive trading conditions available to each and every client</p>
                  <p>At CSM Wealth, we know that our clients need to stay close to the markets and we provide a comprehensive view of the cryptocurrency market to ensure that they never miss a market movement. In addition to an advanced investment environment, clients also have full access to exceptional educational resources via the CSM Wealth Education Centre and advanced investment tools that have been designed to improve investment strategies</p>
                  <p>CSM Wealth delivers what Investors in today’s financial markets need the most! From fast execution and prompt payouts to automated withdrawals of Investment profits and ensuring funds are deposited securely in segregated accounts, <b>we are on call 24 hours a day, 5 days a week</b> to help our clients with their investment needs.</p>
                  <div className="separator-3 visible-lg" />
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
      );
}

export default About;