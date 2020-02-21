import React, { Component } from 'react'
import {TextField,FormControl,Button} from "@material-ui/core"

export class Bitcoin extends Component {

    state = {
        bitcoinError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            bitcoinError:"",
        };
        if(!this.props.values.bitaddress){
            isError = true;
            errors.bitcoinError = "field cannot be empty"
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
            <div style={styles.header}><h3 style={{color:"#fff"}}>Wallet Information</h3></div>
                <div style={styles.content} >
            <FormControl>
            <p>We require bitcoin addresses from our customers to facilitate smoth processing of funds and profit withdrawal.</p>
                    <TextField
                    error = {this.state.bitcoinError ? true : false}
                    style={styles.field}
                    helperText={this.state.bitcoinError?this.state.bitcoinError:"Enter your Bitcoin Address"}
                    required
                    label= "Bitcoin Address"
                    onChange = {handleChange('bitaddress')}
                    defaultValue = {values.bitaddress} />

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
        minwidth:150,
    },
    buttons:{
        display:"flex",
        justifyContent:"space-between",
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
}

export default Bitcoin
