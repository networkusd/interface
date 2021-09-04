import {
    CHECK_GA_STATUS,
    FETCH_DEVICE,
    FETCH_LOGIN_ACTIVITY,
    FETCH_USER,
    GET_AIRDROP,
    GET_GIFT_REWARDS,
    GET_STAKING_REFERRAL_REWARDS,
    SET_INFO_VERIFICATION,
    SET_LOCAL_IMAGE,
} from "../constants";
import {
    getAccessToken
} from "../utils/auth";

const initialState = {
    isLogin: getAccessToken() ? true : false,
    information: null,
    device: null,
    activity: null,
    gaEnable: false,
    verification: {
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        country: "vn",
        postalCode: "",
        city: "",
        idCode: "",
        idType: 0,
        frontPhoto: "",
        backPhoto: "",
        selfiePhoto: "",
    },
    verificationPhotos: {
        front: "",
        back: "",
        selfie: "",
    },
    gift: null,
    giftRewards: null,
    stakingReferralRewards: null,
    airdropRewards: null,
};

export const UserReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case SET_LOCAL_IMAGE:
            return {
                ...state,
                verificationPhotos: Object.assign(
                    state.verificationPhotos,
                    action.payload
                ),
            };
        case SET_INFO_VERIFICATION:
            return {
                ...state,
                verification: Object.assign(state.verification, action.payload),
            };
        case FETCH_DEVICE:
            return { ...state,
                device: action.payload
            };
        case FETCH_LOGIN_ACTIVITY:
            return { ...state,
                activity: action.payload
            };
        case CHECK_GA_STATUS:
            return { ...state,
                gaEnable: payload
            };
        case GET_GIFT_REWARDS:
            return { ...state,
                giftRewards: payload
            };
        case GET_STAKING_REFERRAL_REWARDS:
            return { ...state,
                stakingReferralRewards: payload
            };
        case GET_AIRDROP:
            return { ...state,
                airdropRewards: action.payload
            };
        case FETCH_USER:
            return {
                ...state,
                information: payload,
            };
        default:
            return { ...state
            };
    }
};