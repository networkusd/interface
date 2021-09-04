/* eslint-disable jsx-a11y/alt-text */
import {
    Avatar,
    Button,
    Container,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@material-ui/core";
import {
    AccountCircle,
    HomeOutlined
} from "@material-ui/icons";
import React, {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Link,
    useHistory
} from "react-router-dom";
import {
    _getProfile
} from "../actions/userActions";
import {
    isLoggedIn,
    logout
} from "../utils/auth";
import MenuIcon from "@material-ui/icons/Menu";
import StarIcon from "@material-ui/icons/Star";
import CachedIcon from "@material-ui/icons/Cached";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SendIcon from "@material-ui/icons/Send";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";
import {
    RETURN_SAFE_KEY,
    S3_URL
} from "../settings";
import {
    Icon
} from "semantic-ui-react";
import TelegramIcon from "@material-ui/icons/Telegram";

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "30px";
    } else {
        document.getElementById("header").style.fontSize = "90px";
    }
}

function Header() {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {
        information
    } = user;
    const dispatch = useDispatch();
    const [showSideBar, setShowSideBar] = useState(false);
    const [isShrunk, setShrunk] = useState(false);
    const [showPartnerMenu, setShowPartnerMenu] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk &&
                    (document.body.scrollTop > 20 ||
                        document.documentElement.scrollTop > 20)
                ) {
                    return true;
                }

                if (
                    isShrunk &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const _handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(_getProfile());
    }, [dispatch]);

    const mainMenus = [
        // {
        //   name: "Home",
        //   icon: <HomeOutlined />,
        //   link: "/",
        //   translate: "yes",
        // },
       
        
        
        
       

    const noLoginMenus = [{
            name: "Login",
            icon: < ExitToAppIcon / > ,
            link: "/login",
        },
        {
            name: "Register",
            icon: < CreateIcon / > ,
            link: "/register",
        },
    ];

    return ( <
        >
        <
        header className = {
            (isShrunk ? "on-scroll" : "") + " App-header"
        } >
        <
        Container className = "pt-10 pb-10" >
        <
        Grid container alignItems = "center" >
        <
        Grid item lg = {
            4
        }
        md = {
            4
        }
        xs = {
            6
        }
        className = "d-flex-cs blue-color"
        style = {
            {
                cursor: "pointer"
            }
        }
        onClick = {
            () => history.push("/")
        } >
        <
        img src = {
            "/logo-Fast1.png"
        }
        style = {
            {
                height: 40
            }
        }
        /> <
        /Grid> <
        Grid item md = {
            4
        }
        lg = {
            4
        } >
        <
        Grid container justify = "space-between"
        className = "hide-mobile" > {
            isLoggedIn() ? ( <
                Grid item >
                <
                Link to = "#"
                onClick = {
                    () => history.push("/assets")
                } > {
                    library.ASSETS
                } <
                /Link> <
                /Grid>
            ) : ( <
                Grid item >
                <
                Link to = "#"
                onClick = {
                    () => history.push("/")
                } > {
                    "Home"
                } <
                /Link> <
                /Grid>
            )
        }

        <
        Grid item >
        <
        Link to = "#"
        onClick = {
            () => history.push("/swap")
        } > {
            library.SWAP
        } <
        /Link> <
        /Grid> <
        Grid item >
        <
        Link to = "#"
        onClick = {
            () => history.push("/staking")
        } >
        <
        span translate = "no" > {
            library.STAKING
        } < /span> <
        /Link> <
        /Grid> <
        Grid item >
        <
        Link to = "#"
        onClick = {
            (e) => setShowPartnerMenu(e.currentTarget)
        } >
        <
        span translate = "no" > {
            library.PARTNER
        } < /span> <
        /Link> <
        /Grid> <
        /Grid> <
        /Grid> <
        Grid item xs = {
            6
        }
        md = {
            4
        }
        lg = {
            4
        } >
        <
        Grid container justify = "flex-end"
        alignItems = "center" >
        <
        Grid item > {
            isLoggedIn() && ( <
                Button onClick = {
                    _handleClick
                } >
                <
                AccountCircle fontSize = "large" / >
                <
                /Button>
            )
        } <
        /Grid> <
        Grid item className = "show-mobile" >
        <
        Button onClick = {
            () => setShowSideBar(true)
        } >
        <
        MenuIcon fontSize = "large" / >
        <
        /Button> <
        /Grid> {
            !isLoggedIn() && ( <
                >
                <
                Grid item className = "hide-mobile" >
                <
                Button className = "btn"
                onClick = {
                    () => history.push("/register")
                } >
                {
                    library.REGISTER
                } <
                /Button> <
                /Grid> <
                Grid item className = "hide-mobile" >
                <
                Button className = "submit-btn btn"
                onClick = {
                    () => history.push("/login")
                } >
                {
                    library.LOGIN
                } <
                /Button> <
                /Grid> <
                />
            )
        } <
        /Grid> <
        /Grid> <
        /Grid> <
        /Container> <
        Menu id = "simple-menu"
        keepMounted onClose = {
            _handleClose
        }
        open = {
            Boolean(anchorEl)
        }
        anchorEl = {
            anchorEl
        }
        style = {
            {
                top: 50,
            }
        } >
        <
        MenuItem > {
            information && information.email
        } < /MenuItem> <
        MenuItem onClick = {
            () => {
                history.push("/my-profile");
                _handleClose();
            }
        } >
        {
            library.MY_PROFILE
        } <
        /MenuItem> <
        MenuItem onClick = {
            () => {
                history.push("/my-affiliate");
                _handleClose();
            }
        } >
        {
            library.MY_AFFILIATE
        } <
        /MenuItem> <
        MenuItem onClick = {
            logout
        } > {
            library.LOGOUT
        } < /MenuItem> <
        /Menu> <
        Menu keepMounted onClose = {
            () => setShowPartnerMenu(null)
        }
        open = {
            Boolean(showPartnerMenu)
        }
        anchorEl = {
            showPartnerMenu
        }
        style = {
            {
                top: 50,
            }
        } >
        <
        MenuItem onClick = {
            () => {
                history.push(`/login?return=${RETURN_SAFE_KEY}`);
                setShowPartnerMenu(null);
            }
        } >
        Cash Pickup <
        /MenuItem> <
        /Menu> <
        /header> <
        Drawer open = {
            showSideBar
        }
        anchor = {
            "right"
        }
        onClose = {
            () => setShowSideBar(false)
        } >
        <
        List style = {
            {
                width: 250
            }
        } > {
            mainMenus.map(
                (item, index) =>
                ((item.isLogin && isLoggedIn()) || !item.isLogin) && ( <
                    ListItem button onClick = {
                        () => {
                            history.push(item.link);
                            setShowSideBar(false);
                        }
                    }
                    key = {
                        index
                    }
                    style = {
                        item.style
                    } >
                    <
                    ListItemIcon > {
                        item.icon
                    } < /ListItemIcon> <
                    ListItemText primary = { <
                        span translate = {
                            item.translate
                        } > {
                            item.name
                        } < /span>
                    }
                    /> <
                    /ListItem>
                )
            )
        } <
        /List> {
            !isLoggedIn() && ( <
                >
                <
                Divider / >
                <
                List > {
                    noLoginMenus.map((item, index) => ( <
                        ListItem button onClick = {
                            () => {
                                history.push(item.link);
                                setShowSideBar(false);
                            }
                        }
                        key = {
                            index
                        }
                        style = {
                            item.style
                        } >
                        <
                        ListItemIcon > {
                            item.icon
                        } < /ListItemIcon> <
                        ListItemText primary = {
                            item.name
                        }
                        /> <
                        /ListItem>
                    ))
                } <
                /List> <
                />
            )
        } <
        /Drawer> <
        />
    );
}

export default Header;