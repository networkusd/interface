import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import React from "react";
import {
    Divider
} from "semantic-ui-react";
import {
    S3_URL
} from "../../settings";

const elm = [{
        image: "forbes-logo.png",
        url: "https://www.forbes.com/sites/peterjreilly/2021/05/10/the-dubious-anonymity-of-virtual-currency-transactions/?sh=417d639169bf",
        className: "forbes",
    },
    {
        image: "hdu2921d4.svg",
        url: "https://www.coindesk.com/its-2031-this-is-the-world-that-crypto-created",
        className: "coindesk",
    },
    {
        image: "bloomberg-light.png",
        url: "https://www.bloomberg.com/opinion/articles/2021-06-09/crypto-finally-has-a-reason-to-exist-decentralized-finance",
        className: "bloomberg",
    },
];

function Media() {
    return ( <
        Container id = "media"
        className = "pt-50 pb-50 text-center" >
        <
        Typography variant = "h3"
        className = "mb-10 color-white" >
        Media <
        /Typography> <
        Divider / >
        <
        Grid container spacing = {
            2
        }
        className = "mb-10 " > {
            elm.map((item, index) => ( <
                Grid item xs = {
                    4
                }
                key = {
                    index
                } >
                <
                a href = {
                    item.url
                }
                target = "_blank" >
                <
                div className = {
                    "hvr-float media-logo " + item.className
                } >
                <
                img src = {
                    `${S3_URL}/${item.image}`
                }
                /> <
                /div> <
                /a> <
                /Grid>
            ))
        } <
        /Grid> <
        /Container>
    );
}

export default Media;