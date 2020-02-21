import React, {Component} from 'react';

import jwt_decode from 'jwt-decode';

import Aux from '../Hoc/Auxilliary/Auxilliary';
import Sidebar from '../Sidebar/Sidebar'
import routes from '../../routes';
import {profile} from '../../Home/components/UserFunctions/UserFunctions';
import JwtDecode from 'jwt-decode';
import axios from 'axios';


class Layout extends Component {
  state = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        job:"",
        age:"",
        phone:"",
        city:"",
        usInvestor:"",
        investorType:"",
        accredited:"",
        hearabout:"",
        capital:"",
        fundsType:"",
        liketoKnow:"",
        bitaddress:"",
        photo:null,
        photourl:"",
        documents:null,
        userData:{}
  }

  componentDidMount(){
    const auth = localStorage.getItem("auth");
    profile(auth)
    .then((res) => {
      this.setState({userData:res})
      console.log(res)
    })
  }

  render(){

    const {userData} = this.state
    const values = {userData}
    console.log(this.state.userData)
    return(
            <Aux>
                <Sidebar 
                routes = {routes}
                values = {values} />
               
            </Aux>
    )
  }
}
export default Layout;