import {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    Grid,
    Header,
    Icon,
    Image,
    Loader,
    Popup,
    Segment,
} from "semantic-ui-react";
import {
    get
} from "../../utils/api";

function DepositForm({
    coin,
    network
}) {
    const [address, setAddress] = useState(null);
    const [loading, setLoading] = useState(true);
    const {
        setting
    } = useSelector((state) => state);
    const {
        library
    } = setting;
    const {
        COIN_TOKEN,
        NETWORK
    } = library;
    const [depositEnable, setDepositEnable] = useState(true);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (mounted) {
            setLoading(true);
            get(
                `/fund-service/address?coin=${coin}&network=${network}`,
                (data) => {
                    setDepositEnable(true);
                    setLoading(false);
                    setAddress(data);
                },
                (data) => {
                    if (data.code === "DEPOSIT_DISABLE") {
                        setDepositEnable(false);
                        setLoading(false);
                    }
                }
            );
        }
        return () => setMounted(!mounted);
    }, [coin, mounted, network]);

    if (!loading) {
        if (depositEnable) {
            if (address && address.addressTag) {
                return ( <
                    Segment loading = {
                        loading
                    }
                    vertical >
                    <
                    Header as = "h5"
                    translate = "no" > {
                        COIN_TOKEN
                    }: {
                        coin
                    } - {
                        NETWORK
                    }: {
                        network
                    } <
                    /Header> <
                    Grid >
                    <
                    Grid.Column computer = {
                        8
                    }
                    tablet = {
                        16
                    }
                    mobile = {
                        8
                    } >
                    <
                    Image src = {
                        "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" +
                        address.address
                    }
                    size = "small"
                    className = "Logo"
                    centered /
                    >
                    <
                    br / >
                    <
                    Popup content = "Copied"
                    on = "click"
                    basic position = "bottom center"
                    hideOnScroll trigger = { <
                        p
                        style = {
                            {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "pointer",
                            }
                        }
                        onClick = {
                            () =>
                            navigator.clipboard.writeText(address.address)
                        } >
                        {
                            address.address
                        } <
                        Icon name = "copy outline" / >
                        <
                        /p>
                    }
                    /> <
                    /Grid.Column> <
                    Grid.Column computer = {
                        8
                    }
                    tablet = {
                        16
                    }
                    mobile = {
                        8
                    } >
                    <
                    Image src = {
                        "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" +
                        address.addressTag
                    }
                    size = "small"
                    className = "Logo"
                    centered /
                    >
                    <
                    br / >
                    <
                    Popup content = "Copied"
                    on = "click"
                    basic position = "bottom center"
                    hideOnScroll trigger = { <
                        p
                        style = {
                            {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "pointer",
                            }
                        }
                        onClick = {
                            () =>
                            navigator.clipboard.writeText(address.addressTag)
                        } >
                        {
                            address.addressTag
                        } <
                        Icon name = "copy outline" / >
                        <
                        /p>
                    }
                    /> <
                    /Grid.Column> <
                    /Grid> <
                    /Segment>
                );
            } else if (address) {
                return ( <
                    Segment loading = {
                        loading
                    }
                    vertical >
                    <
                    Header as = "h5" > {
                        COIN_TOKEN
                    }: {
                        coin
                    } - {
                        NETWORK
                    }: {
                        network
                    } <
                    /Header> <
                    Image src = {
                        "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" +
                        address.address
                    }
                    size = "small"
                    className = "Logo"
                    centered /
                    >
                    <
                    br / > {
                        address && ( <
                            Popup content = "Copied"
                            on = "click"
                            basic position = "bottom center"
                            hideOnScroll trigger = { <
                                p
                                style = {
                                    {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                    }
                                }
                                onClick = {
                                    () =>
                                    navigator.clipboard.writeText(address.address)
                                } >
                                {
                                    address.address
                                } <
                                Icon name = "copy outline" / >
                                <
                                /p>
                            }
                            />
                        )
                    } <
                    /Segment>
                );
            } else {
                return <Segment basic > {
                    library.DEPOSIT_DISABLE
                } < /Segment>;
            }
        } else {
            return <Segment basic > {
                library.DEPOSIT_DISABLE
            } < /Segment>;
        }
    } else {
        return ( <
            Segment basic >
            <
            Loader active / >
            <
            /Segment>
        );
    }
}

export default DepositForm;