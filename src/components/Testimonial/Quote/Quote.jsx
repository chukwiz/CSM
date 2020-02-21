import React, { useState } from "react";
import {css, cx} from "emotion";

const Quote = () => {

    const quotes = {
        0:{
            client:"CATHERINE, NORTH CAROLINA USA - 11TH APRIL, 2019",
            quote:"I wish TransferTel allowed video testimony. Am so happy that i cant really express my happiness on text but am going to say this TransferTel keep it up am so grateful"
        },
        1:{
            client:"KENNETH WEST, AUSTRALIA - 2ND JANUARY, 2018",
            quote:"Some months ago, I got laid off from my job With no options left, I thought my life has come to an end. When I heard of this company from a friend, I decided to give it a shot with the little money I had with me when I confirmed how marvelous it pays,I had to go and get a loan from the bank and money lenders. Now I make good money each week. I can't thank TransferTel enough and more thanks to God"
        },
        2:{
            client:"FRIDAY JEFF, NEW ZEALAND - 23RD AUGSUT,2017 ",
            quote:"I joined TransferTel, guess what? there's not a single week that I do not make profits. And now my life has changed not only because I have made millions with this company, but I’ve also met some of the most WONDERFUL people along the line . Thanks, TransferTel"
        },
        3:{
            client:"AARON GERALD ALBERTA, CANADA - 3RD NOVEMBER, 2014",
            quote:"When I joined TransferTel System, never could have I ever imagined the series of events that would unfold just weeks after making my first investment. I was able to clear my $121,900 debt. Nothing gives joy like being debt free. Now, I own houses in some parts of the states. I still can’t believe this is all really happening…I’m forever grateful to TransferTel."
        },
        4:{
            client:"LIZZY WARDOCK, USA - 3OTH, APRIL 2014",
            quote:"TransferTel System is a life-changing mining company. Honestly, I knew nothing about how crypto trading is done or how one can earn steady profits from investing in a mining company until I joined this company. My first investment was $50,000 and i had weekly earnings that were extremely consistent and the TransferTel has become the main source of income for me."
        },
        5:{
            client:"CLARA BRYDON, ONTARIO CANADA - 3RD OCTOBER, 2011",
            quote:"Forex Forex Forex this is basically all I hear about. I've got so many who have been marketing a lot of forex brokers but I've pretty much seen no results. So finally I convince myself to take a step after my last experience with binary options late last year, I make up my mind to get it over with forex. I got in touch with Stefan and the estimate returns made known to me are amazing. And he says those are not just statistics they're consistent results achieved. So I get in and just like a joke months later I get my payout and it's real. I can't express how grateful I am. Thank you TransferTel , thank you I'm hoping you'd swing by some time so we celebrate over some bottles of Champagne haha . Keep up the good work."
        },
    }


    const [current, setCurrent] = useState(quotes[0])
    const [active, setActive] = useState(0)
    const handleSetClick = (e) => {
        setCurrent(quotes[e.target.getAttribute("data-quote")])
        setActive(e.target.getAttribute("data-quote"))
    }

    return(
      <div className = {css`
      height:300px;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:40px auto;
        max-width:700px;

        p{
            text-align:center;
            margin-bottom:20px;
            color:#575656;
        },
        .content{
            color:color:#4545d4;
        }
        .foot{
            text-transform:lowercase
        }
        
        .height{
            height:100px
        }
      `}>  <div className = "height">
          <p className="content">{current.quote}</p>
          <p className="foot"><em>{current.client}</em></p>
      </div>
          
          <div className = {css`
            display:flex;
            ${'' /* background-color:blue */}
            span{
                height:290px;
                width:20px;
                margin:0 3px;
                display:flex;
                align-items:center;
                justify-content:center;
                cursor:pointer;
            }

            span::before{
                content: "";
                height:6px;
                width:6px;
                background-color:#d4d4d4;
                border-radius:50%;
                transition: background-color 0.3s ease;
            }

            span:hover::before{
                background-color:#45454d;
            }

            span[data-quote="${active}"]::before{
                background-color:#4545d4;
            }    

          `}>
          {Object.keys(quotes).map(index => (
            
            <span
            onClick = {e => handleSetClick(e)}
          data-quote={index}
          key = {index} />
        ) )}
          
          </div>
      </div>
    )
}

export default Quote;
