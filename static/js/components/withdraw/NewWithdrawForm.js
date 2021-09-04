/* eslint-disable jsx-a11y/alt-text */
import React, {
    useEffect,
    useState
} from "react";
import QrReader from "react-qr-reader";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useHistory,
    useParams
} from "react-router";
import {
    Form,
    Loader,
    Segment,
    Dropdown,
    Icon,
    Popup,
} from "semantic-ui-react";
import {
    CustomToast,
    S3_URL
} from "../../settings";
import {
    deleteText,
    formatAmount
} from "../../settings/format";
import {
    get,
    post
} from "../../utils/api";
import WithdrawConfirm from "./WithdrawConfirm";
import WithdrawVerification from "./WithdrawVerification";
import {
    getDeviceSecret
} from "../../utils/auth";
import {
    confirmAlert
} from "react-confirm-alert";
import {
    _getFundList,
    _getWithdrawHistory
} from "../../actions/walletActions";
import {
    checkEmpty
} from "../../settings/validate";
import CustomTextField from "../CustomTextField";
import {
    Grid,
    Divider,
    Button,
    Paper,
    Typography,
    Drawer,
} from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";

function NewWithdrawForm() {
    const history = useHistory();
    const {
        setting,
        wallet,
        user
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
    const [loading, setLoading] = useState(false);
    const [fund, setFund] = useState(null);
    const [network, setNetwork] = useState(null);
    const [address, setAddress] = useState("");
    const [walletError, setWalletError] = useState(null);
    const [showScanQrCode, setShowScanQrCode] = useState(false);
    const [addressTag, setAddressTag] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState(null);
    const {
        information,
        gaEnable
    } = user;
    const [isExternal, setIsExternal] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [isWallet, setIsWallet] = useState(false);
    const [openVerification, setOpenVerification] = useState(false);
    const [isVerifying, setVerifying] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setAddress("");
        setAddressTag("");
        setAmount("");
        setError(null);
        setWalletError(null);
    }, [coin]);

    useEffect(() => {
        if (fundList) {
            const temp = fundList.find((f) => f.coin === coin);
            if (temp) {
                setFund(temp);
                setNetwork(temp.networks[0]);
            }
        }
    }, [coin, fundList]);

    let withdrawFee = 0;
    if (network && isWallet) {
        if (coin === "LuS" && isExternal) {
            withdrawFee = Math.round(parseFloat((deleteText(amount) * 4) / 100));
        } else {
            withdrawFee = network.withdrawFee;
        }
    }
    const total =
        Math.round(parseFloat(amount) * 10 ** 8 - withdrawFee * 10 ** 8) / 10 ** 8;

    let checkWithdrawStatus = null;
    if (information) {
        if (information.verifyStatusLv2 !== "VERIFIED") {
            checkWithdrawStatus = library.USER_NOT_VERIFIED;
        } else {
            if (!gaEnable) {
                checkWithdrawStatus = library.PLEASE_ENABLE_GA;
            }
        }
    }

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

    const networkList = [];
    if (fund) {
        fund.networks.forEach((element) => {
            networkList.push({
                key: element.network,
                value: element.network,
                text: element.network,
            });
        });
    }

    const _handleChange = (e, {
        value
    }) => {
        const network = fund.networks.find((f) => f.network === value);
        setNetwork(network);
    };

    const _checkAmount = () => {
        if (amount.trim().length === 0 || parseFloat(amount) === 0) {
            setError(library.PLEASE_ENTER_AMOUNT_WITHDRAW);
        } else if (total <= 0 || amount < network.minimumWithdraw) {
            setError(library.WITHDRAW_AMOUNT_TOO_SMALL);
        } else if (total > fund.amount) {
            setError(library.UNAVAILABLE_BALANCE);
        } else {
            setError(null);
            setOpenConfirm(true);
        }
    };

    const _checkAddress = (isSubmit) => {
        setWalletError(null);
        setLoading(true);
        setIsWallet(false);
        if (checkEmpty(address)) {
            setWalletError(library.PLEASE_ENTER_WALLET_ADDRESS);
            setLoading(false);
        } else {
            get(
                `/fund-service/address/validate?address=${address}&network=${network.network}`,
                (data) => {
                    const {
                        result,
                        transferType
                    } = data;
                    if (result) {
                        setIsWallet(true);
                        setIsExternal(transferType === "EXTERNAL");
                        if (isSubmit) {
                            _checkAmount();
                        }
                    } else {
                        setWalletError(library.INVALID_WALLET_ADDRESS);
                    }
                    setLoading(false);
                },
                () => {
                    setLoading(false);
                    setWalletError(library.INVALID_WALLET_ADDRESS);
                }
            );
        }
    };

    const _handleChangeAmount = (e) => {
        setAmount(deleteText(e.target.value));
    };

    const _handleVerification = (otpCode, gaCode) => {
        setVerifying(true);
        post(
            `/fund-service/withdraw`, {
                coin,
                network: network.network,
                address,
                amount: total,
                deviceSecret: getDeviceSecret(),
                gaCode,
                otpCode,
                addressTag: addressTag.trim === "" ? null : addressTag,
            },
            () => {
                setVerifying(false);
                setError(null);
                setAmount("");
                setAddress("");
                setOpenVerification(false);
                dispatch(_getWithdrawHistory(1, 10, coin));
                dispatch(_getFundList());
                confirmAlert({
                    title: "",
                    overlayClassName: "sdfsd",
                    message: ( <
                        div className = "d-flex-cbt" >
                        <
                        div style = {
                            {
                                textAlign: "center",
                                width: "100%"
                            }
                        } >
                        <
                        img src = {
                            `${S3_URL}/withdraw-success.png`
                        }
                        style = {
                            {
                                width: 150,
                                margin: "15px auto"
                            }
                        }
                        /> <
                        h3 className = "m-0 up" > {
                            library.WITHDRAW_SUCCESSFUL
                        } < /h3> <
                        div >
                        <
                        span className = "font-size-15 d-flex-ec" > {
                            formatAmount(total)
                        } <
                        span style = {
                            {
                                marginLeft: "2px",
                                opacity: 0.4,
                                fontSize: "1.2rem",
                            }
                        } >
                        {
                            coin
                        } <
                        /span> <
                        /span> <
                        /div> <
                        div style = {
                            {
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "20px",
                            }
                        } >
                        <
                        span className = "p-10" > {
                            library.ADDRESS
                        } < /span> <
                        span className = "p-10"
                        style = {
                            {
                                maxWidth: 200,
                                textAlign: "right",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                            }
                        } >
                        {
                            address
                        } <
                        /span> <
                        /div> <
                        /div> <
                        /div>
                    ),
                    buttons: [{
                        label: "OK",
                        onClick: () => {
                            setAddress("");
                            setAddressTag("");
                            setAmount("");
                        },
                    }, ],
                });
            },
            (error) => {
                CustomToast("error", library[error.code]);
                setLoading(false);
                setVerifying(false);
            }
        );
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        _checkAddress(true);
    };

    if (fund) {
        return ( <
            >
            <
            form onSubmit = {
                _handleSubmit
            } >
            <
            Grid container style = {
                {
                    height: fund.withdrawEnable ? 500 : "auto",
                }
            } >
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
            } >
            <
            Dropdown options = {
                selectFund
            }
            selection fluid onChange = {
                (e, {
                    value
                }) => history.push(`/withdraw/${value}`)
            }
            value = {
                history.location.pathname.replace("/withdraw/", "")
            }
            translate = "no"
            className = "mb-10" /
            >
            <
            /Grid> {
                fund.withdrawEnable ? ( <
                    >
                    <
                    Grid item xs = {
                        12
                    } >
                    <
                    br / >
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
                        library.WITHDRAW_TO
                    } < /Typography> <
                    /Grid> <
                    Grid item xs = {
                        12
                    }
                    md = {
                        8
                    } >
                    <
                    div style = {
                        {
                            position: "relative"
                        }
                    } >
                    <
                    CustomTextField label = {
                        library.ADDRESS
                    }
                    placeholder = {
                        library.PLEASE_ENTER_WALLET_ADDRESS
                    }
                    onChange = {
                        (e) => setAddress(e.target.value)
                    }
                    value = {
                        address
                    }
                    maxLength = "128"
                    onBlur = {
                        () => _checkAddress(false)
                    }
                    fullWidth /
                    >
                    <
                    Icon name = "qrcode"
                    onClick = {
                        () => setShowScanQrCode(true)
                    }
                    link style = {
                        {
                            position: "absolute",
                            top: -5,
                            right: 0,
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                            fontSize: 20,
                        }
                    }
                    /> <
                    /div> <
                    small className = "error-message" > {
                        walletError
                    } < /small> <
                    div className = "mt-10 opacity-06" > {
                        library.CHOOSE_NETWORK
                    } <
                    /div> {
                        networkList && ( <
                            Dropdown options = {
                                networkList
                            }
                            selection onChange = {
                                _handleChange
                            }
                            value = {
                                network.network
                            }
                            translate = "no"
                            fluid className = "mb-10" /
                            >
                        )
                    } {
                        network.hasAddressTag && ( <
                            >
                            <
                            CustomTextField label = "MEMO"
                            placeholder = {
                                library.OPTION
                            }
                            value = {
                                addressTag
                            }
                            onChange = {
                                (e, {
                                    value
                                }) => {
                                    setAddressTag(value);
                                }
                            }
                            type = "text"
                            maxLength = "128"
                            fullWidth /
                            >
                            <
                            small > {
                                library.MEMO_NOTE
                            } < /small> <
                            />
                        )
                    } <
                    /Grid> <
                    Grid item xs = {
                        12
                    } >
                    <
                    br / >
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
                        library.WITHDRAW_AMOUNT
                    } < /Typography> <
                    /Grid> <
                    Grid item xs = {
                        12
                    }
                    md = {
                        8
                    } >
                    <
                    div style = {
                        {
                            position: "relative",
                        }
                    } >
                    <
                    CustomTextField label = {
                        library.AMOUNT
                    }
                    placeholder = {
                        library.MINIMUM +
                        ": " +
                        network.minimumWithdraw +
                        " " +
                        coin
                    }
                    value = {
                        amount
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
                            _handleChangeAmount(e);
                        }
                    }
                    type = "text"
                    fullWidth /
                    >
                    <
                    /div> <
                    small className = "text-right" > {
                        library.AVAILABLE
                    }: {
                        formatAmount(fund.amount)
                    } {
                        coin
                    } <
                    /small> <
                    small className = "error-message" > {
                        error
                    } < /small> <
                    /Grid> <
                    Grid item xs = {
                        12
                    } >
                    <
                    br / >
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
                        library.RECEIVE_AMOUNT
                    } < /Typography> <
                    /Grid> <
                    Grid item xs = {
                        12
                    }
                    md = {
                        6
                    } >
                    <
                    Typography variant = "h5" > {
                        formatAmount(total)
                    } {
                        coin
                    } <
                    /Typography> <
                    small >
                    Fee: {
                        formatAmount(network.withdrawFee)
                    } {
                        coin
                    } <
                    /small> <
                    /Grid> <
                    Grid item xs = {
                        12
                    }
                    md = {
                        2
                    } > {!checkWithdrawStatus && ( <
                            Button color = "inherit"
                            fullWidth disabled = {
                                loading || checkWithdrawStatus
                            }
                            type = "submit" >
                            {
                                library.WITHDRAW
                            } <
                            /Button>
                        )
                    } <
                    /Grid> <
                    />
                ) : ( <
                    Grid item xs = {
                        12
                    } >
                    <
                    div className = "pt-50 pb-20"
                    style = {
                        {
                            textAlign: "center"
                        }
                    } >
                    <
                    TimerIcon color = "disabled"
                    fontSize = "large"
                    className = "mr-10"
                    style = {
                        {
                            fontSize: 100,
                        }
                    }
                    /> <
                    Typography variant = "h5"
                    color = "disable" > {
                        library.WITHDRAW_DISABLE
                    } <
                    /Typography> <
                    /div> <
                    /Grid>
                )
            } <
            /Grid> {
                checkWithdrawStatus && ( <
                    >
                    <
                    Divider className = "mt-10 mb-20" / >
                    <
                    Typography className = "color-secondary" >
                    Tips: {
                        checkWithdrawStatus
                    } <
                    /Typography> <
                    />
                )
            } <
            /form> <
            Drawer anchor = {
                "left"
            }
            open = {
                showScanQrCode
            }
            className = {
                "custom-modal-vk"
            } >
            <
            Paper className = "p-20" >
            <
            Typography > {
                library.SCAN_QR_CODE
            } < /Typography> <
            div >
            <
            QrReader delay = {
                300
            }
            onError = {
                (data) => console.log(data)
            }
            onScan = {
                (data) => {
                    if (data) {
                        setAddress(data);
                        setShowScanQrCode(false);
                    }
                }
            }
            style = {
                {
                    width: 300,
                    margin: "2em 0"
                }
            }
            facingMode = "environment" /
            >
            <
            /div> <
            div className = "text-right" >
            <
            Button type = "button"
            onClick = {
                () => setShowScanQrCode(false)
            }
            variant = "outlined" >
            {
                library.CLOSE
            } <
            /Button> <
            /div> <
            /Paper> <
            /Drawer> <
            WithdrawConfirm openConfirm = {
                openConfirm
            }
            amount = {
                amount
            }
            withdrawFee = {
                withdrawFee
            }
            coin = {
                coin
            }
            total = {
                total
            }
            address = {
                address
            }
            addressTag = {
                addressTag
            }
            _onClose = {
                () => setOpenConfirm(false)
            }
            _handleConfirm = {
                () => {
                    setOpenConfirm(false);
                    setOpenVerification(true);
                }
            }
            /> <
            WithdrawVerification open = {
                openVerification
            }
            close = {
                () => setOpenVerification(false)
            }
            coin = {
                coin
            }
            network = {
                network.network
            }
            address = {
                address
            }
            amount = {
                total
            }
            deviceSecret = {
                getDeviceSecret()
            }
            _handleVerification = {
                _handleVerification
            }
            memo = {
                addressTag
            }
            loading = {
                isVerifying
            }
            /> <
            />
        );
    } else {
        return <Loader active inverted / > ;
    }
}

export default NewWithdrawForm;