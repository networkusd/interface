import {
    en
} from "../languages/en";

const initialState = {
    darkMode: true,
    library: en,
    lang: "en",
    loading: true,
    modalContent: null,
};

export const SettingReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return { ...state
        };
    }
};