/* eslint-disable jsx-a11y/alt-text */
import {
    Button,
    Typography
} from "@material-ui/core";
import React from "react";
import {
    useSelector
} from "react-redux";
import "./style.scss";

function CPU() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;

    return ( <
        div className = "token-information" >
        <
        img src = "https://cashpickup.net/assets/images/logo.png"
        className = "token-logo" /
        >
        <
        Typography variant = "body1"
        className = "mt-20 mb-10" >
        CPU(Crypto Payment Universal) is a token based on TRON 's TRC20 digital
        platform with low transaction cost and high transaction speed. {
            " "
        } <
        /Typography> <
        Button variant = "outlined"
        onClick = {
            () => window.open("https://cashpickup.net/")
        } >
        {
            library.LEAR_MORE.toUpperCase()
        } <
        /Button> <
        /div>
    );
}

export default CPU;