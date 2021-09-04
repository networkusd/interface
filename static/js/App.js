import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import "./styles/default.scss";
import "./styles/custom.scss";
import Login from "./pages/Login";
import {
    ToastContainer
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import MyAffiliate from "./pages/MyAffiliate";
import Profile from "./pages/Profile";
import KYC from "./pages/KYC";
import {
    useEffect
} from "react";
import {
    useDispatch
} from "react-redux";
import {
    _checkEnableGA
} from "./actions/userActions";
import {
    isLoggedIn
} from "./utils/auth";
import Dashboard from "./pages/Dashboard";
import {
    _getFundList
} from "./actions/walletActions";
import Portfolio from "./pages/Portfolio";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Swap from "./pages/Swap";
// import EasyBuyItem from "./pages/EasyBuyItem";
// import EasyBuy from "./pages/EasyBuy";
// import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import Active from "./pages/Active";
import ResetPassword from "./pages/ResetPassword";
import "hover.css";
import DisableAccount from "./pages/DisableAccount";
import Buy from "./pages/Buy";
import "./styles/cryptofont.css";
import MainLogin from "./pages/MainLogin";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_checkEnableGA());
        dispatch(_getFundList());
    }, [dispatch]);

    return ( <
        Router >
        <
        div className = "background" > < /div> <
        div className = {
            (isLoggedIn() ? "logged-in " : "") + "App"
        } >
        <
        Header / >
        <
        Switch >
        <
        Route path = "/disable-account/:token"
        component = {
            DisableAccount
        }
        /> <
        Route path = "/reset-password/:token"
        component = {
            ResetPassword
        }
        /> <
        Route path = "/active/:token"
        component = {
            Active
        }
        />  {
            /* <Route path="/easy-buy/:slug/:token" component={EasyBuyItem} />
                      <Route path="/easy-buy" component={EasyBuy} /> */
        } 
          <
        Route path = "*"
        component = {
            Homepage
        }
        /> <
        /Switch> <
        /div> <
        ToastContainer / >
        <
        /Router>
    );
}

export default App;