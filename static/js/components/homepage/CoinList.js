import {
    Avatar,
    Container,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import React from "react";
import {
    S3_URL
} from "../../settings";

const coins = [{
        coin: "btc",
        style: {
            backgroundImage: "linear-gradient(180deg, #ffa639, #f76a1a)",
        },
    },
    {
        coin: "eth",
        style: {
            backgroundImage: "linear-gradient(180deg, #ffa639, #000)",
        },
    },
];

const stakingList = [{
        coin: "BTC",
        apy: "7.5",
        market: 1000000,
        price: 0.35,
        change: 2.2,
        fullName: "Bitcoin",
        link: "https://coinmarketcap.com/currencies/bitcoin/",
    },
    {
        coin: "ETH",
        apy: "7.5",
        market: 1000000,
        price: 0.35,
        change: 2.2,
        fullName: "Ethereum",
        link: "https://coinmarketcap.com/currencies/ethereum/",
    },
    {
        coin: "CPU",
        apy: "7.5",
        market: 1000000,
        price: 0.35,
        change: 2.2,
        fullName: "Cash Pickup Token",
        link: "https://tronscan.org/#/token20/TUymA9PTCWbnAhdFxEHAwQA892p4PbZNPC",
    },
    {
        coin: "USDT",
        apy: "7.5",
        market: 1000000,
        price: 0.35,
        change: 2.2,
        fullName: "Tether",
        link: "https://coinmarketcap.com/currencies/tether/",
    },
    {
        coin: "TRX",
        apy: "7.5",
        market: 1000000,
        price: 0.35,
        change: 2.2,
        fullName: "Tron",
        link: "https://coinmarketcap.com/currencies/tron/",
    },
];

function CoinList() {
    return ( <
        Container className = "mt-100 mb-100" >
        <
        div style = {
            {
                padding: "30px 20px"
            }
        } >
        <
        Typography style = {
            {
                textAlign: "center",
                marginBottom: 50
            }
        }
        variant = "h3" >
        Supported assets <
        /Typography> <
        Grid container style = {
            {
                textAlign: "center"
            }
        }
        justify = "space-evenly" > {
            stakingList.map((item, index) => ( <
                Grid item key = {
                    index
                } >
                <
                a href = {
                    item.link
                }
                target = "_blank" >
                <
                img src = {
                    `${S3_URL}/coins/${item.coin}.png`
                }
                style = {
                    {
                        width: 74,
                        height: 74,
                    }
                }
                /> <
                /a> <
                /Grid>
            ))
        } <
        /Grid> <
        /div> <
        /Container>
    );
}

export default CoinList;