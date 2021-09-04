import {
    Button,
    Container,
    Divider,
    Grid,
    Icon,
    InputAdornment,
    Paper,
    Typography,
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
} from "react-router";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
    Dropdown,
    Flag,
    List
} from "semantic-ui-react";
import {
    isLoggedIn
} from "../utils/auth";
import {
    S3_URL
} from "../settings";
import {
    formatAmount
} from "../settings/format";
import CustomTextField from "../components/CustomTextField";

const fiats = [{
    key: "VND",
    value: "VND",
    text: "VND",
    flag: "vn",
}, ];

function Buy() {
    const {
        coin
    } = useParams();
    const {
        wallet,
        setting
    } = useSelector((state) => state);
    const {
        fundList
    } = wallet;
    const history = useHistory();
    const {
        library
    } = setting;
    const [selectedFiat, setSelectedFiat] = useState("VND");
    const [fiatAmount, setFiatAmount] = useState("");
    const [assetAmount, setAssetAmount] = useState("");

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

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

    return ( <
        Container className = "pb-50" >
        <
        div boxShadow = {
            3
        }
        className = "pt-20 pb-20 d-flex-sbt" >
        <
        Typography variant = "h4" > {
            library.BUY
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
            coin
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
            library.SELECT_FIAT
        } < /Typography> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            8
        } > {
            fiats.length > 0 && ( <
                Dropdown options = {
                    fiats
                }
                selection fluid onChange = {
                    (e, {
                        value
                    }) => setSelectedFiat(value)
                }
                value = {
                    selectedFiat
                }
                translate = "no"
                className = "mb-10" /
                >
            )
        } <
        /Grid> <
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
                    }) => history.push(`/buy/${value}`)
                }
                value = {
                    coin
                }
                translate = "no" /
                >
            )
        } <
        /Grid> <
        Grid xs = {
            12
        } >
        <
        Divider className = "mt-20 mb-20" / >
        <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            4
        } >
        <
        Typography > {
            library.AMOUNT
        } < /Typography> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            8
        } >
        <
        CustomTextField label = {
            library.I_WANT_TO_SPEND
        }
        onChange = {
            (e) => {
                const {
                    value
                } = e.target;
                if (value === ".") {
                    e.target.value = "";
                }
                const dotIndex = value.indexOf(".");
                if (dotIndex > 0) {
                    value.replace(".", "");
                    e.target.value =
                        value.substring(0, dotIndex + 1) +
                        value
                        .substring(dotIndex, value.length)
                        .replace(/\./g, "")
                        .substring(0, 8);
                }
                //   _handleChangeAmount(e);
            }
        }
        type = "text"
        fullWidth InputProps = {
            {
                startAdornment: ( <
                    InputAdornment position = "end"
                    style = {
                        {
                            paddingRight: 10
                        }
                    } >
                    {
                        selectedFiat
                    } <
                    /InputAdornment>
                ),
            }
        }
        /> <
        CustomTextField label = {
            library.YOU_WILL_RECEIVE
        }
        onChange = {
            (e) => {
                const {
                    value
                } = e.target;
                if (value === ".") {
                    e.target.value = "";
                }
                const dotIndex = value.indexOf(".");
                if (dotIndex > 0) {
                    value.replace(".", "");
                    e.target.value =
                        value.substring(0, dotIndex + 1) +
                        value
                        .substring(dotIndex, value.length)
                        .replace(/\./g, "")
                        .substring(0, 8);
                }
                //   _handleChangeAmount(e);
            }
        }
        type = "text"
        fullWidth InputProps = {
            {
                //   type: "number",
                startAdornment: ( <
                    InputAdornment position = "end"
                    style = {
                        {
                            paddingRight: 10
                        }
                    } >
                    {
                        coin
                    } <
                    /InputAdornment>
                ),
            }
        }
        /> <
        /Grid> <
        Grid xs = {
            12
        } >
        <
        Divider className = "mt-20 mb-20" / >
        <
        /Grid> <
        /Grid> <
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
        /Paper> <
        /Container>
    );
}

export default Buy;