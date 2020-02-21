import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {TextField,FormControl, InputLabel,Select,MenuItem} from "@material-ui/core";
// import Button from "@material-ui/core/ButtonBase"
import Button from '@material-ui/core/Button';

export class PersonalDetails extends Component {

    state = {
        jobError:"",
        ageError:"",
        phoneError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            jobError:"",
            ageError:"",
            phoneError:"",
        };
        if(!this.props.values.job){
            isError = true;
            errors.jobError = "job cannot be empty"
        }
        if(!this.props.values.age){
            isError = true;
            errors.ageError = "age cannot be empty"
        }
        if(!this.props.values.phone){
            isError = true;
            errors.phoneError = "phone Number cannot be empty"
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
                <div style={styles.header}>
                    <h3 style={{color:"#fff"}}>Personal Details</h3>
                </div>
                <div style={styles.content}>
                {/* <form style = {styles.root}> */}
                    <TextField
                    error = {this.state.jobError ? true : false}
                    style={styles.field}
                    helperText={this.state.firstNameError?this.state.firstNameError:"Enter your occupation"}
                    required
                    label= "Job Title"
                    onChange = {handleChange('job')}
                    defaultValue = {values.job} />
                    <br/>

                    <FormControl style = {styles.selector}>
                    <InputLabel id="demo-simple-select-label">Age Range</InputLabel>
                    <Select value={values.age} onChange = {handleChange('age')} error = {this.state.ageError ? true : false}>
                    <MenuItem value="18-25">18-25</MenuItem>
                    <MenuItem value="26-45">26-45</MenuItem>
                    <MenuItem value="45+">45+</MenuItem>
                    </Select>
                </FormControl>

                    <TextField
                    error = {this.state.phoneError ? true : false}
                    style={styles.field}
                    helperText={this.state.firstNameError?this.state.firstNameError:"Enter your phone Number"}
                    required
                    label= "Phone"
                    onChange = {handleChange('phone')}
                    defaultValue = {values.phone} />

                    <div style={styles.buttons}>
                    <Button variant="contained" color="primary" onClick={this.back} style = {{marginTop:"15px"}}>
                        back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.continue} style = {{marginTop:"15px"}}>
                        Continue
                    </Button>
                    </div>
                    </div>
                    {/* </form> */}
            </div>
        )
    }
}

const styles = {
    buttons:{
        display:"flex",
        justifyContent:"space-between",
    },
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
        margin:"2px auto",
        display:"flex",
        flexDirection:"row"
    },
    selector:{
        // margin: 30,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
    minWidth:320
    },
}



export default PersonalDetails
