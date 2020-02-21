import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';


class Uploads extends Component{

    state = {
        image:null,
        files:null
    }

    // continue = (e) => {
    //     e.preventDefault();
    //     const data = new FormData()
    //     data.append('file',this.state.files)
    //     axios.post('http://localhost:8000/users/upload', data,{
    //         headers:{
    //             'content-type': 'multipart/form-data'
    //         }
    //     })
    //     .then(res => {
    //         this.props.nextStep()
    //     })
    //     .catch(error => {
    //         console.log('failed');
    //     })

    continue = (e) => {
        if(this.props.values.photo !== null){
            this.props.nextStep()
        }
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    }

    // handleChange = (e) => {
    //     e.preventDefault()
    //     if (e.target.files && e.target.files[0]) {
    //         let img = e.target.files[0];
    //         this.setState({
    //           image:     ,
    //           file:img
    //         });
    //       }
    // }

    render(){
        const {values, handleChange} = this.props;
        return(
            <div style={styles.root}>
            <div style={styles.header}><h3 style={{color:"#fff"}}>Personal Identification</h3></div>
                <div style={styles.content} >
                <form encType = "multipart/form-data">
                    <p>upload an image of yourself</p>
                    <img src = {(values.photourl)} alt = "userImage" style = {{width:"80px",height:"80px",borderRadius:"50%"}} />
                    <input type="file" name="photo" onChange= {(e) => handleChange(e)} />
                </form>
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
    uploads:{
        display:"flex",
        flexDirection:"row"
    }

}

export default Uploads