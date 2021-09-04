import {
    Button,
    Container,
    Paper,
    Typography
} from "@material-ui/core";
import React, {
    useEffect
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory,
    useParams
} from "react-router-dom";
import WithdrawForm from "../components/withdraw/WithdrawForm";
import WithdrawHistory from "../components/withdraw/WithdrawHistory";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
    Grid
} from "semantic-ui-react";

function Withdraw() {
    const {
        wallet,
        setting
    } = useSelector((state) => state);
    const {
        coin
    } = useParams();
    const {
        fundList
    } = wallet;
    const history = useHistory();
    const fund = fundList.find((f) => f.coin === coin);
    const {
        library
    } = setting;

    useEffect(() => {
        if (fund === undefined && fundList.length > 0) {
            history.push("/assets");
        }
    }, [fund, fundList.length, history]);

    return ( <
        Container className = "pb-50" >
        <
        div className = "d-flex-sbt pt-20 pb-20" >
        <
        Typography variant = "h4" > {
            library.WITHDRAW
        }
        crypto < /Typography> <
        Button variant = "contained"
        onClick = {
            () => history.push(`/deposit/${coin}`)
        }
        className = "hide-mobile bg-white" >
        {
            library.DEPOSIT
        } {
            fund && fund.coin
        } < ArrowForwardIcon / >
        <
        /Button> <
        /div> <
        Paper elevation = {
            0
        }
        className = "p-20 p-minus" >
        <
        WithdrawForm / >
        <
        WithdrawHistory / >
        <
        /Paper> <
        /Container>
    );
}

export default Withdraw;