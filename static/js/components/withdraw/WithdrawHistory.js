import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useParams
} from "react-router-dom";
import {
    Button,
    Confirm,
    Divider
} from "semantic-ui-react";
import {
    _delete
} from "../../utils/api";
import {
    Paper,
    Typography
} from "@material-ui/core";
import {
    _getFundList,
    _getWithdrawHistory
} from "../../actions/walletActions";
import {
    CustomToast
} from "../../settings";
import CustomTable from "../CustomTable";

function WithdrawHistory() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const dispatch = useDispatch();
    const [id, setId] = useState(null);

    const _handleCancel = () => {
        _delete(`/fund-service/withdraw/${id}`, {}, () => {
            setId(null);
            CustomToast("success", library.CANCEL_WITHDRAW);
            dispatch(_getWithdrawHistory({
                page: 1,
                pageSize: 10
            }));
            dispatch(_getFundList());
        });
    };

    return ( <
        >
        <
        Typography variant = "h5"
        className = "mb-30 mt-50" > {
            library.WITHDRAW_HISTORY
        } <
        /Typography> <
        CustomTable _fetchFunction = {
            _getWithdrawHistory
        }
        tableName = "withdrawHistory"
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
                {
                    key: "type",
                    text: library.TYPE,
                    isSub: true,
                },
                {
                    key: "status",
                    text: library.STATUS,
                    isSub: true,
                },
            ]
        }
        actions = {
            [{
                key: "cancel",
                text: library.CANCEL,
                _handle: (id) => setId(id),
                condition: ["WAITING_CONFIRM", "PENDING"],
                conditionField: "status",
            }, ]
        }
        _handleCancel = {
            (id) => setId(id)
        }
        /> <
        Confirm open = {
            id !== null
        }
        onCancel = {
            () => setId(null)
        }
        onConfirm = {
            _handleCancel
        }
        // header={library.CONFIRMING_FOR_CANCEL_WITHDRAW}
        header = {
            library.ARE_YOU_SURE_CANCEL_WITHDRAW + " #" + id
        }
        // confirmButton={<Button className="fastwallet-button">OK</Button>}
        cancelButton = {
            library.CANCEL
        }
        confirmButton = {
            library.CONFIRM
        }
        size = "small"
        className = "fastwallet-animation" /
        >
        <
        />
    );
}

export default WithdrawHistory;