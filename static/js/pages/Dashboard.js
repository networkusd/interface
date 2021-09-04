import {
    Avatar,
    Button,
    Container,
    Divider,
    IconButton,
    TextField,
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router-dom";
import {
    Grid,
    Icon,
    Segment,
    Statistic
} from "semantic-ui-react";
import CoinChart from "../components/portfolio/CoinChart";
import {
    S3_URL
} from "../settings";
import {
    formatMoney,
    formatShortAmount,
    formatShortMoney,
} from "../settings/format";
import {
    isLoggedIn
} from "../utils/auth";

function Dashboard() {
    const history = useHistory();
    const {
        wallet,
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        fundList
    } = wallet;
    let searchCoin;
    const [words, setWords] = useState("");
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

    let sum = fundList.reduce((a, b) => {
        return a + b.usdAmount;
    }, 0);

    if (words.trim().length > 0) {
        searchCoin = fundList.filter(
            (element) =>
            element.coin.toLowerCase().includes(words.toLowerCase()) ||
            element.fullName.toLowerCase().includes(words.toLowerCase())
        );
    } else {
        searchCoin = fundList;
    }

    searchCoin.sort(function(a, b) {
        return b.usdAmount - a.usdAmount;
    });

    searchCoin = searchCoin.slice(0, showAll ? searchCoin.length : 5);

    return ( <
        Container className = "dashboard pb-50" >
        <
        div style = {
            {
                position: "relative"
            }
        } >
        <
        CoinChart / >
        <
        Statistic size = "small"
        style = {
            {
                position: "absolute",
                bottom: 0,
                top: 0,
                right: "50%",
                left: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
            }
        } >
        <
        Statistic.Label style = {
            {
                color: "$main-blue"
            }
        } > {
            library.TOTAL
        } <
        /Statistic.Label> <
        Statistic.Value style = {
            user.data && user.data.email === "realbewhy@gmail.com" ?
            {
                color: "pink"
            } :
                null
        } >
        <
        span style = {
            {
                fontSize: 25
            }
        } > $ < /span> <
        span style = {
            {
                fontSize: 35
            }
        } > {
            formatShortMoney(sum)
        } < /span> <
        /Statistic.Value> <
        /Statistic> <
        /div> <
        Segment className = "balances p-minus"
        padded >
        <
        Grid columns = "equal"
        textAlign = " " >
        <
        Grid.Row >
        <
        Grid.Column mobile = {
            16
        }
        tablet = {
            6
        }
        computer = {
            4
        }
        floated = "right" >
        <
        TextField placeholder = {
            library.SEARCH_COIN_TOKEN
        }
        type = "text"
        icon = { < Icon name = "search"
            inverted / >
        }
        onChange = {
            (e) => setWords(e.target.value)
        }
        variant = "outlined"
        size = "small"
        fullWidth /
        >
        <
        /Grid.Column> <
        Grid.Column width = {
            16
        } >
        <
        Divider className = "mt-20 mb-20" / >
        <
        /Grid.Column> <
        /Grid.Row> <
        Grid.Row only = "computer"
        style = {
            {
                fontWeight: 600
            }
        }
        className = "opacity-06" >
        <
        Grid.Column textAlign = "left"
        width = {
            4
        } > {
            library.COIN_TOKEN
        } <
        /Grid.Column> <
        Grid.Column > {
            library.PRICE
        } < /Grid.Column> <
        Grid.Column > {
            library.BALANCE
        } < /Grid.Column> { /* <Grid.Column>{library.VALUE}</Grid.Column> */ } <
        Grid.Column width = {
            5
        } > < /Grid.Column> <
        /Grid.Row> {
            searchCoin.map((w, index) => ( <
                React.Fragment key = {
                    index
                } >
                <
                Grid.Row only = "computer"
                className = "portfolio-item" >
                <
                Grid.Column style = {
                    {
                        display: "flex"
                    }
                }
                textAlign = "left"
                width = {
                    4
                }
                onClick = {
                    (e) => {
                        if (!e.target.className.includes("button")) {
                            history.push(`/portfolio/${w.coin}`);
                        }
                    }
                } >
                <
                Avatar src = {
                    `${S3_URL}/coins/${w.coin.replace(" ", "_")}.png`
                }
                /> <
                div style = {
                    {
                        marginLeft: 20
                    }
                } >
                <
                div style = {
                    {
                        fontWeight: 600,
                        fontSize: 15
                    }
                } > {
                    w.coin
                } <
                /div> <
                div className = "opacity-06" > {
                    w.fullName
                } < /div> <
                /div> <
                /Grid.Column> <
                Grid.Column verticalAlign = "middle"
                className = "text-bold"
                onClick = {
                    (e) => {
                        if (!e.target.className.includes("button")) {
                            history.push(`/portfolio/${w.coin}`);
                        }
                    }
                } >
                <
                small > $ < /small> {
                    formatMoney(w.usdPrice)
                } <
                /Grid.Column> <
                Grid.Column verticalAlign = "middle"
                style = {
                    {
                        color: w.color,
                        fontWeight: 600
                    }
                }
                onClick = {
                    (e) => {
                        if (!e.target.className.includes("button")) {
                            history.push(`/portfolio/${w.coin}`);
                        }
                    }
                } >
                {
                    formatShortAmount(w.amount)
                } < br / > {
                    w.blockedAmount !== 0 && ( <
                        p style = {
                            {
                                opacity: 0.8,
                                color: "grey",
                                fontWeight: 300,
                            }
                        } >
                        {
                            formatShortAmount(w.blockedAmount)
                        } <
                        /p>
                    )
                } <
                /Grid.Column> {
                    /* <Grid.Column
                                      verticalAlign="middle"
                                      style={{ color: w.color, fontWeight: 600 }}
                                      onClick={(e) => {
                                        if (!e.target.className.includes("button")) {
                                          history.push(`/portfolio/${w.coin}`);
                                        }
                                      }}
                                    >
                                      <small>$</small>
                                      {formatShortMoney(w.usdAmount)}
                                    </Grid.Column> */
                } <
                Grid.Column textAlign = "right"
                className = "d-flex-es"
                width = {
                    5
                } >
                <
                Button onClick = {
                    () => history.push("/deposit/" + w.coin)
                }
                className = "submit-btn custom-btn"
                disabled = {!w.depositEnable
                }
                type = "button"
                style = {
                    {
                        zIndex: 1000
                    }
                } >
                {
                    library.DEPOSIT
                } <
                /Button> {
                    /* <Button
                                        className="custom-btn"
                                        type="button"
                                        variant="outlined"
                                        style={{
                                          zIndex: 1000,
                                          borderColor: "#00a2ff",
                                          color: "#00a2ff",
                                        }}
                                        onClick={() => history.push("/buy/" + w.coin)}
                                      >
                                        {library.BUY}
                                      </Button> */
                } <
                Button onClick = {
                    () => history.push("/withdraw/" + w.coin)
                }
                disabled = {!w.withdrawEnable
                }
                variant = "outlined"
                type = "button"
                className = "custom-btn" >
                {
                    library.WITHDRAW
                } <
                /Button> <
                /Grid.Column> <
                /Grid.Row> <
                Grid.Row only = "mobile tablet"
                onClick = {
                    (e) => {
                        if (!e.target.className.includes("button")) {
                            history.push(`/portfolio/${w.coin}`);
                        }
                    }
                } >
                <
                Grid.Column textAlign = "left"
                style = {
                    {
                        display: "flex",
                        justifyContent: "space-between"
                    }
                } >
                <
                Grid.Column style = {
                    {
                        display: "flex"
                    }
                }
                width = {
                    8
                } >
                <
                Avatar src = {
                    `${S3_URL}/coins/${w.coin.replace(" ", "_")}.png`
                }
                /> <
                div style = {
                    {
                        marginLeft: 20
                    }
                } >
                <
                div style = {
                    {
                        fontWeight: 600,
                        fontSize: 15
                    }
                } > {
                    w.coin
                } <
                /div> <
                div > $ {
                    formatMoney(w.usdPrice)
                } < /div> {
                    w.blockedAmount !== 0 && ( <
                        p style = {
                            {
                                opacity: 0.8,
                                color: "grey",
                            }
                        } >
                        {
                            formatShortAmount(w.blockedAmount)
                        } <
                        /p>
                    )
                } <
                /div> <
                /Grid.Column> <
                Grid.Column width = {
                    8
                } >
                <
                div style = {
                    {
                        textAlign: "right",
                    }
                } >
                <
                small > {
                    library.BALANCE
                } < /small> <
                /div> <
                div style = {
                    {
                        textAlign: "right",
                        color: w.color,
                        fontWeight: 600,
                    }
                } >
                {
                    formatShortAmount(w.amount)
                } {
                    w.coin
                } <
                /div> {
                    /* <div
                                          style={{
                                            textAlign: "right",
                                            color: w.color,
                                            fontWeight: 600,
                                          }}
                                        >
                                          ${formatShortMoney(w.usdAmount)}
                                        </div> */
                } <
                /Grid.Column> <
                /Grid.Column> {
                    /* <Grid.Column
                                      width={16}
                                      textAlign="center"
                                      style={{ marginTop: "1em" }}
                                    >
                                      <Button
                                        onClick={() => history.push("/deposit/" + w.coin)}
                                        className="submit-btn custom-btn"
                                        disabled={!w.depositEnable}
                                      >
                                        {library.DEPOSIT}
                                      </Button>
                                      <Button
                                        onClick={() => history.push("/withdraw/" + w.coin)}
                                        disabled={!w.withdrawEnable}
                                        variant="outlined"
                                        className="custom-btn"
                                      >
                                        {library.WITHDRAW}
                                      </Button>
                                    </Grid.Column> */
                } <
                /Grid.Row> <
                /React.Fragment>
            ))
        } <
        Grid.Row columns = "equal" >
        <
        Divider style = {
            {
                width: "100%"
            }
        }
        /> <
        /Grid.Row> <
        Grid.Row columns = "equal"
        style = {
            {
                justifyContent: "center",
            }
        } >
        <
        Button
        // className="submit-btn"
        style = {
            {
                width: 300,
            }
        }
        onClick = {
            () => setShowAll(!showAll)
        }
        variant = "text" >
        {
            showAll ? library.SHOW_LESS : library.SHOW_MORE
        } <
        /Button> <
        /Grid.Row> <
        /Grid> <
        /Segment> <
        /Container>
    );
}

export default Dashboard;