import React, {
    useEffect,
    useState
} from "react";
// import LazyLoad from "react-lazyload";
import {
    useSelector
} from "react-redux";
import {
    Grid,
    GridColumn,
    Segment
} from "semantic-ui-react";
import "../components/profile/Profile.scss";
import {
    Container,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import DeviceList from "../components/profile/DeviceList";
import LoginActivity from "../components/profile/LoginActivity";
import Setting from "../components/profile/Setting";
import Info from "../components/profile/Info";
import {
    useHistory
} from "react-router";
import {
    isLoggedIn
} from "../utils/auth";

function Profile() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        DEVICE_LIST,
        LOGIN_ACTIVITY
    } = library;
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);


    const panes = [{
            menuItem: DEVICE_LIST,
            render: < DeviceList / > ,
        },
        {
            menuItem: LOGIN_ACTIVITY,
            render: < LoginActivity / > ,
        },
    ];

    const _handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( <
        Container >
        <
        div boxShadow = {
            3
        }
        className = "pt-20 pb-20 d-flex-sbt" >
        <
        Typography variant = "h4" > {
            library.INFORMATION
        } < /Typography> <
        /div> <
        Info / >
        <
        Grid stretched >
        <
        GridColumn computer = {
            8
        }
        tablet = {
            8
        }
        mobile = {
            16
        } >
        <
        Segment >
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
                />
            ))
        } <
        /Tabs> {
            panes[value].render
        } <
        /Segment> <
        /GridColumn> <
        GridColumn computer = {
            8
        }
        tablet = {
            8
        }
        mobile = {
            16
        } >
        <
        Setting / >
        <
        /GridColumn> <
        /Grid> <
        /Container>
    );
}

export default Profile;