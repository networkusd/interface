import {
    Drawer,
    Paper,
    Typography,
    Divider,
    Button
} from "@material-ui/core";
import React from "react";
import {
    useSelector
} from "react-redux";
import {
    Header,
    Icon,
    Segment
} from "semantic-ui-react";
import {
    formatAmount
} from "../../settings/format";

function WithdrawConfirm({
    openConfirm,
    amount,
    coin,
    address,
    withdrawFee,
    total,
    addressTag,
    _onClose,
    _handleConfirm,
}) {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    return ( <
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
        Paper style = {
            {
                // backgroundColor: "var(--light-blue)",
                maxWidth: 450,
                minWidth: 300,
                padding: 20,
            }
        } >
        <
        div className = "p-20" >
        <
        Typography variant = "h5" > {
            library.WITHDRAW_CONFIRM
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
            _onClose
        }
        inverted color = "grey" /
        >
        <
        /div> <
        Paper className = "p-20" >
        <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
            }
        } >
        <
        p style = {
            {
                opacity: 0.6
            }
        } > {
            library.AMOUNT
        } < /p> <
        p > {
            formatAmount(amount)
        } {
            coin
        } <
        /p> <
        /div> <
        div >
        <
        p style = {
            {
                opacity: 0.6,
                marginBottom: 15
            }
        } > {
            library.WALLET_ADDRESS
        } <
        /p> <
        /div> <
        p style = {
            {
                textAlign: "right"
            }
        } > {
            address
        } {
            addressTag ? "- Memo: " + addressTag : null
        } <
        /p> <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
            }
        } >
        <
        p style = {
            {
                opacity: 0.6
            }
        } > {
            library.WITHDRAW_FEE
        } < /p> <
        p > {
            formatAmount(withdrawFee)
        } {
            coin
        } <
        /p> <
        /div> <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
            }
        } >
        <
        p style = {
            {
                opacity: 0.6
            }
        } > {
            library.YOU_WILL_GET
        } < /p> <
        p > {
            formatAmount(total)
        } {
            coin
        } <
        /p> <
        /div> <
        /Paper> <
        Button onClick = {
            _handleConfirm
        }
        className = "submit-btn mt-20"
        type = "button"
        fullWidth >
        {
            library.CONFIRM
        } <
        /Button> <
        /Paper> <
        /Drawer>
    );
}

export default WithdrawConfirm;