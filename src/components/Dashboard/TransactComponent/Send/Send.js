import React from 'react';
import Paper from '@material-ui/core/Paper';
import {TextField,FormControl, InputLabel,Select,MenuItem} from "@material-ui/core";
import classes from './Send.module.css';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';




const Send = () => {
  const [currency, setCurrency] = React.useState('');

  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleValueChange = event => {
    setValue(event.target.value)
  }

    return (
      <div className={classes.root1}>
        <Paper variant="outlined" square style = {{width:"100%"}}>
        <div className={classes.root} noValidate autoComplete="off">
        <div className = {classes.Title}>
        <h3>Make a deposit</h3>
        </div>
      <div className = {classes.content}>
      <FormControl style ={styles.selector}>
                    <InputLabel id="demo-simple-select-label">Choose Cryptocurrency</InputLabel>
                    <Select value={currency} onChange = {handleChange}>
                    <MenuItem value="BTC">BTC</MenuItem>
                    <MenuItem value="ETH">ETH</MenuItem>
                    <MenuItem value="LTC">LTC</MenuItem>
                    </Select>
                </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        
        <TextField
          value = {value}
          onChange = {handleValueChange}
          label="Amount"
          size = "small"
          helperText="Choose Cryptocurrency Amount"
          margin = "normal"
        />
        </FormControl>
        
      </div>
    </div>
    <div className = {classes.footer}>
    <p>You will pay approximately $28900. Click the button below to proceed</p>
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
    );
}

const styles = {
  selector:{
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
    minWidth:220
},
}

export default Send;