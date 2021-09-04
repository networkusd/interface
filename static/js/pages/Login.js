import {
    Avatar,
    Button,
    CircularProgress,
    Container,
    FormControl,
    FormLabel,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    makeStyles,
    TextField,
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
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import {
    CustomToast,
    deviceInfo,
    makeID,
    RETURN_SAFE_KEY,
} from "../settings";
import {
    checkEmpty
} from "../settings/validate";
import {
    post
} from "../utils/api";
import {
    getDeviceSecret,
    isLoggedIn,
    setAccessToken,
    setDeviceSecret,
} from "../utils/auth";
import "../styles/login-form.scss";
import {
    VisibilityOff,
    Visibility
} from "@material-ui/icons";
import GAConfirm from "../components/login/GAConfirm";
import OTPConfirm from "../components/login/OTPConfirm";
import {
    ENDPOINT_POST_LOGIN
} from "../settings/endpoint";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Login() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState("");
    const [gaCode, setGACode] = useState("");
    const [showGA, setShowGA] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    let query = useQuery();

    useEffect(() => {
        if (isLoggedIn()) {
            history.push("/");
        }
    }, [history]);

    const handleLogin = (e) => {
        if (e) {
            e.preventDefault();
        }
        setError(null);
        if (checkEmpty(email) || checkEmpty(password)) {
            setError(library.PLEASE_ENTER_EMAIL_AND_PASSWORD);
        } else {
            let deviceSecret = getDeviceSecret();
            if (!deviceSecret) {
                deviceSecret = makeID(64);
                setDeviceSecret(deviceSecret);
            }
            setLoading(true);
            post(
                ENDPOINT_POST_LOGIN, {
                    email,
                    password,
                    device: deviceInfo(),
                    gaCode,
                    emailOtp: otp,
                    secret: deviceSecret,
                },
                (data) => {
                    setAccessToken(data.accessToken);
                    if (query.get("return") === "swap") {
                        window.location.replace("/swap");
                    } else if (query.get("return") === RETURN_SAFE_KEY) {
                        window.location.reload();
                    } else {
                        window.location.replace("/assets");
                    }
                },
                (error) => {
                    const {
                        code
                    } = error;
                    setLoading(false);
                    if (code === "EMAIL_OTP_REQUIRED") {
                        setShowOTP(true);
                        setShowGA(false);
                    } else if (code === "GACODE_REQUIRED") {
                        setShowGA(true);
                        setShowOTP(false);
                    } else {
                        CustomToast("error", library[code]);
                    }
                }
            );
        }
    };

    useEffect(() => {
        if (gaCode || otp) handleLogin();
    }, [gaCode, otp]);

    return (
        // <LazyLoad>
        <
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
            library.LOGIN.toUpperCase()
        } < /Typography> <
        /div> <
        form onSubmit = {
            handleLogin
        }
        autoComplete = "off"
        noValidate >
        <
        div >
        <
        TextField required id = "username"
        name = "username"
        label = "Email"
        fullWidth placeholder = {
            library.PLEASE_ENTER_EMAIL
        }
        variant = "outlined"
        autoComplete = "on"
        className = "mb-20"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> <
        div style = {
            {
                position: "relative"
            }
        } >
        <
        TextField required id = "password"
        name = "password"
        label = {
            library.PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_PASSWORD
        }
        variant = "outlined"
        autoComplete = "on"
        className = "mb-20"
        type = {
            showPassword ? "input" : "password"
        }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> <
        IconButton aria - label = "toggle password visibility"
        onClick = {
            () => setShowPassword(!showPassword)
        }
        className = "eye-icon" >
        {
            showPassword ? < Visibility / > : < VisibilityOff / >
        } <
        /IconButton> <
        /div> <
        div className = "d-flex-ee" >
        <
        Link to = "forgot-password" > {
            library.FORGOT_PASSWORD
        } < /Link> <
        /div> <
        FormControl error = {
            error
        }
        className = "mt-20 mb-20" >
        <
        FormLabel > {
            error
        } & nbsp; < /FormLabel> <
        /FormControl> <
        div >
        <
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
                    library.LOGIN
                } < /div>
            )
        } <
        /Button> <
        /div> <
        /div> <
        /form>
        <
        Link to = "register" > {
            library.CREATE_NEW_ACCOUNT
        } < /Link> <
        /div> <
        /Container> <
        GAConfirm open = {
            showGA
        }
        _handleComplete = {
            (e) => {
                setGACode(e);
            }
        }
        /> <
        OTPConfirm open = {
            showOTP
        }
        _handleComplete = {
            (e) => setOtp(e)
        }
        /> <
        /div>
    );
}

export default Login;