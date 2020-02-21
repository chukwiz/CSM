import React, { Component } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

export class UserDetails extends Component {

    state={
        password:"",
        showPassword:false,
        firstNameError:"",
        lastNameError:"",
        emailError:"",
        passwordError:"",
    }

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError:"",
        lastNameError:"",
        emailError:"",
        passwordError:"",
        };
        if(!this.props.values.firstName){
            isError = true;
            errors.firstNameError = "first Name cannot be empty"
        }
        if(this.props.values.email.indexOf("@") === -1){
            isError = true;
            errors.emailError = "Please enter a valid email"
        }
        if(!this.props.values.lastName){
            isError = true;
            errors.lastNameError = "last Name cannot be empty"
        }
        if(this.props.values.password.length < 6){
            isError = true;
            errors.passwordError = "Password cannot be less than 6 characters"
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

    handleClickShowPassword = () => {
        this.setState({showPassword:!this.state.showPassword})
    };
  
    handleMouseDownPassword = event => {
      event.preventDefault();
    };

    render() {
        const {values, handleChange} = this.props;

        // const handleClickShowPassword = () => {
        //     setValues({ ...values, showPassword: !values.showPassword });
        //   };

          
        return (
            <div style = {styles.root}>
            <div style={styles.header}>
                <h3 style={{color:"#fff"}}>User Details</h3>
            </div>
            <div style={styles.content}>
                <div style={styles.container}>
                <TextField
                error = {this.state.firstNameError ? true : false}
                    style={styles.field}
                    helperText={this.state.firstNameError?this.state.firstNameError:"Enter your first name"}
                    required
                    label= "FirstName"
                    onChange = {handleChange('firstName')}
                    defaultValue = {values.firstName} />

                <TextField
                error = {this.state.lastNameError ? true : false}
                    style={styles.field}
                    helperText={this.state.lastNameError?this.state.lastNameError:"Enter your last name"}
                    required
                    label= "lastName"
                    onChange = {handleChange('lastName')}
                    defaultValue = {values.lastName} />
                </div>
                    

                    <br />
                    <TextField
                    error = {this.state.emailError ? true : false}
                    style={styles.field}
                    helperText={this.state.emailError?this.state.emailError:"Enter your Email"}
                    required
                    label= "email"
                    onChange = {handleChange('email')}
                    defaultValue = {values.email} />
                    <br/>
                    <br/>
                    <InputLabel htmlFor="standard-adornment-password">{this.state.passwordError?this.state.passwordError:"Password"}</InputLabel>
                        <Input
                        error = {this.state.passwordError ? true : false}
                            style={styles.field}
                            id="standard-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange = {handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                                >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />

                    {/* <TextField
                    style={styles.field}
                    helperText="Enter password"
                    required
                    label= "password"
                    onChange = {handleChange('password')}
                    defaultValue = {values.password} /> */}

                    <div style = {{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" color="primary" onClick={this.continue} style = {{marginTop:"15px",textAlign:"center"}}>
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
        // marginRight:"10px"
        
    },

    root:{
        // width:600,
        // minWidth:200,
        boxShadow: "0 0 20px #00000033",
    },

    header:{
        padding:20,
        borderBottom:"1px solid #ccc",
        backgroundColor:"#42ce7a",
        textAlign:"center",
    },

    content:{
        padding:20,
    },

    container:{
        // margin:"2px auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
}

export default UserDetails