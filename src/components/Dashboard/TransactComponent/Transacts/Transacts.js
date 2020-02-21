import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Send from '../Send/Send';
import Withdraw from '../Withdraw/Withdraw';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function Transact() {
    
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3} style = {{marginTop:"20px"}}>
            <Send />
            <Withdraw />
        </Grid>
      </div>
    );
  }