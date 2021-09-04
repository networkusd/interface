import {
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Table,
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
    _getAirdrop
} from "../../actions/userActions";
import {
    formatAmount
} from "../../settings/format";

function AirdropCommission() {
    const {
        user,
        setting
    } = useSelector((state) => state);
    const {
        airdropRewards
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
        dispatch(_getAirdrop(page, pageSize));
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
            library.AIRDROP_HISTORY
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
            MEMBER
        } < /TableCell> <
        TableCell > {
            AMOUNT
        } < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            airdropRewards &&
            (airdropRewards.itemCount !== 0 ? (
                airdropRewards.items.map((row) => ( <
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
                        row.note
                    } < /TableCell> <
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
                    3
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
            airdropRewards && airdropRewards.itemCount
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

export default AirdropCommission;