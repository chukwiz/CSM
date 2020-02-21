import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './Home/views/Home/Home';
import TradingTools from './Home/views/TradingTools/TradingTools'; 
import AboutUs from './Home/views/About/About'; 
import ContactUs from './Home/views/ContactUs/ContactUs'; 
import Faq from './Home/views/Faq/Faq'; 
import Forex from './Home/views/Forex/Forex'; 
import SignUp from './Home/views/SignUp/SignUp'; 
import Testimony from './Home/views/Testimony/Testimony'; 
import WhyUs from './Home/views/WhyUs/WhyUs'; 
import Crypto from './Home/views/Crypto/Crypto';
import Nfp from './Home/views/Nfp/Nfp'; 
import Retirement from './Home/views/Retirement/Retirement';
import Login from './Home/views/SignIn/SignIn';
import Team from './Home/views/Team/Team';

function App() {
  return (
    <div>
      <Switch>
        <Route path = "/" exact component= {Home} />
        <Route path = "/login" exact component= {Login} />
        <Route path = "/crypto" exact component = {Crypto} />
        <Route path = "/tradingtools" exact component = {TradingTools} />
        <Route path = "/aboutus" exact component = {AboutUs} />
        <Route path = "/contactus" exact component = {ContactUs} />
        <Route path = "/faq" exact component = {Faq} />
        <Route path = "/forex" exact component = {Forex} />
        <Route path = "/signup" exact component = {SignUp} />
        <Route path = "/testimony" exact component = {Testimony} />
        <Route path = "/whyus" exact component = {WhyUs} />
        <Route path = "/nfp" exact component = {Nfp} />
        <Route path = "/retirement" exact component = {Retirement} />
        <Route path = "/ourteam" exact component = {Team} />
        <Route path = "/dashboard" children={props => <Layout {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;