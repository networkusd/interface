/* eslint-disable jsx-a11y/alt-text */
import {
    Container,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import React from "react";

const elm = [{
        img: "/images/image_1.png",
        title: "Bank-level custody and security",
        sub: [
            "Simple steps to open a new account",
            "Finance expertise in your pocket",
            "Digital system upgrade",
            "Low-cost online wealth management",
        ],
    },
    {
        img: "/images/image_2.png",
        title: "Big performance differences",
        sub: [
            "Top Advance Technology",
            "Card and Wallet encryption",
            "24/7 anti- fraud monitoring",
            "24/7 real- time assistance",
        ],
    },
    {
        img: "/images/image_3.png",
        title: "Technology Application",
        sub: [
            "Mobile digital e-wallet client",
            "Worldwide payment/ collection",
            "Expenditure analysis",
            "Budgeting tools",
        ],
    },
];

function Component_1() {
    return ( <
        Container id = "description" >
        <
        Grid container spacing = {
            2
        } > {
            elm.map((item, index) => ( <
                Grid item xs = {
                    12
                }
                md = {
                    4
                }
                key = {
                    index
                } >
                <
                Paper style = {
                    {
                        height: "100%",
                    }
                } >
                <
                img src = {
                    item.img
                }
                className = "hvr-float" / >
                <
                Typography variant = "h5"
                className = "mt-10 mb-20" > {
                    item.title
                } <
                /Typography> <
                ul style = {
                    {
                        listStyleType: "disc",
                    }
                } >
                {
                    item.sub.map((item, index) => ( <
                        li key = {
                            index
                        } > {
                            item
                        } < /li>
                    ))
                } <
                /ul> <
                /Paper> <
                /Grid>
            ))
        } <
        /Grid> <
        /Container>
    );
}

export default Component_1;