import {
    Avatar,
    Container,
    IconButton,
    Paper,
    TextField,
    Typography,
    Button,
    FormHelperText,
    FormControl,
    FormLabel,
    CircularProgress,
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Link,
    useHistory,
    useParams
} from "react-router-dom";
import {
    Form,
    Header,
    Message,
    Segment
} from "semantic-ui-react";
import CustomTextField from "../components/CustomTextField";
import {
    CustomToast
} from "../settings";
import {
    checkEmpty,
    checkLength
} from "../settings/validate";
import {
    put
} from "../utils/api";
import {
    VisibilityOff,
    Visibility
} from "@material-ui/icons";
import {
    ENDPOINT_POST_RESET_PASSWORD
} from "../settings/endpoint";

function deviceInfo() {
    var navUserAgent = navigator.userAgent;
    var browserName = navigator.appName;
    var browserVersion = "" + parseFloat(navigator.appVersion);
    // var majorVersion = parseInt(navigator.appVersion, 10);
    var tempNameOffset, tempVersionOffset, tempVersion;

    if ((tempVersionOffset = navUserAgent.indexOf("Opera")) !== -1) {
        browserName = "Opera";
        browserVersion = navUserAgent.substring(tempVersionOffset + 6);
        if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
    } else if ((tempVersionOffset = navUserAgent.indexOf("MSIE")) !== -1) {
        browserName = "Microsoft Internet Explorer";
        browserVersion = navUserAgent.substring(tempVersionOffset + 5);
    } else if ((tempVersionOffset = navUserAgent.indexOf("Chrome")) !== -1) {
        browserName = "Chrome";
        browserVersion = navUserAgent.substring(tempVersionOffset + 7);
    } else if ((tempVersionOffset = navUserAgent.indexOf("Safari")) !== -1) {
        browserName = "Safari";
        browserVersion = navUserAgent.substring(tempVersionOffset + 7);
        if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
    } else if ((tempVersionOffset = navUserAgent.indexOf("Firefox")) !== -1) {
        browserName = "Firefox";
        browserVersion = navUserAgent.substring(tempVersionOffset + 8);
    } else if (
        (tempNameOffset = navUserAgent.lastIndexOf(" ") + 1) <
        (tempVersionOffset = navUserAgent.lastIndexOf("/"))
    ) {
        browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
        browserVersion = navUserAgent.substring(tempVersionOffset + 1);
        if (browserName.toLowerCase() === browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }

    // trim version
    if ((tempVersion = browserVersion.indexOf(";")) !== -1)
        browserVersion = browserVersion.substring(0, tempVersion);
    if ((tempVersion = browserVersion.indexOf(" ")) !== -1)
        browserVersion = browserVersion.substring(0, tempVersion);

    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";

    return browserName + " V" + browserVersion + " (" + OSName + ")";
}

function ResetPassword() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        token
    } = useParams();
    const [password, setPassword] = useState("");
    const {
        library
    } = setting;
    const [passwordError, setPasswordError] = useState(null);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const _handleResetPassword = (e) => {
        e.preventDefault();
        setPasswordError(null);
        if (checkEmpty(password)) setPasswordError(library.PLEASE_ENTER_PASSWORD);
        else if (checkLength(password, 8)) {
            setPasswordError(library.PLEASE_ENTER_PASSWORD_MORE_THAN);
        } else if (password.length > 16) {
            setPasswordError(library.PLEASE_ENTER_PASSWORD_LESS_THAN);
        } else if (checkEmpty(confirmPassword)) {
            setPasswordError(library.PLEASE_ENTER_CONFIRM_PASSWORD);
        } else if (password !== confirmPassword) {
            setPasswordError(library.CONFIRM_PASSWORD_VS_NEW_PASSWORD);
        } else {
            setLoading(true);
            put(
                ENDPOINT_POST_RESET_PASSWORD, {
                    token,
                    password,
                    device: deviceInfo(),
                },
                () => {
                    CustomToast("success", library.RESET_PASSWORD_SUCCESSFUL);
                    history.push("/login");
                },
                (error) => {
                    setLoading(false);
                    setPasswordError(library[error.code]);
                }
            );
        }
    };

    return ( <
        div className = "login" >
        <
        Container maxWidth = "sm"
        className = "login-form" >
        <
        div >
        <
        Avatar src = "/images/logo.png" / >
        <
        Typography variant = "h4" > {
            library.RESET_PASSWORD.toUpperCase()
        } <
        /Typography> <
        /div> <
        form onSubmit = {
            _handleResetPassword
        }
        noValidate >
        <
        div style = {
            {
                position: "relative"
            }
        } >
        <
        TextField required id = "password"
        name = "password"
        label = {
            library.NEW_PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_PASSWORD
        }
        variant = "outlined"
        autoComplete = "on"
        className = "mb-20"
        type = {
            show ? "input" : "password"
        }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> <
        IconButton aria - label = "toggle password visibility"
        onClick = {
            () => setShow(!show)
        }
        className = "eye-icon" >
        {
            show ? < Visibility / > : < VisibilityOff / >
        } <
        /IconButton> <
        /div> <
        div style = {
            {
                position: "relative"
            }
        } >
        <
        TextField required id = "confirmPassword"
        name = "confirmPassword"
        label = {
            library.CONFIRM_NEW_PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_CONFIRM_PASSWORD
        }
        variant = "outlined"
        autoComplete = "on"
        className = "mb-20"
        type = {
            showConfirmPassword ? "input" : "password"
        }
        onChange = {
            (e) => setConfirmPassword(e.target.value)
        }
        /> <
        IconButton aria - label = "toggle password visibility"
        onClick = {
            () => setShowConfirmPassword(!showConfirmPassword)
        }
        className = "eye-icon" >
        {
            showConfirmPassword ? < Visibility / > : < VisibilityOff / >
        } <
        /IconButton> <
        /div> <
        FormControl error = {
            passwordError
        } >
        <
        FormLabel > {
            passwordError
        } < /FormLabel> <
        /FormControl> <
        Button fullWidth className = "submit-btn mt-30"
        type = "submit"
        disabled = {
            loading
        } >
        {
            loading ? ( <
                CircularProgress color = "primary"
                stye = {
                    {
                        display: "flex"
                    }
                }
                />
            ) : ( <
                div > {
                    library.RESET_PASSWORD
                } < /div>
            )
        } <
        /Button> <
        br / >
        <
        /form> <
        div className = "login-footer" >
        <
        Link to = "/" > {
            library.HOMEPAGE
        } < /Link> <
        /div> <
        /Container> <
        /div>
    );
}

export default ResetPassword;