/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    useHistory
} from "react-router";
import {
    Button,
    Checkbox,
    Dimmer,
    Grid,
    Header,
    Icon,
    Image,
    Loader,
    Segment,
} from "semantic-ui-react";
import {
    CustomToast
} from "../../settings";
import {
    countryOptions
} from "../../settings/countries";
import {
    ENDPOINT_POST_VERIFY
} from "../../settings/endpoint";
import {
    KYC_STEP_05_IMAGE
} from "../../settings/links";
import {
    post
} from "../../utils/api";

function KYCConfirm({
    _previous
}) {
    const {
        user
    } = useSelector((state) => state);
    const {
        verification,
        verificationPhotos
    } = user;
    const [checked, setChecked] = useState(false);
    const tempCountry =
        countryOptions[
            countryOptions.findIndex((e) => e.value === verification.country)
        ].text;
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const {
        front,
        back,
        selfie
    } = verificationPhotos;
    const dob = verification.dob.split("-");
    const tempDob = `${dob[0]}-${dob[1]}-${dob[2]}T00:00:00`;
    var requestSent = false;
    const _handleVerify = () => {
        if (checked && !requestSent) {
            requestSent = true;
            setLoading(true);
            post(
                ENDPOINT_POST_VERIFY, {
                    FirstName: verification.firstName,
                    MiddleName: verification.middleName,
                    LastName: verification.lastName,
                    DateOfBirth: tempDob,
                    Nationality: tempCountry,
                    ResidentialAddress: verification.address,
                    PostalCode: verification.postalCode,
                    City: verification.city,
                    BackPhoto: verification.backPhoto,
                    FrontPhoto: verification.frontPhoto,
                    SelfiePhoto: verification.selfiePhoto,
                    idCode: verification.idCode,
                    IdType: verification.idType,
                },
                () => {
                    CustomToast("success", library.KYC_SUCCESS);
                    history.push("/my-profile");
                },
                (error) => {
                    alert(JSON.stringify(error));
                }
            );
        } else {
            CustomToast("error", library.PLEASER_CHECK_TOS);
        }
    };

    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        FULL_NAME,
        DOB,
        ADDRESS,
        CITY,
        COUNTRY,
        FRONT_PAGE,
        BACK_PAGE,
        SELFIE,
        ID_CODE,
        CONFIRM,
        VERIFY_NOTE,
        WELL_DONE,
        KYC_CONFIRM_NOTE,
        KYC_CONFIRM_NOTE_1,
        KYC_CONFIRM_NOTE_2,
        KYC_CONFIRM_NOTE_3,
        TERM_OF_USE,
        AND,
        AGREE_AFTER,
        I_AGREE_TO_THE,
    } = library;

    return ( <
        >
        <
        Dimmer page active = {
            loading
        } >
        <
        Loader / >
        <
        /Dimmer> <
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
            KYC_STEP_05_IMAGE
        }
        centered size = "medium"
        style = {
            {
                borderRadius: ".28571429rem"
            }
        }
        /> <
        /div> <
        Header textAlign = "center" > {
            WELL_DONE
        } < /Header> <
        Checkbox label = {
            () => ( <
                label > {
                    I_AGREE_TO_THE
                } {
                    " "
                } <
                a href = "/terms-of-service"
                target = "_blank" > {
                    TERM_OF_USE
                } <
                /a>{" "}, < span > {
                    AGREE_AFTER
                } < /span> {library.AND}{" "} <
                span > {
                    library.SPEXCHANGE_KYC_NOTE
                } < /span> <
                /label>
            )
        }
        checked = {
            checked
        }
        onChange = {
            (e, {
                checked
            }) => setChecked(checked)
        }
        className = "hide-mobile" /
        >
        <
        Segment vertical className = "hide-mobile" >
        <
        Button onClick = {
            _handleVerify
        }
        className = "submit-btn mt-20"
        fluid > {
            CONFIRM
        } <
        /Button> <
        /Segment> <
        Header as = "h5" > {
            KYC_CONFIRM_NOTE_3
        } < /Header> <
        div > -{
            KYC_CONFIRM_NOTE
        } < /div> <
        div > -{
            KYC_CONFIRM_NOTE_1
        } < /div> <
        div > -{
            KYC_CONFIRM_NOTE_2
        } < /div> <
        br / >
        <
        div > {
            VERIFY_NOTE
        } < /div> <
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
        Segment vertical textAlign = "left"
        style = {
            {
                paddingTop: 0
            }
        } >
        <
        p > {
            FULL_NAME
        }: {
            verification.firstName
        } {
            verification.middleName
        } {
            " "
        } {
            verification.lastName
        } <
        /p> <
        p > {
            ID_CODE
        }: {
            verification.idCode
        } <
        /p> <
        p > {
            DOB
        }: {
            verification.dob
        } <
        /p> <
        p > {
            ADDRESS
        }: {
            verification.address
        } <
        /p> <
        p > {
            CITY
        }: {
            verification.city
        } <
        /p> <
        p > {
            COUNTRY
        }: {
            tempCountry
        } <
        /p> <
        Grid columns = {
            2
        } >
        <
        Grid.Column >
        <
        p > {
            FRONT_PAGE
        } < /p> <
        Image src = {
            front
        }
        style = {
            {
                width: "100%",
                objectFit: "cover",
                height: 150,
                border: "1px solid #fff",
            }
        }
        /> <
        /Grid.Column> <
        Grid.Column >
        <
        p > {
            BACK_PAGE
        } < /p> <
        Image src = {
            back
        }
        style = {
            {
                width: "100%",
                objectFit: "cover",
                height: 150,
                border: "1px solid #fff",
            }
        }
        /> <
        /Grid.Column> <
        /Grid> <
        Segment textAlign = "center"
        basic >
        <
        p > {
            SELFIE
        } < /p> <
        Image src = {
            selfie
        }
        style = {
            {
                width: 200,
                objectFit: "cover",
                height: 200,
                borderRadius: "50%",
                border: "1px solid #fff",
            }
        }
        centered /
        >
        <
        /Segment> <
        /Segment> <
        div className = "show-mobile" >
        <
        Checkbox label = {
            () => ( <
                label >
                <
                p > {
                    I_AGREE_TO_THE
                } {
                    " "
                } <
                a href = "/terms-of-service"
                target = "_blank" > {
                    TERM_OF_USE
                } <
                /a>{" "} {
                    AND
                } < a > {
                    AGREE_AFTER
                }. < /a> <
                /p> <
                /label>
            )
        }
        checked = {
            checked
        }
        onChange = {
            (e, {
                checked
            }) => setChecked(checked)
        }
        /> <
        p > < /p> <
        Button onClick = {
            _handleVerify
        }
        className = "submit-btn mt-20"
        fluid > {
            CONFIRM
        } <
        /Button> <
        /div> <
        /Grid.Column> <
        /Grid> <
        />
    );
}

export default KYCConfirm;