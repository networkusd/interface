import {
    Box,
    Button,
    Container,
    Paper,
    Typography,
    Grid,
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory,
    useParams
} from "react-router-dom";
import {
    Dropdown,
    Icon,
    List,
    Segment,
    Tab
} from "semantic-ui-react";
import DepositForm from "../components/deposit/DepositForm";
import DepositHistory from "../components/deposit/DepositHistory";
import {
    S3_URL
} from "../settings";
import {
    formatAmount
} from "../settings/format";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
    isLoggedIn
} from "../utils/auth";

function Deposit() {
    const {
        coin
    } = useParams();
    const {
        wallet,
        api,
        user,
        setting
    } = useSelector((state) => state);
    const {
        fundList
    } = wallet;
    const fund = fundList.find((f) => f.coin === coin);
    const [panes, setPanes] = useState(null);
    const [oldCoin, setOldCoin] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

    useEffect(() => {
        if (fund) {
            const temp = [];
            fund.networks.forEach((element) => {
                temp.push({
                    menuItem: element.network,
                    render: () => < DepositForm coin = {
                        coin
                    }
                    network = {
                        element.network
                    }
                    />,
                });
            });
            if (coin !== oldCoin) {
                setPanes(temp);
                setOldCoin(coin);
            }
        }
    }, [fund, panes, coin, api, user.accessToken, oldCoin, setOldCoin]);

    const {
        library
    } = setting;
    const {
        DEPOSIT_TIP_0_BEGIN,
        DEPOSIT_TIP_0_END,
        DEPOSIT_TIP_1,
        DEPOSIT_TIP_2,
        DEPOSIT_TIP_3,
        DEPOSIT_TIP_4,
    } = library;

    const tips = [
        DEPOSIT_TIP_0_BEGIN + " " + coin + " " + DEPOSIT_TIP_0_END,
        DEPOSIT_TIP_1,
        DEPOSIT_TIP_2,
        DEPOSIT_TIP_3,
        DEPOSIT_TIP_4,
    ];

    const selectFund = [];
    if (fundList) {
        fundList.forEach((element) => {
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

    if (fund === undefined && fundList.length > 0) history.push("/");

    return ( <
        Container className = "pb-50" >
        <
        div boxShadow = {
            3
        }
        className = "pt-20 pb-20 d-flex-sbt" >
        <
        Typography variant = "h4" > {
            library.DEPOSIT
        }
        crypto < /Typography> <
        Button variant = "contained"
        onClick = {
            () => history.push(`/withdraw/${coin}`)
        }
        className = "hide-mobile bg-white" >
        {
            library.WITHDRAW
        } {
            fund && fund.coin
        } < ArrowForwardIcon / >
        <
        /Button> <
        /div> <
        Paper className = "p-20 p-minus" >
        <
        Grid container justify = "space-between" >
        <
        Grid item lg = {
            7
        }
        md = {
            7
        }
        xs = {
            12
        } >
        <
        Paper className = "p-20" >
        <
        Grid container >
        <
        Grid item xs = {
            12
        }
        md = {
            4
        } >
        <
        Typography > {
            library.SELECT_COIN
        } < /Typography> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            8
        } > {
            selectFund.length > 0 && ( <
                Dropdown options = {
                    selectFund
                }
                selection fluid onChange = {
                    (e, {
                        value
                    }) =>
                    history.push(`/deposit/${value}`)
                }
                value = {
                    history.location.pathname.replace("/deposit/", "")
                }
                translate = "no" /
                >
            )
        } <
        /Grid> <
        /Grid> <
        Tab panes = {
            panes
        }
        menu = {
            {
                secondary: true,
                pointing: true,
                inverted: false
            }
        }
        style = {
            {
                textAlign: "center"
            }
        }
        /> <
        /Paper> <
        /Grid> <
        Grid item sm = {
            5
        }
        xs = {
            12
        }
        className = "hide-mobile" >
        <
        div className = "fastwallet-tips pl-30 p-20" >
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
        /Grid> <
        Typography variant = "h5"
        className = "mb-30 mt-50" > {
            library.DEPOSIT_HISTORY
        } <
        /Typography> <
        DepositHistory coin = {
            coin
        }
        /> <
        /Paper> <
        /Container>
    );
}

export default Deposit;