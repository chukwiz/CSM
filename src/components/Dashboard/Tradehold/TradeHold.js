import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles(theme => ({
    close: {
      padding: theme.spacing(0.5),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
  }));

const TradeHold =() => {

    const queueRef = React.useRef([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const processQueue = () => {
    if (queueRef.current.length > 0) {
      setMessageInfo(queueRef.current.shift());
      setOpen(true);
    }
  };

  const handleClick = message => () => {
    queueRef.current.push({
      message,
      key: new Date().getTime(),
    });

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    processQueue();
  };

  const classes = useStyles();

    return(
        <div style = {{textAlign:"center", margin:"60px"}} >
        <Grid container justify="center">
        <Grid item xs={6}>
          <Button variant="outlined" color="primary" onClick={handleClick('You are currently in trading mode')} >TRADE</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" >HOLD</Button>
        </Grid>
        <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
      </Grid>

        {/* <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom-Right
        </Button>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
          message="I love snacks"
        /> */}
      </div>
  
    )
}

export default TradeHold

{/* <Grid container justify="center">
        <Grid item xs={6}>
          <Button variant="outlined" color="primary" onClick={handleClick('bottom')} >TRADE</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" onClick={handleClick('bottom')}>HOLD</Button>
        </Grid>
      </Grid> */}