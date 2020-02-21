import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
    root1: {
      flexGrow: 1,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
      button:{
        marginTop:60
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: 200,
      },
  }))

const Withdraw = () => {
    const [amount, setAmount] = React.useState(null)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    handleDialogOpen()

  };
  const handleToggle = () => {
    let inter = Math.floor(Math.random() * 11) + 20;
    console.log(inter)
    setOpen(!open);
    setTimeout(handleClose, inter * 1000)
  }


    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    
    const [openDialog, setDialogOpen] = React.useState(false);

    const handleDialogOpen = () => {
      setDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setDialogOpen(false);
    }

    return (
        <div className={classes.root1}>
      <Grid container spacing={3} style = {{display:"flex",justifyContent:"center"}}>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
          <h6>Enter Withdrawal Amount</h6>

          {/* <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl> */}
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={amount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <Button variant="contained" className = {classes.button} onClick = {handleToggle} >Send Request</Button>
          </Paper>
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An unexpected error has been encountered while processing your request
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}

export default Withdraw;