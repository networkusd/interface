import {
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Container,
    Typography,
    Button,
    CardContent,
    CircularProgress,
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory,
    useParams
} from "react-router-dom";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {
    ENDPOINT_DELETE_DISABLE_ACCOUNT
} from "../settings/endpoint";
import {
    _delete
} from "../utils/api";
import {
    CustomToast
} from "../settings";

function DisableAccount() {
    const {
        token
    } = useParams();
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const _handleDisableAccount = () => {
        setLoading(true);
        _delete(
            `${ENDPOINT_DELETE_DISABLE_ACCOUNT}/${token}`, {},
            () => {
                CustomToast("success", library.DISABLE_ACCOUNT_SUCCESS);
                setTimeout(() => {
                    history.push("/");
                }, 3000);
            },
            (error) => {
                console.error(error);
                CustomToast("error", library[error.code]);
                setTimeout(() => {
                    history.push("/");
                }, 3000);
            }
        );
    };

    return ( <
        >
        <
        div className = "background-no-blur" >
        <
        Container maxWidth = "xs" >
        <
        Card className = "p-20" >
        <
        CardActionArea >
        <
        CardMedia component = "icon"
        s alt = "Contemplative Reptile"
        height = "140"
        className = "text-center" >
        <
        ErrorOutlineIcon style = {
            {
                fontSize: 100,
            }
        }
        color = "secondary" /
        >
        <
        /CardMedia> <
        CardContent className = "mt-10 mb-10  opacity-06" >
        <
        Typography gutterBottom variant = "h6"
        component = "h2"
        align = "center" >
        {
            library.DISABLE_ACCOUNT_NOTE
        } <
        /Typography> <
        /CardContent> <
        /CardActionArea> <
        CardActions style = {
            {
                justifyContent: "center"
            }
        } >
        <
        Button color = "default"
        variant = "outlined"
        className = "w-200"
        onClick = {
            () => history.push("/")
        }
        disabled = {
            loading
        } >
        {
            library.CANCEL.toUpperCase()
        } <
        /Button> <
        Button color = "secondary"
        variant = "outlined"
        className = "w-200"
        onClick = {
            _handleDisableAccount
        }
        disabled = {
            loading
        } >
        {
            loading ? ( <
                CircularProgress color = "secondary"
                stye = {
                    {
                        display: "flex"
                    }
                }
                />
            ) : ( <
                div > {
                    library.CONFIRM.toUpperCase()
                } < /div>
            )
        } <
        /Button> <
        /CardActions> <
        /Card> <
        /Container> <
        /div> <
        />
    );
}

export default DisableAccount;