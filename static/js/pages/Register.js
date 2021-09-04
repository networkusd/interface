import {
    Avatar,
    Checkbox,
    Container,
    IconButton,
    TextField,
    Typography,
    Button,
    FormControl,
    FormLabel,
    CircularProgress,
} from "@material-ui/core";
import {
    VisibilityOff,
    Visibility
} from "@material-ui/icons";
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
    useParams
} from "react-router-dom";
import {
    CustomToast
} from "../settings";
import {
    checkEmpty,
    checkEmail,
    checkLength
} from "../settings/validate";
import {
    post
} from "../utils/api";
import {
    isLoggedIn
} from "../utils/auth";
import {
    deleteText
} from "../settings/format";

function Register() {
    const {
        id
    } = useParams();
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [referral, setReferral] = useState(id ? id : "");
    const history = useHistory();
    const [checked, setChecked] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isLoggedIn()) {
            history.push("/");
        }
    }, [history]);

    const _handleRegister = (e) => {
        e.preventDefault();
        let checkE = false;
        let checkP = false;
        setError(null);
        setLoading(true);
        if (checkEmpty(email)) setError(library.PLEASE_ENTER_EMAIL);
        else if (checkEmail(email)) setError(library.INVALID_EMAIL);
        else if (checkEmpty(password)) setError(library.PLEASE_ENTER_PASSWORD);
        else if (checkLength(password, 8))
            setError(library.PLEASE_ENTER_PASSWORD_MORE_THAN);
        else if (password.length > 16)
            setError(library.PLEASE_ENTER_PASSWORD_LESS_THAN);
        else {
            checkP = true;
            checkE = true;
        }
        if (checkE && checkP) {
            if (referral.trim() !== "") {
                if (checked) {
                    post(
                        `/user-service/user/register`, {
                            email,
                            password,
                            referralId: referral,
                        },
                        () => {
                            CustomToast("success", library.REGISTER_SUCCESS);
                            setTimeout(() => {
                                history.push("/login");
                                setLoading(false);
                            }, 1000);
                        },
                        (err) => {
                            setLoading(false);
                            setError(library[err.code]);
                        }
                    );
                } else {
                    setLoading(false);
                    setError(library.PLEASER_CHECK_TOS);
                }
            } else {
                setLoading(false);
                setError(library.PLEASE_ENTER_REFERRAL);
            }
        } else {
            setLoading(false);
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
            library.REGISTER.toUpperCase()
        } < /Typography> <
        /div> <
        form onSubmit = {
            _handleRegister
        }
        noValidate >
        <
        TextField autoComplete = "off"
        required label = "Email"
        fullWidth placeholder = {
            library.PLEASE_ENTER_EMAIL
        }
        variant = "outlined"
        className = "mb-20"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        maxLength = "128"
        value = {
            email
        }
        /> <
        div style = {
            {
                position: "relative"
            }
        } >
        <
        TextField autoComplete = "new-password"
        required label = {
            library.PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_EMAIL
        }
        variant = "outlined"
        className = "mb-20"
        type = {
            showPassword ? "input" : "password"
        }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        maxLength = "128"
        value = {
            password
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
        TextField required id = "new_referral"
        name = "new_referral"
        label = {
            library.REFERRAL_ID
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_REFERRAL
        }
        variant = "outlined"
        className = "mb-20"
        onChange = {
            (e) => setReferral(deleteText(e.target.value))
        }
        maxLength = "128"
        autoComplete = "off"
        value = {
            referral
        }
        /> <
        div className = "d-flex-sbt" >
        <
        Checkbox checked = {
            checked
        }
        onChange = {
            (e) => setChecked(e.target.checked)
        }
        name = "checkedA"
        color = "default" /
        >
        <
        p style = {
            {
                marginLeft: 10,
                fontSize: "0.9em"
            }
        } > {
            library.AGREE_TOS
        } {
            " "
        } <
        a href = "/terms-of-service"
        target = "_blank" > {
            library.fastwallet_TOS
        } <
        /a>{" "} {
            "&"
        } {
            " "
        } <
        a href = "/policy"
        target = "blank" > {
            library.PRIVACY_AND_POLICY
        } <
        /a>
        . <
        /p> <
        /div> <
        FormControl error = {
            error
        }
        className = "mb-20 mt-20" >
        <
        FormLabel > {
            error
        } & nbsp; < /FormLabel> <
        /FormControl> <
        Button type = "submit"
        className = "submit-btn mt-30"
        disabled = {
            loading
        } > {
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
                    library.CREATE_NEW_ACCOUNT
                } < /div>
            )
        } <
        /Button> <
        /form> <
        div className = "login-footer" >
        <
        Link to = "/login" > {
            library.HAVE_A_ACCOUNT
        } < /Link> <
        /div> <
        /Container> <
        /div>
    );
}

export default Register;