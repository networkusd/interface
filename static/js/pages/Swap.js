import React from "react";
import SwapForm from "../components/swap/NewSwapForm";
import SwapHistory from "../components/swap/SwapHistory";
import "../components/swap/Swap.scss";
import {
    isLoggedIn
} from "../utils/auth";

function Swap() {
    return ( <
        div textAlign = "left"
        id = "swap"
        className = "pb-50" >
        <
        SwapForm / > {
            isLoggedIn() && < SwapHistory / >
        } <
        /div>
    );
}

export default Swap;