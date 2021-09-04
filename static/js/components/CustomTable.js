import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    formatAmount,
    formatTime
} from "../settings/format";
import MobileDepositHistory from "./mobile/MobileDepositHistory";
import TransactionHash from "./others/TransactionHash";
import WalletAddress from "./others/WalletAddress";

function CustomTable({
    tableName,
    columns,
    actions,
    _fetchFunction,
    _handleCancel,
}) {
    const {
        setting,
        wallet
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const dispatch = useDispatch();
    const data = wallet[tableName];

    useEffect(() => {
        dispatch(_fetchFunction({
            page,
            pageSize
        }));
    }, [page, pageSize]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setPage(1);
    };

    return ( <
        > {
            tableName === "swapHistory" && ( <
                div className = "show-mobile swap-mobile-history" > {
                    data &&
                    (data.items.length > 0 ?
                        data.items.map((item, index) => ( <
                            Grid container key = {
                                index
                            }
                            className = "item" >
                            <
                            Grid item textAlign = "left"
                            xs = {
                                6
                            } >
                            <
                            div className = "id" > #{
                                item.id
                            } < /div> <
                            div className = "time" > {
                                formatTime(item.time)
                            } < /div> <
                            /Grid> <
                            Grid item className = "text-right"
                            xs = {
                                6
                            } >
                            <
                            div className = "base" >
                            -{
                                formatAmount(item.amount)
                            } {
                                item.base
                            } <
                            /div> <
                            div className = "quote color-green" >
                            +{
                                formatAmount(item.total)
                            } {
                                item.quote
                            } <
                            /div> <
                            small > {
                                library.FEE
                            }: {
                                formatAmount(item.fee)
                            } {
                                item.base
                            } <
                            /small> <
                            /Grid> <
                            /Grid>
                        )) :
                        library.lengthNO_RECORDS_FOUND)
                } <
                /div>
            )
        } {
            (tableName === "depositHistory" || tableName === "withdrawHistory") && ( <
                MobileDepositHistory data = {
                    data
                }
                _handleCancel = {
                    _handleCancel
                }
                />
            )
        } <
        TableContainer >
        <
        Table size = "small"
        aria - label = "custom pagination table" >
        <
        TableHead className = "hide-mobile" >
        <
        TableRow > {
            columns.map((item) => ( <
                TableCell key = {
                    item.key
                } > {
                    item.text
                } < /TableCell>
            ))
        } {
            actions && < TableCell > < /TableCell>} <
                /TableRow> <
                /TableHead> <
                TableBody className = "hide-mobile" > {
                    data &&
                    (data.itemCount !== 0 ? (
                        data.items.map((row, index) => ( <
                            TableRow key = {
                                index
                            } > {
                                columns.map((col) => {
                                    const {
                                        isAddress,
                                        isHash,
                                        isSub,
                                        key,
                                        isTime,
                                        isAmount,
                                        isHighLight,
                                        isCoin,
                                        isBase,
                                        isQuote,
                                    } = col;
                                    let coin = "";
                                    let value = row[col.key];
                                    let className = "";
                                    if (key === "id") {
                                        value = "#" + value;
                                    }
                                    if (isSub) {
                                        value = library[value];
                                    }
                                    if (isAddress) {
                                        value = < WalletAddress data = {
                                            row
                                        }
                                        />;
                                    }
                                    if (isHash) {
                                        value = < TransactionHash data = {
                                            row
                                        }
                                        />;
                                    }
                                    if (isTime) {
                                        value = formatTime(value);
                                    }
                                    if (isAmount) {
                                        value = formatAmount(value);
                                    }
                                    if (isHighLight) {
                                        className += " text-bold";
                                    }
                                    if (isCoin) {
                                        coin = row.coin;
                                    }
                                    if (isBase) {
                                        coin = row.base;
                                    }
                                    if (isQuote) {
                                        coin = row.quote;
                                    }
                                    return ( <
                                        TableCell className = {
                                            className
                                        }
                                        key = {
                                            col.key + row.index
                                        } >
                                        {
                                            value
                                        } {
                                            coin ? coin : null
                                        } <
                                        /TableCell>
                                    );
                                })
                            } {
                                actions && ( <
                                    TableCell > {
                                        actions.map((action) => {
                                            if (
                                                action.condition.includes(
                                                    row[action.conditionField]
                                                )
                                            ) {
                                                return ( <
                                                    Button style = {
                                                        {
                                                            width: 100,
                                                            height: 30,
                                                        }
                                                    }
                                                    key = {
                                                        action.key
                                                    }
                                                    onClick = {
                                                        () => action._handle(row.id)
                                                    }
                                                    color = "default"
                                                    variant = "outlined" >
                                                    {
                                                        action.text
                                                    } <
                                                    /Button>
                                                );
                                            }
                                            return null;
                                        })
                                    } <
                                    /TableCell>
                                )
                            } <
                            /TableRow>
                        ))
                    ) : ( <
                        TableRow >
                        <
                        TableCell colSpan = {
                            columns.length
                        } > {
                            library.NO_RECORDS_FOUND
                        } <
                        /TableCell> <
                        /TableRow>
                    ))
                } <
                /TableBody> <
                /Table> <
                /TableContainer> <
                TablePagination
            component = "div"
            rowsPerPageOptions = {
                [5, 10, 25, 50, 100]
            }
            colSpan = {
                columns.length
            }
            count = {
                data ? data.itemCount : 0
            }
            rowsPerPage = {
                pageSize
            }
            page = {
                page - 1
            }
            SelectProps = {
                {
                    inputProps: {
                        "aria-label": "rows per page"
                    },
                    native: true,
                }
            }
            onChangePage = {
                handleChangePage
            }
            onChangeRowsPerPage = {
                handleChangeRowsPerPage
            }
            /> <
            />
        );
    }

    export default CustomTable;