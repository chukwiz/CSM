import React from 'react';
import Iframe from 'react-iframe';

const Home = () => {
    return(
        <div className="no-trans front-page">

<div className="scrollToTop circle"><i className="icon-up-open-big"></i></div>
<div className="page-wrapper">
<nav className="navbar  navbar-light bg-white" style={{fontSize:"80%"}}>
<a className="navbar-brand" href="/">
    <img src="../csmwhitelogo.png" alt="logo" />
</a>
  {/* <a className="navbar-brand" href="/">Sticky top</a> */}
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
<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{fontSize:"80%"}}>
  
  <a className="navbar-brand" href="/">
    {/* <img src="../csmdarklogo.png" alt="logo" style={{height:44,width:120}} /> */}CSM
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
      <li className="nav-item active">
        <a className="nav-link" href="/">
          HOME <span className="sr-only">(current)</span>
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
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
    </ul>
  </div>
</nav>


{/* // </div>
// </div> */}
{/* // </header> */}
{/* // </div> */}
{/* <!-- header-container end --> */}


{/* <!--
-->
<!-- banner start -->
<!-- ================ --> */}
<div className="banner clearfix" style={{backgroundColor: "#111924"}}>
{/* <!-- slideshow start -->
<!-- ================ --> */}
<div className="slideshow">
{/* <!-- slider revolution start -->
<!-- ================ --> */}
<div className="slider-banner-container">
<div className="slider-banner-fullwidth">
<ul className="slides">
{/* <!-- slide 1 start -->
<!-- ================ --> */}
<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="on">
{/* <!-- main image --> */}
<img src="../static/redesign/images/slides/slide10.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover" />
{/* <!-- LAYER NR. 1 --> */}
<div className="tp-caption fadeout large_white font-Playfair"
data-x="0"
data-y="90"><b>Trade Everywhere <br/> Everything with one login</b>
</div>
{/* <!-- LAYER NR. 2 --> */}
<div className="tp-caption sfb fadeout large_white tp-resizeme hidden-xs"
data-x="0"
data-y="200"><div className="separator-2 light"></div>
</div>
{/* <!-- LAYER NR. 3 --> */}
<div className="tp-caption sfb fadeout medium_white hidden-xs"
data-x="0"
data-y="210">-Equity CFDs<br/>-Forex<br/>-7 Platforms
</div>
{/* <!-- LAYER NR. 4 --> */}
<div className="tp-caption fadeout sfb small_white"
data-x="0"
data-y="325"><a href="account-types/open-account.html" className="btn btn-default text-center"><b>SIGN UP</b></a>
</div>
</li>
{/* <!-- slide 2 start--> */}
<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="on">
<img src="../static/redesign/images/slides/slide3.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover" />
<div className="tp-caption fadeout large_white font-Playfair"
data-x="0"
data-y="90"><b style={{color:"##42ce7a"}}>Unveil Tight<br/> Spread Trading</b>
</div>
<div className="tp-caption sfb fadeout large_white tp-resizeme hidden-xs"
data-x="0"
data-y="200"><div className="separator-2 light"></div>
</div>
<div className="tp-caption sfb fadeout medium_white hidden-xs"
data-x="0"
data-y="210"><span style={{color:"#dfdfdfde"}}>-Trade with tight spreads from 0.2 pips<br/>-High leverage of up to 1:1000<br/>-Exceptional 24/7 customer support </span>
</div>
<div className="tp-caption fadeout sfb small_white"
data-x="0"
data-y="325"><a href="account-types/open-account.html" className="btn btn-default text-center"><b>SIGN UP</b></a>
</div>
</li>
{/* <!-- slide 3 start -->
<!-- ================ --> */}
<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="on">
{/* <!-- main image --> */}
<img src="../static/redesign/images/slides/slide5.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover"/>
{/* <!-- LAYER NR. 1 --> */}
<div className="tp-caption sfb fadeout large_white font-Playfair"
data-x="0"
data-y="90"><b>Trust Your Funds with <br/>a Reliable Broker</b>
</div>
{/* <!-- LAYER NR. 2 --> */}
<div className="tp-caption sfb fadeout large_white tp-resizeme hidden-xs"
data-x="0"
data-y="200"><div className="separator-2 light"></div>
</div>
{/* <!-- LAYER NR. 3 --> */}
<div className="tp-caption sfb fadeout medium_white hidden-xs"
data-x="0"
data-y="210">-Client Segregated Accounts<br/>-Reputable payment gateway providers<br/>-Funds protection against liquidation
</div>
{/* <!-- LAYER NR. 4 --> */}
<div className="tp-caption fadeout sfb small_white"
data-x="0"
data-y="325"><a href="account-types/open-account.html" className="btn btn-default text-center"><b>SIGN UP</b></a>
</div>
</li>
{/* <!-- slide 4 start -->
<!-- ================ --> */}
<li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="on">
{/* <!-- main image --> */}
<img src="../static/redesign/images/slides/slide6.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover" />
{/* <!-- LAYER NR. 1 --> */}
<div className="tp-caption sfb fadeout large_white font-Playfair"
data-x="0"
data-y="90"><b>Helping you rise again<br />15% Recovery Bonus</b>
</div>
{/* <!-- LAYER NR. 2 --> */}
<div className="tp-caption sfb fadeout large_white tp-resizeme hidden-xs"
data-x="0"
data-y="200"><div className="separator-2 light"></div>
</div>
{/* <!-- LAYER NR. 3 --> */}
<div className="tp-caption sfb fadeout medium_white hidden-xs"
data-x="0"
data-y="210">Our all-new Phoenix bonus<br/>provides you with a Rescue Bonus<br/>in case of loss of your capital
</div>
{/* <!-- LAYER NR. 4 --> */}
<div className="tp-caption fadeout sfb small_white"
data-x="0"
data-y="325"><a href="account-types/open-account.html" className="btn btn-default text-center"><b>SIGN UP</b></a>
</div>
</li>
</ul>
{/* <!--<div className="tp-bannertimer"></div>--> */}
</div>
</div>
{/* <!-- slider revolution end --> */}
</div>
{/* <!-- slideshow end --> */}
</div>
{/* <!-- banner end --> */}
<div id="page-start"></div>
{/* <!-- section start -->
<!-- ================ --> */}
<section className="section light-gray-bg clearfix">
<div className="container">
<div className="row">
<div className="col-md-2 col-sm-6 text-center">
<div className="body">
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3",borderRight:"1px solid #CCCCCC"}}><span className="color-red topnumbers">1:1000</span><br/> Leverage</h4>
</div>
</div>
<div className="col-md-2 col-sm-6 text-center" style={{paddingLeft:"0px"}}>
<div className="body" style={{marginLeft:"-15px"}}>
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3",borderRight:"1px solid #CCCCCC"}}><span className="color-red topnumbers">7</span><br/> Trading Platforms</h4>
</div>
</div>
<div className="col-md-2 col-sm-6 text-center" style={{paddingLeft:"0px"}}>
<div className="body" style={{marginLeft:"-15px"}}>
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3",borderRight:"1px solid #CCCCCC"}}><span className="color-red topnumbers">$0</span><br/> Fees on Deposits</h4>
</div>
</div>
<div className="col-md-2 col-sm-6 text-center" style={{paddingLeft:"0px"}}>
<div className="body" style={{marginLeft:"-15px"}}>
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3",borderRight:"1px solid #CCCCCC"}}><span className="color-red topnumbers">0.2</span><br/> Spread - EURUSD</h4>
</div>
</div>
<div className="col-md-2 col-sm-6 text-center" style={{paddingLeft:"0px"}}>
<div className="body" style={{marginLeft:"-15px"}}>
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3",borderRight:"1px solid #CCCCCC"}}><span className="color-red topnumbers">100%</span><br/> Credit Bonus</h4>
</div>
</div>
<div className="col-md-2 col-sm-6 text-center" style={{paddingLeft:"0px"}}>
<div className="body" style={{marginLeft:"-15px"}}>
<h4 className="title text-center m-b-0" style={{lineHeight:"1.3"}}><span className="color-red topnumbers">24/5</span><br/> Customer Support</h4>
</div>
</div>
</div>
</div>
</section>
{/* <!-- section end --> */}
<br clear="all"/>
{/* <!-- section start -->
<!-- ================ --> */}
<section className="pv-30 clearfix" style={{paddingBottom: "22px"}}>
<div className="container">
<div className="row">
<div className="col-md-7 text-center">
{/* <img alt="Benefits" className="main mt-15" src="../static/redesign/images/bit7.jpg" style={{marginLeft:"-40px"}} /> */}
<div
  style={{
    height: 560,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxSizing: "border-box",
    border: "1px solid #ffffff",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    padding: 0,
    margin: 0,
    width: "100%"
  }}
>
  <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
    <Iframe
      src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
      width="100%"
      height="536px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
    />
  </div>
</div>
</div>
<div className="col-md-5 col-sm-12 text-center-992">
<h2 className="mb-15 mt-0">Invest in your success</h2>
<ul className="list-unstyled" style={{lineHeight: "30px",fontSize:"80%"}}>
<li><i className="fa fa-check color-blue-light mr-5" style={{color:"#42ce7a"}}></i> Trade with higher leverage up to 1:1000</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> 100% Credit Bonus and 15% Recovery bonus</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Stay up-to-date with CSM Wealth’s Economic Calendar</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Learn from our Chief Market Analyst’s Daily Market Analysis</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Plan effectively with our useful Trading Calculators</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Easy online account management portal</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Industry-leading MT4 mobile and desktop platforms</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> One click trading that is ideal for scalpers</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Protect your automated strategies with VPS hosting</li>
<li><i className="fa fa-check color-blue-light mr-5"></i> Join exciting trading competitions</li>
</ul>
</div>
<br clear="all"/><br clear="all"/>
</div>
</div>
</section>
<section className="dark-translucent-bg footer-top" style={{backgroundColor:"#42ce7a"}} id="partner-label">
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="call-to-action">
<div className="row">
<div className="col-sm-5">
<h3 className="font-Playfair">Interested in partnership with us?</h3>
</div>
<div className="col-sm-4">
<p className="mt-10">Join a winning team of professionals that will help you achieve your goals with a variety of tools.</p>
</div>
<div className="col-sm-3 text-right">
<p className="mt-10"><a href="partners/index.html" className="btn btn-animated radius-50 btn-lg btn-gray-transparent">Become a partner<i className="icon-users-1 pl-20"></i></a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* <!-- section start -->
<!-- ================ --> */}
<section className="clearfix light-gray-bg pv-60" style={{fontSize:"80%"}}>
<div className="container">
<div className="row grid-space-10">
<div className="col-sm-6 col-md-3">
<div className="image-box boxhomeshadow style-2 mb-20 bordered light-gray-bg text-center">
<div className="overlay-container">
<img src="../static/redesign/images/1.jpg" alt=""/>
</div>
<div className="body">
<h4 className="font-Playfair">Security of Funds</h4>
<div className="separator"></div>
<p>In CSM Wealth we have taken extraordinary measures in order to ensure a very high level of fund safety as our priority.</p>
<a href="/whyus" className="color-blue"><b>Read More</b></a>
</div>
</div>
</div>
<div className="col-sm-6 col-md-3">
<div className="image-box boxhomeshadow style-2 mb-20 bordered light-gray-bg text-center">
<div className="overlay-container">
<img src="../static/redesign/images/2.jpg" alt=""/>
</div>
<div className="body">
<h4 className="font-Playfair">Education</h4>
<div className="separator"></div>
<p>Our Webinars are presented by highly-experienced industry professionals who will guide you through key trading topics.</p>
<a href="/whyus" className="color-blue"><b>Read More</b></a>
</div>
</div>
</div>
<div className="col-sm-6 col-md-3">
<div className="image-box boxhomeshadow style-2 mb-20 bordered light-gray-bg text-center">
<div className="overlay-container">
<img src="../static/redesign/images/3.jpg" alt=""/>
</div>
<div className="body">
<h4 className="font-Playfair">Become a Partner</h4>
<div className="separator"></div>
<p>The best commission structure and tailor-made products we can help you achieve your revenue expectations.</p>
<a href="/whyus" className="color-blue"><b>Read More</b></a>
</div>
</div>
</div>
<div className="col-sm-6 col-md-3">
<div className="image-box boxhomeshadow style-2 mb-20 bordered text-center">
<div className="overlay-container">
<img src="../static/redesign/images/5.jpg" alt=""/>
</div>
<div className="body light-gray-bg">
<h4 className="font-Playfair">Contests</h4>
<div className="separator"></div>
<p>Check our variety of contests that are currently live and join now and get a chance to win cash prizes & many more.</p>
<a href="/whyus" className="color-blue"><b>Read More</b></a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* <!-- section end -->
<!-- section start -->
<!-- ================ --> */}
<section className="dark-translucent-bg pv-10" style={{background:"linear-gradient(rgba(0,0,0, .8),rgba(0,0,0, .8)),url(../static/redesign/images/bit3.png)",padding:"0px auto",fontSize:"80%",fontWeight:400}} id="home-advantages">
<div className="container">
<div className="row">
<div className="col-md-8 offset-md-2">
{/* <div style={{display:"block",textAlign:"center"}}> */}
<h2 className="text-center font-Playfair" >Why <strong>Choose</strong> Us?</h2>
<div className="separator"></div>
</div>
<div className="col-md-4 ">
<div className="pv-30 feature-box text-center">
<span className="icon default-bg circle" style={{background:"none",width:"auto",height:"auto",color:"green"}}><img src="../static/redesign/images/Client-area.png" alt="" width="80" /></span>
<h3 className="font-Playfair">Personalized Client Area</h3>
<div className="separator clearfix"></div>
<p >Join now and use our latest client area, which uses all the latest technologies, in order to provide you the most easy and efficient way to handle your accounts.</p>
<a className="btn btn-gray-transparent radius-50 btn-animated" href="/">Read More <i className="fa fa-angle-double-right"></i></a>
</div>
</div>
<div className="col-md-4 ">
<div className="pv-30 feature-box text-center">
<span className="icon default-bg circle" style={{background:"none",width:"auto",height:"auto"}}><img src="../static/redesign/images/deposits.png" alt="" width="80"/></span>
<h3 className="font-Playfair">Flexible Deposits</h3>
<div className="separator clearfix"></div>
<p>With a variety of methods to deposit funds makes it easy with no delays to deposit and start your trading since markets are moving fast.</p>
<a className="btn btn-gray-transparent radius-50 btn-animated" href="/whyus">Read More <i className="fa fa-angle-double-right"></i></a>
</div>
</div>
<div className="col-md-4 ">
<div className="pv-30 feature-box text-center">
<span className="icon default-bg circle" style={{background:"none",width:"auto",height:"auto"}}><img src="../static/redesign/images/bonus.png" alt="" width="80"/></span>
<h3 className="font-Playfair">Bonus Offerings</h3>
<div className="separator clearfix"></div>
<p>Open an account and choose the account plan that suits you most. Enjoy the benefits of the bonus that are offered (100% Credit Bonus or 15% Recovery bonus).</p>
<a className="btn btn-gray-transparent radius-50 btn-animated" href="/whyus">Read More <i className="fa fa-angle-double-right"></i></a>
</div>
</div>
</div>
</div>
</section>

{/* <!--================== FOOTER starts here =======================--> */}
<section className="clearfix pv-20 hidden-sm hidden-xs" id="payment-methods" style = {{backgroundColor:"#42ce7a"}}>
<div className="container">
<div className="row" style={{display:"flex",justifyContent:"space-around"}}>
<div className="owl-clients-v1" style={{display:"flex",justifyContent:"space-around",margin:"10px 0px"}}>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/wire-transfer.png" alt="wire-transfer" title="wire-transfer"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/visa.png" alt="visa" title="visa" /></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/visa-electron.png" alt="visa-electron" title="visa-electron"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/mastercard.png" alt="mastercard" title="mastercard"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/maestro.png" alt="maestro" title="maestro"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/skrill.png" alt="skrill" title="skrill"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/neteller.png" alt="neteller" title="neteller"/></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/fasapay.png" alt="fasapay" title="fasapay" style={{border: "1px solid #ddd"}} /></a>
</div>
<div className="item">
<a href="/"><img src="../static/redesign/images/payment-methods/vload1.png" alt="vload" title="vload" style={{border: "1px solid #ddd"}}/></a>
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
</div>
</div>
    )
}

export default Home;