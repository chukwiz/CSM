import React,{useState} from 'react';
import {Link,Route} from 'react-router-dom';

// 
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/AddToHomeScreenTwoTone';
import FavoriteIcon from '@material-ui/icons/DeveloperMode';
import CreditCard from '@material-ui/icons/CreditCard';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Button, ButtonGroup} from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Pay from './Pay/pay';

import classes from './Deposit.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: 500,
  // },
}));

// 

const Deposit = () => {

  // const classes = useStyles();
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div >
      <Grid container spacing={3} style={{justifyContent:"center"}}>
        <Grid item xs={12} md={9} >
          <Paper className={classes.paper} elevation = {1}>
          <div className = {classes.heading}>SELECT MODE OF PAYMENT</div>
          <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PhoneIcon />} label="WIRE TRANSFER" />
        <Tab icon={<FavoriteIcon />} label="BITCOIN TRANSFER" />
        <Tab icon={<CreditCard />} label="DEBIT CARD" />
      </Tabs>
      <TabPanel value={value} index={0} >
          <BankWire />
        </TabPanel>
        <TabPanel value={value} index={1} >
          <Bitcoin />
        </TabPanel>
        <TabPanel value={value} index={2} >
          <Pay />
        </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Deposit;

const BankWire = () => {

  const [currency, setCurrency] = React.useState('');

  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleValueChange = event => {
    setValue(event.target.value)
  }

  return(
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
              <div className = {classes.footer}>
              <p>You will pay approximately $28900. Click the button below to proceed</p>
              <Button
                  onClick={''}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Proceed
                </Button>
                </div>
            </div>
            
  )
}

const styles = {
  selector:{
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
    minWidth:220
}
}

const Bitcoin = () => {
  
  const [copySuccess, setCopySuccess] = useState('Copy');
  const [textToCopy,setTextToCopy] = useState('89488839020889579797997549797065708480568780');
  const [id, setId] = useState('');
  const copyToClipboard = (e) => {
    var textField = document.createElement('textarea')
    textField.innerText = textToCopy
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    setCopySuccess('Copied');
  }

  const submitId = () => {

  }

  const IdChange = (e) => {
    setId(e.target.value)
  }

  return(
    <div>
      <ButtonGroup color="primary" aria-label="outlined secondary button group">
      <TextField
          disabled
          id="filled-disabled"
          defaultValue={textToCopy}
          variant="filled"
        />
        <Button onClick = {copyToClipboard}>{copySuccess}</Button>
      </ButtonGroup>
      <div>
        <p style = {{fontWeight:400, fontSize:"80%"}}>Enter your transaction Id for confirmation after payment has been made to credit your account</p>
        <ButtonGroup color="success">
        <TextField id="filled-search" label="Id" variant="filled" />
        <Button onClick = {submitId} variant="contained" disableElevation>Submit</Button>
        </ButtonGroup>

      </div>
    </div>
  )
}

{/* <div className = {classes.header}>
          <h3>Deposit</h3>
          </div>
          <div>Long Talk</div>
          <div className = {classes.content}>
          <form className={classes.nine} noValidate autoComplete="off">
            <div className = {classes.Title}>
             <h3>Make a deposit</h3>
            </div>
                <div className = {classes.content}>
                  <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Crypto Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={currency}
                    onChange={handleChange}
                    labelWidth= {labelWidth}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>BTC</MenuItem>
                    <MenuItem value={20}>ETH</MenuItem>
                    <MenuItem value={30}>LTC</MenuItem>
                  </Select>
                </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                  <TextField
                    id="outlined-textarea"
                    label="Amount"
                    size = "small"
                    placeholder="Choose Cryptocurrency Amount"
                    margin = "normal"
                    variant="outlined"
                  />
                  </FormControl>
                  
                </div>
              </form>
            </div>
            <div className = {classes.footer}>
              <p>You will pay approximately $28900. Click the button below to proceed</p>
              <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Proceed
                </Button>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Make a Deposit</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you agree to our terms and conditions of making a Cryptocurrency deposit?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            <Link to="/deposit/pay" > I Agree </Link>
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
              </div> */}