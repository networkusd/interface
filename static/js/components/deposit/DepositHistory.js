import {
    useState
} from "react";
import {
    useEffect
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Grid,
    Header,
    Pagination,
    Segment,
    Table
} from "semantic-ui-react";
import {
    formatAmount,
    formatTime
} from "../../settings/format";
import TransactionHash from "../others/TransactionHash";
import WalletAddress from "../others/WalletAddress";
import {
    _getDepositHistory
} from "../../actions/walletActions";
import CustomTable from "../CustomTable";
import {
    Paper,
    Typography
} from "@material-ui/core";

function DepositHistory({
    coin
}) {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    return ( <
        CustomTable _fetchFunction = {
            _getDepositHistory
        }
        tableName = "depositHistory"
        columns = {
            [{
                    key: "time",
                    text: library.TIME,
                    isTime: true,
                },
                {
                    key: "amount",
                    text: library.AMOUNT,
                    isAmount: true,
                    isCoin: true,
                },
                {
                    key: "address",
                    text: library.ADDRESS,
                    isAddress: true,
                },
                {
                    key: "txId",
                    text: "Tx Hash",
                    isHash: true,
                },
            ]
        }
        />
    );
}

export default DepositHistory;