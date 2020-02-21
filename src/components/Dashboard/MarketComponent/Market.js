import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CoinMarket from './CoinMarket.js';

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  root:{
    flexGrow:1,
    marginTop:"20px",
    width:"100%",
  }
});

function createData(date, coin, amount, price, status) {
  return { date, coin, amount, price, status };
}

const rows = [
  createData('11/05/20', "BTC", 0.9, "$4,567", "completed"),
  createData('11/05/20', "ETH", 9.0, "$4,567", "completed"),
  createData('11/05/20', "LTC", 16.0, "$4,567", "completed"),
];

export default function AcccessibleTable() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid container className={classes.root} spacing={2}>
    <Grid item md={6} xs = {12}>
  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Coin</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={new Date().getTime()}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.coin}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid  item sm={12} md={6}  style = {{alignItems:"center", width:"auto"}}>
      <CoinMarket />
    </Grid>

    </Grid>
    
    
    
    

    // </div>
    
  );
}
