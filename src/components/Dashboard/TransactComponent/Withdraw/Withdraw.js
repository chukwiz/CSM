import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import classes from './Withdraw.module.css';
import Icon from '@material-ui/core/Icon';



const Withdraw = () => {

    const [value,setValue] = React.useState(0)

    const handleChange = (event) => {
      setValue(event.target.value)
    }

    return (
      <div className={classes.root1}>
        <Paper variant="outlined" square style = {{width:"100%"}}>
        <div className={classes.root} noValidate autoComplete="off">
        <div className = {classes.Title}>
        <h3>Withdraw</h3>
        </div>
      <div className = {classes.content}>
      <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={value}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        
        
      </div>
    </div>
    <div className = {classes.footer}>
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Proceed
      </Button>
    </div>
        </Paper>
      </div>
      // 
      // <div className={classes.root}>
      // <Grid container spacing={3} style={{justifyContent:"center"}}>
      //   <Grid item xs={9}>
      //   <Paper variant="outlined" square style = {{width : "100%"}} >
      //       <h4 style = {{textAlign:"center",fontWeight:200, borderBottom:"0.5px solid #c4c4c4"}} >Withdraw</h4>
      //       <div>
            
      //       </div>
      //       <div style ={styles.footer}>
      //       <Button
      //             onClick={''}
      //             variant="contained"
      //             color="primary"
      //             className={classes.button}
      //           >
      //             Proceed
      //           </Button>
      //       </div>
            
      //   </Paper>
      //   </Grid>
      // </Grid>
      // </div>
      
    );
}

const styles = {
  footer:{
    textAlign: "center",
    marginBottom: 25,
}
}

export default Withdraw;