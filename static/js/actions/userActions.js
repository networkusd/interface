import {
    CHECK_GA_STATUS,
    FETCH_DEVICE,
    FETCH_LOGIN_ACTIVITY,
    FETCH_USER,
    GET_AIRDROP,
    GET_GIFT_REWARDS,
    GET_STAKING_REFERRAL_REWARDS,
} from "../constants";
import {
    ENDPOINT_GET_LOGIN_ACTIVITY,
    ENDPOINT_GET_LOGIN_DEVICE,
    ENDPOINT_GET_PROFILE,
    ENDPOINT_GET_SECURITY,
    ENDPOINT_GET_TRANSACTIONS,
} from "../settings/endpoint";
import {
    get,
    post
} from "../utils/api";
import {
    isLoggedIn
} from "../utils/auth";

export const _getProfile = () => (dispatch) => {
    if (isLoggedIn()) {
        get(ENDPOINT_GET_PROFILE, (data) => {
            dispatch({
                type: FETCH_USER,
                payload: data
            });
        });
    }
};

export const _getAirdrop =
    (page = 1, pageSize = 10) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_TRANSACTIONS, {
                page,
                pageSize,
                type: "AIRDROP",
            },
            (data) => {
                dispatch({
                    type: GET_AIRDROP,
                    payload: data
                });
            },
            (error) => console.error(error)
        );
    };

export const _getStakingReferralRewards =
    (page = 1, pageSize = 10) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_TRANSACTIONS, {
                page,
                pageSize,
                type: "STAKING_REFERRAL",
            },
            (data) => {
                dispatch({
                    type: GET_STAKING_REFERRAL_REWARDS,
                    payload: data
                });
            },
            (error) => console.error(error)
        );
    };

export const _getGiftRewards =
    (page = 1, pageSize = 10) =>
    (dispatch) => {
        post(
            ENDPOINT_GET_TRANSACTIONS, {
                page,
                pageSize,
                type: "GIFT",
            },
            (data) => {
                dispatch({
                    type: GET_GIFT_REWARDS,
                    payload: data
                });
            },
            (error) => console.error(error)
        );
    };

export const _checkEnableGA = () => (dispatch) => {
    if (isLoggedIn()) {
        get(
            ENDPOINT_GET_SECURITY,
            (data) => {
                dispatch({
                    type: CHECK_GA_STATUS,
                    payload: data.gaEnable
                });
            },
            (err) => console.error(err)
        );
    }
};

export const _getDeviceList = () => (dispatch) => {
    get(
        ENDPOINT_GET_LOGIN_DEVICE,
        (data) => dispatch({
            type: FETCH_DEVICE,
            payload: data.slice(0, 5)
        }),
        (error) => console.error(error)
    );
};

export const _getLoginActivity = () => (dispatch) => {
    post(
        ENDPOINT_GET_LOGIN_ACTIVITY, {
            page: 1,
            pageSize: 5,
        },
        (data) => dispatch({
            type: FETCH_LOGIN_ACTIVITY,
            payload: data
        }),
        (error) => console.error(error)
    );
};