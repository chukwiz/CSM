import React,{Component} from 'react';
import Iframe from 'react-iframe';

class MarketCap extends Component{
  render(){
    return(
      <div style = {{maxHeight:600}}><div
      style={{
        height: 3029,
        backgroundColor: "#FFF",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "1px solid #fff",
        borderRadius: 4,
        textAlign: "right",
        lineHeight: 14,
        fontSize: 12,
        fontFeatureSettings: "normal",
        textSizeAdjust: "100%",
        // boxShadow: "inset 0 -20px 0 0 #262B38",
        padding: 0,
        margin: 0,
        width: "100%"
      }}
    >
      <div style={{ height: 3009, padding: 0, margin: 0, width: "100%" }}>
        <Iframe
          src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=50&pref_coin_id=1505&graph=yes"
          width="100%"
          height="3005px"
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          border={0}
          style={{ border: 0, margin: 0, padding: 0 }}
        />
      </div>>
    </div>;
    </div>
    )
  }
}

export default MarketCap