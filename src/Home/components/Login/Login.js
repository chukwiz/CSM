import React,{Component} from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Login.css';
import {login} from '../UserFunctions/UserFunctions';
import history from '../../../history';


class Login extends Component{

state = {
  email:"",
  password:"",
  auth:"",
  loading:false
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
  e.preventDefault()

  const User = {
    email:this.state.email,
    password:this.state.password
  }
  this.setState({loading:true})

  login(User)
  .then(res => {
    if(res) {
      this.setState({loading:false})
      localStorage.setItem('auth', res.headers['x-auth'] )
      this.setState({auth:res.headers['x-auth']})
      history.push('/dashboard')
    }
  })
}


    render(){
        return(
            <div className = "body">
  {/* <div className="background" />
  <div className="background2" /> */}
      <Backdrop style={{zIndex:"10000000", color:"#fff"}} open ={this.state.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
  <div className="loginForm">
    <hgroup>
      <h1>Please, Login</h1>
    </hgroup>
    <form onSubmit = {this.onSubmit}>
      <div className="group">
      <label htmlFor = "email" >Username</label>
        <input type="email" className="" name="email" value = {this.state.email} onChange = {this.onChange} />
        <span className="highlight" />
        <span className="bar" />
        
      </div>
      <div className="group">
      <label htmlFor = "password">Password</label>
        <input type="password" name="password" value = {this.state.password} onChange= {this.onChange} />
        <span className="highlight" />
        <span className="bar" />
        
      </div>
      <button type="submit" className="buttonui ">
        {" "}
        <span>Login</span>
        <div className="ripples buttonRipples">
          <span className="ripplesCircle" />
        </div>
      </button>
    </form>
    <div className="powered">
      copyright <a href="/">csmwealth</a>
    </div>
  </div>
</div>
        )
    }
}

export default Login;