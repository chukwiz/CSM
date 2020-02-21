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

import Iframe from 'react-iframe'

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
  root:{
    // width:"auto"
  }
});

function createData(coin, value, change) {
  return { coin, value, change };
}

const rows = [
  createData('BTC', "$8,870", 0.06),
  createData('ETH', "$2,998", 9.0),
  createData('LTC', "$8,870", 0.06),
];

export default function CoinMarket() {
  const classes = useStyles();

  return (

<div className={classes.root}>
  {/* <Grid item spacing={3}> */}
  {/* <Grid item> */}
  <div
  style={{
    height: 270,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxSizing: "border-box",
    // border: "1px solid #56667F",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    boxShadow: "inset 0 -20px 0 0 #56667F",
    padding: 0,
    margin: 0,
    width: "100%"
  }}
>
  <div style={{ height: "100%", padding: 0, margin: 0, width: "100%" }}>
    <Iframe
      src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=10&pref_coin_id=1505&graph=yes"
      width="100%"
      height="100%"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0 }}
      title="i"
    />
  </div>
</div>;

  {/* </Grid> */}
  {/* </Grid> */}
</div>
  );
}
