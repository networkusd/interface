/* eslint-disable jsx-a11y/alt-text */
import {
    formatAmount
} from "../../settings/format";
import {
    S3_URL
} from "../../settings";
import {
    Icon,
    List
} from "semantic-ui-react";
import "./Withdraw.scss";
import NewWithdrawForm from "./NewWithdrawForm";
import {
    Divider,
    Grid,
    Paper
} from "@material-ui/core";
const {
    useSelector
} = require("react-redux");
const {
    useParams
} = require("react-router-dom");

function WithdrawForm() {
    const {
        setting,
        wallet
    } = useSelector((state) => state);
    const {
        coin
    } = useParams();
    const {
        fundList
    } = wallet;
    const {
        library
    } = setting;

    const {
        WITHDRAW_TIP_0,
        WITHDRAW_TIP_2
    } = library;

    const tips = [WITHDRAW_TIP_0, WITHDRAW_TIP_2];

    const selectFund = [];
    if (fundList) {
        fundList.forEach((element, index) => {
            selectFund.push({
                key: element.coin,
                value: element.coin,
                text: element.coin === coin ?
                    element.coin :
                    element.coin + " - " + formatAmount(element.amount),
                image: {
                    avatar: true,
                    src: `${S3_URL}/coins/${element.icon}`
                },
            });
        });
    }

    return ( <
        Grid container className = "mt-20 mb-20" >
        <
        Grid item sm = {
            7
        }
        xs = {
            12
        } >
        <
        Paper elevation = {
            3
        }
        className = "p-20" >
        <
        NewWithdrawForm / >
        <
        /Paper> <
        /Grid> <
        Grid item sm = {
            5
        }
        xs = {
            12
        }
        className = "hide-mobile pl-20" >
        <
        div className = "spwallet-tips" >
        <
        div >
        <
        Icon name = "lightbulb"
        size = "large" / >
        Tips:
        <
        /div> <
        List bulleted as = "ul" > {
            tips.map((item, index) => ( <
                List.Item key = {
                    index
                }
                as = "li"
                className = "mb-10" > {
                    item
                } <
                /List.Item>
            ))
        } <
        /List> <
        /div> <
        /Grid> <
        /Grid>
    );
}

export default WithdrawForm;