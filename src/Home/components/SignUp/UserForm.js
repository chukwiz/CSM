import React, { Component } from 'react';

import history from '../../../history';

import {register} from "../UserFunctions/UserFunctions";

import FormUserDetails from "./UserDetails"
import PersonalDetails from "./PersonalDetails"
import InvestorDetails from "./InvestorDetails"
import Capital from "./Capital"
import Funds from "./Funds";
import Bitcoin from "./Bitcoin";
import Uploads from "./Uploads";
import Uploadd from "./Uploadp";

class UserForm extends Component {
    state = {
        step:1,
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
        documentsurl:"",
        finished:null
    }


    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        })
    }

    submit = () => {
        this.setState({finished:true})
        let data = new FormData()
        // userdata.append("file",this.state.photo)
        for(let name in this.state){
            data.append(name,this.state[name])
        }
        register(data)
        // .then(history.push('/login'))
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    handleImageChange =  e => {
        let file = e.target.files[0]
        this.setState({
            photo:file,
            photourl:URL.createObjectURL(file)
        });
    }

    handleDocChange =  e => {
        console.log(e.target.files)
        this.setState({
            documents: e.target.files[0],
            documentsurl:URL.createObjectURL(e.target.files[0])
        });
    }

    render() {
        const {step, firstName,lastName,email,password,job,age,phone,city,usInvestor,investorType,accredited,hearabout,capital,fundsType,liketoKnow,photo,documents,photourl,documentsurl,bitaddress} = this.state;
        const values = {step, firstName,lastName,email,password,job,age,phone,city,usInvestor,investorType,accredited,hearabout,capital,fundsType,liketoKnow,photo,documents,photourl,documentsurl,bitaddress}
        switch(step){
            case 1:
            return(
                <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2:
                return(
                    <PersonalDetails
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    prevStep = {this.prevStep} />
                )

            case 3:
                return(
                    <InvestorDetails
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    prevStep = {this.prevStep} />
                )

            case 4:
                return(
                    <Capital
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    prevStep = {this.prevStep} />
                )

            case 5:
                return(
                    <Funds
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    prevStep = {this.prevStep} />
                )

                

                case 6:
                    return(
                        <Bitcoin
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        prevStep = {this.prevStep} />
                    )

                    case 7:
                        return(
                            <Uploads
                            nextStep = {this.nextStep}
                            handleChange = {this.handleImageChange}
                            values={values}
                            prevStep = {this.prevStep} />
                        )

                    case 8:
                        return(
                            <Uploadd
                            submit = {this.submit}
                            handleChange = {this.handleDocChange}
                            values={values}
                            prevStep = {this.prevStep} />
                        )
                default:
                    return null

        }
    }
}

export default UserForm
