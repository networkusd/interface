import {
    Container,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    get
} from "../../utils/api";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import {
    CustomToast
} from "../../settings";

function Info() {
    const {
        user,
        setting
    } = useSelector((state) => state);
    const {
        information
    } = user;
    const [statistic, setStatistic] = useState(null);
    const {
        library
    } = setting;
    const {
        INVITED_FRIEND,
        INVITED_TIP,
        COPIED,
        AFFILIATE,
        YOUR_TOTAL_AFFILIATE,
        YOUR_TOTAL_AFFILIATE_F1,
    } = library;

    useEffect(() => {
        !statistic &&
            get(
                `/user-service/referral/statistic`,
                (data) => {
                    setStatistic(data);
                },
                (error) => console.error(error)
            );
    }, [statistic]);

    return ( <
        div style = {
            {
                background: "linear-gradient(295.27deg, rgb(20, 21, 26) 0%, rgb(71, 77, 87) 84.52%)",
                color: "#fff",
            }
        } >
        <
        Container >
        <
        Grid container spacing = {
            2
        }
        alignItems = "center"
        justify = "space-between" >
        <
        Grid item xs = {
            12
        }
        md = {
            6
        } >
        <
        Typography variant = "h3" > {
            INVITED_FRIEND
        } < /Typography> <
        Typography variant = "body1"
        className = "mt-20 mb-20 opacity-06" > {
            INVITED_TIP
        }. <
        /Typography> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            5
        } >
        <
        Paper className = "p-40 bg-black text-white"
        style = {
            {
                borderTop: "6px solid #00a2ff",
            }
        } >
        <
        Typography className = "opacity-06" >
        Default Referral ID <
        /Typography> <
        div className = "d-flex-es" >
        <
        Typography variant = "h3" > {
            information && information.id
        } <
        /Typography> <
        IconButton onClick = {
            () => {
                navigator.clipboard.writeText(
                    information && information.id
                );
                CustomToast("success", COPIED);
            }
        } >
        <
        FileCopyIcon fontSize = "small" / >
        <
        /IconButton> <
        /div> <
        br / >
        <
        Typography className = "opacity-06" > Default link < /Typography> <
        div className = "d-flex-cs" >
        <
        Typography variant = "body1" > {
            `${window.location.origin.toString()}/register/${
                  information && information.id
                }`
        } < /Typography> <
        IconButton onClick = {
            () => {
                navigator.clipboard.writeText(
                    `${window.location.origin.toString()}/register/${
                        information && information.id
                      }`
                );
                CustomToast("success", COPIED);
            }
        } >
        <
        FileCopyIcon fontSize = "small" / >
        <
        /IconButton> <
        /div> <
        Grid container spacing = {
            1
        }
        className = "text-center p-20 mt-20 mb-20"
        style = {
            {
                backgroundColor: "rgb(30, 32, 38)",
            }
        } >
        <
        Grid item xs = {
            4
        } >
        <
        div className = "opacity-06" > {
            AFFILIATE
        } < /div> <
        Typography variant = "h5" > #{
            information ? information.referralId : "0"
        } <
        /Typography> <
        /Grid> <
        Grid item xs = {
            4
        } >
        <
        div className = "opacity-06" > {
            YOUR_TOTAL_AFFILIATE
        } < /div> <
        Typography variant = "h5" > {
            statistic && statistic.referralCount
        } <
        /Typography> <
        /Grid> <
        Grid item xs = {
            4
        } >
        <
        div className = "opacity-06" > {
            YOUR_TOTAL_AFFILIATE_F1
        } < /div> <
        Typography variant = "h5" > {
            statistic && statistic.referralLevel1Count
        } <
        /Typography> <
        /Grid> <
        /Grid> <
        /Paper> <
        /Grid> <
        /Grid> <
        /Container> <
        /div>
    );
}

export default Info;