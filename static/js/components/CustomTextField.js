import {
    IconButton,
    TextField
} from "@material-ui/core";
import {
    Visibility,
    VisibilityOff
} from "@material-ui/icons";
import React from "react";

function CustomTextField({
    _showHidePassword,
    isPassword,
    showPassword,
    ...props
}) {
    return ( <
        div style = {
            {
                position: "relative",
            }
        } >
        <
        TextField { ...props
        }
        variant = {
            props.variant ? props.variant : "outlined"
        }
        className = "mb-10"
        inputProps = {
            {
                maxLength: props.maxLength
            }
        }
        size = {
            props.size ? props.size : "small"
        }
        /> {
            isPassword && ( <
                IconButton aria - label = "toggle password visibility"
                onClick = {
                    _showHidePassword
                }
                style = {
                    {
                        position: "absolute",
                        right: 0,
                        height: 53.63,
                    }
                } >
                {
                    showPassword ? < Visibility / > : < VisibilityOff / >
                } <
                /IconButton>
            )
        } <
        /div>
    );
}

export default CustomTextField;