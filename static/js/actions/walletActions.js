import {
    FETCH_FUND_LIST,
    GET_DATA_FOR_COIN_CHART,
    FETCH_TRANSACTION_HISTORY,
    FETCH_SWAP_HISTORY,
    FETCH_WITHDRAW_HISTORY,
    FETCH_DEPOSIT_HISTORY,
    FETCH_SWAP_PRODUCT_LIST,
} from "../constants";
import {
    isProduction
} from "../settings";
import {
    ENDPOINT_GET_DEPOSIT_HISTORY,
    ENDPOINT_GET_FUND,
    ENDPOINT_GET_SWAP_HISTORY,
    ENDPOINT_GET_WITHDRAW_HISTORY,
    ENDPOINT_GET_TRANSACTIONS,
    ENDPOINT_GET_SWAP_PRODUCT_LIST,
} from "../settings/endpoint";
import {
    get,
    post
} from "../utils/api";
import {
    isLoggedIn
} from "../utils/auth";

var intervalFund;
export const getFund = () => (dispatch) => {
    get(ENDPOINT_GET_FUND, (data) => {
        data.sort((a, b) => b.usdAmount - a.usdAmount);
        dispatch({
            type: FETCH_FUND_LIST,
            payload: data
        });
    });
};

export const _getFundList = () => (dispatch) => {
    if (isLoggedIn()) {
        get("/fund-service/fund/list", (data) => {
            data.sort((a, b) => b.usdAmount - a.usdAmount);
            dispatch({
                type: FETCH_FUND_LIST,
                payload: data
            });
            dispatch({
                type: GET_DATA_FOR_COIN_CHART,
                payload: data
            });
            clearInterval(intervalFund);
            if (isProduction) intervalFund = setInterval(getFund, 10000, dispatch);
        });
    }
};

export const _getTransactionHistory =
    ({
        page = 1,
        pageSize = 10,
        coin,
        from = 0,
        to = 0
    }) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_TRANSACTIONS, {
                page,
                pageSize,
                coin,
                from,
                to,
            },
            (data) => {
                dispatch({
                    type: FETCH_TRANSACTION_HISTORY,
                    payload: data
                });
            },
            (error) => console.log(error)
        );
    };

export const _getSwapHistory =
    ({
        page = 1,
        pageSize = 10,
        coin,
        from = 0,
        to = 0
    }) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_SWAP_HISTORY, {
                page,
                pageSize,
                coin,
                from,
                to,
            },
            (data) => {
                dispatch({
                    type: FETCH_SWAP_HISTORY,
                    payload: data
                });
            },
            (error) => console.log(error)
        );
    };

export const _getWithdrawHistory =
    ({
        page = 1,
        pageSize = 10,
        coin,
        from = 0,
        to = 0,
        status = ""
    }) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_WITHDRAW_HISTORY, {
                page,
                pageSize,
                coin,
                from,
                to,
                status
            },
            (data) => {
                dispatch({
                    type: FETCH_WITHDRAW_HISTORY,
                    payload: data,
                });
            },
            (error) => console.log(error)
        );
    };

export const _getDepositHistory =
    ({
        page = 1,
        pageSize = 10,
        coin,
        from = 0,
        to = 0
    }) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_DEPOSIT_HISTORY, {
                coin,
                from,
                to,
                pageSize,
                page
            },
            (data) => {
                dispatch({
                    type: FETCH_DEPOSIT_HISTORY,
                    payload: data,
                });
            },
            (error) => console.log(error)
        );
    };

export const _getSwapList = () => (dispatch) => {
    get(
        ENDPOINT_GET_SWAP_PRODUCT_LIST,
        (data) => { 
            console.log(data)
            dispatch({
                type: FETCH_SWAP_PRODUCT_LIST,
                payload: data
            });
        },
        (error) => console.log(error)
    );
};