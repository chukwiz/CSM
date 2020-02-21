import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Button,Select,FormControl,InputLabel} from '@material-ui/core';

export class InvestorDetails extends Component {
    state={
        selected:"Yes",
        data:[{value:"Yes"},{value:"No"}],
        booly:"",
        InvestorType:"",
        cityError:"",
        usinvestorError:"",
        investortypeError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            cityError:"",
            usinvestorError:"",
            investortypeError:"",
        };
        if(!this.props.values.city){
            isError = true;
            errors.cityError = "This field cannot be empty"
        }
        if(!this.props.values.usInvestor){
            isError = true;
            errors.usinvestorError = "This field cannot be empty"
        }
        if(!this.props.values.investorType){
            isError = true;
            errors.investortypeError = "This field cannot be empty"
        }
        // if(isError){
            this.setState({
                ...this.state,
                ...errors
            })
        // }

        return isError
    }

    continue = (e) => {
        e.preventDefault();
        const err = this.validate()
        if (!err) {
            this.props.nextStep()
        }
        
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
              
            
        const {values, handleChange} = this.props;
        return (
            <div style={styles.root}>
            <div style={styles.header}><h3 style={{color:"#fff"}}>Basic Investor Details</h3></div>
            <div style = {styles.content}>
                    <TextField
                    error = {this.state.cityError ? true : false}
                    style={styles.field}
                    helperText={this.state.cityError?this.state.cityError:"Enter your city"}
                    required
                    onChange = {handleChange('city')}
                    defaultValue = {values.city}
                    label= "City"/>
                    
                    <br/>

                    <FormControl style = {styles.selector}>
                    <InputLabel id="demo-simple-select-label">Are you a Us Investor?</InputLabel>
                    <Select value={values.usInvestor} onChange = {handleChange('usInvestor')} error = {this.state.usinvestorError ? true : false} >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    </Select>
                    </FormControl>
                    <br />

                    <FormControl style = {styles.selector}>
                    <InputLabel id="demo-simple-select-label">Investor Type</InputLabel>
                    <Select value={values.investorType} onChange = {handleChange('investorType')} error = {this.state.investortypeError ? true : false}>
                    <MenuItem value="Family Office">Family Office</MenuItem>
                    <MenuItem value="High Net-Worth Individual">High Net-Worth Individual</MenuItem>
                    <MenuItem value="Registered Investment Advisor">Registered Investment Advisor</MenuItem>
                    <MenuItem value="Hedge/Venture Fund">Hedge/Venture Fund</MenuItem>
                    <MenuItem value="Pension Fund">Pension Fund</MenuItem>
                    <MenuItem value="Other Institutional Investor">Other Institutional Investor</MenuItem>
                    </Select>
                    </FormControl>

            <div style={styles.buttons}>
                <Button variant="contained" color="primary" onClick={this.back} style = {{marginTop:"15px"}}>
                        back
                </Button>
                <Button variant="contained" color="primary" onClick={this.continue} style = {{marginTop:"15px"}}>
                        Continue
                </Button>
            </div>        

            </div>
            </div>
        )
    }
}

const styles = {
    button:{
        margin:15
    },
    buttons:{
        display:"flex",
        justifyContent:"space-between",
    },
    field:{
        width:"100%",
        margin:"0 10px 10px 0"
        
    },
    root:{
        boxShadow: "0 0 20px #00000033",
    },

    header:{
        padding:20,
        borderBottom:"1px solid #ccc",
        backgroundColor:"#42ce7a",
        textAlign:"center"
    },

    content:{
        padding:20,
    },

    container:{
        margin:"2px auto",
        display:"flex",
        flexDirection:"row"
    },
    selector:{
        // margin: 10,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap',
        minWidth:320,
    }
}

export default InvestorDetails