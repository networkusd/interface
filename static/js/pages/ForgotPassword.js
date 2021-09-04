import React, {
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Link
} from "react-router-dom";
import {
    get
} from "../utils/api";
import {
    checkEmail
} from "../settings/validate";
import {
    Avatar,
    TextField,
    Typography,
    Button,
    Container,
    CircularProgress,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import {
    CustomToast
} from "../settings";
import {
    ENDPOINT_GET_FORGOT_PASSWORD
} from "../settings/endpoint";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [error, setError] = useState(null);

    const _handleForgotPassword = (e) => {
        e.preventDefault();
        setError(null);
        if (checkEmail(email)) {
            setError(library.INVALID_EMAIL);
        } else {
            setLoading(true);
            get(
                `${ENDPOINT_GET_FORGOT_PASSWORD}/${email}`,
                () => {
                    CustomToast("success", library.FORGOT_PASSWORD_SUCCESS);
                    setLoading(false);
                },
                (error) => {
                    setLoading(false);
                    setError(library[error.code]);
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
            library.FORGOT_PASSWORD.toUpperCase()
        } <
        /Typography> <
        /div> <
        form onSubmit = {
            _handleForgotPassword
        }
        noValidate >
        <
        TextField autoComplete = "off"
        required label = "Email"
        fullWidth placeholder = {
            library.PLEASE_ENTER_EMAIL
        }
        variant = "outlined"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        maxLength = "128"
        value = {
            email
        }
        /> <
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
                    library.CONFIRM
                } < /div>
            )
        } <
        /Button> <
        /form>
        <
        Link to = "/login" > Remember password < /Link> <
        /div> <
        /Container> <
        /div>
    );
}

export default ForgotPassword;