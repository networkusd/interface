import {
    Avatar,
    Container,
    Drawer,
    Grid,
    Typography,
    Button,
    Paper,
} from "@material-ui/core";
import {
    ArrowDropDown,
    SwapHoriz,
    SwapHorizontalCircle,
} from "@material-ui/icons";
import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router";
import {
    Form,
    Header,
    Icon,
    Image,
    Message,
    Segment
} from "semantic-ui-react";
import {
    _getFundList,
    _getSwapHistory,
    _getSwapList,
} from "../../actions/walletActions";
import {
    CustomToast,
    S3_URL
} from "../../settings";
import format, {
    deleteText,
    formatAmount,
    formatRoundAmount,
} from "../../settings/format";
import {
    checkEmpty
} from "../../settings/validate";
import {
    post
} from "../../utils/api";
import {
    isLoggedIn
} from "../../utils/auth";
import AmountInput from "../others/AmountInput";
import CPU from "../token-information/CPU";
import SelectCoin from "./SelectCoin";

function ConfirmForm({
    _handleClose,
    _handleSwap,
    quote,
    base,
    amount,
    price,
    fee,
}) {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [time, setTime] = useState(30);
    const dispatch = useDispatch();

    const {
        RATIO,
        SWAP_FEE,
        SWAP_CONFIRM,
        YOU_WILL_GET,
        // SWAP,
        CONFIRM,
    } = library;

    useEffect(() => dispatch(_getSwapList()), [dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        if (time === 0) clearInterval(interval);
        return () => clearInterval(interval);
    }, [time]);

    return ( <
        Paper style = {
            {
                minWidth: 300,
                textAlign: "center",
            }
        }
        className = "fastwallet-container p-20" >
        <
        div className = "mb-20" >
        <
        Typography variant = "h5" > {
            SWAP_CONFIRM
        } < /Typography> <
        Icon name = "x"
        style = {
            {
                position: "absolute",
                right: 10,
                top: 10,
                cursor: "pointer",
            }
        }
        size = "large"
        onClick = {
            _handleClose
        }
        color = "grey" /
        >
        <
        /div> <
        Paper >
        <
        div > {
            YOU_WILL_GET
        } < /div> <
        Typography variant = "h5"
        className = "pt-20 pb-20" > {
            formatAmount(parseFloat(amount * price))
        } {
            quote
        } <
        /Typography> <
        Paper className = "p-20" >
        <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1em",
            }
        } >
        <
        div > {
            library.FROM
        }: < /div> <
        div > {
            formatAmount(parseFloat(amount))
        } {
            base
        } <
        /div> <
        /div> <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1em",
            }
        } >
        <
        div > {
            RATIO
        }: < /div> <
        div >
        1 {
            base
        } = {
            formatAmount(price)
        } {
            quote
        } <
        /div> <
        /div> <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between"
            }
        } >
        <
        div > {
            SWAP_FEE
        }: < /div> <
        div > {
            fee
        } {
            base
        } <
        /div> <
        /div> <
        /Paper> <
        /Paper> <
        Button className = "submit-btn mt-20"
        fullWidth disabled = {!time
        }
        onClick = {
            _handleSwap
        } >
        {
            CONFIRM
        }({
                time
            }
            s) <
        /Button> <
        /Paper>
    );
}

function SwapForm() {
    const {
        wallet,
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        swapProduct
    } = wallet;
    const [base, setBase] = useState("USDT");
    const [quote, setQuote] = useState("CPU");
    const dispatch = useDispatch();
    const [bases, setBases] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [baseAmount, setBaseAmount] = useState(0);
    const [quoteAmount, setQuoteAmount] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {
        fundList
    } = wallet;
    const [openConfirm, setOpenConfirm] = useState(false);
    const [showSelectBase, setShowSelectBase] = useState(false);
    const [showSelectQuote, setShowSelectQuote] = useState(false);
    const history = useHistory();

    const _handleChangeBase = (value) => {
        setShowSelectBase(false);
        const newBases = [];
        const newQuotes = [];
        setError(null);
        swapProduct.forEach((element, index) => {
            if (newBases.findIndex((i) => i.value === element.base) < 0) {
                newBases.push({
                    key: index,
                    value: element.base,
                    text: element.base,
                });
            }
            if (element.base === value) {
                newQuotes.push({
                    key: index,
                    value: element.quote,
                    text: ( <
                        div style = {
                            {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: 70,
                            }
                        } >
                        <
                        Image src = {
                            `${S3_URL}/coins/${element.quote}.png`
                        }
                        style = {
                            {
                                width: 20,
                                height: 20
                            }
                        }
                        /> {
                            element.quote
                        } <
                        /div>
                    ),
                });
            }
        });
        setBases(newBases);
        setQuotes(newQuotes);
        setBase(value);
        let newQuote = quote;
        if (newQuotes.findIndex((item) => item.value === quote) < 0) {
            setQuote(newQuotes[0].value);
            newQuote = newQuotes[0].value;
        }
        const selectedProduct = swapProduct.find(
            (element) => element.base === value && element.quote === newQuote
        );
        setQuoteAmount(selectedProduct.price * baseAmount);
    };

    const _handleChangeQuote = (value) => {
        setShowSelectQuote(false);
        const selectedProduct = swapProduct.find(
            (element) => element.base === base && element.quote === value
        );
        setQuote(value);
        setQuoteAmount(selectedProduct.price * baseAmount);
    };

    const selectedProduct = swapProduct.find(
        (element) => element.base === base && element.quote === quote
    );

    useEffect(() => {
        if (swapProduct.length === 0) {
            dispatch(_getSwapList());
        } else {
            _handleChangeBase(base);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swapProduct, dispatch]);

    const _onChangeBaseAmount = (e) => {
        let {
            value
        } = e.target;
        value = deleteText(value);
        setBaseAmount(value);
        if (value > 0) {
            setQuoteAmount(
                formatRoundAmount(parseFloat(value) * selectedProduct.price)
            );
        } else {
            setQuoteAmount(0);
        }
    };

    const _onChangeQuoteAmount = (e) => {
        let {
            value
        } = e.target;
        value = deleteText(value);
        setQuoteAmount(value);
        if (value) {
            setBaseAmount(
                formatRoundAmount(parseFloat(value) / selectedProduct.price).toString()
            );
        } else {
            setBaseAmount(0);
        }
    };

    const _checkSwap = (e) => {
        e.preventDefault();
        if (isLoggedIn()) {
            setError(null);
            if (checkEmpty(baseAmount)) {
                setError("PLEASER_ENTER_BASE_AMOUNT");
            } else if (baseAmount < selectedProduct.minAmount) {
                setError("BASE_AMOUNT_GREATER_MIN");
            } else if (baseAmount > fund.amount) {
                setError("UNAVAILABLE_BALANCE");
            } else {
                dispatch(_getSwapList());
                setOpenConfirm(true);
            }
        } else {
            history.push("/login?return=swap");
        }
    };

    const fund = fundList && fundList.find((e) => e.coin === base);

    const _handleSwap = () => {
        setLoading(true);
        setOpenConfirm(false);
        post(
            `/swap-service/swap`, {
                base,
                quote,
                price: selectedProduct.price,
                amount: baseAmount
            },
            () => {
                CustomToast("success", library.SWAP_SUCCESS);
                dispatch(_getFundList());
                dispatch(_getSwapHistory({}));
                setLoading(false);
            },
            (error) => {
                if (error.code === "SWAP_CPU_BELOW_MINIMUM") {
                    const cpuMinimumAmount = error.msg;
                    CustomToast(
                        "error",
                        library.SWAP_CPU_BELOW_MINIMUM +
                        " " +
                        formatAmount(cpuMinimumAmount) +
                        " CPU"
                    );
                    setLoading(false);
                } else {
                    CustomToast("error", library[error.code]);
                    setLoading(false);
                }
            }
        );
    };

    return ( <
        >
        <
        div className = "swap-form"
        style = {
            {
                marginBottom: 200
            }
        } >
        <
        Container >
        <
        Grid container alignItems = "center"
        justify = "space-between" >
        <
        Grid item xs = {
            12
        }
        md = {
            6
        }
        className = "h-500"
        style = {
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }
        } >
        {
            base === "CPU" || quote === "CPU" ? ( <
                CPU / >
            ) : ( <
                >
                <
                Typography variant = "h4"
                className = "mb-10" >
                Swap Crypto… <
                /Typography> <
                Typography className = "mb-50" >
                All coins and tokens, available in {
                    " "
                } <
                span translate = "no" > Stablecoins < /span> <
                /Typography> <
                />
            )
        } <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            5
        } >
        <
        Paper className = "pt-50 pb-20 pl-20 pr-20 p-minus"
        style = {
            {
                marginBottom: -200,
            }
        } >
        <
        Paper >
        <
        Grid container className = "pb-10 pt-10 mb-30"
        justify = "space-evenly" >
        <
        Grid item className = "d-flex-cc" >
        <
        Avatar src = {
            `${S3_URL}/coins/${base}.png`
        }
        style = {
            {
                marginRight: 10
            }
        }
        /> <
        Typography variant = "h5" > 1 < /Typography> <
        /Grid> <
        Grid item >
        <
        SwapHoriz fontSize = "large" / >
        <
        /Grid> <
        Grid item className = "d-flex-cc" >
        <
        Typography variant = "h5" > {
            selectedProduct && formatAmount(selectedProduct.price)
        } <
        /Typography> <
        Avatar src = {
            `${S3_URL}/coins/${quote}.png`
        }
        style = {
            {
                marginLeft: 10
            }
        }
        /> <
        /Grid> <
        /Grid> <
        /Paper> <
        form error onSubmit = {
            _checkSwap
        } >
        <
        div style = {
            {
                position: "relative",
            }
        }
        className = "mb-10" >
        <
        AmountInput placeholder = {
            library.PLEASE_ENTER_AMOUNT
        }
        value = {
            baseAmount
        }
        onChange = {
            _onChangeBaseAmount
        }
        fullWidth size = "medium"
        label = {
            library.SWAP
        }
        /> <
        div className = "select-coin"
        onClick = {
            () => setShowSelectBase(true)
        } >
        <
        div > {
            base
        } < /div> <
        ArrowDropDown / >
        <
        /div> <
        /div> <
        div className = "text-right mb-10" >
        <
        span className = "opacity-06" > {
            library.AVAILABLE
        }: < /span>{" "} {
            fund ? formatAmount(fund.amount) : 0
        } {
            base
        } <
        /div> <
        div style = {
            {
                position: "relative",
            }
        } >
        <
        AmountInput fullWidth placeholder = {
            library.PLEASE_ENTER_AMOUNT
        }
        value = {
            quoteAmount
        }
        onChange = {
            _onChangeQuoteAmount
        }
        size = "medium"
        label = {
            library.RECEIVE
        }
        /> <
        div className = "select-coin"
        onClick = {
            () => setShowSelectQuote(true)
        } >
        <
        div > {
            quote
        } < /div> <
        ArrowDropDown / >
        <
        /div> <
        /div> <
        Message error content = { <
            div style = {
                {
                    display: "flex"
                }
            } >
            <
            Icon
            name = "x"
            size = "small"
            circular
            inverted
            className = "error-icon"
            style = {
                {
                    display: error === null ? "none" : "block",
                }
            }
            /> {
                library[error]
            } & nbsp; <
            /div>
        }
        floating style = {
            {
                backgroundColor: "transparent",
                border: "none",
                color: "#fe644e",
                boxShadow: "none",
                paddingLeft: 0,
                paddingRight: 0,
            }
        }
        /> <
        Button className = "submit-btn"
        type = "submit"
        fullWidth size = "medium"
        variant = "outlined" >
        {!isLoggedIn() && library.LOGIN_FOR
        } {
            library.SWAP
        } <
        /Button> <
        /form> <
        div className = "mt-20" >
        <
        div style = {
            {
                textAlign: "right"
            }
        } >
        <
        span className = "opacity-06" > {
            library.MINIMUM
        }: < /span> {
            selectedProduct && selectedProduct.minAmount
        } {
            base
        } <
        /div> <
        div style = {
            {
                textAlign: "right"
            }
        } >
        <
        span className = "opacity-06" > {
            library.FEE
        }: < /span> {
            selectedProduct && selectedProduct.fee
        } {
            base
        } <
        /div> <
        /div> <
        /Paper> <
        /Grid> <
        /Grid> <
        /Container> <
        /div> {
            selectedProduct && ( <
                Drawer anchor = {
                    "left"
                }
                open = {
                    openConfirm
                }
                className = {
                    "custom-modal-vk"
                } >
                <
                ConfirmForm _handleClose = {
                    () => setOpenConfirm(false)
                }
                _handleSwap = {
                    _handleSwap
                }
                price = {
                    selectedProduct.price
                }
                fee = {
                    selectedProduct.fee
                }
                amount = {
                    baseAmount
                }
                base = {
                    base
                }
                quote = {
                    quote
                }
                /> <
                /Drawer>
            )
        } <
        Drawer anchor = {
            "left"
        }
        open = {
            showSelectBase
        }
        className = {
            "custom-modal-vk"
        } >
        <
        SelectCoin coins = {
            bases
        }
        changeBase = {
            _handleChangeBase
        }
        close = {
            () => setShowSelectBase(false)
        }
        /> <
        /Drawer> <
        Drawer anchor = {
            "left"
        }
        open = {
            showSelectQuote
        }
        className = {
            "custom-modal-vk"
        } >
        <
        SelectCoin coins = {
            quotes
        }
        changeBase = {
            _handleChangeQuote
        }
        close = {
            () => setShowSelectQuote(false)
        }
        /> <
        /Drawer> <
        />
    );
}

export default SwapForm;