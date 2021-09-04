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
    Segment,
    Icon
} from "semantic-ui-react";
import {
    formatAmount,
    formatDate
} from "../settings/format";
import "../components/portfolio/portfolio.scss";
import MainBar from "../components/portfolio/MainBar";
import {
    post
} from "../utils/api";
import {
    Container,
    Paper
} from "@material-ui/core";
import {
    ENDPOINT_GET_FUND_LOGS
} from "../settings/endpoint";
import {
    isLoggedIn
} from "../utils/auth";

function Detail({
    data,
    coin
}) {
    const [visible, setVisible] = useState(false);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    var {
        time
    } = data;
    var secondTime = parseInt((Date.now() - time) / 1000);
    var days = Math.floor(secondTime / 24 / 60 / 60);
    var hoursLeft = Math.floor(secondTime - days * 86400);
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor(hoursLeft - hours * 3600);
    var minutes = Math.floor(minutesLeft / 60);

    let displayTime;
    if (parseInt(days) > 0) {
        displayTime = formatDate(time);
    } else {
        if (hours > 0) {
            displayTime = hours + " " + library.HOURS_AGO;
        } else {
            if (minutes > 0) {
                displayTime = minutes + " " + library.MINUTES_AGO;
            } else {
                displayTime = "1 " + library.MINUTES_AGO;
            }
        }
    }

    var icon = null;
    var status = null;
    var amount;
    var className;
    if (data.amount > 0) {
        amount = "+ " + formatAmount(data.amount);
        className = "color-primary";
    } else {
        amount = "- " + formatAmount(data.amount);
        className = "color-secondary";
    }

    switch (data.type) {
        case "SAFE_LUS_TRANSACTION":
            icon = < Icon name = "share alternate" / > ;
            break;
        case "TRANSACTION":
            icon = < Icon name = "sign-in"
            rotated = "clockwise" / > ;
            break;
        case "EASY_BUY":
            icon = < Icon name = "exchange" / > ;
            break;
        case "WITHDRAW":
            icon = < Icon name = "paper plane outline" / > ;
            if (data.status === "CONFIRMED") {
                status = < small size = "small" > {
                    library.COMPLETED
                } < /small>;
            } else {
                status = < small size = "small" > {
                    library[data.status]
                } < /small>;
            }
            break;
        case "DEPOSIT":
            icon = < Icon name = "sign-in"
            rotated = "clockwise" / > ;
            break;
        case "REDEEM":
            icon = < Icon name = "chart line" / > ;
            break;
        case "SWAP":
            icon = < Icon name = "refresh" / > ;
            break;
        default:
            icon = < Icon name = "chart line" / > ;
            break;
    }

    return ( <
        >
        <
        div className = "history-item"
        onClick = {
            () => setVisible(!visible)
        } >
        <
        div className = "left" >
        <
        div className = "type" >
        <
        div > {
            icon
        } < /div> <
        div > {
            library[data.type]
        } < /div> <
        /div> <
        div >
        <
        small > {
            displayTime
        } < /small> <
        /div> <
        /div> <
        div className = "right text-bold" > {
            status
        } <
        div className = {
            className
        } > {
            amount
        } < /div> <
        /div> <
        /div> <
        />
    );
}

function Portfolio() {
    const {
        coin
    } = useParams();
    const {
        wallet,
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const history = useHistory();
    const {
        fundList
    } = wallet;
    const [transactionHistory, setTransactionHistory] = useState(null);


    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

    let fund;
    if (fundList.length > 0) {
        const temp = fundList.filter((element) => element.coin === coin)[0];
        if (!temp) {
            history.push("/");
        } else {
            fund = temp;
        }
    }

    useEffect(() => {
        if (isLoggedIn())
            post(
                ENDPOINT_GET_FUND_LOGS, {
                    page: 1,
                    pageSize: 10,
                    filters: {
                        coin,
                    },
                },
                (data) => setTransactionHistory(data)
            );
    }, [coin]);

    return fund ? ( <
        Container id = "portfolio"
        maxWidth = "md" >
        <
        MainBar coin = {
            coin
        }
        fund = {
            fund
        }
        /> <
        div className = "p-20 p-minus" >
        <
        div style = {
            {
                minHeight: 300
            }
        }
        className = "transaction-history" > {
            transactionHistory && transactionHistory.items.length > 0 ?
            transactionHistory.items.map((item, index) => ( <
                Paper className = "pl-10 pr-10 mb-10"
                style = {
                    {
                        paddingTop: 15,
                        paddingBottom: 15,
                    }
                }
                key = {
                    index
                }
                vertical >
                <
                Detail data = {
                    item
                }
                coin = {
                    fund
                }
                /> <
                /Paper>
            )) :
                null
        } <
        /div> <
        /div> <
        /Container>
    ) : null;
}

export default Portfolio;