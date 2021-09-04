import {
    Avatar,
    Button
} from "@material-ui/core";
import React from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router-dom";
import {
    Header,
    Image,
    div
} from "semantic-ui-react";
import {
    S3_URL
} from "../../settings";
import {
    formatAmount,
    formatUSD
} from "../../settings/format";

function MainBar({
    fund,
    coin
}) {
    const history = useHistory();
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    return ( <
        >
        <
        div className = "coin-logo mt-20"
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        Avatar src = {
            `${S3_URL}/coins/${coin.replace(" ", "_")}.png`
        }
        centered onClick = {
            () => history.push(`/portfolio/${coin}`)
        }
        style = {
            {
                cursor: "pointer",
                margin: "auto",
                width: 100,
                height: 100
            }
        }
        /> <
        div vertical basic >
        <
        div >
        <
        h1 style = {
            {
                color: fund.color
            }
        } > {
            formatAmount(fund.amount)
        } {
            " "
        } <
        small translate = "no" > {
            fund.coin
        } < /small> <
        /h1> <
        /div> <
        div >
        <
        Header >
        ~{
            formatUSD(fund.usdAmount)
        } <
        small > $ < /small> <
        /Header> <
        /div> <
        /div> <
        /div> <
        div className = "mt-10 mb-20"
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        Button onClick = {
            () => history.push(`/deposit/${fund.coin}`)
        }
        className = {
            history.location.pathname.includes("deposit") ? "active" : ""
        } >
        {
            library.DEPOSIT
        } <
        /Button> <
        Button onClick = {
            () => history.push(`/withdraw/${fund.coin}`)
        }
        className = {
            history.location.pathname.includes("withdraw") ? "active" : ""
        } >
        {
            library.WITHDRAW
        } <
        /Button> <
        /div> <
        />
    );
}

export default MainBar;