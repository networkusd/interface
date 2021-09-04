import {
    Container,
    Paper,
    Typography
} from "@material-ui/core";
import React from "react";
import {
    useSelector
} from "react-redux";
import {
    _getSwapHistory
} from "../../actions/walletActions";
import CustomTable from "../CustomTable";

function SwapHistory() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;

    return ( <
        Container className = "swap-history" >
        <
        Paper className = "fastwallet-history p-20" >
        <
        Typography variant = "h5"
        className = "p-20" > {
            library.SWAP_HISTORY
        } <
        /Typography> <
        CustomTable _fetchFunction = {
            _getSwapHistory
        }
        tableName = "swapHistory"
        columns = {
            [{
                    key: "id",
                    text: "",
                    isHighLight: true,
                },
                {
                    key: "amount",
                    text: library.FROM,
                    isAmount: true,
                    isBase: true,
                },
                {
                    key: "total",
                    text: library.TO,
                    isAmount: true,
                    isQuote: true,
                },
                {
                    key: "time",
                    text: library.TIME,
                    isTime: true,
                },
            ]
        }
        /> <
        /Paper> <
        /Container>
    );
}

export default SwapHistory;