/* eslint-disable jsx-a11y/alt-text */
import {
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import React from "react";
import "./Information.scss";

function Information() {
    return ( <
        div >
        <
        div className = "information-header information" >
        <
        div className = "inner-header flex" >
        <
        Container >
        <
        Grid container justify = "space-between"
        alignItems = "center" >
        <
        Grid item sm = {
            12
        }
        md = {
            6
        }
        style = {
            {
                position: "relative"
            }
        } >
        <
        div translate = "no" >
        <
        Typography variant = "h4"
        className = "mb-20" >
        GUSD Stablecoins <
        /Typography> <
        /div> <
        Typography variant = "body1"
        className = "mb-50" >
        The company focuses on professional digital currency pledge,
        digital currency trading leverage funding, entrusted digital currency quantitative trading, digital currency asset management, etc., bringing a new pattern to the global financial industry. <
        /Typography> <
        Grid container justify = "space-between" >
        <
        Grid item xs = {
            4
        }
        md = {
            3
        }
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        img className = "hvr-float-shadow mb-10"
        style = {
            {
                height: 50,
                width: 50,
                objectFit: "contain"
            }
        }
        src = {
            "/images/secured-icon.png"
        }
        /> <
        Typography > PROPRIETARY < /Typography> <
        /Grid> <
        Grid item xs = {
            4
        }
        md = {
            3
        }
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        img className = "hvr-float-shadow mb-10"
        style = {
            {
                height: 50,
                width: 50,
                objectFit: "contain"
            }
        }
        src = "/images/profit-icon.png" /
        >
        <
        Typography > LOWEST PRICES < /Typography> <
        /Grid> <
        Grid item xs = {
            4
        }
        md = {
            3
        }
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        img className = "hvr-float-shadow mb-10"
        style = {
            {
                height: 50,
                width: 50,
                objectFit: "contain"
            }
        }
        src = "/images/fast-icon.png" /
        >
        <
        Typography > US-REGULATED < /Typography> <
        /Grid> <
        /Grid> <
        /Grid> <
        Grid item sm = {
            12
        }
        md = {
            6
        }
        style = {
            {
                textAlign: "right"
            }
        }
        className = "hide-mobile" >
        <
        img src = "/images/secured-icon-1.png"
        className = "banner-img hvr-float-shadow" /
        >
        <
        /Grid> <
        /Grid> <
        /Container> <
        /div> <
        div >
        <
        svg className = "waves"
        xmlns = "http://www.w3.org/2000/svg"
        xmlnsXlink = "http://www.w3.org/1999/xlink"
        viewBox = "0 24 150 28"
        preserveAspectRatio = "none"
        shapeRendering = "auto" >
        <
        defs >
        <
        path id = "gentle-wave"
        d = "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /
        >
        <
        /defs> <
        g className = "parallax" >
        <
        use xlinkHref = "#gentle-wave"
        x = "48"
        y = "0"
        fill = "rgba(255,255,255,0.7" /
        >
        <
        use xlinkHref = "#gentle-wave"
        x = "48"
        y = "3"
        fill = "rgba(255,255,255,0.5)" /
        >
        <
        use xlinkHref = "#gentle-wave"
        x = "48"
        y = "5"
        fill = "rgba(255,255,255,0.3)" /
        >
        <
        use xlinkHref = "#gentle-wave"
        x = "48"
        y = "7"
        fill = "#fff" / >
        <
        /g> <
        /svg> <
        /div> <
        /div> <
        /div>
    );
}

export default Information;