import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Iframe from "react-iframe";


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

const Chart = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Grid container spacing={3} style = {{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
        <Grid item xs={12} md={6}>
        <div
  style={{
    height: 560,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxSizing: "border-box",
    border: "1px solid #ffffff",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    padding: 0,
    margin: 0,
    width: "100%"
  }}
>
  <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
    <Iframe
      src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
      width="100%"
      height="536px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
    />
  </div>
</div>;

        </Grid>
        <Grid>
        <div
  style={{
    width: "250",
    height: 335,
    backgroundColor: "#FAFAFA",
    overflow: "hidden",
    boxSizing: "border-box",
    border: "1px solid #ffffff",
    borderRadius: 4,
    textAlign: "right",
    lineHeight: 14,
    blockSize: 335,
    fontSize: 12,
    fontFeatureSettings: "normal",
    textSizeAdjust: "100%",
    margin: 0,
    padding: 0
  }}
>
  <div style={{ height: 315, padding: 0, margin: 0, width: "100%" }}>
  <h5 style = {{textTransform:"uppercase", fontWeight:400}}>Crypto Currency Converter</h5>
    <Iframe
      src="https://widget.coinlib.io/widget?type=converter&theme=light"
      width={250}
      height="310px"
      scrolling="auto"
      marginWidth={0}
      marginHeight={0}
      frameBorder={0}
      border={0}
      style={{ border: 0, margin: 0, padding: 0 }}
    />
  </div>
</div>;

        </Grid>
        </Grid>
        </div>
    )
}

export default Chart