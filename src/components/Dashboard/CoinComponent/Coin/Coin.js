import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


// import classes from './Coin.module.css'

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection:"column",
    height:"200px",
    width:"100%",
    // backgroundColor: "#f1f1f1d7"
    },
    margin:{
        height:"100px",
        borderBottom:"1px solid #e4e4e4",
        display:"flex",
        flexDirection:"row",
        padding:"10px 20px 10px 20px",
        // textAlign:"center",
        // verticalAlign:"middle",
        justifyContent:"space-between"
        // background: (props) => props.color
    },
    image :{
      // flex: 1,
      // width: 50,
      // height: "80%",
      width: "100%",
    height: "auto",
    },

    imgcont:{
      width: 40,
    height: 40,
    borderRadius:"50%",
    border:"1px solid #ccc",
    padding:6,
    alignSelf:"flex-end",
    float:"right",
    resizeMode: 'contain',
    backgroundColor:"#dfdfdf"

    },

    content:{
      height:"100%",
      padding:"20px",
      color:"#252525",
      textAlign:"center"
    }
  }));

const Coin = (props) => {
const classes = useStyles({color: props.color});
return (
<Paper elevation={0} className = {classes.root}>
<div className = {classes.margin}>
  <div style = {{color:"#505050" ,display:"inline", fontWeight:"200"}} >
  <h4 style ={{margin:0, fontWeight:400,color:"#808080d7"}}> {props.name} </h4>
  {/* <p style ={{margin:0}}>sfd</p> */}
  </div>
  <div className = {classes.imgcont}>
  <img className = {classes.image} src = {props.icon} alt = "bitcoin" />
  </div>
  
</div>
<div className = {classes.content} style = {{}}>
{props.children}
</div>
</Paper>
)         
}

export default Coin;
