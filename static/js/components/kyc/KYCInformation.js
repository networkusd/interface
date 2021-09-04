import {
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    Form,
    Button,
    Dropdown,
    Grid,
    Image,
    Header,
    Message,
} from "semantic-ui-react";
import {
    countryOptions
} from "../../settings/countries";
import MaskedInput from "react-text-mask";
import {
    KYC_STEP_01_IMAGE
} from "../../settings/links";
import {
    SET_INFO_VERIFICATION
} from "../../constants";
import {
    Divider
} from "@material-ui/core";

function Tip() {
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;

    const {
        BASIC_INFO,
        VERIFY_REASON,
        VERIFY_REASON_1,
        VERIFY_REASON_2,
        VERIFY_REASON_3,
        VERIFY_NOTE,
    } = library;

    return ( <
        >
        <
        div style = {
            {
                backgroundColor: "var(--white)",
                borderRadius: ".28571429rem",
                width: "fit-content",
                margin: "auto",
            }
        } >
        <
        Image src = {
            KYC_STEP_01_IMAGE
        }
        centered size = "medium" / >
        <
        /div> <
        Divider / >
        <
        Header > {
            BASIC_INFO
        } < /Header> <
        p > {
            VERIFY_REASON
        } < /p> <
        p > -{
            VERIFY_REASON_1
        } < /p> <
        p > -{
            VERIFY_REASON_2
        } < /p> <
        p > -{
            VERIFY_REASON_3
        } < /p> <
        p > {
            VERIFY_NOTE
        } < /p> <
        />
    );
}

function KYCInformation({
    _next
}) {
    const {
        setting,
        user
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        verification
    } = user;
    const [country, setCountry] = useState(verification.country);
    const [idType, setIdType] = useState(verification.idType);
    const dispatch = useDispatch();
    const [error, setError] = useState([]);
    const [errorText, setErrorText] = useState(null);

    const {
        FIRST_NAME,
        LAST_NAME,
        MIDDLE_NAME,
        DOB,
        COUNTRY,
        SELECT_COUNTRY,
        POSTAL_CODE,
        CITY,
        ADDRESS,
        CONTINUE,
        DRIVER_LICENSE,
        PASSPORT,
    } = library;

    const onSelectFlag = (e, {
        value
    }) => {
        setCountry(value);
    };

    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }

    const _handleSubmit = (e) => {
        const error = [];
        for (let value of Object.values(e.target)) {
            if (value.value === "") {
                if (value.id !== "" && value.id !== "middleName") error.push(value.id);
            }
        }
        if (error.length > 0) {
            setError(error);
            setErrorText("PLEASE_ENTER_YOUR_FULL_INFORMATION");
        } else {
            const firstName = e.target.firstName.value;
            const middleName = e.target.middleName.value;
            const lastName = e.target.lastName.value;
            const postalCode = e.target.postalCode.value;
            const city = e.target.city.value;
            const address = e.target.address.value;
            const idCode = e.target.idCode.value;
            const dob = e.target.dob.value;
            if (!isValidDate(new Date(`${dob}T00:00:00`))) {
                setErrorText("DOB_INVALID");
                setError(["dob"]);
            } else {
                const data = {
                    firstName,
                    middleName,
                    lastName,
                    dob,
                    country,
                    postalCode,
                    city,
                    address,
                    idCode,
                    idType,
                };
                dispatch({
                    type: SET_INFO_VERIFICATION,
                    payload: data
                });
                _next();
            }
        }
    };

    var mask = function(rawValue) {
        const dayRegex = /[0-3]/;
        const dayRegex1 = rawValue.substr(8, 1) === "3" ? /[0-1]/ : /[0-9]/;
        const monthRegex = /[0-1]/;
        const monthRegex1 = rawValue.substr(5, 1) === "1" ? /[0-2]/ : /[0-9]/;
        return [
            /[1-9]/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            monthRegex,
            monthRegex1,
            "-",
            dayRegex,
            dayRegex1,
        ];
    };

    return ( <
        div className = "p-20" >
        <
        Grid >
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
        Form error onSubmit = {
            _handleSubmit
        } >
        <
        Form.Group widths = {
            3
        } >
        <
        Form.Field required error = {
            error.includes("firstName")
        } >
        <
        label > {
            FIRST_NAME
        } < /label> <
        Form.Input placeholder = {
            FIRST_NAME
        }
        id = "firstName"
        defaultValue = {
            verification.firstName
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        Form.Field >
        <
        label > {
            MIDDLE_NAME
        } < /label> <
        Form.Input placeholder = {
            MIDDLE_NAME
        }
        id = "middleName"
        defaultValue = {
            verification.middleName
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        Form.Field required error = {
            error.includes("lastName")
        } >
        <
        label > {
            LAST_NAME
        } < /label> <
        Form.Input placeholder = {
            LAST_NAME
        }
        id = "lastName"
        defaultValue = {
            verification.lastName
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        /Form.Group> <
        Form.Field required error = {
            error.includes("dob")
        } >
        <
        label > {
            DOB
        } < /label> <
        MaskedInput mask = {
            mask
        }
        placeholder = "1990-12-31"
        id = "dob"
        name = "dob"
        className = "masked-input"
        defaultValue = {
            verification.dob
        }
        /> <
        /Form.Field> <
        Form.Select label = {
            library.ID_TYPE
        }
        options = {
            [{
                    key: 0,
                    value: 0,
                    text: library.ID_CARD,
                },
                {
                    key: 1,
                    value: 1,
                    text: PASSPORT,
                },
                {
                    key: 2,
                    value: 2,
                    text: DRIVER_LICENSE,
                },
            ]
        }
        value = {
            idType
        }
        id = "idType"
        name = "idType"
        onChange = {
            (e, {
                value
            }) => setIdType(value)
        }
        required /
        >
        <
        Form.Field required error = {
            error.includes("idCode")
        } >
        <
        label > {
            library.ID_CODE
        } < /label> <
        Form.Input placeholder = {
            library.ID_CODE
        }
        id = "idCode"
        defaultValue = {
            verification.idCode
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        Form.Field required error = {
            error.includes("country")
        } >
        <
        label > {
            COUNTRY
        } < /label> <
        Dropdown placeholder = {
            SELECT_COUNTRY
        }
        search selection options = {
            countryOptions
        }
        onChange = {
            onSelectFlag
        }
        value = {
            country
        }
        /> <
        /Form.Field> <
        Form.Field required error = {
            error.includes("address")
        } >
        <
        label > {
            ADDRESS
        } < /label> <
        Form.TextArea placeholder = {
            ADDRESS
        }
        id = "address"
        defaultValue = {
            verification.address
        }
        maxLength = {
            128
        }
        /> <
        /Form.Field> <
        Form.Group widths = {
            2
        } >
        <
        Form.Field required error = {
            error.includes("postalCode")
        } >
        <
        label > {
            POSTAL_CODE
        } < /label> <
        Form.Input placeholder = {
            POSTAL_CODE
        }
        id = "postalCode"
        defaultValue = {
            verification.postalCode
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        Form.Field required error = {
            error.includes("city")
        } >
        <
        label > {
            CITY
        } < /label> <
        Form.Input placeholder = {
            CITY
        }
        id = "city"
        defaultValue = {
            verification.city
        }
        maxLength = {
            32
        }
        /> <
        /Form.Field> <
        /Form.Group> <
        Message error content = {
            library[errorText]
        }
        hidden = {
            error.length === 0
        }
        /> <
        Button className = "submit-btn"
        fluid > {
            CONTINUE
        } <
        /Button> <
        /Form> <
        /Grid.Column> <
        /Grid> <
        /div>
    );
}

export default KYCInformation;