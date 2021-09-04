import {
    TableBody,
    TableContainer,
    TableFooter,
    TableRow,
    Typography,
    TablePagination,
    TableCell,
    TableHead,
    Table,
    Paper,
} from "@material-ui/core";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    ENDPOINT_GET_REFERRAL_LIST
} from "../../settings/endpoint";
import {
    post
} from "../../utils/api";

function Member() {
    const [data, setData] = useState(null);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        setData(null);
        post(
            ENDPOINT_GET_REFERRAL_LIST, {
                page,
                pageSize,
            },
            (data) => {
                setData(data);
            },
            (error) => console.error(error)
        );
    }, [page, pageSize]);

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
        className = "mb-30" >
        Affiliate F1 List <
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
        TableCell > # < /TableCell> <
        TableCell > {
            library.MEMBER
        } < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            data &&
            (data.itemCount !== 0 ? (
                data.items.map((row) => ( <
                    TableRow key = {
                        row.id
                    } >
                    <
                    TableCell className = "text-bold"
                    component = "th"
                    scope = "row" >
                    #{
                        row.id
                    } <
                    /TableCell> <
                    TableCell > {
                        row.referralEmail
                    } < /TableCell> <
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
            data && data.itemCount
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

export default Member;