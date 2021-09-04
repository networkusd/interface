import React, {
    useEffect,
    useState
} from "react";
import {
    Dimmer,
    Loader,
    Segment,
    Tab,
    Step
} from "semantic-ui-react";
import {
    useSelector
} from "react-redux";
import KYCInformation from "../components/kyc/KYCInformation";
import KYCFrontPhoto from "../components/kyc/KYCFrontPhoto";
import KYCBackPhoto from "../components/kyc/KYCBackPhoto";
import KYCSelfiePhoto from "../components/kyc/KYCSelfiePhoto";
import KYCConfirm from "../components/kyc/KYCConfirm";
import {
    Container,
    Drawer,
    Paper,
    Typography
} from "@material-ui/core";
import {
    useHistory
} from "react-router";
import {
    Warning
} from "@material-ui/icons";
import {
    isLoggedIn
} from "../utils/auth";

function KYC() {
    const {
        user,
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        information
    } = user;
    const [activeIndex, setActiveIndex] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (!isLoggedIn()) history.push("/");
    }, [history]);

    const {
        INFORMATION,
        PHOTOS,
        CONFIRM
    } = library;

    const _next = () => {
        if (activeIndex < 5) setActiveIndex(activeIndex + 1);
    };

    const _previous = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    const panes = [{
            menuItem: INFORMATION,
            index: 0,
            render: () => < KYCInformation _next = {
                _next
            }
            />,
            description: "Enter personal information",
        },
        {
            menuItem: "Front photo",
            index: 1,
            render: () => < KYCFrontPhoto _next = {
                _next
            }
            _previous = {
                _previous
            }
            />,
            description: "ID/Passport/Driver license",
        },
        {
            menuItem: "Back photo",
            index: 2,
            render: () => < KYCBackPhoto _next = {
                _next
            }
            _previous = {
                _previous
            }
            />,
            description: "ID/Passport/Driver license",
        },
        {
            menuItem: "Selfie photo",
            index: 3,
            render: () => < KYCSelfiePhoto _next = {
                _next
            }
            _previous = {
                _previous
            }
            />,
            description: "Take a selfie",
        },
        {
            menuItem: CONFIRM,
            index: 4,
            render: () => < KYCConfirm _previous = {
                _previous
            }
            />,
            description: "Check the information again",
        },
    ];

    useEffect(() => {
        if (information) {
            if (
                information.verifyStatusLv2 === "PENDING" ||
                information.verifyStatusLv2 === "VERIFIED"
            ) {
                setTimeout(() => {
                    history.push("/my-profile");
                }, 3000);
            }
        }
    });

    if (information) {
        if (
            information.verifyStatusLv2 === "PENDING" ||
            information.verifyStatusLv2 === "VERIFIED"
        ) {
            return ( <
                Drawer anchor = {
                    "bottom"
                }
                open = {
                    true
                }
                className = {
                    "custom-modal-vk"
                } >
                <
                div className = "p-20 bg-white text-center" >
                <
                Warning style = {
                    {
                        fontSize: "5rem",
                        fill: "gold",
                        marginBottom: 20,
                    }
                }
                /> <
                Typography variant = "h5" > {
                    library.KYC_NOTIFICATION
                } < /Typography> <
                /div> <
                /Drawer>
            );
        } else {
            return ( <
                Container className = "verification fastwallet-container" >
                <
                Paper className = "p-20" >
                <
                Step.Group ordered size = "tiny"
                fluid className = "hide-mobile" > {
                    panes.map((item) => ( <
                        Step completed = {
                            activeIndex > item.index
                        }
                        active = {
                            activeIndex === item.index
                        } >
                        <
                        Step.Content >
                        <
                        Step.Title > {
                            item.menuItem
                        } < /Step.Title> <
                        Step.Description >
                        <
                        small > {
                            item.description
                        } < /small> <
                        /Step.Description> <
                        /Step.Content> <
                        /Step>
                    ))
                } <
                /Step.Group> <
                Tab menu = {
                    {
                        secondary: true,
                        pointing: true,
                        inverted: false,
                        fluid: true,
                    }
                }
                panes = {
                    panes
                }
                activeIndex = {
                    activeIndex
                }
                /> <
                /Paper> <
                /Container>
            );
        }
    } else {
        return ( <
            Dimmer active >
            <
            Loader / >
            <
            /Dimmer>
        );
    }
}

export default KYC;