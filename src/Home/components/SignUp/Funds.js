import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import {MenuItem,FormControl,InputLabel,Select} from '@material-ui/core';

// import Button from "@material-ui/core/ButtonBase"
import Button from '@material-ui/core/Button';

export class Funds extends Component {
    state = {
        fundsError:"",
        liketoknowError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            fundsError:"",
            liketoknowError:"",
        };
        if(!this.props.values.fundsType){
            isError = true;
            errors.fundsError = "field cannot be empty"
        }
        if(!this.props.values.liketoKnow){
            isError = true;
            errors.liketoknowError = "field cannot be empty"
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
            <div style={styles.header}><h3 style={{color:"#fff"}}>Funds Type</h3></div>
                <div style={styles.content} >
                <FormControl style = {styles.selector}>
                    <InputLabel id="demo-simple-select-label">Which Funds are you interested in</InputLabel>
                    <Select value={values.fundsType} onChange = {handleChange('fundsType')} error = {this.state.fundsError ? true : false}>
                    <MenuItem value="Family Office">Family Office</MenuItem>
                    <MenuItem value="High Net-Worth Individual">High Net-Worth Individual</MenuItem>
                    <MenuItem value="Registered Investment Advisor">Registered Investment Advisor</MenuItem>
                    <MenuItem value="Hedge/Venture Fund">Hedge/Venture Fund</MenuItem>
                    <MenuItem value="Pension Fund">Pension Fund</MenuItem>
                    <MenuItem value="Other Institutional Investor">Other Institutional Investor</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style = {styles.selector}>
                <TextField
                error = {this.state.liketoknowError ? true : false}
                    style={styles.field}
                    helperText={this.state.liketoknowError?this.state.liketoknowError:"Tell us what you would love to know"}
                // placeholder="Tell us what you would love to know"
                multiline={true}
                // rows={2}
                // rowsMax={4}
                onChange={handleChange('liketoKnow')}
                defaultValue = {values.liketoKnow}
                />
                </FormControl>
                
                    <br />
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
    field:{
        width:"100%",
        margin:"20px 0"
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
    selector:{
    margin:"30px 0",
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


export default Funds