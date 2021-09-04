function formatBigMoney(str) {
    const num = Math.abs(Number(str));
    let result;
    if (num >= 1.0e9) {
        // Nine Zeroes for Billions
        const decimal = Math.floor((num - Math.floor(num / 1.0e9) * 1.0e9) / 1.0e7);
        result =
            Math.floor(num / 1.0e9) +
            "." +
            (decimal > 9 ? decimal : "0" + decimal) +
            "B";
    } else {
        if (num >= 1.0e6) {
            // Six Zeroes for Millions
            const decimal = Math.floor(
                (num - Math.floor(num / 1.0e6) * 1.0e6) / 1.0e4
            );
            result =
                Math.floor(num / 1.0e6) +
                "." +
                (decimal > 9 ? `${decimal}` : `0${decimal}`) +
                "M";
        } else {
            if (num >= 1.0e3) {
                // Three Zeroes for Thousands
                result = Math.floor(num / 1.0e3) + "K";
            }
        }
    }
    return result;
}

module.exports = {
    formatAmount: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 8) : "";
        if (!x1) x1 = "0";
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    formatShortAmount: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 8) : "";
        if (!x1) x1 = "0";
        if (x1.length > 6) {
            return formatBigMoney(x1);
        }
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    formatAmountInput: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 8) : "";
        if (!x1) x1 = "0";
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    formatMoney: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 6) : "";
        if (!x1) x1 = "0";
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    formatShortMoney: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 2) : "";
        if (!x1) x1 = "0";
        if (x1.length > 6) {
            return formatBigMoney(x1);
        }
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    deleteText: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        return deleteText;
    },
    formatTotal: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 2) : "";
        if (!x1) x1 = "0";
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
    formatTime: (time) => {
        const temp = new Date(time);
        var dateString =
            temp.getFullYear() +
            "-" +
            ("0" + (temp.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + temp.getDate()).slice(-2) +
            " " +
            ("0" + temp.getHours()).slice(-2) +
            ":" +
            ("0" + temp.getMinutes()).slice(-2) +
            ":" +
            ("0" + temp.getSeconds()).slice(-2);
        return dateString;
    },
    formatStakingTime: (time) => {
        const temp = new Date(time);
        var dateString =
            temp.getFullYear() +
            "-" +
            ("0" + (temp.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + temp.getDate()).slice(-2);
        return dateString;
    },
    formatDate: (time) => {
        const temp = new Date(time);
        var dateString =
            ("0" + temp.getDate()).slice(-2) +
            "-" +
            ("0" + (temp.getMonth() + 1)).slice(-2) +
            "-" +
            temp.getFullYear();
        return dateString;
    },
    formatAddress: (string) => {
        if (string) {
            if (string.length > 20) {
                return string.slice(0, 10) + "..." + string.slice(string.length - 10);
            } else {
                return string;
            }
        } else return null;
    },
    formatRoundAmount: (str) => {
        return Math.round(parseFloat(str) * 10 ** 8) / 10 ** 8;
    },
    formatUSD: (str) => {
        str += "";
        const deleteText = str.replace(/[^\d.]/g, ""); //clear text
        const x = deleteText.split(".");
        let x1 = x[0];
        const x2 = x[1];
        const x3 = x.length > 1 ? "." + x2.slice(0, 2) : "";
        if (!x1) x1 = "0";
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1,$2");
        }
        let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
        return result;
    },
};