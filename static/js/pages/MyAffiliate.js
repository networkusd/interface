import {
    Container,
    Typography
} from "@material-ui/core";
import React, {
    useEffect
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router";
import CommissionHistory from "../components/affiliate/CommissionHistory";
import Info from "../components/affiliate/Info";
import Member from "../components/affiliate/Member";
import {
    isLoggedIn
} from "../utils/auth";

function MyAffiliate() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const history = useHistory();

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

    return ( <
        div className = "affiliate" >
        <
        Info / >
        <
        CommissionHistory / >
        <
        /div>
    );
}

export default MyAffiliate;