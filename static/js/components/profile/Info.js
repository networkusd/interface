import {
    Divider,
    Drawer,
    Paper
} from "@material-ui/core";
import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Link
} from "react-router-dom";
import {
    Flag,
    Icon,
    Label
} from "semantic-ui-react";
import {
    _getLoginActivity
} from "../../actions/userActions";
import {
    formatTime
} from "../../settings/format";
import EditProfile from "./EditProfile";

function Info() {
    const {
        user,
        setting
    } = useSelector((state) => state);
    const {
        information,
        activity
    } = user;
    const {
        library
    } = setting;
    const {
        LAST_LOGIN
    } = library;
    const lastActivity = activity && activity.items[0];
    const [showEditProfile, setShowEditProfile] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_getLoginActivity());
    }, [dispatch]);

    return ( <
        Paper className = "p-20 mb-20" >
        <
        div style = {
            {
                display: "flex"
            }
        }
        className = "pb-20" >
        <
        div style = {
            {
                minWidth: 40,
                height: 40,
                color: "#fafafa",
                backgroundColor: "#bdbdbd",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "1em",
            }
        } >
        {
            information && information.email.slice(0, 2)
        } <
        /div> <
        div >
        <
        div >
        <
        span style = {
            {
                marginRight: "1em"
            }
        } >
        <
        span style = {
            {
                fontWeight: 600
            }
        } > {
            information && information.email
        } <
        /span> <
        /span> <
        span style = {
            {
                marginRight: "1em"
            }
        } >
        ID:
        <
        span style = {
            {
                fontWeight: 600
            }
        } > #{
            information && information.id
        } <
        /span> <
        /span> {
            /* <span style={{ color: "#fbbd08" }}>
                            <Icon name="gem outline" />
                            <span style={{ fontWeight: 600 }}>VIP{information.level}</span>
                          </span> */
        } <
        /div> <
        div >
        <
        span style = {
            {
                marginRight: "1em"
            }
        } >
        Nickname: {
            " "
        } <
        span style = {
            {
                fontWeight: 600
            }
        } > {
            information && information.displayName
        } <
        /span> <
        /span> {
            information && information.countryCode && ( <
                Flag name = {
                    information && information.countryCode.toLowerCase()
                }
                />
            )
        } <
        /div> <
        Link to = "#"
        onClick = {
            () => setShowEditProfile(true)
        }
        className = "yellow-link" >
        Edit profile {
            ">>"
        } <
        /Link> <
        /div> <
        /div> <
        div className = "pb-20" >
        <
        span > {
            LAST_LOGIN
        }: {
            " "
        } <
        span style = {
            {
                fontWeight: 600
            }
        } > {
            formatTime(lastActivity && lastActivity.time)
        } <
        /span> <
        /span> <
        span className = "ip" > {
            " "
        }
        IP: {
            " "
        } <
        span style = {
            {
                fontWeight: 600
            }
        } > {
            lastActivity && lastActivity.ip
        } <
        /span> <
        /span> <
        /div> <
        Divider / >
        <
        div className = "pt-20 pb-20" >
        <
        Label style = {
            {
                color: "#fbbd08",
                backgroundColor: "rgb(0, 77, 128)"
            }
        } >
        <
        Icon name = "gem" / > Agency { /* {LUS_SYMBOL} level: {RANK_LEVEL[LusStatistic.memberLevel]} */ } <
        /Label> <
        Label style = {
            {
                color: "#fff",
                backgroundColor: "rgb(0, 77, 128)"
            }
        } >
        <
        Icon name = "star" / > { /* {LUS_SYMBOL} ranking: {RANK_LEVEL[LusStatistic.rankingLevel]} */ }
        Master <
        /Label> { /* <Button>Update Profile</Button> */ } <
        /div> <
        Drawer anchor = {
            "left"
        }
        open = {
            showEditProfile
        }
        className = {
            "custom-modal-vk"
        } >
        <
        EditProfile close = {
            () => setShowEditProfile(false)
        }
        /> <
        /Drawer> <
        /Paper>
    );
}

export default Info;