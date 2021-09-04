import {
    Divider
} from "@material-ui/core";
import {
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Grid,
    Header,
    Icon,
    Image,
    Input,
    Segment,
    Button,
} from "semantic-ui-react";
import {
    SET_INFO_VERIFICATION,
    SET_LOCAL_IMAGE
} from "../../constants";
import {
    API,
    CustomToast
} from "../../settings";
import {
    formatStakingTime
} from "../../settings/format";
import {
    KYC_STEP_04_IMAGE
} from "../../settings/links";
import {
    getAccessToken
} from "../../utils/auth";

function isFileImage(file) {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    return file && acceptedImageTypes.includes(file["type"]);
}

function Tip() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        KYC_REQUEST,
        SIGN,
        VERIFY_NOTE,
        UPLOAD_PHOTO_NOTE,
        UPLOAD_PHOTO_WITH,
        UPLOAD_PHOTO_NOTE_1,
        UPLOAD_PHOTO_NOTE_2,
        DATE_REQUIRE,
        KYC_FOR,
    } = library;
    return ( <
        >
        <
        div style = {
            {
                backgroundColor: "var(--white)",
                width: "fit-content",
                margin: "auto",
                borderRadius: ".28571429rem",
            }
        } >
        <
        Image src = {
            `/images/selfie-photo.jpeg`
        }
        centered size = "medium"
        style = {
            {
                borderRadius: ".28571429rem"
            }
        }
        /> <
        /div> <
        Divider className = "mt-20" / >
        <
        Header > {
            library.SELFIE
        }
        with front of of card ID / Passport / Driver license <
        /Header> <
        Segment vertical > {
            VERIFY_NOTE
        } < /Segment> <
        />
    );
}

function KYCSelfiePhoto({
    _next,
    _previous
}) {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        verificationPhotos,
        verification
    } = user;
    const {
        library
    } = setting;
    const {
        CONTINUE,
        UPLOAD_SELFIE_PHOTO,
        NOTE_UPLOAD_PHOTO,
        UPLOAD_PHOTO
    } =
    library;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const handleSelectImage = (e) => {
        if (e.target.files.length > 0) {
            if (isFileImage(e.target.files[0])) {
                if (e.target.files[0].size < 5000000) {
                    var fd = new FormData();
                    fd.append("image", e.target.files[0]);
                    setLoading(true);
                    dispatch({
                        type: SET_INFO_VERIFICATION,
                        payload: {
                            selfiePhoto: "",
                        },
                    });
                    fetch(`${API}/user-service/photo/upload`, {
                            headers: {
                                Authorization: "bearer " + getAccessToken(),
                            },
                            method: "POST",
                            body: fd,
                        })
                        .then((res) => res.json())
                        .then((json) => {
                            dispatch({
                                type: SET_INFO_VERIFICATION,
                                payload: {
                                    selfiePhoto: json.data.name,
                                },
                            });
                            if (!json.success) alert(json.data.msg);
                            setLoading(false);
                        })
                        .catch((err) => console.log(err));
                    dispatch({
                        type: SET_LOCAL_IMAGE,
                        payload: {
                            selfie: URL.createObjectURL(e.target.files[0]),
                        },
                    });
                } else {
                    CustomToast("error", library.IMAGE_LARGE);
                }
            } else {
                CustomToast("error", library.IMAGE_CORRECT);
            }
        }
    };

    return ( <
        >
        <
        Segment basic vertical textAlign = "left" >
        <
        Icon name = "arrow left"
        onClick = {
            _previous
        }
        size = "large"
        style = {
            {
                cursor: "pointer"
            }
        }
        /> <
        /Segment> <
        Grid textAlign = "left" >
        <
        Grid.Column computer = {
            8
        }
        tablet = {
            8
        }
        mobile = {
            16
        } >
        <
        Tip / >
        <
        /Grid.Column> <
        Grid.Column computer = {
            8
        }
        tablet = {
            8
        }
        mobile = {
            16
        } >
        <
        Header style = {
            {
                marginTop: 0
            }
        } > {
            UPLOAD_SELFIE_PHOTO
        } < /Header> <
        div > {
            NOTE_UPLOAD_PHOTO
        } < /div> <
        label htmlFor = {
            loading ? "" : "upload-photo-selfie-photo"
        }
        style = {
            {
                cursor: "pointer"
            }
        } >
        <
        Segment style = {
            {
                border: "2px dashed #999",
                padding: 0,
                margin: "1em auto",
                height: 370,
            }
        }
        loading = {
            loading
        } >
        {
            verificationPhotos.selfie && ( <
                Image src = {
                    verificationPhotos.selfie
                }
                style = {
                    {
                        width: "100%",
                        objectFit: "cover",
                        height: 300
                    }
                }
                centered /
                >
            )
        } <
        Segment basic vertical textAlign = "center" >
        <
        Icon name = "upload"
        size = "large" / >
        <
        p > {
            UPLOAD_PHOTO
        } < /p> <
        /Segment> <
        /Segment> <
        /label> <
        div className = "upload-photo" >
        <
        Input type = "file"
        name = {
            "upload-photo-selfie-photo"
        }
        id = {
            "upload-photo-selfie-photo"
        }
        onChange = {
            handleSelectImage
        }
        accept = "image/x-png,image/jpeg"
        fluid /
        >
        <
        /div> <
        Button className = "submit-btn mt-20"
        fluid disabled = {!verification.selfiePhoto
        }
        onClick = {
            _next
        } >
        {
            CONTINUE
        } <
        /Button> <
        /Grid.Column> <
        /Grid> <
        />
    );
}

export default KYCSelfiePhoto;