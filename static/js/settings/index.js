import {
    formatAddress
} from "./format";
import {
    toast
} from "react-toastify";
import {
    Icon
} from "semantic-ui-react";

export const makeID = (length) => {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
export const deviceInfo = () => {
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
};

export const isBeta = window.location.hostname === "beta.fastwallet.io";
export const isProduction = window.location.hostname === "fastwallet.io";
export const isDev = window.location.hostname === "fastwallet.spdev.co";
export const S3_URL = "/images";
export const API =
    isProduction || isBeta ?
    "https://api.fastwallet.io" :
    "https://fastwalletapi.spdev.co";
export const ACCESS_TOKEN_KEY = "CBt3gpbqeMdWPNG1";
export const DEVICE_KEY = "uU5tEUmAgvBWArsv";
export const SCOPES_KEY = "AhBcmvr1EkMdPnL5";
export const RETURN_LUS_SHOPPING_KEY =
    "17lVCSDKjBrgRsaQFqpnZYY45Ea1DqWDU3JtblCSgSsaYrOG15Y1wMaBczjRRtLs";
export const RETURN_SAFE_KEY =
    "XjBWmk6sBBUYdbb6smww1TMyLSC0YrEq8vCpcTSG1xcT7RDCpZyfDZzLedqNSaA8";

export let SAFE_URL = "http://localhost:3005";
if (isDev) {
    SAFE_URL = "https://cpu.spdev.co";
}
if (isBeta) {
    SAFE_URL = "https://beta.cashpickup.net";
}
if (isProduction) {
    SAFE_URL = "https://cashpickup.net";
}
export const RETURN_TO_EASY_BUY =
    "aHR0cHM6Ly9sYXVuY2hwYWQu0083YmluYW5jZS5jb20vZW4vbGF1bmNocG9vbC9PR19DSFo";

export const DISCLAIMER_SAFE_CPU_LINK = "/documents/SAFE_CPU_DISCLAIMER.pdf";

export function getLinkHash(data) {
    if (data) {
        const {
            type,
            network,
            txId
        } = data;
        if (txId) {
            if (type === "EXTERNAL") {
                let address = null;
                if (network === "TRC20" || network === "TRX") {
                    address = `https://tronscan.org/#/transaction/${txId}`;
                }
                if (network === "ERC20" || network === "ETH") {
                    address = `https://etherscan.io/tx/${txId}`;
                }
                if (network === "EOS") {
                    address = `https://bloks.io/transaction/${txId}`;
                }
                if (network === "BTC") {
                    address = `https://www.blockchain.com/btc/tx/${txId}`;
                }
                return ( <
                    a href = {
                        address
                    }
                    target = "_blank"
                    rel = "noreferrer" > {
                        formatAddress(data.txId)
                    } <
                    /a>
                );
            } else {
                return formatAddress(txId);
            }
        } else return null;
    } else {
        return null;
    }
}

export const CustomToast = (type, content) => {
    if (type === "error") {
        toast( <
            div style = {
                {
                    display: "flex",
                    alignContent: "center",
                }
            } >
            <
            div style = {
                {
                    color: "#fe644e"
                }
            } >
            <
            Icon name = "x"
            size = "large" / >
            <
            /div> <
            div > {
                content
            } < /div> <
            /div>
        );
    } else {
        toast( <
            div style = {
                {
                    display: "flex",
                    alignContent: "center",
                }
            } >
            <
            div style = {
                {
                    color: "#03a89d"
                }
            } >
            <
            Icon name = "checkmark"
            size = "large" / >
            <
            /div> <
            div >
            <
            label className = "title" > {
                content
            }. < /label> <
            /div> <
            /div>
        );
    }
};