import {
    Avatar,
    Paper
} from "@material-ui/core";
import React, {
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    Grid,
    Header,
    Segment,
    Image,
    Icon,
    Input
} from "semantic-ui-react";
import {
    S3_URL
} from "../../settings";
import {
    formatShortAmount
} from "../../settings/format";
import CustomTextField from "../CustomTextField";

function SelectCoin({
    coins,
    changeBase,
    close
}) {
    const {
        wallet,
        setting
    } = useSelector((state) => state);
    const {
        fundList
    } = wallet;
    const [searchCoins, setSearchCoins] = useState(coins);
    const {
        library
    } = setting;

    const _searchCoins = (e, {
        value
    }) => {
        setSearchCoins(
            coins.filter((item) =>
                item.value.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return ( <
        Paper style = {
            {
                width: "50vw",
                maxWidth: 420,
                minWidth: 300,
            }
        }
        className = "select-coin p-20"
        vertical >
        <
        Grid columns = {
            2
        }
        className = "mb-10" >
        <
        Grid.Column >
        <
        Header > {
            library.SELECT_A_TOKEN
        } < /Header> <
        /Grid.Column> <
        Grid.Column textAlign = "right" >
        <
        Icon name = "x"
        link style = {
            {
                fontSize: "1.3em"
            }
        }
        onClick = {
            close
        }
        /> <
        /Grid.Column> <
        /Grid> <
        CustomTextField fullWidth placeholder = "Search token"
        onChange = {
            _searchCoins
        }
        inverted className = "search-coin-input" /
        >
        <
        div style = {
            {
                maxHeight: "50vh",
                minHeight: "50vh",
                overflow: "auto",
            }
        } >
        {
            searchCoins.map((item, index) => {
                const coin =
                    fundList.length > 0 ?
                    fundList.filter((fund) => fund.coin === item.value)[0] :
                    {
                        coin: item.value,
                        fullName: "",
                        amount: 0,
                    };
                return ( <
                    div key = {
                        index
                    }
                    className = "item"
                    onClick = {
                        () => changeBase(item.value)
                    } >
                    <
                    div className = "item" >
                    <
                    Avatar src = {
                        `${S3_URL}/coins/${item.value}.png`
                    }
                    className = "coin-logo" /
                    >
                    <
                    div >
                    <
                    div className = "symbol" > {
                        coin.coin
                    } < /div> <
                    div className = "full-name" > {
                        coin.fullName
                    } < /div> <
                    /div> <
                    /div> <
                    div >
                    <
                    div className = "symbol text-right" > {
                        formatShortAmount(coin.amount)
                    } <
                    /div> <
                    div className = "full-name"
                    style = {
                        {
                            textAlign: "right"
                        }
                    } > {
                        library.AVAILABLE
                    } <
                    /div> <
                    /div> <
                    /div>
                );
            })
        } {
            searchCoins.length === 0 && ( <
                div style = {
                    {
                        padding: "0 1em"
                    }
                } > {
                    library.NO_RECORDS_FOUND
                } < /div>
            )
        } <
        /div> <
        /Paper>
    );
}

export default SelectCoin;