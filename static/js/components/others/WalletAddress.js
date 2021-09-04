import React from "react";
import {
    Icon,
    Popup
} from "semantic-ui-react";
import {
    formatAddress
} from "../../settings/format";

function WalletAddress({
    data
}) {
    return ( <
        Popup content = "Copied"
        on = "click"
        basic position = "bottom center"
        hideOnScroll trigger = { <
            div
            style = {
                {
                    cursor: "pointer",
                    display: "inline-block",
                }
            }
            onClick = {
                () => navigator.clipboard.writeText(data.address)
            } >
            {
                formatAddress(data.address)
            } <
            Icon
            name = "copy outline"
            style = {
                {
                    fontSize: "1em",
                    marginLeft: 2
                }
            }
            /> <
            br / >
            <
            small > {
                data.addressTag && "Memo: " + formatAddress(data.addressTag)
            } <
            /small> <
            /div>
        }
        />
    );
}

export default WalletAddress;