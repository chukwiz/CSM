import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        // padding:"5px",
          // height: 200,
          // width: "100%",
          // borderRadius:"0%",
          // display:"flex",
          // flexDirection:"column",
          // color:"#575757",
      },
      control: {
        padding: theme.spacing(2),
      }, 
    //   balanceContent : {
    //     height:"100%",
    //     width:"100%"
    //   },
      balanceTopContent : {
        padding:"10px 20px 10px 20px",
          display:"flex", 
          flexDirection:"row", 
          alignItems:"center",
          borderBottom:"1px solid #e4e4e4",
          justifyContent:"space-between",
          color:"#7a797e"
      },
      balanceBottomContent : {
        width:"100%",
        display:"flex", 
        flexDirection:"column", 
        textAlign:"center",
        justifyContent:"center",
        height:"100%",
        padding:"20px",
        color:"#252525",
    },
    Icon : {
        fontSize:"150%",
    }
  }));

const Balance = (props) => {
    const classes = useStyles({color:props.color});
    return(
        <Paper className={classes.paper} elevation = {0} >
        <div className = {classes.balanceContent} >
        <div className = {classes.balanceTopContent}>
        <h4 style = {{fontWeight:"400"}}>{props.name}</h4>
        <props.icon className = {classes.Icon} />
        </div>
        <div className = {classes.balanceBottomContent}>
            <Typography style = {{ fontSize : "220%", margin:"10px", fontWeight:"200",wordWrap:"break-word"}}>
            $18,000
            </Typography>
        </div>
        </div>
        </Paper>
    )
}

export default Balance;