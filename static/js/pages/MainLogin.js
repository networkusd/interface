import React from "react";
import {
    useSelector
} from "react-redux";
import {
    isLoggedIn
} from "../utils/auth";
import Login from "./Login";
import LoginReturnTo from "./LoginReturnTo";

function MainLogin() {
    if (isLoggedIn()) {
        return <LoginReturnTo / > ;
    } else {
        return <Login / > ;
    }
}

export default MainLogin;