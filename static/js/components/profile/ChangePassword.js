import {
    Typography,
    Button,
    Drawer,
    Grid
} from "@material-ui/core";
import React, {
    useState
} from "react";
// import LazyLoad from "react-lazyload";
import {
    useSelector
} from "react-redux";
import {
    Message
} from "semantic-ui-react";
import CustomTextField from "../CustomTextField";
import {
    ACCESS_TOKEN_KEY,
    CustomToast,
    deviceInfo
} from "../../settings";
import {
    checkEmpty,
    checkLength
} from "../../settings/validate";
import {
    put
} from "../../utils/api";
import {
    ENDPOINT_PUT_CHANGE_PASSWORD
} from "../../settings/endpoint";

function ChangePassword({
    open,
    _close
}) {
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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const _handleChangePassword = (e) => {
        e.preventDefault();
        const oldPassword = e.target.oldPassword.value;
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;
        const gaCode = gaEnable ? e.target.gaCode.value : "";
        setError(null);
        if (checkEmpty(oldPassword)) {
            setError("PLEASE_ENTER_OLD_PASSWORD");
        } else if (checkEmpty(newPassword)) {
            setError("PLEASE_ENTER_NEW_PASSWORD");
        } else if (checkLength(newPassword, 8)) {
            setError("PLEASE_ENTER_NEW_PASSWORD_MORE_THAN");
        } else if (newPassword.length > 16) {
            setError("PLEASE_ENTER_NEW_PASSWORD_LESS_THAN");
        } else if (checkEmpty(confirmPassword)) {
            setError("PLEASE_ENTER_CONFIRM_PASSWORD");
        } else if (newPassword !== confirmPassword) {
            setError("CONFIRM_PASSWORD_VS_NEW_PASSWORD");
        } else if (gaEnable && checkEmpty(gaCode)) {
            setError("PLEASE_ENTER_GA_CODE");
        } else if (gaEnable && gaCode.length !== 6) {
            setError("WRONG_GACODE");
        } else {
            setLoading(true);
            put(
                ENDPOINT_PUT_CHANGE_PASSWORD, {
                    oldPassword,
                    password: newPassword,
                    gaCode,
                    device: deviceInfo(),
                },
                () => {
                    CustomToast("success", library.CHANGE_PASSWORD_SUCCESS);
                    localStorage.removeItem(ACCESS_TOKEN_KEY);
                    window.location.replace("/login");
                },
                (error) => {
                    setError(error.code);
                    setLoading(false);
                }
            );
        }
    };

    return ( <
        Drawer anchor = {
            "left"
        }
        open = {
            open
        }
        className = {
            "custom-modal-vk"
        } >
        <
        div className = "bg-white p-20  min-h-400 min-w-300" >
        <
        Typography variant = "h4"
        textAlign = "center" > {
            library.CHANGE_PASSWORD
        } <
        /Typography> <
        form onSubmit = {
            _handleChangePassword
        }
        className = "mt-20"
        noValidate >
        <
        CustomTextField required id = "oldPassword"
        name = "oldPassword"
        label = {
            library.OLD_PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_PASSWORD
        }
        type = {
            showOldPassword ? "input" : "password"
        }
        maxLength = "128"
        isPassword = {
            true
        }
        _showHidePassword = {
            () => setShowOldPassword(!showOldPassword)
        }
        showPassword = {
            showOldPassword
        }
        /> <
        CustomTextField required id = "newPassword"
        name = "newPassword"
        label = {
            library.NEW_PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_NEW_PASSWORD
        }
        type = {
            showNewPassword ? "input" : "password"
        }
        maxLength = "128"
        isPassword = {
            true
        }
        _showHidePassword = {
            () => setShowNewPassword(!showNewPassword)
        }
        showPassword = {
            showNewPassword
        }
        /> <
        CustomTextField required id = "confirmPassword"
        name = "confirmPassword"
        label = {
            library.CONFIRM_NEW_PASSWORD
        }
        fullWidth placeholder = {
            library.PLEASE_ENTER_CONFIRM_PASSWORD
        }
        type = {
            showConfirmPassword ? "input" : "password"
        }
        maxLength = "128"
        isPassword = {
            true
        }
        _showHidePassword = {
            () =>
            setShowConfirmPassword(!showConfirmPassword)
        }
        showPassword = {
            showConfirmPassword
        }
        /> {
            gaEnable && ( <
                CustomTextField label = {
                    library.GA_CODE
                }
                type = "input"
                placeholder = {
                    library.PLEASE_ENTER_GA_CODE
                }
                id = "gaCode"
                maxLength = "6"
                fullWidth /
                >
            )
        } {
            error && < Message error content = {
                library[error]
            }
            />} <
            Grid container spacing = {
                2
            }
            className = "mt-20" >
                <
                Grid item xs = {
                    6
                } >
                <
                Button
            fullWidth
            disabled = {
                loading
            }
            type = "button"
            variant = "outlined"
            onClick = {
                    _close
                } >
                {
                    library.CANCEL
                } <
                /Button> <
                /Grid> <
                Grid item xs = {
                    6
                } >
                <
                Button
            className = "submit-btn"
            fullWidth
            disabled = {
                loading
            }
            type = "submit" >
                {
                    library.CONFIRM
                } <
                /Button> <
                /Grid> <
                /Grid> <
                /form> <
                /div> <
                /Drawer>
        );
    }

    export default ChangePassword;