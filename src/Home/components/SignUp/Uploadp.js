import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { css } from 'emotion'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)


class Uploadd extends Component{

    state = {
        image:null,
        // docError:""
    }

    continue = (e) => {
        e.preventDefault();
        if(this.props.values.photo !== null && this.props.values.documents !== null){
            this.props.nextStep()
        }
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    }

    submit = (e) => {
        if(this.props.values.documents !== null){
            this.props.submit()
        }
    }


    render(){
        const {values, handleChange} = this.props
        
        return(
            <div style={styles.root}>
            <div style={styles.header}><h3 style={{color:"#fff"}}>Personal Identification</h3></div>
                <div style={styles.content} >
            <div>
            <form encType = "multipart/form-data">
                {/* {this.state.docError?<p style={{color:"red"}}>{this.state.docError}</p>:""} */}
                <p>Upload a clear photo of your driver's license or government Id</p>
                <img src = {values.documentsurl} alt = "drivers license" style = {{width:"80px",height:"80px",borderRadius:"50%"}} />
                <input type="file" name="file" onChange= {(e) => handleChange(e)} />
            </form>
            </div>
            <div style={styles.buttons}>
                    <Button variant="contained" color="primary" onClick={this.back} style = {{marginTop:"15px"}}>
                        back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.submit} style = {{marginTop:"15px"}}>
                        Submit
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
}

export default Uploadd