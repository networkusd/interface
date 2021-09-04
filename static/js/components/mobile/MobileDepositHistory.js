import {
    Avatar,
    Typography,
    Grid,
    Divider,
    Drawer,
    Paper,
    Button,
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    Header,
    Icon,
    Segment
} from "semantic-ui-react";
import {
    S3_URL
} from "../../settings";
import {
    formatAmount,
    formatTime
} from "../../settings/format";

function TransactionDetail({
    selectedItem,
    _close,
    _handleCancel
}) {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;

    return ( <
        Drawer anchor = {
            "top"
        }
        open = {
            selectedItem
        }
        className = {
            "custom-modal-vk"
        } >
        <
        Paper style = {
            {
                maxWidth: 450,
                minWidth: 300,
                padding: 20,
            }
        } >
        <
        div >
        <
        Typography > #{
            selectedItem && selectedItem.id
        } - {
            " "
        } <
        small > {
            library[selectedItem && selectedItem.status]
        } < /small> <
        /Typography> <
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
            _close
        }
        inverted color = "grey" /
        >
        <
        /div> <
        div style = {
            {
                wordBreak: "break-all",
            }
        } >
        <
        div style = {
            {
                opacity: 0.6
            }
        } > {
            library.AMOUNT
        } < /div> <
        div style = {
            {
                textAlign: "right"
            }
        } > {
            selectedItem && formatAmount(selectedItem.amount)
        } {
            " "
        } {
            selectedItem && selectedItem.coin
        } <
        /div> <
        div style = {
            {
                opacity: 0.6
            }
        } > {
            library.FEE
        } < /div> <
        div style = {
            {
                textAlign: "right"
            }
        } > {
            selectedItem && formatAmount(selectedItem.fee)
        } {
            " "
        } {
            selectedItem && selectedItem.coin
        } <
        /div> <
        div style = {
            {
                opacity: 0.6
            }
        } > {
            library.ADDRESS
        } < /div> <
        div style = {
            {
                textAlign: "right"
            }
        } > {
            selectedItem && selectedItem.address
        } <
        /div> {
            selectedItem && selectedItem.addressTag && ( <
                >
                <
                div style = {
                    {
                        opacity: 0.6
                    }
                } > Memo < /div> <
                div style = {
                    {
                        textAlign: "right"
                    }
                } > {
                    selectedItem && selectedItem.addressTag
                } <
                /div> <
                />
            )
        } <
        div style = {
            {
                opacity: 0.6
            }
        } > {
            library.TYPE
        } < /div> <
        div style = {
            {
                textAlign: "right"
            }
        } > {
            " "
        } {
            library[selectedItem && selectedItem.type]
        } - {
            " "
        } {
            selectedItem && selectedItem.network
        } <
        /div> {
            selectedItem && selectedItem.txId && ( <
                >
                <
                div style = {
                    {
                        opacity: 0.6
                    }
                } > Hash < /div> <
                div style = {
                    {
                        textAlign: "right"
                    }
                } > {
                    selectedItem && selectedItem.txId
                } <
                /div> <
                />
            )
        } <
        div style = {
            {
                opacity: 0.6
            }
        } > {
            library.TIME
        } < /div> <
        div style = {
            {
                textAlign: "right"
            }
        } > {
            formatTime(selectedItem && selectedItem.time)
        } <
        /div> <
        /div> <
        div style = {
            {
                textAlign: "right",
                marginTop: 20
            }
        } > {
            selectedItem &&
            (selectedItem.status === "WAITING_CONFIRM" ||
                selectedItem.status === "PENDING") && ( <
                Button onClick = {
                    () => _handleCancel(selectedItem.id)
                }
                variant = "outlined"
                color = "default" >
                {
                    library.CANCEL
                } <
                /Button>
            )
        } <
        /div> <
        /Paper> <
        /Drawer>
    );
}

function MobileDepositHistory({
    data,
    _handleCancel
}) {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [selectedItem, setSelectedItem] = useState(null);

    return ( <
        div className = "show-mobile" > {
            data &&
            data.items.map((item, index) => ( <
                Grid container key = {
                    index
                }
                justify = "space-between"
                spacing = {
                    2
                }
                className = "pl-10 pr-10"
                onClick = {
                    () => setSelectedItem(item)
                }
                style = {
                    {
                        cursor: "pointer",
                    }
                }
                alignItems = "center" >
                <
                Grid item >
                <
                Grid container justify = "flex-start"
                alignItems = "center" >
                <
                Grid item >
                <
                Avatar src = {
                    `${S3_URL}/coins/${item.coin.replace(" ", "_")}.png`
                }
                style = {
                    {
                        width: 25,
                        height: 25,
                        marginRight: 5,
                    }
                }
                /> <
                /Grid> <
                Grid id >
                <
                Typography className = "text-bold" > {
                    formatAmount(item.amount)
                } {
                    item.coin
                } <
                /Typography> <
                /Grid> <
                /Grid> <
                small className = "opacity-06" > {
                    formatTime(item.time)
                } < /small> <
                /Grid> <
                Grid item style = {
                    {
                        textAlign: "right"
                    }
                } >
                <
                div > {
                    library[item.status]
                } < /div> <
                small className = "opacity-06" > {
                    library[item.type]
                } - {
                    item.network
                } <
                /small> <
                /Grid> <
                Grid container >
                <
                Grid item xs = {
                    12
                } >
                <
                Divider style = {
                    {
                        marginBottom: 8
                    }
                }
                /> <
                /Grid> <
                /Grid> <
                /Grid>
            ))
        } <
        TransactionDetail selectedItem = {
            selectedItem
        }
        _close = {
            () => setSelectedItem(null)
        }
        _handleCancel = {
            (id) => {
                setSelectedItem(null);
                _handleCancel(id);
            }
        }
        /> <
        /div>
    );
}

export default MobileDepositHistory;