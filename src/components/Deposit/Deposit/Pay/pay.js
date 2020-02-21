import React from 'react';
import Cards from 'react-credit-cards';

import { FormControl, Paper, Grid } from '@material-ui/core';

import classes from './Pay.module.css';
import 'react-credit-cards/es/styles-compiled.css';

import {formatCreditCardNumber, formatCVC, formatExpirationDate, formatFormData,} from './utils';


export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    issuer: '',
    formData: null,
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };
  
  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    return (
        <div className={classes.AppPayment}>
        {/* <Grid container spacing={3} style ={{justifyContent:"center"}}>
          <Grid item xs={12} component = {Paper} elevation={0}> */}
          <div id="PaymentForm" className = {classes.content}>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focused}
          name={name}
          number={number}
          callback={this.handleCallback}
        />
        <form onSubmit = {this.handleSubmit}>
        <div className = "form-grou">
        <input
            type="tel"
            style = {{fontSize : "80%"}}
            name="number"
            placeholder="Card Number"
            // className="form-control"
            pattern="[\d| ]{16,22}"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </div>
        <div className="form-group">
              <input
                type="text"
                style = {{fontSize : "80%"}}
                name="name"
                // className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  style = {{fontSize : "80%"}}
                  // className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  style = {{fontSize : "80%"}}
                  // className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary " style = {{cursor:"pointer", borderRadius:4, boxShadow:"0px", border:"0px"}}>PAY</button>
            </div>
        	
        </form>
      </div>
          {/* </Grid>
        </Grid> */}
        </div>
      
    );
  }
}
