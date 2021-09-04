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

const elm = [{
        title: "Crypto Currency Deposits",
        content: "Users can deposit cryptocurrencies. The monthly interest is calculated based on the amount of cryptocurrency in their accounts.",
        image: "Crypto",
    },
    {
        title: "P2P Mortgage",
        content: "Users can obtain loans through their digital currency deposits; it is beneficial to enterprises and individuals in the cryptocurrency ecosystem, such as exchanges, project parties, digital investment institutions and etc. They will obtain the liquidity they need and thereby enhance their asset management capabilities.",
        image: "P2P",
    },
    {
        title: "Crypto Currency Trading",
        content: "Cryptocurrency acquisition services support all kinds of settlements between parties and provide direct interpersonal transactions. Institutions or individuals from different countries can buy, sell and exchange other digital currencies or fiat currencies (such as the US dollar).",
        image: "trading",
    },
    {
        title: "Cross-border Payment Transfer",
        content: "Blockchain technology is used to transfer capital. The fee of digital currency payment is the lowest and the transaction is carried out in real-time.",
        image: "Cross",
    },
    {
        title: "Forex Investment Trading",
        content: "Users directly enter the interbank foreign exchange market, process orders and trade them on the market without any intermediaries. It enhances the asset security and further reduces transaction cost and increase trading efficiency.",
        image: "Forex",
    },
    {
        title: "Crypto Currency Exchange",
        content: "The world's first tokenized stock transaction platform allows all investors to invest in cryptocurrency and enjoy easier and safer digital asset appreciation. 4 major cryptocurrencies are now accepted: Bitcoin, Ethereum, Tether, Litecoin.",
        image: "exchange",
    },
];

function Component_4() {
    return ( <
        div id = "d34dcf" >
        <
        Container >
        <
        Grid container > {
            elm.map((item, index) => ( <
                Grid item className = "p-5"
                xs = {
                    12
                }
                sm = {
                    6
                }
                md = {
                    4
                }
                key = {
                    index
                } >
                <
                Paper >
                <
                Avatar src = {
                    `${S3_URL}/${item.image}.png`
                }
                style = {
                    {
                        height: 50,
                        width: 50,
                        margin: "auto",
                        marginBottom: 30,
                    }
                }
                className = "hvr-float-shadow" /
                >
                <
                Typography variant = "h5"
                style = {
                    {
                        textAlign: "center",
                        marginBottom: 20
                    }
                } >
                {
                    item.title
                } <
                /Typography> <
                p > {
                    item.content
                } < /p> <
                /Paper> <
                /Grid>
            ))
        } <
        /Grid> <
        /Container> <
        /div>
    );
}

export default Component_4;