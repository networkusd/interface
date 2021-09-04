import React from "react";
import {
    Icon,
    Popup
} from "semantic-ui-react";
import {
    getLinkHash
} from "../../settings";

function TransactionHash({
    data
}) {
    return data.txId ? ( <
        div > {
            getLinkHash(data)
        } {
            " "
        } <
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
                () => navigator.clipboard.writeText(data.txId)
            } >
            <
            Icon
            name = "copy outline"
            style = {
                {
                    fontSize: "1em",
                    marginLeft: 2
                }
            }
            /> <
            /div>
        }
        /> <
        /div>
    ) : null;
}

export default TransactionHash;