import {
    Divider,
    Paper,
    Typography,
    Grid,
    Button,
    Container,
    TextField,
} from "@material-ui/core";
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
} from "react-router-dom";
import {
    Icon,
    Image,
    Message,
    Modal,
    Popup,
    Transition,
} from "semantic-ui-react";
import {
    _checkEnableGA,
    _getProfile
} from "../../actions/userActions";
import {
    CustomToast,
    S3_URL
} from "../../settings";
import {
    ENDPOINT_GET_POST_GA_CODE
} from "../../settings/endpoint";
import {
    checkEmpty
} from "../../settings/validate";
import {
    get,
    put
} from "../../utils/api";
import CustomTextField from "../CustomTextField";
import ChangePassword from "./ChangePassword";

function Setting() {
    const [data, setData] = useState(null);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        gaEnable
    } = user;
    const {
        library
    } = setting;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoadedGA, setIsLoadedGA] = useState(false);
    const [isShowChangePassword, setIsShowChangePassword] = useState(false);

    useEffect(() => {
        if (!gaEnable) {
            get(
                ENDPOINT_GET_POST_GA_CODE,
                (data) => setData(data),
                () => null
            );
        }
    }, [gaEnable]);

    const _disableGA = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const gaCode = e.target.gaCode.value;
        setError(null);
        if (checkEmpty(password)) setError(library.PLEASE_ENTER_PASSWORD);
        else if (checkEmpty(gaCode)) setError(library.PLEASE_ENTER_GA_CODE);
        else {
            setLoading(true);
            put(
                ENDPOINT_GET_POST_GA_CODE, {
                    gaCode: gaCode,
                    password,
                    enable: false,
                },
                () => {
                    CustomToast("success", library.DISABLE_GA_CODE);
                    setOpen(false);
                    dispatch(_getProfile());
                    setError(null);
                    setLoading(false);
                    dispatch(_checkEnableGA());
                },
                (error) => {
                    setError(library[error.code]);
                    setLoading(false);
                }
            );
        }
    };

    const _enableGA = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const gaCode = e.target.gaCode.value;
        setError(null);
        if (checkEmpty(password)) setError(library.PLEASE_ENTER_PASSWORD);
        else if (checkEmpty(gaCode)) setError(library.PLEASE_ENTER_GA_CODE);
        else {
            setLoading(true);
            put(
                ENDPOINT_GET_POST_GA_CODE, {
                    gaCode: gaCode,
                    password,
                    enable: true,
                },
                () => {
                    CustomToast("success", library.ENABLE_GA_CODE);
                    setOpen(false);
                    dispatch(_getProfile());
                    setError(null);
                    setLoading(false);
                    dispatch(_checkEnableGA());
                },
                (error) => {
                    setError(library[error.code]);
                    setLoading(false);
                }
            );
        }
    };

    const {
        TURN_OFF,
        TURN_ON,
        CANCEL,
        IDENTITY_VERIFICATION,
        LOGIN_PASSWORD,
        CHANGE,
        PLEASE_ENTER_GA_CODE,
        PLEASE_ENTER_PASSWORD,
        PASSWORD,
        GA_CODE,
        GA,
        SECURITY,
        VERIFIED,
        VERIFY,
        PENDING,
    } = library;

    let tempVerifyStatus = VERIFY;
    if (user.information) {
        const {
            verifyStatusLv2
        } = user.information;
        if (verifyStatusLv2 === "VERIFIED") {
            tempVerifyStatus = VERIFIED;
        }
        if (verifyStatusLv2 === "PENDING") {
            tempVerifyStatus = PENDING;
        }
    }

    return ( <
        Paper className = "p-20" >
        <
        Typography variant = "h5" > {
            SECURITY
        } < /Typography> <
        Divider className = "mt-10 mb-20" / >
        <
        Grid container justify = "space-between" >
        <
        Grid item > {
            GA
        } < /Grid> <
        Grid item >
        <
        Button className = "submit-btn mb-20"
        style = {
            {
                width: 120
            }
        }
        onClick = {
            () => {
                setOpen(true);
                setIsLoadedGA(false);
            }
        } >
        {
            gaEnable ? TURN_OFF : TURN_ON
        } <
        /Button> <
        /Grid> <
        /Grid> <
        Grid container justify = "space-between" >
        <
        Grid item > {
            IDENTITY_VERIFICATION
        } < /Grid> <
        Grid item >
        <
        Button color = {
            tempVerifyStatus === "Verified" || tempVerifyStatus === "Pending" ?
            "default" :
                "inherit"
        }
        variant = "contained"
        style = {
            {
                marginBottom: 20,
                width: 120,
            }
        }
        onClick = {
            () => history.push("/verify")
        }
        disabled = {
            tempVerifyStatus === "Verified" || tempVerifyStatus === "Pending"
        } >
        {
            tempVerifyStatus
        } <
        /Button> <
        /Grid> <
        /Grid> <
        Grid container justify = "space-between" >
        <
        Grid item > {
            LOGIN_PASSWORD
        } < /Grid> <
        Grid item >
        <
        Button className = "submit-btn mb-20"
        onClick = {
            () => setIsShowChangePassword(true)
        }
        style = {
            {
                width: 120
            }
        } >
        {
            CHANGE
        } <
        /Button> <
        /Grid> <
        /Grid> <
        Transition visible = {
            open
        }
        duration = {
            500
        }
        animation = "fade right" >
        <
        Modal open = {
            open
        }
        onOpen = {
            () => setOpen(true)
        }
        size = "mini" >
        <
        Modal.Header > {
            gaEnable ? TURN_OFF + " " + GA : TURN_ON + " " + GA
        } <
        /Modal.Header> <
        Modal.Content > {
            gaEnable ? ( <
                form onSubmit = {
                    _disableGA
                }
                error >
                <
                TextField placeholder = {
                    PLEASE_ENTER_PASSWORD
                }
                label = {
                    PASSWORD
                }
                type = "password"
                id = "password"
                name = "password"
                variant = "outlined"
                fullWidth className = "mb-10" /
                >
                <
                TextField placeholder = {
                    PLEASE_ENTER_GA_CODE
                }
                label = {
                    GA_CODE
                }
                type = "input"
                id = "gaCode"
                name = "gaCode"
                variant = "outlined"
                fullWidth className = "mb-20" /
                >
                <
                Message content = {
                    error
                }
                hidden = {
                    error === null
                }
                error / >
                <
                Grid container spacing = {
                    2
                } >
                <
                Grid item xs = {
                    6
                } >
                <
                Button onClick = {
                    () => setOpen(false)
                }
                type = "button"
                disabled = {
                    loading
                }
                fullWidth variant = "outlined" >
                {
                    CANCEL
                } <
                /Button> <
                /Grid> <
                Grid item xs = {
                    6
                } >
                <
                Button className = "submit-btn mb-20"
                type = "submit"
                loading = {
                    loading
                }
                disabled = {
                    loading
                }
                fullWidth >
                {
                    library.CONFIRM
                } <
                /Button> <
                /Grid> <
                /Grid> <
                /form>
            ) : (
                data && ( <
                    Container >
                    <
                    div loading = {!isLoadedGA
                    }
                    basic className = "min-h-300" >
                    <
                    Image src = {
                        `${S3_URL}/fastwallet/fastwallet-qrcode.png`
                    }
                    size = "medium"
                    centered style = {
                        {
                            display: !isLoadedGA ? "block" : "none"
                        }
                    }
                    /> <
                    Image src = {
                        data.qrCodeSetupImageUrl
                    }
                    size = "medium"
                    centered style = {
                        {
                            display: isLoadedGA ? "block" : "none"
                        }
                    }
                    onLoad = {
                        () => setIsLoadedGA(true)
                    }
                    /> <
                    Popup content = "Copied"
                    on = "click"
                    basic position = "bottom center"
                    hideOnScroll trigger = { <
                        p
                        style = {
                            {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "pointer",
                                textAlign: "center",
                                color: "#000",
                            }
                        }
                        onClick = {
                            () =>
                            navigator.clipboard.writeText(data.manualEntryKey)
                        } >
                        {
                            data.manualEntryKey
                        } {
                            " "
                        } <
                        Icon name = "copy outline"
                        size = "large" / >
                        <
                        /p>
                    }
                    /> <
                    /div> { /* <p>{data.manualEntryKey}</p> */ } <
                    form onSubmit = {
                        _enableGA
                    }
                    className = "mt-20" >
                    <
                    CustomTextField placeholder = {
                        PLEASE_ENTER_PASSWORD
                    }
                    label = {
                        PASSWORD
                    }
                    type = "password"
                    id = "password"
                    name = "password"
                    variant = "outlined"
                    fullWidth /
                    >
                    <
                    CustomTextField placeholder = {
                        PLEASE_ENTER_GA_CODE
                    }
                    label = {
                        GA_CODE
                    }
                    type = "input"
                    id = "gaCode"
                    name = "gaCode"
                    variant = "outlined"
                    fullWidth /
                    >
                    <
                    Message content = {
                        error
                    }
                    hidden = {
                        error === null
                    }
                    error / >
                    <
                    Grid container spacing = {
                        2
                    }
                    className = "mt-10" >
                    <
                    Grid item xs = {
                        6
                    } >
                    <
                    Button onClick = {
                        () => {
                            setError(null);
                            setOpen(false);
                        }
                    }
                    type = "button"
                    disabled = {
                        loading
                    }
                    fullWidth variant = "outlined" >
                    {
                        CANCEL
                    } <
                    /Button> <
                    /Grid> <
                    Grid item xs = {
                        6
                    } >
                    <
                    Button className = "submit-btn"
                    type = "submit"
                    loading = {
                        loading
                    }
                    disabled = {
                        loading
                    }
                    fullWidth >
                    {
                        library.CONFIRM
                    } <
                    /Button> <
                    /Grid> <
                    /Grid> <
                    /form> <
                    /Container>
                )
            )
        } <
        /Modal.Content> <
        /Modal> <
        /Transition> <
        ChangePassword open = {
            isShowChangePassword
        }
        _close = {
            () => setIsShowChangePassword(false)
        }
        /> <
        /Paper>
    );
}

export default Setting;