import React, {
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Header,
    Segment,
    Icon,
    Form,
    Message,
    FormField,
} from "semantic-ui-react";
import {
    put
} from "../../utils/api";
import ReactFlagsSelect from "react-flags-select";
import {
    _getProfile
} from "../../actions/userActions";
import {
    CustomToast
} from "../../settings";
import {
    Button,
    Container,
    Grid,
    Paper,
    Tab,
    Tabs,
    TextField,
} from "@material-ui/core";
import {
    Close
} from "@material-ui/icons";
import {
    Link
} from "react-router-dom";
import CustomTextField from "../CustomTextField";

function EditCountry({
    onLoading,
    close
}) {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        information
    } = user;
    const [countryCode, setCountryCode] = useState(information.countryCode);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const _onSubmit = (e) => {
        e.preventDefault();
        if (!countryCode) {
            setError("Please select country");
        } else {
            setError(null);
            onLoading(true);
            put(
                `/user-service/user/country`, {
                    countryCode
                },
                () => {
                    onLoading(false);
                    CustomToast("success", library.UPDATE_COUNTRY_SUCCESS);
                    dispatch(_getProfile());
                    close();
                },
                (error) => {
                    setError(library[error.code]);
                    onLoading(false);
                }
            );
        }
    };

    return ( <
        div className = "pt-20 pb-20" >
        <
        form onSubmit = {
            _onSubmit
        } >
        <
        div style = {
            {
                height: 200
            }
        } >
        <
        label > {
            library.PLEASE_SELECT_COUNTRY
        } < /label> <
        ReactFlagsSelect searchable onSelect = {
            (e) => setCountryCode(e)
        }
        selected = {
            countryCode
        }
        /> <
        div style = {
            {
                height: 80,
                display: "flex"
            }
        } >
        <
        Message hidden = {
            error === null
        }
        content = {
            error
        }
        negative style = {
            {
                margin: "auto",
                width: "100%",
            }
        }
        /> <
        /div> <
        /div> <
        Button fullWidth className = "submit-btn"
        type = "submit" > {
            library.UPDATE
        } <
        /Button> <
        /form> <
        /div>
    );
}

function EditUsername({
    onLoading,
    close
}) {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        information
    } = user;
    const [nickname, setNickname] = useState(information.displayName);
    const [nicknameError, setNicknameError] = useState(null);
    const dispatch = useDispatch();

    const _handleCheckValue = (e) => {
        e.preventDefault();
        if (!nickname || nickname.length < 3) {
            setNicknameError(library.PLEASE_CHECK_NICKNAME_AGAIN);
        } else if (!/^[a-zA-z0-9]+$/g.test(nickname) ||
            parseInt(nickname[0]) >= 0
        ) {
            setNicknameError(library.PLEASE_CHECK_NICKNAME_AGAIN);
        } else {
            onLoading(true);
            setNicknameError(null);
            put(
                `/user-service/user/display-name`, {
                    displayName: nickname
                },
                () => {
                    onLoading(false);
                    CustomToast("success", library.UPDATE_NICKNAME_SUCCESS);
                    dispatch(_getProfile());
                    close();
                },
                (error) => {
                    setNicknameError(library[error.code]);
                    onLoading(false);
                }
            );
        }
    };

    return ( <
        div className = "pt-20 pb-20" >
        <
        form onSubmit = {
            _handleCheckValue
        } >
        <
        div style = {
            {
                height: 200
            }
        } >
        <
        CustomTextField label = {
            library.YOUR_NICKNAME
        }
        placeholder = {
            library.PLEASE_TELL_US_YOUR_NICKNAME
        }
        maxLength = "32"
        onChange = {
            (e) => setNickname(e.target.value)
        }
        value = {
            nickname
        }
        fullWidth variant = "outlined" /
        >
        <
        div className = "mt-10" > {
            library.EDIT_NICKNAME_NOTE
        } < /div> <
        div style = {
            {
                height: 80,
                display: "flex"
            }
        } >
        <
        Message hidden = {
            nicknameError === null
        }
        content = {
            nicknameError
        }
        negative style = {
            {
                margin: "auto",
                width: "100%",
            }
        }
        /> <
        /div> <
        /div> <
        Button className = "submit-btn"
        fullWidth type = "submit" > {
            library.UPDATE
        } <
        /Button> <
        /form> <
        /div>
    );
}

function EditProfile({
    close
}) {
    const [loading, setLoading] = useState(false);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [value, setValue] = useState(0);

    const panes = [{
            menuItem: "Nickname",
            render: < EditUsername onLoading = {
                (e) => setLoading(e)
            }
            close = {
                close
            }
            />,
        },
        {
            menuItem: "Country",
            render: < EditCountry onLoading = {
                (e) => setLoading(e)
            }
            close = {
                close
            }
            />,
        },
    ];

    const _handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( <
        Container className = "p-20 bg-white"
        loading = {
            loading
        }
        maxWidth = "xs" >
        <
        div >
        <
        Grid className = "mb-20"
        justify = "space-between"
        alignItems = "center"
        container >
        <
        Grid item >
        <
        Header > {
            library.EDIT_PROFILE
        } < /Header> <
        /Grid> <
        Grid item >
        <
        Link onClick = {
            close
        } >
        <
        Close / >
        <
        /Link> <
        /Grid> <
        /Grid> <
        /div> <
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
        /Container>
    );
}

export default EditProfile;