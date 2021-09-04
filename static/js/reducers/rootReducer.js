import {
    combineReducers
} from "redux";
// import { LusReducer } from "./LusReducer";
import {
    SettingReducer
} from "./settingReducer";
import {
    UserReducer
} from "./userReducer";
import {
    WalletReducer
} from "./walletReducer";

const rootReducer = combineReducers({
    setting: SettingReducer,
    user: UserReducer,
    wallet: WalletReducer,
    // lus: LusReducer,
});

export default rootReducer;