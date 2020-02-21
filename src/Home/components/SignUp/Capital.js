import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {TextField,FormControl,InputLabel, Select} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

// import Button from "@material-ui/core/ButtonBase"
import Button from '@material-ui/core/Button';

export class Capital extends Component {
    state = {
        accreditedError:"",
        hearaboutError:"",
        capitalError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            accreditedError:"",
            hearaboutError:"",
            capitalError:"",
        };
        if(!this.props.values.accredited){
            isError = true;
            errors.accreditedError = "field cannot be empty"
        }
        if(!this.props.values.hearabout){
            isError = true;
            errors.hearaboutError = "field cannot be empty"
        }
        if(!this.props.values.capital){
            isError = true;
            errors.hearaboutError = "field cannot be empty"
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
        const options=[{one:"one"}]
        const {values, handleChange} = this.props;
        return (
            <div style={styles.root}>
            <div style={styles.header}><h3 style={{color:"#fff"}}>Investment Information</h3></div>
                <div style={styles.content} >
        <FormControl style = {styles.selector}>
            <InputLabel id="demo-simple-select-label">Accredited Investor Status</InputLabel>
            <Select value={values.accredited} onChange = {handleChange('accredited')} width="80%" autoWidth={true} error = {this.state.accreditedError ? true : false}>
            <MenuItem value="Non-accredited">Non-accredited</MenuItem>
            <MenuItem value="Accredited Investor($1m + networth)">Accredited Investor($1m + networth)</MenuItem>
            <MenuItem value="Qualified Client($2.1m + networth)">Qualified Client($2.1m + networth)</MenuItem>
            <MenuItem value="Qualified Purchaser(5m + networth)">Qualified Purchaser(5m + networth)</MenuItem>
            </Select>
            </FormControl>

            <FormControl style = {styles.selector}>
            <InputLabel id="demo-simple-select-label">How did you hear about us?</InputLabel>
            <Select value={values.hearabout} onChange = {handleChange('hearabout')} autoWidth={true} error = {this.state.hearaboutError ? true : false}>
            <MenuItem value="Online Research">Online Research</MenuItem>
            <MenuItem value="CSM Partner">CSM Partner</MenuItem>
            <MenuItem value="External Referral">External Referral</MenuItem>
            <MenuItem value="Conference/Event">Conference/Event</MenuItem>
            <MenuItem value="Press">Press</MenuItem>
            </Select>
            </FormControl>

            <FormControl style = {styles.selector}>
            <InputLabel id="demo-simple-select-label">How much capital are you willing to invest</InputLabel>
            <Select value={values.capital} onChange = {handleChange('capital')} autoWidth={true} error = {this.state.capitalError ? true : false}>
            <MenuItem value="$100,000 - $199,000">$100,000 - $199,000</MenuItem>
            <MenuItem value="$200,000 - $499,000">$200,000 - $499,000</MenuItem>
            <MenuItem value="$500,000 - $999,000">$500,000 - $999,000</MenuItem>
            </Select>
            <br />
                    <div style={styles.buttons}>
                        <Button variant="contained" color="primary" onClick={this.back} style = {{marginTop:"15px"}}>
                                back
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.continue} style = {{marginTop:"15px"}}>
                                Continue
                        </Button>
                    </div> 
            </FormControl>
                    
            </div>
            </div>
        )
    }
}

const styles = {
    field:{
        width:"100%",
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
        // margin:"2px auto",
        display:"flex",
        flexDirection:"column"
    },

    selector:{
        margin: 30,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
    minWidth:320
    },
    buttons:{
        display:"flex",
        justifyContent:"space-between",
    },
}


export default Capital