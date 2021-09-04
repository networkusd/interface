import {
    Container,
    Paper,
    Tab,
    Tabs
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import AirdropCommission from "./AirdropCommission";
import Gift from "./Gift";
import Member from "./Member";
import StakingCommission from "./StakingCommission";

function CommissionHistory() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        STAKING_COMMISSION,
        AIRDROP,
        GIFT
    } = library;
    const [value, setValue] = useState(0);

    const panes = [{
            menuItem: "Affiliate F1",
            render: < Member / > ,
        },
        {
            menuItem: AIRDROP,
            render: < AirdropCommission / > ,
        },
        {
            menuItem: STAKING_COMMISSION,
            render: < StakingCommission / > ,
        },
        {
            menuItem: GIFT,
            render: < Gift / > ,
        },
    ];

    const _handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( <
        >
        <
        div style = {
            {
                backgroundColor: "rgb(43, 45, 50)",
            }
        } >
        <
        Container >
        <
        Tabs value = {
            value
        }
        indicatorColor = "primary"
        textColor = "primary"
        onChange = {
            _handleChange
        }
        aria - label = "disabled tabs example" >
        {
            panes.map((item, index) => ( <
                Tab label = {
                    item.menuItem
                }
                key = {
                    index
                }
                value = {
                    item.index
                }
                style = {
                    {
                        color: "#fff"
                    }
                }
                />
            ))
        } <
        /Tabs> <
        /Container> <
        /div> <
        Container className = "mt-20"
        style = {
            {
                minHeight: "100vh",
            }
        } >
        {
            panes[value].render
        } <
        /Container> <
        />
    );
}

export default CommissionHistory;