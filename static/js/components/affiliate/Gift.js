import {
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Table,
    Typography,
    Paper,
} from "@material-ui/core";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import moment from "moment";
import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    _getGiftRewards
} from "../../actions/userActions";
import {
    formatAmount
} from "../../settings/format";

function Gift() {
    const {
        user,
        setting
    } = useSelector((state) => state);
    const {
        giftRewards
    } = user;
    const {
        library
    } = setting;
    const dispatch = useDispatch();
    const {
        TIME,
        AMOUNT,
        MEMBER
    } = library;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        dispatch(_getGiftRewards(page, pageSize));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize, page]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setPage(0);
    };

    return ( <
        >
        <
        Typography variant = "h5"
        className = "mb-30" > {
            library.GIFT_HISTORY
        } <
        /Typography> <
        Paper >
        <
        TableContainer >
        <
        Table aria - label = "custom pagination table" >
        <
        TableHead >
        <
        TableRow >
        <
        TableCell > {
            TIME
        } < /TableCell> <
        TableCell > {
            AMOUNT
        } < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            giftRewards &&
            (giftRewards.itemCount !== 0 ? (
                giftRewards.items.map((row) => ( <
                    TableRow key = {
                        row.id
                    } >
                    <
                    TableCell className = "text-bold"
                    component = "th"
                    scope = "row" >
                    {
                        moment(row.time).format("YYYY MM DD, mm:hh:ss")
                    } <
                    /TableCell> <
                    TableCell > {
                        formatAmount(row.amount)
                    } {
                        row.coin
                    } <
                    /TableCell> <
                    /TableRow>
                ))
            ) : ( <
                TableRow >
                <
                TableCell colSpan = {
                    2
                } > {
                    library.NO_RECORDS_FOUND
                } <
                /TableCell> <
                /TableRow>
            ))
        } <
        /TableBody> <
        TableFooter >
        <
        TableRow >
        <
        TablePagination rowsPerPageOptions = {
            [5, 10, 25, {
                label: "All",
                value: -1
            }]
        }
        colSpan = {
            3
        }
        count = {
            giftRewards && giftRewards.itemCount
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
        ActionsComponent = {
            TablePaginationActions
        }
        /> <
        /TableRow> <
        /TableFooter> <
        /Table> <
        /TableContainer> <
        /Paper> <
        />
    );
}

export default Gift;