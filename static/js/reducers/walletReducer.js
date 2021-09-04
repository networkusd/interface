import {
    FETCH_DEPOSIT_HISTORY,
    FETCH_FUND_LIST,
    FETCH_SWAP_HISTORY,
    FETCH_SWAP_PRODUCT_LIST,
    FETCH_TRANSACTION_HISTORY,
    FETCH_WITHDRAW_HISTORY,
    GET_DATA_FOR_COIN_CHART,
} from "../constants";
import {
    isProduction
} from "../settings";
import {
    get,
    post
} from "../utils/api";
import {
    logout
} from "../utils/auth";

const initialState = {
    fundList: [],
    swapProduct: [],
    swapHistory: null,
    stakingProduct: null,
    stakingHistory: null,
    depositHistory: null,
    withdrawHistory: null,
    fundListForCoinChart: [],
    easyBuyHistory: null,
    redeemHistory: null,
    _transactionHistory: null,
    lusStakingProducts: null,
    lusStakingHistory: null,
};

// export const _getRedeemHistory =
//   ({ page = 1, pageSize = 10, coin, from = 0, to = 0 }) =>
//   (dispatch) => {
//     post(
//       `/staking-service/staking/transaction/list`,
//       {
//         page,
//         pageSize,
//         coin,
//         from,
//         to,
//       },
//       (data) => {
//         dispatch({ type: FETCH_REDEEM_LIST, payload: data });
//       },
//       (error) => console.log(error)
//     );
//   };

// export const _getStakingProduct = () => (dispatch) => {
//   get(
//     "/staking-service/product/list",
//     (data) => dispatch({ type: FETCH_STAKING_PRODUCT_LIST, payload: data }),
//     (error) => console.log(error)
//   );
// };

// export const _getStakingHistory =
//   ({ page = 1, pageSize = 100, coin, from = 0, to = 0 }) =>
//   (dispatch) => {
//     post(
//       `/staking-service/staking/list`,
//       {
//         page,
//         pageSize,
//         coin,
//         from,
//         to,
//       },
//       (data) => {
//         dispatch({
//           type: FETCH_STAKING_HISTORY,
//           payload: data,
//         });
//       },
//       (error) => console.log(error)
//     );
//   };

// export const _getWithdrawHistory =
//   ({ page = 1, pageSize = 10, coin, from = 0, to = 0, status = "" }) =>
//   (dispatch) => {
//     post(
//       "/fund-service/withdraw/list",
//       { page, pageSize, coin, from, to, status },
//       (data) => {
//         dispatch({
//           type: FETCH_WITHDRAW_HISTORY,
//           payload: data,
//         });
//       },
//       (error) => console.log(error)
//     );
//   };

// export const _getEasyBuyHistory =
//   ({ page = 1, pageSize = 10, coin, from = 0, to = 0, type = "EASYBUY" }) =>
//   (dispatch) => {
//     post(
//       "/presale-service/transaction/list",
//       { page, pageSize, coin, from, to, type },
//       (data) => {
//         dispatch({ type: FETCH_EASY_BUY_HISTORY, payload: data });
//       },
//       (error) => console.log(error)
//     );
//   };

// export const _getLusStakingProduct = () => (dispatch) => {
//   get(
//     "/staking-service/lus-staking/product/list",
//     (data) => dispatch({ type: FETCH_LUS_STAKING_PRODUCTS, payload: data }),
//     (error) => console.log(error)
//   );
// };

// export const _getLusStakingHistory =
//   ({ page = 1, pageSize = 100, coin, from = 0, to = 0 }) =>
//   (dispatch) => {
//     post(
//       `/staking-service/lus-staking/staking/list`,
//       {
//         page,
//         pageSize,
//         coin,
//         from,
//         to,
//       },
//       (data) => {
//         dispatch({
//           type: FETCH_LUS_STAKING_HISTORY,
//           payload: data,
//         });
//       },
//       (error) => console.log(error)
//     );
//   };

export const WalletReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_LUS_STAKING_HISTORY:
        //   return { ...state, lusStakingHistory: action.payload };
        // case FETCH_LUS_STAKING_PRODUCTS:
        //   return { ...state, lusStakingProducts: action.payload };
        case FETCH_TRANSACTION_HISTORY:
            return { ...state,
                _transactionHistory: action.payload
            };
            // case FETCH_REDEEM_LIST:
            //   return { ...state, redeemHistory: action.payload };
            // case FETCH_EASY_BUY_HISTORY:
            //   return {
            //     ...state,
            //     easyBuyHistory: action.payload,
            //   };
        case FETCH_FUND_LIST:
            return { ...state,
                fundList: action.payload
            };
        case FETCH_SWAP_PRODUCT_LIST:
            return { ...state,
                swapProduct: action.payload
            };
        case FETCH_SWAP_HISTORY:
            return { ...state,
                swapHistory: action.payload
            };
            // case FETCH_STAKING_PRODUCT_LIST:
            //   return { ...state, stakingProduct: action.payload };
            // case FETCH_STAKING_HISTORY:
            //   return { ...state, stakingHistory: action.payload };
        case FETCH_DEPOSIT_HISTORY:
            return { ...state,
                depositHistory: action.payload
            };
        case FETCH_WITHDRAW_HISTORY:
            return { ...state,
                withdrawHistory: action.payload
            };
        case GET_DATA_FOR_COIN_CHART:
            {
                return { ...state,
                    fundListForCoinChart: action.payload
                };
            }
        default:
            return { ...state
            };
    }
};