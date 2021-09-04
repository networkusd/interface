import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Paper,
    Typography,
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
    useHistory,
    useParams
} from "react-router-dom";
import {
    Dimmer,
    Icon,
    Loader
} from "semantic-ui-react";
import {
    ENDPOINT_ACTIVE_USER
} from "../settings/endpoint";
import {
    get
} from "../utils/api";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Active() {
    const {
        token
    } = useParams();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;

    useEffect(() => {
        setLoading(true);
        get(
            `${ENDPOINT_ACTIVE_USER}/${token}`,
            () => {
                setLoading(false);
                setError(null);
            },
            (error) => {
                setLoading(false);
                setError(library[error.code]);
            }
        );
    }, [library, token]);

    return ( <
        div className = "background-no-blur" >
        <
        Dimmer active = {
            loading
        } >
        <
        Loader inverted content = "Waiting ..." / >
        <
        /Dimmer> {
            !loading && ( <
                Container maxWidth = "xs" >
                <
                Card className = "p-20" >
                <
                CardActionArea >
                <
                CardMedia component = "icon"
                alt = "Contemplative Reptile"
                height = "140"
                className = "text-center" >
                {
                    error ? ( <
                        HighlightOffIcon style = {
                            {
                                fontSize: 100,
                            }
                        }
                        color = "secondary" /
                        >
                    ) : ( <
                        CheckCircleOutlineIcon style = {
                            {
                                fontSize: 100,
                            }
                        }
                        color = "primary" /
                        >
                    )
                } <
                /CardMedia> <
                CardContent className = "mt-10 mb-10  opacity-06" >
                <
                Typography gutterBottom variant = "h5"
                component = "h2"
                align = "center" >
                {
                    error ? error : library.ACTIVE_ACCOUNT
                } <
                /Typography> <
                /CardContent> <
                /CardActionArea> <
                CardActions style = {
                    {
                        justifyContent: "center"
                    }
                } > {
                    error ? ( <
                        Button color = "default"
                        variant = "outlined"
                        className = "w-200"
                        onClick = {
                            () => history.push("/")
                        } >
                        {
                            library.BACK_TO_HOMEPAGE
                        } <
                        /Button>
                    ) : ( <
                        Button color = "primary"
                        variant = "outlined"
                        className = "w-200"
                        onClick = {
                            () => history.push("/login")
                        } >
                        {
                            library.LOGIN.toUpperCase()
                        } <
                        /Button>
                    )
                } <
                /CardActions> <
                /Card> <
                /Container>
            )
        } <
        /div>
    );
}

export default Active;