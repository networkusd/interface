import {
    Drawer,
    Paper,
    Typography
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    Form,
    Header,
    Icon,
    Segment,
    Button
} from "semantic-ui-react";
import {
    post
} from "../../utils/api";

function formatEmail(email) {
    var array1 = email.split("@");
    array1[0] = array1[0].slice(0, 2) + "***";
    var array2 = array1[1].split(".");
    array2[0] = "***";
    array2[1] = array2[1].slice(0, 2) + "...";
    return array1[0] + "@" + array2[0] + "." + array2[1];
}

function WithdrawVerification({
    open,
    close,
    coin,
    network,
    address,
    amount,
    memo,
    deviceSecret,
    _handleVerification,
    loading,
}) {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        data
    } = user;
    const [delayTime, setDelayTime] = useState(0);
    const [otp, setOtp] = useState("");
    const [gaCode, setGaCode] = useState("");
    const [disableButton, isDisableButton] = useState(false);

    useEffect(() => {
        setOtp("");
        setGaCode("");
        setDelayTime(0);
    }, [open]);

    useEffect(() => {
        if (open) {
            if (delayTime > 0) {
                setTimeout(() => {
                    setDelayTime(delayTime - 1);
                }, 1000);
            } else {
                isDisableButton(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayTime]);

    const sendOTP = () => {
        isDisableButton(true);
        post(
            `/fund-service/withdraw/send-otp`, {
                coin,
                network,
                address,
                amount,
                deviceSecret,
            },
            () => {
                setDelayTime(59);
            }
        );
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
        Paper style = {
            {
                width: 350,
            }
        }
        // className="verification-form"
        >
        <
        div className = "p-20" >
        <
        Typography variant = "h5" > {
            library.VERIFICATION
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
            close
        }
        inverted color = "grey" /
        >
        <
        /div> <
        div className = "p-20" >
        <
        Form >
        <
        Form.Input label = {
            library.CODE_WILL_BE_SENT_TO +
            " " +
            (data ? formatEmail(data.email) : "")
        }
        placeholder = {
            library.EMAIL_VERIFICATION_CODE
        }
        value = {
            otp
        }
        action = { <
            Button
            onClick = {
                sendOTP
            }
            disabled = {
                disableButton
            }
            className = "submit-btn" >
            {
                delayTime === 0 ? library.SEND_CODE : delayTime + "s"
            } <
            /Button>
        }
        onChange = {
            (e, {
                value
            }) => setOtp(value)
        }
        type = "text"
        maxLength = {
            6
        }
        /> <
        Form.Input label = {
            library.ENTER_GA_CODE
        }
        placeholder = {
            library.GA_CODE
        }
        value = {
            gaCode
        }
        onChange = {
            (e, {
                value
            }) => setGaCode(value)
        }
        type = "text"
        maxLength = {
            6
        }
        /> <
        Button onClick = {
            () => {
                _handleVerification(otp, gaCode);
            }
        }
        fluid className = "submit-btn"
        disabled = {!gaCode || !otp || loading
        }
        loading = {
            loading
        } >
        {
            library.SUBMIT
        } <
        /Button> <
        /Form> <
        /div> <
        /Paper> <
        /Drawer>
    );
}

export default WithdrawVerification;