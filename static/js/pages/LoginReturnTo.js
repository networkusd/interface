import {
    Button,
    Avatar,
    Divider,
    Typography,
    Grid,
    Container,
} from "@material-ui/core";
import React, {
    useState
} from "react";
import CheckIcon from "@material-ui/icons/Check";
import {
    useSelector
} from "react-redux";
import {
    S3_URL,
    SAFE_URL
} from "../settings";
import {
    getAccessToken,
    logoutReturnTo
} from "../utils/auth";
import {
    DISCLAIMER_SAFE_CPU_LINK
} from "../settings/index";

function LoginReturnTo() {
    const {
        user
    } = useSelector((state) => state);
    const {
        information
    } = user;
    const [checked, setChecked] = useState(false);

    const _handleConfirm = () => {
        window.location.replace(`${SAFE_URL}/login?token=${getAccessToken()}`);
    };

    const _handleLogout = () => {
        logoutReturnTo();
    };

    return ( <
        >
        <
        div className = "login" >
        <
        Container maxWidth = "sm"
        className = "login-form"
        style = {
            {
                padding: 0
            }
        } >
        <
        div vertical style = {
            {
                borderBottom: "1px solid rgba(255,255,255, 0.12)",
                display: "flex",
                alignItems: "center",
                padding: 10,
                width: "100%",
            }
        } >
        <
        Avatar src = {
            `${S3_URL}/logo.png`
        }
        style = {
            {
                width: 20,
                height: 20,
                padding: 0,
                margin: "unset"
            }
        }
        /> <
        div style = {
            {
                margin: "0 10px"
            }
        } > Stablecoins < /div> <
        small style = {
            {
                opacity: 0.8
            }
        } >
        Most trust and secure cryptocurrency wallet <
        /small> <
        /div> <
        div style = {
            {
                width: "100%",
                textAlign: "center"
            }
        }
        className = "p-20" >
        <
        Avatar src = {
            `${S3_URL}/coins/CPU.png`
        }
        style = {
            {
                width: 80,
                height: 80,
                padding: 0,
                margin: "auto",
                marginBottom: 10,
            }
        }
        /> <
        Typography variant = "h5" > Login to SAFE CPU < /Typography> <
        /div> <
        div style = {
            {
                width: "100%"
            }
        }
        className = "pl-20 pr-20" >
        <
        Divider style = {
            {
                backgroundColor: "rgba(255,255,255,0.12)",
                marginTop: 10,
            }
        }
        /> <
        div className = "account-item"
        onClick = {
            _handleConfirm
        } >
        <
        div style = {
            {
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(3, 168, 157, 0.9)",
                borderRadius: "50%",
                marginRight: "1em",
                color: "#fff",
                fontWeight: 600,
            }
        } >
        {
            information && information.displayName.charAt(0).toUpperCase()
        } <
        /div> <
        div >
        <
        Typography align = "left"
        varian = "h6"
        style = {
            {
                fontWeight: 600
            }
        } >
        {
            information && information.displayName
        } <
        /Typography> <
        Typography align = "left"
        variant = "body2"
        style = {
            {
                opacity: 0.8
            }
        } >
        {
            information && information.email
        } <
        /Typography> <
        /div> <
        /div> <
        Divider style = {
            {
                backgroundColor: "rgba(255,255,255,0.12)",
            }
        }
        /> <
        div vertical className = "account-item"
        onClick = {
            _handleLogout
        } >
        <
        div style = {
            {
                width: 28,
                marginRight: "1em"
            }
        } >
        <
        Avatar style = {
            {
                width: 28,
                height: 28,
                margin: "auto",
                padding: 0
            }
        }
        /> <
        /div>
        Use another account <
        /div> <
        Divider style = {
            {
                backgroundColor: "rgba(255,255,255,0.12)",
                marginBottom: 10,
            }
        }
        /> <
        /div> <
        div className = "p-20" >
        <
        Typography > Stablecoins will share < /Typography> <
        Grid container className = "opacity-08" >
        <
        Grid item xs = {
            6
        }
        style = {
            {
                display: "flex",
                alignItems: "center",
                padding: "0.5em 0",
            }
        } >
        <
        CheckIcon style = {
            {
                marginRight: "0.2em",
                fontWeight: 600,
                fill: "#03a89d",
            }
        }
        />{" "}
        Your username <
        /Grid> <
        Grid item xs = {
            6
        }
        style = {
            {
                display: "flex",
                alignItems: "center",
                padding: "0.5em 0",
            }
        } >
        <
        CheckIcon style = {
            {
                marginRight: "0.2em",
                fontWeight: 600,
                fill: "#03a89d",
            }
        }
        />{" "}
        Your email <
        /Grid> <
        Grid item xs = {
            6
        }
        style = {
            {
                display: "flex",
                alignItems: "center",
                padding: "0.5em 0",
            }
        } >
        <
        CheckIcon style = {
            {
                marginRight: "0.2em",
                fontWeight: 600,
                fill: "#03a89d",
            }
        }
        />{" "}
        Your balances <
        /Grid> <
        Grid item xs = {
            6
        }
        style = {
            {
                display: "flex",
                alignItems: "center",
                padding: "0.5em 0",
            }
        } >
        <
        CheckIcon style = {
            {
                marginRight: "0.2em",
                fontWeight: 600,
                fill: "#03a89d",
            }
        }
        />{" "}
        Your transactions <
        /Grid> <
        /Grid> <
        /div> <
        div > < /div> <
        div className = "p-20 text-left" >
        <
        div > Before using this website, you can review: < /div> <
        br / >
        <
        div >
        <
        a href = {
            DISCLAIMER_SAFE_CPU_LINK
        }
        target = "_blank"
        style = {
            {
                color: "#fff",
            }
        }
        rel = "noreferrer" >
        1. Safe CPU’ s privacy policy and terms of service. <
        /a> <
        /div> <
        div >
        <
        a href = "/documents/FastWallet_DISCLAIMER.pdf"
        target = "_blank"
        style = {
            {
                color: "#fff",
            }
        }
        rel = "noreferrer" >
        2. Stablecoins Disclaimer. <
        /a> <
        /div> <
        /div> <
        div className = "p-20" >
        <
        Button fullWidth
        // style={{
        //   color: "#fff",
        //   backgroundColor: "rgba(3, 168, 157, 1)",
        // }}
        color = "inherit"
        onClick = {
            _handleConfirm
        } >
        Accept <
        /Button> <
        /div> <
        /Container> <
        /div> <
        />
    );
}

export default LoginReturnTo;